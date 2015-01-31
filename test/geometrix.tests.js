/**
 * Created by Mex on 31.01.2015.
 */
(function (QUnit)
{
    define(["../src/M"], function ($M)
    {
        QUnit.module("$M.Geometrix");

        QUnit.test("$M.Geometrix.radToDeg", function (assert)
        {
            assert.expect(3);

            assert.equal($M.Geometrix.radToDeg(2 * Math.PI), 360);
            assert.equal($M.Geometrix.radToDeg(Math.PI), 180);
            assert.equal($M.Geometrix.radToDeg(-Math.PI), -180);
        });

        QUnit.test("$M.Geometrix.degToRad", function (assert)
        {
            assert.expect(3);

            assert.equal($M.Geometrix.degToRad(360), 2 * Math.PI);
            assert.equal($M.Geometrix.degToRad(180), Math.PI);
            assert.equal($M.Geometrix.degToRad(-180), -Math.PI);
        });
    });
})(QUnit);