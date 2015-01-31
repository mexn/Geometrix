/**
 * Created by Markus on 25.01.2015.
 */
(function (global)
{
    "use strict";

    var geometrix = function ($M)
    {
        /**
         * @namespace $M.Geometrix
         */
        if ($M.Geometrix)
            return $M;

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

    var define = global.define || null;

    if (define && define.amd)
        define(["./M"], geometrix);
    else
        return geometrix();
})(this);