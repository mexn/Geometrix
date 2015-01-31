/**
 * Created by Markus on 16.01.2015.
 */
(function (global)
{
    "use strict";

    var triangle = function ($M)
    {
        /**
         * Initial values for {@link $M.Geometrix.Triangle}.
         * Omitted properties get calculated by the given, where possible.
         * @typedef {Object} $M.Geometrix.Triangle~Options
         * @property {$M.Geometrix.Point} [A] - point A
         * @property {$M.Geometrix.Point} [B] - point B
         * @property {$M.Geometrix.Point} [C] - point C
         * @property {Number} [a] - length of side a (segment BC)
         * @property {Number} [b] - length of side b (segment AC)
         * @property {Number} [c] - length of side c (segment AB)
         * @property {Number} [alpha] - Angle between {@link b} and {@link c}
         * @property {Number} [beta] - Angle between {@link c} and {@link a}
         * @property {Number} [gamma] - Angle between {@link a} and {@link b}
         */

        /**
         *
         * @param o {$M.Geometrix.Triangle~Options} - Initial values
         * @constructor
         */
        $M.Geometrix.Triangle = function (o)
        {
            $M.extend(this, o);
        };

        $M.Geometrix.Triangle.prototype = {

        };

        /**
         * @description The length of side a (segment BC)
         * @name a
         * @type {Number}
         * @memberof! $M.Geometrix.Triangle#
         */
        Object.defineProperty($M.Geometrix.Triangle.prototype, "a", {
            get: function ()
            {
                var b = this.b,
                    c = this.c,
                    alpha = this.alpha;

                if (typeof(b) != "undefined" && typeof(c) != "undefined" && typeof(alpha) != "undefined")
                {
                    this.a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * Math.cos(alpha));
                }

                return this._a;
            },
            set: function (v)
            {
                this._a = v;
            }
        });

        return $M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./Geometrix"], triangle);
    else
        return triangle(global.$M);
})(this);