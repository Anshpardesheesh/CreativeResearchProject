let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Instagram 🍕', 'Snapchat 🌮', 'Facebook 🌭', 'Spotify 🍣','WhatsApp','Twitter','LinkedIn','TikTok','YouTube'];
let colorHex = ['#E1306C', '#FFFC00', '#4267B2', '#1DB954','#25D366','#ffffff','#0077B5','#000000','#E50914'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [26.6, 1.6, 3.1, 7.8, 40.6, 3.9, 1.6, 2.3, 12.5],
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