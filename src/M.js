/**
 * Created by Markus on 25.01.2015.
 */
(function (global)
{
    "use strict";

    var m = function ()
    {
        if (global.$M)
            return global.$M;

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

    var define = global.define || null;

    if (define && define.amd)
        define(m);
    else
        global.$M = m();
})(this);