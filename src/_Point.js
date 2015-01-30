/**
 * Created by Markus on 16.01.2015.
 */
(function (global)
{
    "use strict";

    var point = function ($M)
    {
        /**
         * A Point with coordinates.
         * @param [x=0] {Number|$M.Geometrix~Coordinates} - The x-coordinate of the point. If of type {@link $M.Geometrix~Coordinates}, both coordinates are taken from there.
         * @param [y=0] {Number} - The y-coordinate of the point.
         * @constructor
         */
        $M.Geometrix.Point = function (x, y)
        {
            if (typeof(x) == "object")
            {
                y = x.y;
                x = x.x;
            }

            this.x = x || 0;
            this.y = y || 0;
        };

        $M.Geometrix.Point.prototype = {
            /**
             * Moves the point the given amount of units in the given directions.
             * @param x {Number|$M.Geometrix~Coordinates} - Move this units in x-direction. If of type {@link $M.Geometrix~Coordinates}, both directions are taken from there.
             * @param [y] {Number} - Move this units in y-direction.
             * @returns {$M.Geometrix.Point} this
             */
            move: function (x, y)
            {
                if (typeof(x) == "object")
                {
                    y = x.y;
                    x = x.x;
                }

                this.x += x || 0;
                this.y += y || 0;

                return this;
            },

            /**
             * Moves the point to the given coordinates.
             * @param x {Number|$M.Geometrix~Coordinates} - x-coordinate to move to. If of type {@link $M.Geometrix~Coordinates}, both coordinates are taken from there.
             * @param [y] {Number} - y-coordinate to move to.
             * @returns {$M.Geometrix.Point} this
             */
            moveTo: function (x, y)
            {
                if (typeof(x) == "object")
                {
                    y = x.y;
                    x = x.x;
                }

                if (x !== null && x !== undefined)
                {
                    this.x = x;
                }

                if (y !== null && y !== undefined)
                {
                    this.y = y;
                }

                return this;
            }
        };

        return $M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./_Geometrix"], point);
    else
        return point(global.$M);
})(this);