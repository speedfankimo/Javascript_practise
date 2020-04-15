$(document).ready(function() {
	'use strict';
	//安裝Paper.js
	paper.install(window);
	//指派Paper.js to canvas
	paper.setup(document.getElementById('mainCanvas'))

	////增加迴圈的圓圈
	var c ;
	for (var x =25; x<400 ; x+=50){
		for (var y =25 ; y<400 ; y+=50){
			c=Shape.Circle (x,y,25);
			c.fillColor ='red';

		}
	}

	//增加單一圓圈
	 var c = Shape.Circle(200, 200 ,70); // (x , y, radius)
	 c.fillColor = 'blue';

	//增加字串
	 var text= new PointText(200,200);
	 text.justification ='center'
	 text.fillColor = 'white';
	 text.fontSize = 20;
	 text.content ='Hellow World'

	////處理輸入者資訊畫圓
	var tool = new Tool();

	tool.onMouseDown = function(event) {
		var c =Shape.Circle(event.point.x, event.point.y, 30);
		c.fillColor = 'orange';
	}

	paper.view.draw();
});


