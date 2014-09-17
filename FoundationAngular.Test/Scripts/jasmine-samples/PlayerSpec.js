/// <reference path="SpecHelper.ts"/>
/// <reference path="Player.ts"/>
/// <reference path="Song.ts"/>
describe("Player", function () {
    var player;
    var song;

    beforeEach(function () {
        player = new Player();
        song = new Song();
    });

    it("should be able to play a Song", function () {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
        expect(player).toBePlaying(song);
    });
});
//# sourceMappingURL=PlayerSpec.js.map
