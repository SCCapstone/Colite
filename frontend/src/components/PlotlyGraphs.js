
var plotly = require('plotly/index.js')('node-test-account', 'tpmz9ye8hg');
export const aVar = 'Vue';

export function chartjs (){
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart("myChart", {

    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

export function graphed(dataX, dataY) {
    var trace1 = {
        x: dataX,
        y: dataY,
        type: 'scatter'
    };
    var ploting = plotly.newPlot('grap3h',trace1);
    alert("graphed called");
    return 7;

}
export function alerter() {
    return alert("ayy")
}
export function foo(a,b) {
    return a*b;
}
export function layout() {
    var layout1 = {
        autosize: false,
        width: 500,
        height: 500,
        margin: {
          l: 50,
          r: 50,
          b: 100,
          t: 100,
          pad: 4
        },
        paper_bgcolor: '#7f7f7f',
        plot_bgcolor: '#c7c7c7'
      };
    return layout1;
}

