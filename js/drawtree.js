// h- height of a tree

function drawtree(h){
	for(i = 1; i <= h; i++){
		var star = "";
		for(j = 1; j <= i; j++){
			star += "*";
		}
		console.log(star);
	}
}

drawtree(5);

// another version 

function drawtree1(h){
	for(i = 0; i < h; i++){
		var star = "";
		for(j = 1; j <= (2 * h - 1) / 2 - i; j++)
		{
			star += " ";
		}
		star += "*";
		for(k = 1; k <= i; k++)
		{
			star += " *";
		}
		console.log(star);
	}

}

drawtree1(5);