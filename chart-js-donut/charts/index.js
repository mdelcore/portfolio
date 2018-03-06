var donutEl = document.getElementById("donut").getContext("2d");
var donut = new Chart(donutEl).Doughnut(
	// Datas
	[
		{
			value: 350,
			color:"#46BFBD",
			highlight: "#FF5A5E",
			label: "Green"
		},
		// {
		// 	value: 50,
		// 	color: "#46BFBD",
		// 	highlight: "#5AD3D1",
		// 	label: "Green"
		// },
		{
			value: 9,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		}
	],
	// Options
	{
		segmentShowStroke : true,
		segmentStrokeColor : "#fff",
		segmentStrokeWidth : .25,
		percentageInnerCutout : 80,
		animationSteps : 100,
		animationEasing : "easeOutCirc",
		animateRotate : true,
		animateScale : false,
		responsive: true,
		maintainAspectRatio: true,
		showScale: true,
		animateScale: true
	});