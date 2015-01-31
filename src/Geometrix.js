/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    var geometrix = function ($M)
    {
        /* istanbul ignore if */
        if ($M.Geometrix)
            return $M;

        /**
         * @namespace $M.Geometrix
         */
        $M.Geometrix = {
            /**
             * @static
             * @memberof! $M.Geometrix
             * @function radToDeg
             * @param rad
             * @returns {number}
             */
            radToDeg: function (rad)
            {
                return rad * 180 / Math.PI;
            },

            /**
             * @static
             * @memberof! $M.Geometrix
             * @function degToRad
             * @param deg
             * @returns {number}
             */
            degToRad: function (deg)
            {
                return deg * Math.PI / 180;
            }
        };

        /**
         * A coordinates-object
         * @typedef {Object} $M.Geometrix~Coordinates
         * @property x {Number} - x-coordinate
         * @property y {Number} - y-coordinate
         */

        return $M;
    };

    /* istanbul ignore next */
    (function (global, factory)
    {
        /* TODO
         if (typeof(exports) === "object")
         {
         module.exports = factory();
         }
         else
         */
        if (typeof(define) === "function" && define.amd)
        {
            define(["./M"], factory);
        }
        else
        {
            global.$M = factory(global.$M);
        }
    })(this, geometrix);
})();