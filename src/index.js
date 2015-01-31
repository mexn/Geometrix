/**
 * Created by Markus on 16.01.2015.
 */
/* istanbul ignore next */
(function (global)
{
    "use strict";

    var define = global.define || null;

    if (define && define.amd)
    {
        define([
            "./Point",
            "./Triangle"
        ], function ($M)
        {
            return $M;
        });
    }
})(this);