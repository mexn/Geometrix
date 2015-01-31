/**
 * Created by Mex on 31.01.2015.
 */
(function (QUnit)
{
   define(["../src/M"], function ($M)
   {
        QUnit.module("$M");

        QUnit.test("$M.extend", function (assert)
        {
            assert.expect(4);

            assert.propEqual($M.extend({}, { a: "b" }), { a: "b" });

            assert.propEqual($M.extend({ a: "b" }, { b: "c" }), { a: "b", b: "c" });

            assert.propEqual($M.extend({ a: "b" }, { a: "c" }), { a: "c" });

            assert.propEqual($M.extend({ a: "b" }, { a: undefined }), { a: undefined });
        });
    });
})(QUnit);