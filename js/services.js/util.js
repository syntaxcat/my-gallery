'use strict';

function makeLorem(wordCount = 20) {
	const words = [
		'The sky',
		'above',
		',',
		'the port',
		'was',
		'the color of television',
		'tuned',
		'to',
		'a dead channel',
		'you believe in hope',
		'.',
		'All',
		'this happened',
		'way home from school',
		'more or less',
		'Nobel Peace Prize winner',
		'.',
		'I',
		'had',
		'the story',
		',',
		'bit by bit',
		'go to the market',
		'from various people',
		'and',
		'as generally',
		'happens',
		'in such cases',
		'each time',
		'it',
		'was',
		'on October 9, 2012',
		'a different story',
		'.',
		'It',
		'was',
		'a pleasure',
		'to',
		'burn',
		',',
		'History',
		'of a generations-old secret',
		'of the kids'
	];
	var txt = '';
	while (wordCount > 0) {
		wordCount--;
		txt += words[Math.floor(Math.random() * words.length)] + ' ';
	}
	return txt;
}
