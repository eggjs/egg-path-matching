import { pathToRegexp } from 'path-to-regexp';

export type PathMatchingFun = (ctx: any) => boolean;

export type PathMatchingPattern = string | RegExp | PathMatchingFun | (string | RegExp | PathMatchingFun)[];

export interface PathMatchingOptions {
  ignore?: PathMatchingPattern;
  match?: PathMatchingPattern;
}

export function pathMatching(options: PathMatchingOptions): PathMatchingFun {
  options = options || {};
  if (options.match && options.ignore) {
    throw new Error('options.match and options.ignore can not both present');
  }
  if (!options.match && !options.ignore) {
    return () => true;
  }

  const matchFn = options.match ? toPathMatch(options.match) : toPathMatch(options.ignore!);

  return function pathMatch(ctx: any) {
    const matched = matchFn(ctx);
    return options.match ? matched : !matched;
  };
}

function toPathMatch(pattern: PathMatchingPattern): PathMatchingFun {
  if (typeof pattern === 'string') {
    const reg = pathToRegexp(pattern, [], { end: false });
    if (reg.global) reg.lastIndex = 0;
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
  if (typeof pattern === 'function') return pattern;
  if (Array.isArray(pattern)) {
    const matchFns = pattern.map(item => toPathMatch(item));
    return ctx => matchFns.some(matchFn => matchFn(ctx));
  }
  throw new Error(`match/ignore pattern must be RegExp, Array or String, but got ${pattern}`);
}
