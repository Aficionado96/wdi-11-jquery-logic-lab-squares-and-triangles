

//1

let red,black;

red = 'rgb(255,0,0)';

black = 'rgb(0,0,0)';



const generateDivs = (color,checkerboardId)=>{
	let $div = $('<div>').css({
		'background-color':color,
		'height':'30px',
		'width':'30px'
	}).addClass('line')
	
	$div.appendTo($(checkerboardId))

	
}

for(let i = 0; i < 8; i ++){
	 $('<div>').appendTo($('#checkerboard2'))
	//creates squares
	for(let j = 1; j <= 4; j++){
		generateDivs(red,'#checkerboard2');
		generateDivs(black,'#checkerboard2');
	
	}

	//creates rows
	// $row
	
}






//2

//we are going to use some methods and variables from previous problem





//GENErates row starting w red
const generateRedToBlack=()=>{ 
	for(let i = 1; i <= 4; i ++){
		generateDivs(red,'#checkerboard');
		generateDivs(black,'#checkerboard');
	}


}	

//gens a row starting w black
const generateBlackToRed = ()=>{
	for(let i = 1; i <= 4; i ++){
		generateDivs(black,'#checkerboard');	
		generateDivs(red,'#checkerboard');
		
	}
}


// 4 times: 1 red-black, 1 black-red
for(let i = 0; i < 4; i ++){
	
	generateRedToBlack();

	$('<div>').addClass('noSpace').appendTo($('#checkerboard'));

	generateBlackToRed();

	$('<div>').addClass('noSpace').appendTo($('#checkerboard'))
}





//3
//Bonus













