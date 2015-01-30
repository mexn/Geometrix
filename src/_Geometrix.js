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
        if (!$M.Geometrix)
            $M.Geometrix = {};

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
        define(["./_M"], geometrix);
    else
        return geometrix();
})(this);