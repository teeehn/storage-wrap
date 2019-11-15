const assert = require("chai").assert;
const StorageWrap =  require("../dist/storage-wrap.cjs");

// Mock localStorage
global.window = {};
require("mock-local-storage");
window.localStorage = global.localStorage;

describe("StorageWrap", function () {
    it("typeof StorageWrap is an object", function () {
        assert.typeOf(StorageWrap, "object");
    });
    it("localStorage is neither null nor undefined", function () {
        assert.exists(window.localStorage);
    });
    describe("StorageWrap.storage_read", function () {

        const { 
            storage_read,
            storage_write
        } = StorageWrap;

        it("typeof storage_read is function", function() {
            assert.typeOf(storage_read, "function");
        });

        it("storage_read with key 'test' is null", function () {
            assert.isNull(storage_read('test'));
        });
    });
});
