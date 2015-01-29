/**
 * Created by Markus on 25.01.2015.
 */
(function (global)
{
    "use strict";

    var geometrix = function ($M)
    {
        /**
         * @namespace $M.Geometrix
         */
        if (!$M.Geometrix)
            $M.Geometrix = {};

        return $M;
    };

    var define = global.define || null;

    if (define && define.amd)
        define(["./m"], geometrix);
    else
        return geometrix();
})(this);