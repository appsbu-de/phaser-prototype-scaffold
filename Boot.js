var PROJECTNAME = {};

PROJECTNAME.Boot = function (game) {

};

PROJECTNAME.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
    },

    preload: function () {

    },

    create: function () {
        this.state.start('Preloader');
    }

};
