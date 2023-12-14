egg-path-matching
---------------

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: https://img.shields.io/npm/v/egg-path-matching.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-path-matching
[travis-image]: https://img.shields.io/travis/eggjs/egg-path-matching.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-path-matching
[coveralls-image]: https://img.shields.io/coveralls/eggjs/egg-path-matching.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/eggjs/egg-path-matching?branch=master

## Installation

```bash
$ npm install egg-path-matching
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