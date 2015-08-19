var debug = {

  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
     "*": "*.js",
     "github:*": "jspm_packages/github/*.js",
     "npm:*":"jspm_packages/npm/*.js"
  },
 "map": {
  "md":"github:guybedford/system-md@0.0.1",
  "showdown@0.3.1": "jspm_packages/github/showdownjs/showdown@0.3.4/compressed/showdown.min",
    "guybedford/system-md": "github:guybedford/system-md@0.0.1",
    "knockout": "github:knockout/knockout@3.3.0",
    "traceur": "node_modules/traceur/bin/traceur",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:guybedford/system-md@0.0.1": {
      "showdown@0.3.1": "github:showdownjs/showdown@0.3.4"
    }
  }
  
};

var github = {

  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    //'*': 'https://registry.jspm.io/*.js',
    "github:*" : 'https://github.jspm.io/*.js', 
    "npm:*":"jspm_packages/npm/*.js"
  },
 "map": {
  "md":"github:guybedford/system-md@0.0.1",
  "showdown@0.3.1": "jspm_packages/github/showdownjs/showdown@0.3.4/compressed/showdown.min",
    "guybedford/system-md": "github:guybedford/system-md@0.0.1",
    "knockout": "github:knockout/knockout@3.3.0",
    "traceur": "node_modules/traceur/bin/traceur",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:guybedford/system-md@0.0.1": {
      "showdown@0.3.1": "github:showdownjs/showdown@0.3.4"
    }
  }
  
};

System.config(debug);