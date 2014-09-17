var Player = (function () {
    function Player() {
    }
    Player.prototype.play = function (playedSong) {
        this.currentlyPlayingSong = playedSong;
        this.isPlaying = true;
    };

    Player.prototype.pause = function () {
        this.isPlaying = false;
    };

    Player.prototype.resume = function () {
        if (this.isPlaying) {
            throw new Error("song is already playing");
        }

        this.isPlaying = true;
    };

    Player.prototype.makeFavorite = function () {
        this.currentlyPlayingSong.persistFavoriteStatus(true);
    };
    return Player;
})();
;
//# sourceMappingURL=Player.js.map
