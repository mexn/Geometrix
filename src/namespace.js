/**
 * Created by Markus on 25.01.2015.
 */
(function ()
{
    "use strict";

    var namespace = function ()
    {
        if (!window.$M)
            window.$M = function () {};

        if (!window.$M.Geometrix)
            window.$M.Geometrix = function () {};

        return $M;
    };

    var define = window.define || null;

    if (define && define.amd)
        define(namespace);
    else
        return namespace();
})();