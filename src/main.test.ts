// clear; yarn test
import { mergeAndMap } from './main';

const mockUser1 = { id: 1, firstName: 'Alice', departmentId: 1 };
const mockUser2 = { id: 2, firstName: 'Bob', departmentId: 2 };
const mockUser3 = { id: 3, firstName: 'Charlie', departmentId: 4 };
const mockUser4 = { id: 4, firstName: 'Diana', departmentId: 3 };
const mockUser5 = { id: 5, firstName: 'Eve', departmentId: 3 };

const mockDepartment1 = { id: 1, name: 'it', displayName: 'IT отдел', salary: 150000 };
const mockDepartment2 = { id: 2, name: 'sales', displayName: 'Отдел продаж', salary: 100000 };

describe('merge and map two arrays', () => {
	test('should correctly map and merge matching items from two arrays when both arrays have multiple items', () => {
		const result = mergeAndMap(
			[mockUser1, mockUser2],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(arr1, arr2) => ({ id: arr1.id, salary: arr2.salary }),
		);
		expect(result).toEqual([
			{ id: 1, salary: 150000 },
			{ id: 2, salary: 100000 },
		]);
	});

	test('should correctly map and merge matching items from two arrays', () => {
		const result = mergeAndMap(
			[mockUser1, mockUser2, mockUser3, mockUser4, mockUser5],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(arr1, arr2) => ({ id: arr1.id, salary: arr2.salary }),
		);
		expect(result).toEqual([
			{ id: 1, salary: 150000 },
			{ id: 2, salary: 100000 },
		]);
	});

	test('should correctly map and merge matching items from two arrays using a different template function', () => {
		const result = mergeAndMap(
			[mockUser1, mockUser2],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(arr1, arr2) => ({ name: arr1.firstName, displayName: arr2.displayName }),
		);
		expect(result).toEqual([
			{ name: 'Alice', displayName: 'IT отдел' },
			{ name: 'Bob', displayName: 'Отдел продаж' },
		]);
	});

	test('should return an empty array when there are no matches between the arrays', () => {
		const result = mergeAndMap(
			[mockUser3, mockUser4, mockUser5],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(arr1, arr2) => ({ id: arr1.id, salary: arr2.salary }),
		);
		expect(result).toEqual([]);
	});

	test('should return an empty array when the first array is empty', () => {
		const result = mergeAndMap(
			[],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(_, arr2) => ({ salary: arr2.salary }),
		);
		expect(result).toEqual([]);
	});

	test('should return an empty array when the second array is empty', () => {
		const result = mergeAndMap(
			[mockUser1, mockUser2],
			[],
			['departmentId', 'id'],
			(arr1, _) => ({ id: arr1.id }),
		);
		expect(result).toEqual([]);
	});

	test('should return an empty array when provided with empty arrays', () => {
		// @ts-ignore
		const result = mergeAndMap([], [], [], () => null);
		expect(result).toEqual([]);
	});

	test('should filter out null results from the tpl function', () => {
		const result = mergeAndMap(
			[mockUser1, mockUser2],
			[mockDepartment1, mockDepartment2],
			['departmentId', 'id'],
			(arr1, arr2) => (arr1.id === 1 ? null : { id: arr1.id, salary: arr2.salary }),
		);
		expect(result).toEqual([{ id: 2, salary: 100000 }]);
	});
});
