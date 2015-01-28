/**
 * Created by Markus on 16.01.2015.
 */
(function ()
{
    "use strict";

    var define = window.define || null;

    if (define && define.amd)
    {
        define([
            "./m",
            "./geometrix",
            "./point",
            "./triangle"
        ], function ($M)
        {
            return $M;
        });
    }
})();