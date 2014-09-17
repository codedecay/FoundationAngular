/// <reference path="SpecHelper.ts"/>
/// <reference path="Player.ts"/>
/// <reference path="Song.ts"/>


describe("Player", () => {
    var player;
    var song;

    beforeEach(() => {
        player = new Player();
        song = new Song();
    });

    it("should be able to play a Song", () => {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
        expect(player).toBePlaying(song);
    });

}); 