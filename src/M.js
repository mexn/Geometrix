/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    var m = function ($M)
    {
        /* istanbul ignore if */
        if ($M)
            return $M;

        /**
         * @namespace $M
         */
        return {
            /**
             * @static
             * @memberof! $M
             * @function extend
             * @description Copies the own properties of arg(n+1) into arg(n)
             * @param {Object} arg1 - Target of all copied properties.
             * @param {Object} arg2 - Object which's properties should be copied
             * @param {Object} [arg3] - n other objects to copy into their predecessor.
             * @returns {Object} The resulting object
             */
            extend: function (arg1, arg2, arg3)
            {
                var o = arguments[0] || {};

                Array.prototype.slice.call(arguments).forEach(function (arg, i)
                {
                    if (i === 0)
                    {
                        return;
                    }

                    for (var key in arg)
                    {
                        if (arg.hasOwnProperty(key))
                        {
                            o[key] = arg[key];
                        }
                    }
                });

                return o;
            }
        };
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
    })(this, m);
})();