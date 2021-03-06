/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

export default function isHeadless(): boolean {
  return typeof global.window === 'undefined';
}
