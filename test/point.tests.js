(function (QUnit)
{
    "use strict";

    define(["../src/Point"], function ($M)
    {
        QUnit.module("Geometrix.Point");

        QUnit.test("constructor with parameters", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            QUnit.equal(p.x, 2, "prop x");
            QUnit.equal(p.y, 3, "prop y");
        });

        QUnit.test("constructor with defaults", function ()
        {
            var p = new $M.Geometrix.Point();

            QUnit.equal(p.x, 0, "prop x");
            QUnit.equal(p.y, 0, "prop y");
        });

        QUnit.test("constructor with coordinates object", function ()
        {
            var coords = { x: 2, y: 3},
                p = new $M.Geometrix.Point(coords);

            QUnit.equal(p.x, coords.x, "prop x");
            QUnit.equal(p.y, coords.y, "prop y");
        });

        QUnit.test("prototype.move w/o parameters", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            p.move();

            QUnit.equal(p.x, 2, "prop x");
            QUnit.equal(p.y, 3, "prop y");
        });

        QUnit.test("prototype.move w/ parameters", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            p.move(4, 5);

            QUnit.equal(p.x, 6, "prop x");
            QUnit.equal(p.y, 8, "prop y");
        });

        QUnit.test("prototype.move w/ object", function ()
        {
            var p = new $M.Geometrix.Point(2, 3),
                coords = { x: 4, y: 5};

            p.move(coords);

            QUnit.equal(p.x, 6, "prop x");
            QUnit.equal(p.y, 8, "prop y");
        });

        QUnit.test("prototype.moveTo w/o parameters", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            p.moveTo();

            QUnit.equal(p.x, 2, "prop x");
            QUnit.equal(p.y, 3, "prop y");
        });

        QUnit.test("prototype.move w/ parameters", function ()
        {
            var p = new $M.Geometrix.Point(2, 3);

            p.moveTo(4, 5);

            QUnit.equal(p.x, 4, "prop x");
            QUnit.equal(p.y, 5, "prop y");
        });

        QUnit.test("prototype.moveTo w/ object", function ()
        {
            var p = new $M.Geometrix.Point(2, 3),
                coords = { x: 4, y: 5};

            p.moveTo(coords);

            QUnit.equal(p.x, 4, "prop x");
            QUnit.equal(p.y, 5, "prop y");
        });
    });
})(QUnit);