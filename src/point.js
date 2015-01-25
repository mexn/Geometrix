/**
 * Created by Markus on 16.01.2015.
 */
(function ()
{
    "use strict";

    var point = function ()
    {
        $M.Geometrix.Point = function (x, y)
        {
            this.x = x || 0;
            this.y = y || 0;
        };

        $M.Geometrix.Point.prototype = {
            add: function (p)
            {
                if (p instanceof $M.Geometrix.Point)
                {
                    this.x += p.x;
                    this.y += p.y;
                }
            }
        };

        return $M;
    };

    var define = window.define || null;

    if (define)
        define(point);
    else
        return point();
})();