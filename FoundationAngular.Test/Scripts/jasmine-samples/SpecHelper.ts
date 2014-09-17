/// <reference path="../typings/jasmine/jasmine.d.ts" />

/* jshint ignore:start */
beforeEach(() => {
    jasmine.addMatchers({
        toBePlaying: () => {
            return {
                compare: (actual: Player, expected) => {
                    return {
                        pass: actual.currentlyPlayingSong === expected && actual.isPlaying
                    };
                }
            };
        }
    });
});
/* jshint ignore:end */
