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
             * @memberof! $M
             * @static
             */
            extend: function ()
            {
            }
        };
    };

    var define = global.define || null;

    if (define && define.amd)
        define(m);
    else
        global.$M = m();
})(this);