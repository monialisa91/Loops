// h- height of a tree

function drawtree(h) {
	for(var i = 1; i <= h; i++) {
		var star = "";
		for(var j = 1; j <= i; j++) {
			star += "*";
		}
		console.log(star);
	}
}

drawtree(5);

// another version 

function drawtree1(h) {
	for(var i = 0; i < h; i++) {
		var star = "";
		var spaces = (2 * h - 1) / 2 - i;
		for(var j = 1; j <= spaces; j++) {
			star += " ";
		}
		star += "*";
		for(var k = 1; k <= i; k++) {
			star += " *";
		}
		console.log(star);
	}

}

drawtree1(5);