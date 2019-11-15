# storage-wrap
A thin wrapper for the Web Storage API.

Uses code from MDN to check for storage availabllity prior to running storage methods.
(Reference: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage).

## Basic usage:

Installation via npm:

```
npm i @tomnicolosi/storage-wrap
```

Usage in JavaScript file:

```
import StorageWrap from "@tomnicolosi/storage-wrap;

// Store a 'test-value' equal to 'hello' in localStorage.

function store_test () {
    StorageWrap.storage_write("test-value", "hello");
}

store_test();

// Read the value

function store_read () {
    return StorageWrap.storage_read("test-value");
}

console.log(store_read); // "hello"

```






