 
    // Doughnut Chart
    var doughnutData = {
      labels: ['Points', 'Assists', 'Rebounds'],
      datasets: [{
        data: [26.4, 8.3, 10.8],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    var doughnutOptions = {
      responsive: true
    };

    var doughnutChart = new Chart(document.getElementById('doughnutChart'), {
      type: 'doughnut',
      data: doughnutData,
      options: doughnutOptions
    });

    // Bar Chart
    var barData = {
      labels: ['Steals', 'Blocks'],
      datasets: [{
        label: 'Nikola Jokić',
        data: [1.3, 0.6],
        backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(153, 102, 255, 0.5)'],
        borderColor: ['rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1
      }]
    };

    var barOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    var barChart = new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: barData,
      options: barOptions
    })