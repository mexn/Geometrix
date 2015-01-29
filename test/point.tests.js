(function (QUnit)
{
    "use strict";

    define(["../src/point"], function ($M)
    {
        QUnit.module("Geometrix.Point");

        QUnit.test("constructor with defaults", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            QUnit.equal(p.x, 2, "prop x");
            QUnit.equal(p.y, 3, "prop y");
        });

        QUnit.test("constructor with parameters", function ()
        {
            var p = new $M.Geometrix.Point();

            QUnit.equal(p.x, 0, "prop x");
            QUnit.equal(p.y, 0, "prop y");
        });

        QUnit.test("prototype.add intended", function ()
        {
            var p1 = new $M.Geometrix.Point(2, 3),
                p2 = new $M.Geometrix.Point(4, 5);

            p1.add(p2);

            QUnit.equal(p1.x, 6, "p1.x + p2.x");
            QUnit.equal(p1.y, 8, "p1.y + p2.y");
        });

        QUnit.test("prototype.add wrong", function ()
        {
            var p1 = new $M.Geometrix.Point(2, 3);

            p1.add(null);

            QUnit.equal(p1.x, 2, "p1.x + p2.x");
            QUnit.equal(p1.y, 3, "p1.y + p2.y");
        });
    });
})(QUnit);