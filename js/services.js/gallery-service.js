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
		_createProj('ITS'),
		_createProj('TOO'),
		_createProj('LATE'),
		_createProj('TO'),
		_createProj('APOLOGIZE'),
		_createProj('!!!')
	];
	console.log(gProjs);
}

function _createProj(name) {
	const proj = {
		id: name.toLowerCase(),
		name,
		title: makeLorem(8),
		desc: makeLorem(8),
		url: 'projURL',
		publishedAt: 1448693940000,
		labels: [ 'Matrixes', 'keyboard events' ]
	};
	return proj;
}

function getProjById(id) {
	return gProjs.find((p) => p.id === id);
}
