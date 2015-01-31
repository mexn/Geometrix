(function (QUnit)
{
    "use strict";

    define(["../src/Triangle"], function ($M)
    {
        QUnit.module("Geometrix.Triangle");

        QUnit.test("constructor", function (assert)
        {
            assert.expect(1);

            var t = new $M.Geometrix.Triangle({
                    a: 2
                });

            assert.equal(t.a, 2);
        });
    });
})(QUnit);