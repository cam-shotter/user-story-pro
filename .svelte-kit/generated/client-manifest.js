export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')];

export const server_loads = [];

export const dictionary = {
	"/": [3],
	"/about": [4],
	"/products": [5,[2]],
	"/products/product": [6,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};