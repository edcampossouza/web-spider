# Callback-based web spider

This repo demonstrates how even a simple algorithm can have its readability impared by the "callback hell" phenomenon

Compare the branches 'main' and 'callback-hell'

## Improving code readability of asynchronous control flows

Code readability is improved by following the following two steps:

1. Early return principle

Replace

```js
if (err) {
  cb(err);
} else {
    ...
}
```

with

```js
if (err) {
  return cb(err);
}
...
```

2. Factor out pieces of functionality into separate functions

In the example, the download and save functionalities are factored out into separate functions

## Installation

```bash
npm install
```

## Usage

```bash
npm run download <url>
```

Downloads a webpage specified by <url> into the downloads folder

Creates a folder structure recursively to reflect the url path


## Credits

Code adapted from


Node.js Design Patterns:
Design and implement production-grade Node.js
applications using proven patterns and techniques

Mario Casciaro

Luciano Mammino