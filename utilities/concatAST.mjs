/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import flatMap from '../polyfills/flatMap';

/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
export function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: flatMap(asts, function (ast) {
      return ast.definitions;
    })
  };
}