System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "https://github.jspm.io/*.js",
    "npm:*": "https://npm.jspm.io/*.js"
  },
  "bundles": {
    "dist/app": [
      "github:knockout/knockout@3.3.0/dist/knockout.debug",
      "header",
      "jumbo",
      "github:knockout/knockout@3.3.0",
      "ApplicationViewModel"
    ]
  }
});

System.config({
  "map": {
    "guybedford/system-md": "github:guybedford/system-md@0.0.1",
    "knockout": "github:knockout/knockout@3.3.0",
    "md": "github:guybedford/system-md@0.0.1",
    "showdown@0.3.1": "jspm_packages/github/showdownjs/showdown@0.3.4/compressed/showdown.min",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:guybedford/system-md@0.0.1": {
      "showdown": "github:showdownjs/showdown@0.3.4"
    }
  }
});

