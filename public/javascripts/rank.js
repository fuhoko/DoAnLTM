$(document).ready(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const loc = searchParams.get('location')
  const sbj = searchParams.get('subject')
  $('select[name="location"]').val(loc || 'All')
  $('select[name="subject"]').val(sbj || 'toan')
  $('select').change(() => {
    const location = $('select[name="location"] option:checked').val();
    const subject = $('select[name="subject"] option:checked').val();
    $('#body-table-rank').empty();
    $.ajax({
      type: 'post',
      url: '/rankedScore',
      data: {
        location,
        subject
      },
      success: (result) => {
        if (result) {
          result.forEach((item, index) => {
            $('#body-table-rank').append(`<tr id="row-${index}"></tr>`)
            $(`#row-${index}`).append(`<th scope="row">${index + 1}</th>`);
            for (let j in item) {
              $(`#row-${index}`).append('<th scope="row">' + item[j] + '</th>');
            }
          });
        }
        history.replaceState('', '', `/rank?location=${location}&subject=${subject}`)
      }
    });
  })
})