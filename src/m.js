/**
 * Created by Markus on 25.01.2015.
 */
(function (global)
{
    "use strict";

    var m = function ()
    {
        if (!global.$M)
        {
            /**
             * @namespace $M
             */
            global.$M = {
                /**
                 * @memberof! $M
                 * @static
                 */
                extend: function ()
                {

                }
            };
        }

        return global.$M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(m);
    else
        return m();
})(this);