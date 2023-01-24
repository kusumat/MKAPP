let fs = require('fs'),
    path = require('path'),
    archiver = require('archiver'),
    minimist = require('minimist');

let projectLocation = __dirname;

const COMMON_DIR = "Common";
const TEST_RESOURCES_DIR = "testresources";
const JASMINE_DIR = "Jasmine";
const CHANNELS = ["Desktop", "Mobile", "Tablet"];
const PAGE_OBJECT_MODELS = 'Page Object Models'
const POM_SUPPORTED_ENTITY_TYPES = ['forms','templates', 'userwidgets'];
const POM_FILE_SUFFIX = '_pom.json';
const POM_META_FILE = 'PageObjectModel.json';
const ENTITY_DIRECTORY_MAP = {
    forms : 'Forms',
    templates : 'Templates',
    userwidgets : 'Components'
};

function __assertDir__(filePath) {
    let dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    __assertDir__(dirname);
    fs.mkdirSync(dirname);
}

function __readdirSync__(dirPath) {
    let entries = fs.readdirSync(dirPath);

    return entries.filter(f => !f.startsWith("."));
}

function __rmDirRecursively__(dirPath) {
    __assertDir__(dirPath);
    
    let entries = fs.readdirSync(dirPath);
    entries.map(function(f) {
        let p = path.resolve(dirPath, f),
            stat = fs.statSync(p);
        
        if (stat.isDirectory()) {
            __rmDirRecursively__(p);
        } else if(stat.isFile()) {
            fs.unlinkSync(p);
        }
    });

    fs.rmdirSync(dirPath);
}

function __copyFile__(fromFilePath, toFilePath, doNotCopyFileIfExists) {

    if(!(doNotCopyFileIfExists && fs.existsSync(toFilePath))) {
        __assertDir__(toFilePath);
        
        fs.writeFileSync(
            toFilePath,
            fs.readFileSync(fromFilePath, {encoding:null})
        );
    }
}

function __copyDir__(fromDirPath, toDirPath, doNotCopyFileIfExists) {
    __assertDir__(toDirPath);

    let entries = __readdirSync__(fromDirPath);
    entries.forEach(function (entry) {
        let stat = fs.statSync(path.resolve(fromDirPath, entry));

        if (stat.isFile()) {
            __copyFile__(
                path.resolve(fromDirPath, entry),
                path.resolve(toDirPath, entry),
                doNotCopyFileIfExists
            );
        } else if (stat.isDirectory()) {
            if(entry !== PAGE_OBJECT_MODELS) {
                __copyDir__(
                    path.resolve(fromDirPath, entry),
                    path.resolve(toDirPath, entry),
                    doNotCopyFileIfExists
                );    
            }
        }
    });
}

function __zipDirectory__(sourceDir, destDir, outputFileName, iszip, callback) {
    let writtenBytes = 0,
        output = fs.createWriteStream(path.join(destDir, outputFileName)),
        archive = iszip ? archiver('zip') : archiver('tar');

    output.on('close', function() {
        console.debug("Completed archiving :: " + path.join(destDir, outputFileName));

        writtenBytes = archive.pointer();
        console.debug('Bytes written :: ', writtenBytes);

        if(typeof callback === "function"){
            callback(null, writtenBytes);
        }
    });

    archive.on('error', function(err) {
        console.error("Archiver error ::", err);
        throw err;
    });

    archive.pipe(output);

    let done = function(err) {
        if (err) {
            console.error("Archiver error ::", err);
        } else{
            archive.finalize(function(err) {
                if (err) {
                    throw err;
                }
            });
        }
    };

    try {
        console.debug(`Starting archiving [${iszip ? '.zip' : '.tar'}] :: ${path.join(destDir, outputFileName)}`);
    
        archive.directory(sourceDir, '');
    } catch(e) {
        done(e);
    } finally {
        done();
    }
}

function __populateTestArtifacts__(projectList, pathToJasmineScriptsOnServer, pathToBaseAppCommonFolder) {
    
    let pathToJasmineScriptsInProject;

    CHANNELS.forEach(channel => {
        __assertDir__(path.resolve(pathToJasmineScriptsOnServer, channel));
        
        __copyDir__(pathToBaseAppCommonFolder, path.resolve(pathToJasmineScriptsOnServer, channel));

        projectList.forEach(project => {
            pathToJasmineScriptsInProject = path.resolve(project.projectPath, TEST_RESOURCES_DIR, JASMINE_DIR);
            __assertDir__(path.resolve(pathToJasmineScriptsOnServer, channel, project.projectName));
            __copyDir__(path.resolve(pathToJasmineScriptsInProject, channel), path.resolve(pathToJasmineScriptsOnServer, channel, project.projectName));
        });
    });
}

function __zipArtifacts__(outputDirPath, dirName, ext, isZip) {
    return new Promise(function (resolve, reject) {
        //zip each channel contents
        __zipDirectory__(path.resolve(outputDirPath, dirName), outputDirPath, `${dirName}${ext}`, isZip, function (errmsg, writtenbytes) {
            if (writtenbytes > 0) {
                console.info(`Archiving [.zip] of scripts under '${dirName}' channel completed successfully.`);
                resolve();
            } else if (errmsg) {
                reject(errmsg);
            } else {
                reject('Unknown error occured during compression of ' + path.resolve(outputDirPath, dirName));
            }
        });
    });
}

function __generateJasmineArtifacts__(outputDirPath) {
    console.info('Starting generation of Jasmine Test Artifacts');

    let pathToJasmineScriptsInProject = path.resolve(projectLocation, TEST_RESOURCES_DIR, JASMINE_DIR);
    let pathToBaseAppCommonFolder = path.resolve(pathToJasmineScriptsInProject, COMMON_DIR);

    let workspacePath = path.resolve(projectLocation, "..");
    let projectList = __getDependentProjectsUsingManifest__(projectLocation, workspacePath);

    try {
        //clearing the folder if already present
        __rmDirRecursively__(outputDirPath);
    } catch(e) {
        //do nothing since the only error here could be missing folder
    }

    __assertDir__(outputDirPath);

    __populateTestArtifacts__(projectList,outputDirPath,pathToBaseAppCommonFolder);

    __generatePOMMetaFile__({outputDirPath, dependentProjectsList : projectList.map((project) => {return project.projectName})});

    let dirEntries = __readdirSync__(outputDirPath),
        promisesForZipping = [],
        archiveName = "automationScripts",
        zipext = ".zip",
        tarext = ".tar";

    dirEntries.forEach(function(dirName) {
        promisesForZipping.push(new Promise(function (resolve, reject) {

            let promisesForZippingInChannel = [],
                dirPath = path.resolve(outputDirPath, dirName);

            promisesForZippingInChannel.push(__zipArtifacts__(outputDirPath, dirName, zipext, true));
            promisesForZippingInChannel.push(__zipArtifacts__(outputDirPath, dirName, tarext, false));

            Promise
                .all(promisesForZippingInChannel)
                .then(function () {
                    //moving files
                    fs.renameSync(path.resolve(outputDirPath, dirName + zipext), path.resolve(dirPath, archiveName + zipext));
                    fs.renameSync(path.resolve(outputDirPath, dirName + tarext), path.resolve(dirPath, archiveName + tarext));

                    resolve();
                })
                .catch(function (err) {
                    //cleanup
                    let pathToZipFile = path.resolve(outputDirPath, dirName + zipext),
                        pathToTarFile = path.resolve(outputDirPath, dirName + tarext);

                    if (fs.existsSync(pathToZipFile)) {
                        fs.unlinkSync(pathToZipFile);
                    }

                    if (fs.existsSync(pathToTarFile)) {
                        fs.unlinkSync(pathToTarFile);
                    }

                    reject(err);
                });
        }));
    });

    Promise
    .all(promisesForZipping)
    .then(function() {
        //create metainfo.json in each channel dir
        let FILE_NAME = "metaInfo.json",
            FILE_CONTENT = {
                automationWindowOpened: false
            };

        __readdirSync__(outputDirPath).forEach(function(channel) {
            fs.writeFileSync(path.resolve(outputDirPath, channel, FILE_NAME), JSON.stringify(FILE_CONTENT, null, 4));
        });

        console.info(`Successfully generated Jasmine test artifacts within ${outputDirPath}`);
        process.exit(0);
    })
    .catch(function(err) {
        console.error('Error during archiving ::', err);
        process.exit(-1);
    });
}

var __generatePOMMetaFile__ = function(params) {
    let {dependentProjectsList, outputDirPath} = params,
        pomMetaObject = {};

    CHANNELS.forEach((channel) => {
        dependentProjectsList.forEach((projectName) => {

            let projObj = {};

            POM_SUPPORTED_ENTITY_TYPES.forEach((kitemType) => {
                
                let params = {
                    projectName,
                    kitemType,
                    selectedChannel : channel,
                };

                let basePath = __getPOMBasePath__(params),
                    keyName = path.basename(basePath);
                
                projObj[keyName] = {};

                if(fs.existsSync(basePath)) {
                    let filesList = __readdirSync__(basePath);

                    filesList.filter((fileName) => {
                        return fileName.endsWith(POM_FILE_SUFFIX);
                    }).forEach((fileName) => {
                        let key = fileName.split(POM_FILE_SUFFIX)[0];

                        let jsonObj = JSON.parse(fs.readFileSync(path.resolve(basePath, fileName), 'utf-8'));

                        projObj[keyName][key] = jsonObj;
                    });
                }
                
            });

            pomMetaObject[projectName] = projObj;
        });

        let metaFilepath = path.resolve(outputDirPath, channel, POM_META_FILE);

        console.debug(`Generating pom meta file for ${channel} : ${metaFilepath}`);

        __assertDir__(metaFilepath);

        fs.writeFileSync(metaFilepath, JSON.stringify(pomMetaObject, null, 4), {encoding: 'utf8'});
    }); 
}

var __getPOMBasePath__ = function(params) {
    let {projectName, selectedChannel, kitemType} = params,
        channelPath = kitemType === 'userwidgets' ? COMMON_DIR : selectedChannel,
        rootPath = path.resolve(projectLocation, "..", projectName, TEST_RESOURCES_DIR, JASMINE_DIR),
        basePath = path.resolve(rootPath, channelPath, PAGE_OBJECT_MODELS, ENTITY_DIRECTORY_MAP[kitemType]);

    return basePath;
}

function __printHelpContent__() {
    let helpContent = '\nUsage: node generateJasmineScripts.js [<args>]\n\n' +  
        'arguments: \n' +
        '    --help, -h                 help for generateJasmineScripts.js arguments\n' +
        '    --output-dir, -o           Directory to generate scripts.\n' +
        '                               Usage: node generateJasmineScripts.js --output-dir D:\\testScripts\n';
                
    console.log(helpContent);
}

function __validateInput__(args) {
    if(args.help) {
        return {
            isValid: true,
            showHelp: true
        };
    } else if(args["output-dir"]) {
        try {
            __assertDir__(args["output-dir"]);

            return {
                isValid: true
            };
        } catch(e) {
            return {
                isValid: false,
                showHelp: false,
                message: `Please enter a valid output directory path :: ${e}`
            };
        }
    } else {
        return {
            isValid: false,
            showHelp: true,
            message: "Invalid arguments"
        };
    }
}

try {
    let args = minimist(process.argv.slice(2), {alias: {
        'h': 'help',
        'o': 'output-dir'
    }});

    let validationObj = __validateInput__(args);

    if(!validationObj.isValid) {
        console.error(validationObj.message);
    }

    if(validationObj.showHelp) {
        __printHelpContent__();
    }

    if(validationObj.isValid) {
        if(args["output-dir"]) {
            __generateJasmineArtifacts__(args["output-dir"]);    
        }
    } else {
        process.exit(-1);
    }
} catch (e) {
    console.error('Error during generation ::', e);
    process.exit(-1);
}

//Reading manifest files and getting the list of dependencies for a project
function __getDependentProjectsUsingManifest__(__projectPath, __workspacePath) {

    //#region Manifest.js
    let MANIFEST_FILENAME = "project.manifest";
    let defaultMeta = {
        projectName: "",
        dependencies: []
    };

    class Manifest {
        constructor(projectPath, content) {
            this.projectPath = projectPath;
            this.projectName = path.basename(projectPath);

            if (this.content) {
                this.content = content;
            } else {
                this.loadFromPath();
            }
        }

        get dependencies() {
            return this.content.dependencies;
        }

        set dependencies(value) {
            this.content.dependencies = value;
        }

        getContent() {
            return this.content;
        }

        toJSON() {
            return {
                dependencies: this.dependencies
            };
        }

        toMeta() {
            return {
                dependencies: this.dependencies,
                projectName: this.projectName,
                projectPath: this.projectPath
            };
        }

        testValidity() {
            if (!this.projectPath) {
                return {
                    error: "Project path required."
                };
            }

            try {
                //Random propery read test
                this.content.test;
            } catch (e) {
                return {
                    error: `project.manifest not readable for ${this.projectPath}`
                };
            }


            if (!Array.isArray(this.content.dependencies)) {
                return {
                    error: `Unable to read dependencies key for ${this.projectPath}`
                };
            }

            let corruptIndex = this.content.dependencies.findIndex((o) => {
                return !(o && o.name);
            });

            if (corruptIndex > -1) {
                return {
                    error: `Unable to read dependency at position ${corruptIndex}`
                };
            }

            return {};
        }

        loadFromPath() {
            const manifestPath = path.resolve(this.projectPath, MANIFEST_FILENAME);

            this.content = undefined;

            if (!fs.existsSync(this.projectPath)) {
                return;
            }

            if (!fs.existsSync(manifestPath)) {
                this.content = JSON.parse(JSON.stringify(defaultMeta));
                return;
            }

            try {
                this.content = JSON.parse(fs.readFileSync(manifestPath, { encoding: 'utf8' }));
            } catch (e) {
                //Nothing
            }
        }

        save() {
            const manifestPath = path.resolve(this.projectPath, MANIFEST_FILENAME);
            fs.writeFileSync(manifestPath, JSON.stringify(this.toJSON(), null, 4));
        }
    }
    //#endregion

    //#region ManifestUtils.js
    let projectPropertiesFileName = 'projectProperties.json';

    let testDependencyObject = function (dependencyObject, projectNameMap) {

        /* Invalid type check */
        if (!dependencyObject || typeof dependencyObject !== "object") {
            return {
                error: {
                    message: `Invalid dependency structure found.`,
                    type: "FATAL"
                }
            };
        }

        /* Mandatory fields check */
        if (!dependencyObject.name) {
            return {
                error: {
                    message: `Name is a required field in dependency.`,
                    type: "FATAL"
                }
            };
        }

        let dependencyManifestList = projectNameMap[dependencyObject.name];

        if (!dependencyManifestList || dependencyManifestList.length === 0) {
            return {
                error: {
                    message: `Corrupt manifest or project missing by name ${dependencyObject.name}.`,
                    info: {
                        subCode: "PROJECT_MISSING",
                        project: [dependencyObject.name]
                    },
                    type: "FATAL"
                }
            };
        }

        return {};

    };

    let projectIterator = function (manifest, projectNameMap, dependencyFilterFn, onEachProject) {
        let projects = [manifest];
        let next = projects.shift();

        dependencyFilterFn = dependencyFilterFn || (() => true);

        if (manifest.testValidity().error) {
            onEachProject({ message: `Error while reading project.manifest of project ${manifest.projectName}.` });
            return;
        }

        while (next) {
            let canContinue = next.error ? onEachProject(next.error) : onEachProject(null, next);

            if (canContinue && next.dependencies) {
                let dependencies = next.dependencies.filter(dependencyFilterFn).map((d, i) => {
                    let r = testDependencyObject(d, projectNameMap);

                    if (r.error) {
                        r.error.message = `Error while reading project.manifest [${next.projectName}] dependencies at index ${i}. ${r.error.message}`;
                        return r;
                    } else {
                        return projectNameMap[d.name][0];
                    }
                });

                projects = projects.concat(dependencies);
            }

            next = projects.shift();
        }
    };

    let _readDirSync = function (path) {
        let _standardIgnorePatternsList = ["^cvs$", "^.svn$", "^__MACOSX$", "^.git$", "^.DS_Store$", "^desktop.ini$", "^thumbs.db$"];
        let _standardIgnorePatterns = new RegExp((_standardIgnorePatternsList.map(pattern => `(${pattern})`)).join("|"));
        let entries = fs.readdirSync(path);
        return entries.filter(f => {
            return (!f.startsWith(".") && !_standardIgnorePatterns.test(f));
        });
    }

    let buildWorkspaceMeta = function (workspacePath, projectName) {
        let currentProjectManifest;
        let possibleProjects = _readDirSync(workspacePath).filter((name) => {
            return fs.statSync(path.resolve(workspacePath, name)).isDirectory();
        });

        let projectNameMap = possibleProjects.reduce((acc, name) => {
            let projectPath = path.resolve(workspacePath, name);
            let isValidVizItem = fs.existsSync(path.resolve(projectPath, projectPropertiesFileName));

            if (!isValidVizItem) {
                return acc;
            }

            let manifest = new Manifest(projectPath);

            if (name === projectName) {
                currentProjectManifest = manifest;
            }

            if (!manifest.testValidity().error) {
                if (!acc[manifest.projectName]) {
                    acc[manifest.projectName] = [];
                }
                acc[manifest.projectName].push(manifest);
            }

            return acc;
        }, {});

        return {
            workspacePath,
            projectNameMap,
            currentProjectManifest
        };
    };

    let doTopologicalSort = function (rootManifest, projectNameMap, dependencyFilterFn) {
        let dependencyList = [];

        // Null check for manifest added as temporary hack to fix blocker during new project creation. 
        rootManifest && projectIterator(rootManifest, projectNameMap, dependencyFilterFn, function (error, manifest) {
            if (error && error.type === "FATAL") {
                throw new Error(error.message);
            }

            manifest && dependencyList.unshift(manifest);
            return true;
        });

        //Remove duplicate and return
        return [...new Set(dependencyList)];
    };

    let getOrderedProjectList = function (projectPath, workspacePath, dependencyFilterFn) {
        let { projectNameMap, currentProjectManifest } = buildWorkspaceMeta(workspacePath, path.basename(projectPath));
        let orderedList = doTopologicalSort(currentProjectManifest, projectNameMap, dependencyFilterFn);
        return orderedList.map((m) => m.toMeta());
    };
    //#endregion

    return getOrderedProjectList(__projectPath, __workspacePath);
}