module.exports = function(options) {
  options = options || {};
  if (options.match && options.ignore) {
    throw new Error('options.match and options.ignore can not both present');
  }
  if (!options.match && !options.ignore) {
    return () => true;
  }

  const pathToRegexpModule = options.pathToRegexpModule || require('path-to-regexp');
  const pathToRegexp = pathToRegexpModule.pathToRegexp || pathToRegexpModule;
  const matchFn = options.match ?
    toPathMatch(options.match, pathToRegexp) : toPathMatch(options.ignore, pathToRegexp);

  return function pathMatch(ctx) {
    const matched = matchFn(ctx);
    return options.match ? matched : !matched;
  };
};

function toPathMatch(pattern, pathToRegexp) {
  if (typeof pattern === 'string') {
    let reg = pathToRegexp(pattern, [], { end: false });
    if (reg.regexp) {
      // support path-to-regexp@8
      // => const { regexp, keys } = pathToRegexp("/foo/:bar");
      reg = reg.regexp;
    }
    if (reg.global) {
      reg.lastIndex = 0;
    }
    return ctx => reg.test(ctx.path);
  }

  if (pattern instanceof RegExp) {
    return ctx => {
      if (pattern.global) {
        pattern.lastIndex = 0;
      }
      return pattern.test(ctx.path);
    };
  }

  if (typeof pattern === 'function') {
    return pattern;
  }

  if (Array.isArray(pattern)) {
    const matchs = pattern.map(item => toPathMatch(item, pathToRegexp));
    return ctx => matchs.some(match => match(ctx));
  }

  throw new Error('match/ignore pattern must be RegExp, Array or String, but got ' + pattern);
}
