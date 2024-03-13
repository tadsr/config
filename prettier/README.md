# prettier-config

Prettier configuration.

## Installation

```sh
npm install -D @tadsr/prettier-config
```

## Usage

Add a key in your **package.json** file:

```json
"prettier": "@tadsr/prettier-config"
```

Or create a **.prettierrc** file and export a string:

```
@tadsr/prettier-config
```

Or create a **prettier.config.js** file and export an object:

```js
module.exports = {
  ...require('@tadsr/prettier-config'),
  // Properties to be overwritten
};
```
