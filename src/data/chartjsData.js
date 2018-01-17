const donut = {
    labels: ["React", "Angular", "Vue", "Ember"],
    datasets: [{
        label: '# of Votes',
        data: [19, 12, 3, 5],
        legend: {
            labels: {
                fontColor: '#ffffff'
            }
        },
        defaultFontColor: "rgba(255,255,255,1)",
        backgroundColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.2)',
        ],
        borderWidth: 0
    }]
};

const bar = {
    labels: ["iPhone X", "Galaxy S8", "G6", "Pixel 2", "Mate 10"],
    datasets: [{
        label: '# of Votes',
        data: [1200, 1100, 700, 900, 500],
        backgroundColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.4)',
            'rgba(255, 255, 255, 0.2)'
        ],
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "#CCC", // this here
                }
            }]
        },
        borderWidth: 0
    }]
};

const line = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        label: '# of Occurences',
        data: [120, 150, 60, 110, 50],
        backgroundColor: [
            'rgba(255, 255, 255,.4)',
        ],
        borderColor: [
            'rgba(255,255,255,1)'
        ],
        borderWidth: 0
    }]
};

const pie = {
    labels: ["USA", "Germany", "UK", "France", "Canada"],
    datasets: [{
        label: 'Visitors by Country',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.1)'
        ],
        borderColor: [
            'rgba(255,255,255,1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 0
    }]
};

const radar =  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
        label: "2007",
        fill: true,
        backgroundColor: "rgba(255,255,255,.9)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,255,255,.8)",
        data: [39,45,47,38,50]
    }, {
        label: "2017",
        fill: true,
        backgroundColor: "rgba(255,255,255,.5)",
        borderColor: "rgba(255,255,255,.6)",
        pointBackgroundColor: "rgba(255,255,255,.5)",
        pointBorderColor: "#fff",
        data: [48,40,47,54,41]
    }]
};

const options = {
    scales: {
        xAxes: [{
            ticks: {
                fontColor: "rgba(255,255,255,.8)"
            }
        }],
            yAxes: [{
            ticks: {
                fontColor: "rgba(255,255,255,.8)",
                beginAtZero: true
            }
        }],
    }
};

export {donut, bar, line, pie, radar, options};