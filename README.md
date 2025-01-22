# egg-path-matching

[![NPM version][npm-image]][npm-url]
[![CI](https://github.com/eggjs/egg-path-matching/actions/workflows/nodejs-1.x.yml/badge.svg)](https://github.com/eggjs/egg-path-matching/actions/workflows/nodejs-1.x.yml)
[![Test coverage](https://img.shields.io/codecov/c/github/eggjs/egg-path-matching.svg?style=flat-square)](https://codecov.io/gh/eggjs/egg-path-matching)
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![Node.js Version](https://img.shields.io/node/v/egg-path-matching.svg?style=flat)](https://nodejs.org/en/download/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/eggjs/egg-path-matching)

[npm-image]: https://img.shields.io/npm/v/egg-path-matching.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-path-matching
[snyk-image]: https://snyk.io/test/npm/egg-path-matching/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-path-matching
[download-image]: https://img.shields.io/npm/dm/egg-path-matching.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-path-matching

## Installation

```bash
npm install egg-path-matching@1
```

## Usage

```js
const pathMatching = require('egg-path-matching');
const options = {
  ignore: '/api', // string will use parsed by path-to-regexp
  // support regexp
  ignore: /^\/api/,
  // support function
  ignore: ctx => ctx.path.startsWith('/api'),
  // support Array
  ignore: [ ctx => ctx.path.startsWith('/api'), /^\/foo$/, '/bar'],
  // support match or ignore
  match: '/api',
  // custom path-to-regexp module, default is `path-to-regexp@1`
  // pathToRegexpModule: require('path-to-regexp'),
};

const match = pathMatching(options);
assert(match({ path: '/api' }) === true);
assert(match({ path: '/api/hello' }) === true);
assert(match({ path: '/api' }) === true);
```

### options

- `match` {String | RegExp | Function | Array} - if request path hit `options.match`, will return true, otherwise will return false.
- `ignore` {String | RegExp | Function | Array} - if request path hit `options.ignore`, will return false, otherwise will return true.

`ignore` and `match` can not both be presented. and if neither `ignore` nor `match` presented, the new function will always return true.

### License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=eggjs/egg-path-matching)](https://github.com/eggjs/egg-path-matching/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
