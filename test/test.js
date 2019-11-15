const assert = require("chai").assert;
const StorageWrap =  require("../dist/storage-wrap.cjs");
const window = global;

describe("StorageWrap", function () {
    it("typeof StorageWrap is an object", function () {
        assert.typeOf(StorageWrap, "object");
    });
    it("typeof StorageWrap.read_storage is function", function() {
        assert.typeOf(StorageWrap.storage_read, "function");
    });
    it("localStorage is neither null nor undefined", function () {
        assert.exists(localStorage);
    });
});
