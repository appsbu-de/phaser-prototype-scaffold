PROJECTNAME.Game = function(game) {
};

PROJECTNAME.Game.prototype = {

    create: function() {
        this.game.stage.backgroundColor = '#000000';

    },

    update: function() {

    },

    quitGame: function(pointer) {
        this.state.start('MainMenu');
    }

};
