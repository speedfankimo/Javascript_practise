$(document).ready(function() {
	'use strict';
	//安裝Paper.js
	paper.install(window);
	//指派Paper.js to canvas
	paper.setup(document.getElementById('mainCanvas'))

	////增加單一圓圈
	// var c = Shape.Circle(200, 200 ,100); // (x , y, radius)
	// c.fillColor = 'green';

	// ////增加迴圈的圓圈
	// var c ;
	// for (var x =25; x<400 ; x+=50){
	// 	for (var y =25 ; y<400 ; y+=50){
	// 		c=Shape.Circle(x,y,25);
	// 		c.fillColor ='red'
	// 	}
	// }

	////處理輸入者資訊畫圓
	var tool = new Tool();

	tool.onMouseDown = function(event) {
		var c =Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'red';
	}

	paper.view.draw();
});


