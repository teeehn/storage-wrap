const assert = require("chai").assert;
const StorageWrap =  require("../dist/storage-wrap.cjs");

// Mock localStorage
global.window = {};
require("mock-local-storage");
window.localStorage = global.localStorage;

describe("StorageWrap and localStorage mock are set up correctly.", function () {
    it("typeof StorageWrap is an object", function () {
        assert.typeOf(StorageWrap, "object");
    });
    it("localStorage is neither null nor undefined", function () {
        assert.exists(window.localStorage);
    });
    describe("StorageWrap.storage_read", function () {

        const { 
            storage_read,
            storage_get_length
        } = StorageWrap;

        it("typeof storage_read is function", function() {
            assert.typeOf(storage_read, "function");
        });

        it("storage_read with key 'test' is null", function () {
            assert.isNull(storage_read('test'));
        });

        it("storage_get_length is 0", function () {
            assert.equal(storage_get_length("localStorage"), 0);
        });
    });

    describe("Test writing and reading from localStorage", function () {
        const {
            storage_clear,
            storage_read,
            storage_write,
            storage_get_length
        } = StorageWrap;

        it("Writes and reads a value correctly.", function () {
            storage_write("test_value", "__test-value__");
            assert.equal(storage_get_length("localStorage"), 1);
            assert.equal(storage_read("test_value"), "__test-value__");
        });

        it("Clears the storage correctly.", function () {
            assert.equal(storage_get_length("localStorage"), 1);

            storage_clear("localStorage");

            assert.equal(storage_get_length("localStorage"), 0);
        });
    });
});
