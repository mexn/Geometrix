/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    function evaluateFix (fix, arg)
    {
        if (typeof(fix) == "string")
            return fix;

        if (typeof(fix) == "function")
            return fix(arg);

        if (fix || fix === false && fix.toString)
            return fix.toString();

        return "";
    }

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
             * @typedef {Object} $M~extendOptions
             * @property suffix {string} - The suffix to add to the extending properties' keys
             * @property prefix {string} - The prefix to add to the extending properties' keys
             */

            /**
             * @static
             * @memberof! $M
             * @function extend
             * @description Copies the own properties of arg(n+1) into arg(n)
             * @param {Object} arg1 - Target of all copied properties.
             * @param {Object} arg2 - Object which's properties should be copied
             * @param {Object} [arg3] - n other objects to copy into their predecessor.
             * @param {$M~extendOptions} [o] - If the last parameter is of type {@link $M~extendOptions}, the extending properties' keys are suffixed/prefixed
             * @returns {Object} The resulting object
             */
            extend: function (arg1, arg2, arg3, o)
            {
                var args = Array.prototype.slice.call(arguments),
                    obj = args && args.length ? args.shift() || {} : {},
                    lastArg = args.length > 2 ? args.pop() : {},
                    suffix = "suffix" in lastArg ? lastArg.suffix : undefined,
                    prefix = "prefix" in lastArg ? lastArg.prefix : undefined;

                if (suffix === undefined && prefix === undefined)
                {
                    args.push(lastArg); // if the last argument does not contain any semantic meanings, re-add it to the collection, as it is then a relevant object
                }

                args.forEach(function (arg)
                {
                    for (var key in arg)
                    {
                        if (arg.hasOwnProperty(key))
                        {
                            var prfx = evaluateFix(prefix, arg),
                                sffx = evaluateFix(suffix, arg);

                            obj[prfx + key + sffx] = arg[key];
                        }
                    }
                });

                return obj;
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