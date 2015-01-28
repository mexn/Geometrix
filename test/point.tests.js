(function (QUnit)
{
    "use strict";

    QUnit.module("Geometrix.Point");

    // test cases
    [
        { x: 2,         y: 3,           ex: 2,  ey: 3   },
        { x: undefined, y: undefined,   ex: 0,  ey: 0   },
        { x: -2,        y: -3,          ex: -2, ey: -3  }
    ].forEach(function (o, i)
    {
        QUnit.test("constructor #" + (i + 1), function ()
        {
            var p = new $M.Geometrix.Point(o.x, o.y);

            QUnit.equal(p.x, o.ex, "prop x");
            QUnit.equal(p.y, o.ey, "prop y");
        });
    });

    // test cases
    [
        { x1: 2,     y1: 3,     x2: 4,      y2: 5,  ex: 6,      ey: 8  },
        { x1: 645,   y1: 463,   x2: 782,    y2: 71, ex: 1427,   ey: 534 }
    ].forEach(function (o, i)
    {
        QUnit.test("add #" + (i + 1), function ()
        {
            var p1 = new $M.Geometrix.Point(o.x1, o.y1),
                p2 = new $M.Geometrix.Point(o.x2, o.y2);

            p1.add(p2);

            QUnit.equal(p1.x, o.ex, "p1.x + p2.x");
            QUnit.equal(p1.y, o.ey, "p1.y + p2.y");
        });
    });
})(QUnit);