let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Instagram 🍕', 'Snapchat 🌮', 'Facebook 🌭', 'Spotify 🍣','WhatsApp','Twitter','LinkedIn','TikTok','YouTube'];
let colorHex = ['#E1306C', '#FFFC00', '#4267B2', '#1DB954','#25D366','#ffffff','#0077B5','#000000','#E50914'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [15.3, 1.1, 23.6, 5.9, 22.8, 8.8, 2.7, 5.4, 14.5],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})