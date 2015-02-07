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
            assert.expect(17);

            assert.throws($M.extend(), "0");

            assert.throws($M.extend({}), "1");

            assert.throws($M.extend({}, {}), "2");

            assert.throws($M.extend(234, 234), "3");

            assert.propEqual($M.extend({}, { a: "b" }), { a: "b" }, "4");

            assert.propEqual($M.extend({ a: "b" }, { b: "c" }), { a: "b", b: "c" }, "5");

            assert.propEqual($M.extend({ a: "b" }, { a: "c" }), { a: "c" }, "6");

            assert.propEqual($M.extend({ a: "b" }, { a: undefined }), { a: undefined }, "7");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { prefix: "_" }), { a: "b", _c: "d", _e: "f" }, "8");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { suffix: "_" }), { a: "b", c_: "d", e_: "f" }, "9");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { prefix: "_", suffix: "_" }), { a: "b", _c_: "d", _e_: "f" }, "10");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { prefix: "_", suffix: "_" }), { a: "b", _c_: "d", _e_: "f" }, "11");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { prefix: 5, suffix: { g: "h" } }), { a: "b", "5c[object Object]": "d", "5e[object Object]": "f" }, "12");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { prefix: function (arg) { return Object.keys(arg)[0]; }}), { a: "b", "cc": "d", "ee": "f" }, "13");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { suffix: { toString: function () { return "#"; } } }), { a: "b", "c#": "d", "e#": "f" }, "14");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { suffix: null }), { a: "b", "c": "d", "e": "f" }, "15");

            assert.propEqual($M.extend({ a: "b" }, { c: "d"}, { e: "f" }, { suffix: true, prefix: false }), { a: "b", "falsectrue": "d", "falseetrue": "f" }, "16");

        });
    });
})(QUnit);