$(document).ready(() => {
  const searchParams = new URLSearchParams(window.location.search);
  let loc = searchParams.get('location')
  let sbj = searchParams.get('subject')
  if (loc === null) {
    loc = 'All',
    sbj = 'toan'
  }
  let chart
  $('select[name="location"]').val(loc || 'All')
  $('select[name="subject"]').val(sbj || 'toan')
  $.ajax({
    type: 'get',
    url: '/chart'
  })
  setChart(loc, sbj)
  $('select').change(() => {
    const location = $('select[name="location"] option:checked').val();
    const subject = $('select[name="subject"] option:checked').val();
    $('#body-table-rank').empty();
    setChart(location, subject)
    history.replaceState('', '', `/chart?location=${location}&subject=${subject}`)
  })

  function setChart(location, subject) {
    console.log(location, subject)
    $.ajax({
      type: 'post',
      url: '/scoreStatistics',
      data: {
        location,
        subject
      },
      success: (result) => {
        const ctx = $('#chart');
        result = result.filter(x => x.score != '')
        let labels = []
        let index = 0;
        let amount = [];
        if (['toan', 'ngoai_ngu'].indexOf(subject) != -1) {
          console.log('s')
          for (let i = 0; i <= 10; i = i + 0.2) {
            labels.push(Math.round(i * 10) / 10);
            index = result.findIndex(x => x.score == Math.round(i * 10) / 10)
            if (index != -1) {
              amount.push(result[index].amount)
            }
            else {
              amount.push(0)
            }
          }
        }
        else {
          for (let i = 0; i <= 10; i = i + 0.25) {
            labels.push(Math.round(i * 100) / 100);
            index = result.findIndex(x => x.score == Math.round(i * 100) / 100)
            if (index != -1) {
              amount.push(result[index].amount)
            }
            else {
              amount.push(0)
            }
          }
        }
        if (chart) {
          chart.destroy()
        }
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Số lượng',
              data: amount,
              backgroundColor: '#B75C00',
            }],
          },
        });
      }
    });
  }
})