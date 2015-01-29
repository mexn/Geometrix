/**
 * Created by Markus on 25.01.2015.
 */
(function (global)
{
    "use strict";

    var geometrix = function ()
    {
        /**
         * @namespace $M.Geometrix
         */
        if (!global.$M.Geometrix)
            global.$M.Geometrix = {};

        return global.$M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./m"], geometrix);
    else
        return geometrix();
})(this);