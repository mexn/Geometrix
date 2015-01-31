/**
 * Created by Markus on 16.01.2015.
 */
(function ()
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
         * @property {Number} [alpha] - Angle between sides b and c
         * @property {Number} [beta] - Angle between sides c and a
         * @property {Number} [gamma] - Angle between sides a and b
         */

        /**
         * A triangle
         * @param o {$M.Geometrix.Triangle~Options} - Initial values
         * @constructor
         */
        $M.Geometrix.Triangle = function (o)
        {
            $M.extend(this, o);
        };

        $M.Geometrix.Triangle.prototype = {
            /**
             * Validates a property
             * @param property {object} The property to check
             * @returns {boolean} `true` if the property is neither `undefined` nor `null`, `false` otherwise.
             * @private
             */
            _has: function (property)
            {
                return !!(typeof(property) != "undefined" && property !== null);
            }
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
                    alpha = this.alpha,
                    B = this.B,
                    C = this.C,
                    has = this._has;

                if (has(this._a))
                {
                    return this._a;
                }
                else if (has(b) && has(c) && has(alpha))
                {
                    this.a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) -
                                       2 * b * c * Math.cos($M.Geometrix.degToRad(alpha)));
                }
                else if (has(B) && has(C))
                {
                    this.a = Math.sqrt(Math.pow(B.x - C.x, 2) + Math.pow(B.y - C.y, 2));
                }
                else
                {
                    this.a = null;
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
            define(["./Geometrix"], factory);
        }
        else
        {
            global.$M = factory(global.$M);
        }
    })(this, triangle);
})();