/**
 * Created by Markus on 16.01.2015.
 */
(function (global)
{
    "use strict";

    var point = function ($M)
    {
        /**
         * A Point with coordinates
         * @param [x=0] {Number} The x coordinate of the point
         * @param [y=0] {Number} The y coordinate of the point
         * @constructor
         */
        $M.Geometrix.Point = function (x, y)
        {
            this.x = x || 0;
            this.y = y || 0;
        };

        $M.Geometrix.Point.prototype = {
            /**
             * Adds one point to another. Adding two points moves the first one.
             * @param p {$M.Geometrix.Point} The point to add
             * @returns {$M.Geometrix.Point} this
             */
            add: function (p)
            {
                if (p instanceof $M.Geometrix.Point)
                {
                    this.x += p.x;
                    this.y += p.y;
                }

                return this;
            }
        };

        return $M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./geometrix"], point);
    else
        return point(global.$M);
})(this);