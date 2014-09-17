/// <reference path="../typings/jasmine/jasmine.d.ts" />
/* jshint ignore:start */
beforeEach(function () {
    jasmine.addMatchers({
        toBePlaying: function () {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: actual.currentlyPlayingSong === expected && actual.isPlaying
                    };
                }
            };
        }
    });
});
/* jshint ignore:end */
//# sourceMappingURL=SpecHelper.js.map
