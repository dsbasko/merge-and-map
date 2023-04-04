/**
 * This function is used to merge two arrays of objects and map them to a new array of objects.
 * @name mergeAndMap
 * @param arr1 - the first array to be merged
 * @param arr2 - the second array to be merged
 * @param fields - the fields to be used as keys for the merge
 * @param tpl - the function to be used to map the merged items
 * @returns The merged array of objects after mapping
 */
export const mergeAndMap = <Arr1, Arr2, Res>(
	arr1: Arr1[],
	arr2: Arr2[],
	fields: [keyof Arr1, keyof Arr2],
	tpl: (_ar1: Arr1, _ar2: Arr2) => Res | null,
): Res[] => {
	const subArrHash = new Map();
	arr2.forEach((item) => {
		subArrHash.set(item[fields[1]], item);
	});
	return arr1.map((item) => {
		const subItem = subArrHash.get(item[fields[0]]);
		return subItem ? tpl(item, subItem) : null;
	}).filter((item) => item) as Res[];
};
