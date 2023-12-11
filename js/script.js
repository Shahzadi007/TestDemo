const xValues1 = [];
const yValues1= [];
const xValues2 = [];
const yValues2 = [];
const xValues3 = [];
const yValues3 = [];

// generateData1("x * 2 + 7", 0, 10, 0.5);
// generateData2("x * 2 + 6", 0, 10, 0.5);
generateData1("x * 2 + getRandom(0, 5)", 0, 10, 0.5);
generateData2("x * 2 + getRandom(0, 2)", 0, 10, 0.5);
generateData3("x * 2 + 6", 0, 10, 0.5);

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgb(25, 135, 84)", // Set the line color
      data: yValues1
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Bulk Gift Graph",
      fontSize: 16
    }
  }
});

new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues2,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgb(32, 111, 230)",
        data: yValues2
      }]
    },    
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Gift Card Sales",
        fontSize: 16
      }
    }
  });

  new Chart("myChart3", {
    type: "line",
    data: {
      labels: xValues3,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgb(220, 53, 69)",
        data: yValues3
      }]
    },    
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Sold Gift Cards",
        fontSize: 16
      }
    }
  });



function generateData1(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    xValues1.push(x);
    yValues1.push(eval(value));
  }
  
}
function generateData2(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      xValues2.push(x);
      yValues2.push(eval(value));
    }
    
  }
 function generateData3(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        xValues3.push(x);
        yValues3.push(eval(value));
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
    