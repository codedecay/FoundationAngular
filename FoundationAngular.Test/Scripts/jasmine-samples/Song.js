var Song = (function () {
    function Song() {
        this.isFavorite = false;
    }
    Song.prototype.persistFavoriteStatus = function (value) {
        this.isFavorite = value;
    };
    return Song;
})();
//# sourceMappingURL=Song.js.map
