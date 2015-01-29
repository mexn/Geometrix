/**
 * Created by Markus on 16.01.2015.
 */
(function (global)
{
    "use strict";

    var triangle = function ()
    {
        /**
         * Initial values for {@link $M.Geometrix.Triangle}
         * @typedef {Object} $M.Geometrix.Triangle~Options
         * @property {Number} A - point A
         * @property {Number} B - point B
         * @property {Number} C - point C
         */

        /**
         *
         * @param o {$M.Geometrix.Triangle~Options} - Initial values
         * @constructor
         */
        $M.Geometrix.Triangle = function (o)
        {
            this._init();
        };

        $M.Geometrix.Triangle.prototype = {
            /**
             * @private
             */
            _init: function ()
            {

            }
        };

        Object.defineProperty($M.Geometrix.Triangle.prototype, "a", {
            /**
             * @name a
             * @type {number}
             * @description abcc
             * @memberof! $M.Geometrix.Triangle#
             */
            get: function ()
            {
                if ("a" in this && typeof(this.a) != "undefined")
                {
                    return this.a;
                }

                return this.A;
            }
        });

        return $M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./geometrix"], triangle);
    else
        return triangle();
})(this);