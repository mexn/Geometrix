/**
 * Created by Markus on 16.01.2015.
 */
(function (global)
{
    "use strict";

    var define = global.define || null;

    if (define && define.amd)
    {
        define([
            "./_Point",
            "./_Triangle"
        ], function ($M)
        {
            return $M;
        });
    }
})(this);