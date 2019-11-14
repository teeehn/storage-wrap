/**
 * Tests for the availability of local storage.
 * 
 * reference: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage
 * 
 * @param {string} type 
 */
function storage_available(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

/**
 * 
 * @param {string} key 
 * @param {string} value 
 * @param {string} storage_type // "localStorage" or "sessionStorage"
 */
function storage_write(key, value, storage_type = "localStorage") {
    if (storage_available(storage_type)) {
        window[storage_type].setItem(key, value);
    } else {
        throw "Unable to write to storage.";
    }
}

function storage_read(key, storage_type = "localStorage") {
    if (storage_available(storage_type)) {
        return window[storage_type].getItem(key);
    } else {
        throw "Unable to read from storage.";
    }
}

function storage_delete(key, storage_type = "localStorage") {
    if (storage_available(storage_type)) {
        window[storage_type].removeItem(key);
    } else {
        throw "Unable to remove item from storage.";
    }
}

function storage_clear(storage_type) {
    if (storage_available(storage_type)) {
        window[storage_type].clear();
    } else {
        throw "Unable to clear storage.";
    }
}

export const StorageWrap = {
    storage_clear,
    storage_delete,
    storage_read,
    storage_write
};
