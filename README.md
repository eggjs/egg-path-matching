# egg-path-matching

[![NPM version][npm-image]][npm-url]
[![CI](https://github.com/eggjs/egg-path-matching/actions/workflows/nodejs-1.x.yml/badge.svg)](https://github.com/eggjs/egg-path-matching/actions/workflows/nodejs-1.x.yml)
[![Test coverage](https://img.shields.io/codecov/c/github/eggjs/egg-path-matching.svg?style=flat-square)](https://codecov.io/gh/eggjs/egg-path-matching)
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

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

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/985607?v=4" width="100px;"/><br/><sub><b>dead-horse</b></sub>](https://github.com/dead-horse)<br/>|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/7903541?v=4" width="100px;"/><br/><sub><b>releasethecow</b></sub>](https://github.com/releasethecow)<br/>|[<img src="https://avatars.githubusercontent.com/u/227713?v=4" width="100px;"/><br/><sub><b>atian25</b></sub>](https://github.com/atian25)<br/>|[<img src="https://avatars.githubusercontent.com/u/5102113?v=4" width="100px;"/><br/><sub><b>xyeric</b></sub>](https://github.com/xyeric)<br/>|
| :---: | :---: | :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Thu Dec 14 2023 17:20:14 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
