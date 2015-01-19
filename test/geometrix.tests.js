(function (QUnit, $M)
{
    "use strict";

    QUnit.module("Geometrix.Point");

    QUnit.test("framework-test", function ()
    {
        var p = new $M.Geometrix.Point(2,3);

        QUnit.equal(p.x, 2, "prop x");
        QUnit.equal(p.y, 3, "prop y");
    });
})(QUnit, $M);