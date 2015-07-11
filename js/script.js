var lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [165, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 50]
    }
  ]
};

var barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

var radarData = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

var polarData = [
  {
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  },
  {
    value: 40,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Grey"
  },
  {
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
  }
];

var pieData = [
  {
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  }
]

var overlayData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    type: "line",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 4, 81, 56, 55, 40]
  }, {
    label: "My First dataset",
    type: "bar",
    fillColor: "rgba(220,20,220,0.2)",
    strokeColor: "rgba(220,20,220,1)",
    pointColor: "rgba(220,20,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [32, 25, 33, 88, 12, 92, 33]
  }]
};

var multiOverlayData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    type: "line",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 4, 81, 56, 55, 40]
  }, {
    label: "My First dataset",
    type: "bar",
    fillColor: "rgba(220,20,220,0.2)",
    strokeColor: "rgba(220,20,220,1)",
    pointColor: "rgba(220,20,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [32, 25, 33, 88, 12, 92, 33]
  }, {
    label: "My First dataset",
    type: "line",
    fillColor: "rgba(20,20,220,0.2)",
    strokeColor: "rgba(20,20,220,1)",
    pointColor: "rgba(20,20,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [32, 25, 33, 88, 12, 92, 33]
  },{
    label: "My First dataset",
    type: "bar",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 4, 81, 56, 55, 40]
  }]
};

document.addEventListener("DOMContentLoaded", function() {

/*******************************************************************************
* charts
*******************************************************************************/

  var lineCtx = document.getElementById("lineChart").getContext("2d");
  var lineChart = new Chart(lineCtx).Line(lineData);

  var barCtx = document.getElementById("barChart").getContext("2d");
  var barChart = new Chart(barCtx).Bar(barData);

  var radarCtx = document.getElementById("radarChart").getContext("2d");
  var radarChart = new Chart(radarCtx).Radar(radarData);

  var polarCtx = document.getElementById("polarChart").getContext("2d");
  var polarChart = new Chart(polarCtx).PolarArea(polarData);

  var pieCtx = document.getElementById("pieChart").getContext("2d");
  var pieChart = new Chart(pieCtx).Pie(pieData);

  var doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
  var doughnutChart = new Chart(doughnutCtx).Doughnut(pieData);

  var overlayCtx = document.getElementById("overlayChart").getContext("2d");
  var overlayChart = new Chart(overlayCtx).Overlay(overlayData);

  var multiOverlayCtx = document.getElementById("multiOverlayChart").getContext("2d");
  var multiOverlayChart = new Chart(multiOverlayCtx).Overlay(multiOverlayData);
})