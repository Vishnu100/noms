// This file was generated by nomdl/codegen.
// @flow
// eslint-disable max-len

import {
  Field as _Field,
  Package as _Package,
  Ref as _Ref,
  makeEnumType as _makeEnumType,
  makeStructType as _makeStructType,
  makeType as _makeType,
  registerPackage as _registerPackage,
} from "@attic/noms";
import type {
  Struct as _Struct,
} from "@attic/noms";
import * as dep from './sha1_eda4273.js';


{
  const pkg = new _Package([
    _makeEnumType('LocalE', 'LocalE1', 'Ignored'),
    _makeStructType('ImportUser',
      [
        new _Field('importedStruct', _makeType(_Ref.parse('sha1-eda4273cba9d5d4a1bccf41bcaec64743863cde0'), 0), false),
        new _Field('enum', _makeType(new _Ref(), 0), false),
      ],
      [

      ]
    ),
  ], [
    _Ref.parse('sha1-eda4273cba9d5d4a1bccf41bcaec64743863cde0'),
  ]);
  _registerPackage(pkg);
}


export type LocalE =
  0 |  // LocalE1
  1;  // Ignored

export interface ImportUser extends _Struct {
  importedStruct: dep.D;  // readonly
  setImportedStruct(value: dep.D): ImportUser;
  enum: LocalE;  // readonly
  setEnum(value: LocalE): ImportUser;
}