/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    var geometrix = function ()
    {
        /**
         * @namespace $M.Geometrix
         */
        if (!window.$M.Geometrix)
            window.$M.Geometrix = {};

        return window.$M;
    };

    var define = window.define || null;

    if (define && define.amd)
        define(["./m"], geometrix);
    else
        return geometrix();
})();