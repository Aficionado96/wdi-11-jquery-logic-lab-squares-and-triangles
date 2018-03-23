

//1

let red,black;

red = 'rgb(255,0,0)';

black = 'rgb(0,0,0)';



const generateDivs = (color)=>{
	let $div = $('<div>').css({
		'background-color':color,
		'height':'30px',
		'width':'30px'
	}).addClass('line')
	
	$div.appendTo($('body'))

	
}

for(let i = 0; i < 8; i ++){

	//creates squares
	for(let j = 1; j <= 4; j++){
	generateDivs(red);
	generateDivs(black);
	
	}
	//creates rows
	$('<div>').appendTo($('body'))
	
}





