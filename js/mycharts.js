//Monthly Traffic Chart

var hourly = document.getElementById('hourly');
var daily = document.getElementById('daily');
var weekly = document.getElementById('weekly');
var monthly = document.getElementById('monthly');

var monthlyChart = document.getElementById("monthlyChart");
var myChart = new Chart(monthlyChart, {
    type: 'line',
    data: {
        datasets: [{
        	label: "traffic",
            data: [{
                x: 1360637200000, y: 750
            }, {
                x: 1365737300000, y: 500
            }, {
                x: 1368837600000, y: 1000
            }, {
                x: 1370937800000, y: 1100
            },	{
                x: 1372038200000, y: 1300
            },	{
                x: 1380138600000, y: 1200
            },	{
                x: 1385240000000, y: 1400
            },  {
                x: 1390345000000, y: 1800
            },  {
                x: 1399446000000, y: 1650
            },  {
                x: 1400549000000, y: 2000
            }],
        	fill: true,
        	lineTension: 0,
            backgroundColor: "#e2e3f6",
            borderColor: "#9c9ed0",
            borderWidth: 1
        }]
    },
    options: {
    	legend:{
           display:false
    	},
        scales: {
        	yAxes: [{
                ticks: {
                    max: 2000,
                    min: 0,
                    stepSize: 500
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                }
            }]
        }
    }
});

//Daily Traffic Chart

var dailyChart = document.getElementById("dailyChart");
var myChart = new Chart(dailyChart, {
    type: 'line',
    data: {
        datasets: [{
        	label: "traffic",
            data: [{
                x: 1400322500000, y: 1200
            }, {
                x: 1400425900000, y: 1680
            },	{
                x: 1400532900000, y: 1670
            },	{
                x: 1400648900000, y: 1400
            },	{
                x: 1400755900000, y: 1730
            },  {
                x: 1400965900000, y: 1800
            },  {
                x: 1401074900000, y: 1700
            },  {
                x: 1401289000000, y: 1900
            }],
        	fill: true,
        	lineTension: 0,
            backgroundColor: "#e2e3f6",
            borderColor: "#9c9ed0",
            borderWidth: 1
        }]
    },
    options: {
    	legend:{
           display:false
    	},
        scales: {
        	yAxes: [{
                ticks: {
                    max: 2000,
                    min: 0,
                    stepSize: 500
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }
    }
});

//Hourly Traffic Chart

var hourlyChart = document.getElementById("hourlyChart");
var myChart = new Chart(hourlyChart, {
    type: 'line',
    data: {
        datasets: [{
        	label: "traffic",
            data: [{
                x: 1400538500000, y: 1500
            }, {
                x: 1400542900000, y: 1680
            },	{
                x: 1400543900000, y: 1630
            },	{
                x: 1400548900000, y: 1600
            },	{
                x: 1400558900000, y: 1750
            },  {
                x: 1400565900000, y: 1800
            },  {
                x: 1400574900000, y: 1700
            },  {
                x: 1400578000000, y: 2000
            }],
        	fill: true,
        	lineTension: 0,
            backgroundColor: "#e2e3f6",
            borderColor: "#9c9ed0",
            borderWidth: 1
        }]
    },
    options: {
    	legend:{
           display:false
    	},
        scales: {
        	yAxes: [{
                ticks: {
                    max: 2000,
                    min: 0,
                    stepSize: 500
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        hour: 'MMM D, hA'
                    }
                }
            }]
        }
    }
});

//Weekly Traffic Chart

var weeklyChart = document.getElementById("weeklyChart");
var myChart = new Chart(weeklyChart, {
    type: 'line',
    data: {
        datasets: [{
        	label: "traffic",
            data: [{
                x: 1399922500000, y: 500
            }, {
                x: 1400425900000, y: 1680
            },	{
                x: 1400932900000, y: 670
            },	{
                x: 1401048900000, y: 1400
            },	{
                x: 1401255900000, y: 1730
            },  {
                x: 1401465900000, y: 1800
            },  {
                x: 1401874900000, y: 1700
            },  {
                x: 1402889000000, y: 1900
            }],
        	fill: true,
        	lineTension: 0,
            backgroundColor: "#e2e3f6",
            borderColor: "#9c9ed0",
            borderWidth: 1
        }]
    },
    options: {
    	legend:{
           display:false
    	},
        scales: {
        	yAxes: [{
                ticks: {
                    max: 2000,
                    min: 0,
                    stepSize: 500
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'week'
                }
            }]
        }
    }
});


//Start by showing monthly chart
monthlyChart.style.display = "block";
weeklyChart.style.display = "none";
dailyChart.style.display = "none";
hourlyChart.style.display = "none";

//Navigation Highlight
$('.traffic_nav li').click(function(){
	$('.traffic_nav li').removeClass('highlighted');
	$(this).addClass('highlighted');
});


//Display chart based on navigation menu
hourly.addEventListener('click', function(){
	monthlyChart.style.display = "none";
	weeklyChart.style.display = "none";
	dailyChart.style.display = "none";
	hourlyChart.style.display = "block";
});

daily.addEventListener('click', function(){
	monthlyChart.style.display = "none";
	weeklyChart.style.display = "none";
	dailyChart.style.display = "block";
	hourlyChart.style.display = "none";
});

weekly.addEventListener('click', function(){
	monthlyChart.style.display = "none";
	weeklyChart.style.display = "block";
	dailyChart.style.display = "none";
	hourlyChart.style.display = "none";
});

monthly.addEventListener('click', function(){
	monthlyChart.style.display = "block";
	weeklyChart.style.display = "none";
	dailyChart.style.display = "none";
	hourlyChart.style.display = "none";
});


// Traffic Bar Chart

var trafficBarChart = document.getElementById("trafficBarChart");
var myChart = new Chart(trafficBarChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 50, 150, 200, 160, 250, 100],
            backgroundColor: [
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf"
            ],
            hoverBackgroundColor: [
                "#e2e3f6",
                "#e2e3f6",
                "#e2e3f6",
                "#e2e3f6",
                "#e2e3f6",
                "#e2e3f6",
                "#e2e3f6"
            ]
        }]
    },
    options: {
    	legend:{
           display:false
    	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// Mobile Users Donut Chart

var mobileDonutChart = document.getElementById("mobileDonutChart");
var myDoughnutChart = new Chart(mobileDonutChart, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#7377bf",
                "#74b1bf",
                "#81c98f"
            ],
            hoverBackgroundColor: [
                "#e2e3f6",
                "#c8e7ee",
                "#c7f2d0"
            ]
        }]
	},
    animation:{
        animateScale:true
    }
});



