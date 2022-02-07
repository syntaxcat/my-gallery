'use strict';

var gProjs;

function getProjs() {
	return gProjs;
}

function activateCreateProjs() {
	_createProjs();
}

function _createProjs() {
	gProjs = [
		{
			id: 'tic-tac-toe',
			name: 'Tic Tac Toe',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/tic-tac-toe/',
			labels: []
		},
		{
			id: 'minesweeper',
			name: 'Mine Sweeper',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/MineSweeper/',
			labels: []
		},
		{
			id: 'book-shop',
			name: 'Book Shop',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/book-shop/',
			labels: []
		},
		{
			id: 'safe-content',
			name: 'Safe Content',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/safe-content/',
			labels: []
		},
		{
			id: 'proj-todo-mvc',
			name: 'Todo',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/proj-todo-mvc/',
			labels: []
		},
		{
			id: 'ex-touch-nums',
			name: 'Touch Nums',
			title: makeLorem(8),
			desc: makeLorem(8),
			url: 'https://syntaxcat.github.io/ex-touch-nums/',
			labels: []
		}
	];
}

function getProjById(id) {
	return gProjs.find((p) => p.id === id);
}
