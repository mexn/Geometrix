/**
 * Created by Markus on 17.01.2015.
 */
(function (global)
{
    "use strict";

    require(["src/index"], function ($M)
    {
        global.$M = $M;
    });
})(this);