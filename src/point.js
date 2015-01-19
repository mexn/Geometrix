/**
 * Created by Markus on 16.01.2015.
 */
(function ()
{
    "use strict";

    /**
     * @namespace
     */
    var $M = function () {};

    /**
     * @namespace
     */
    $M.Geometrix = {};

    /**
     *
     * @param x {int} x-coordinate
     * @param y {number} y.coordinate
     * @constructor
     */
    $M.Geometrix.Point = function(x, y)
    {
        this.x = x;
        this.y = y;
    };

    window.$M = $M;

    // AMD registration happens at the end for compatibility with AMD loaders
    // that may not enforce next-turn semantics on modules. Even though general
    // practice for AMD registration is to be anonymous, underscore registers
    // as a named module because, like jQuery, it is a base library that is
    // popular enough to be bundled in a third party lib, but not be part of
    // an AMD load request. Those cases could generate an error when an
    // anonymous define() is called outside of a loader request.
    if (typeof(define) === "function" && define.amd)
    {
        define(function ()
        {
            return $M;
        });
    }
})();