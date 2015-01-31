(function (QUnit)
{
    "use strict";

    define(["../src/Triangle"], function ($M)
    {
        function round(v, digits)
        {
            var modifier = Math.pow(10, digits);
            return Math.round(v * modifier) / modifier;
        }

        QUnit.module("Geometrix.Triangle");

        QUnit.test("a", function (assert)
        {
            assert.expect(4);

            var t,
                Geometrix = $M.Geometrix,
                Point = Geometrix.Point,
                Triangle = Geometrix.Triangle;

            t = new Triangle({
                a: 2
            });

            assert.strictEqual(t.a, 2);

            t = new Triangle({
                b: 20,
                c: 25,
                alpha: 35
            });

            assert.strictEqual(round(t.a, 4), 14.3474);

            t = new Triangle({
                B: new Point (5, 1),
                C: new Point (3, 3)
            });

            assert.strictEqual(round(t.a, 4), 2.8284);

            t = new Triangle({
                some: "property"
            });

            assert.strictEqual(t.a, null);
        });
    });
})(QUnit);