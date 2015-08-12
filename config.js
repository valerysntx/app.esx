System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "guybedford/system-md": "github:guybedford/system-md@0.0.1",
    "knockout": "github:knockout/knockout@3.3.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:guybedford/system-md@0.0.1": {
      "showdown": "github:showdownjs/showdown@0.3.4"
    }
  }
});

