# Nativefier tools

Wrapper build script for projects using [Nativefier](https://github.com/jiahaog/nativefier).

## Installation

```sh
npm install --save-dev nativefier-tools
```

## Usage

In your project, create a script file that you can execute with Node. You can import this library and use the build command to execute Nativefier.

The build command accepts the [Nativefier config](https://github.com/jiahaog/nativefier/blob/master/docs/api.md#programmatic-api) as a parameter:

```js
const nativefierTools = require('./nativefier-tools')

nativefierTools.build({

  // Nativefier config here
  name: 'MyApp',
  // ...

  // Extra options
  appVersion, // Default: 1.0.0
  filenameSuffix: ' Foo' // Optional
})
```
