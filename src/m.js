/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    var m = function ()
    {

        if (!window.$M)
        {
            /**
             * @namespace $M
             */
            window.$M = {
                /**
                 * @memberof! $M
                 * @static
                 */
                extend: function ()
                {

                }
            };
        }

        return window.$M;
    };

    var define = window.define || null;

    if (define && define.amd)
        define(m);
    else
        return m();
})();