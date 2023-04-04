## Install
```bash
npm i @dsbasko/merge-and-map
```
or

```bash
yarn add @dsbasko/merge-and-map
```

## Usage

The function `mergeAndMap` takes four arguments:

`arr1`: an array of objects that need to be merged with objects from arr2.

`arr2`: an array of objects to merge with objects from arr1.

`fields`: an array of two keys that indicate which fields in the objects from arr1 and arr2 should be used for merging.

`tpl`: a function that takes two arguments (an object from arr1 and an object from arr2) and returns a new object that will be added to the resulting array. If the tpl function returns null, the object will not be added to the resulting array.


The `mergeAndMap` function merges objects from the `arr1` and `arr2` arrays, using the values of the `fields[0]` and `fields[1]` fields as keys. If an object with the specified key is found in the `arr2` array, the `tpl` function is called with two arguments (an object from `arr1` and an object from `arr2`), and the result is added to the resulting array. If the object is not found or the `tpl` function returns `undefined`, the object is not added to the resulting array.

#### Example

```typescript
import { mergeAndMap } from '@dsbasko/merge-and-map';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
];

const info = [
  { userId: 1, address: '123 Main St' },
  { userId: 2, address: '456 Elm St' },
];

const result = mergeAndMap(users, info, ['id', 'userId'], (user, info) => ({
  ...user,
  address: info.address,
}));

console.log(result);
/*
[
  { id: 1, name: 'John', address: '123 Main St' },
  { id: 2, name: 'Alice', address: '456 Elm St' },
]
*/
```

In the example, we merge the `users` and `info` arrays using the `id` and `userId` fields. The `tpl` function merges objects by adding the `address` field to objects from `users` if the corresponding object is found in `info`. The result of the `mergeAndMap` function is an array of objects containing merged objects from `users` and `info`.

<br><br><br>

## Author

Dmitriy Basenko <dsbasko.it@gmail.com>, [GitHub](https://github.com/dsbasko/), [Twitter](https://twitter.com/dsbasko), [Telegram](https://t.me/dsbasko)