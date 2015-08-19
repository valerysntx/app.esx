
var Injector = function () {

    var injector = {

        dependencies: {},

        process: function (target) {
            var fnArgs = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
            //	var FN_ARG_SPLIT = /,/;
            //	var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
            //	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
            var text = target.toString();
            var args = text.match(fnArgs)[1].split(',');

            target.apply(target, this.getDependencies(args));
        },

        getDependencies: function (arr) {
            var self = this;
            return arr.map(function (value) {
                return self.dependencies[value];
            });
        },

        register: function (name, dependency) {
            this.dependencies[name] = dependency;
        }
    };

    return injector;
}

export {Injector}