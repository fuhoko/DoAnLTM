$(document).ready(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const q = searchParams.get('sbd');
  $('input[name="sbd"]').val(q || '');
  if(q &&  $('#row-score').children().length == 0) {
    $('#container-error').append('<div class="mt-4 text-danger">Không tìm thấy thí sinh</div>')
  }

  $('#form-search').submit((e) => {
    e.preventDefault();
    const sbd = $('input[name="sbd"]').val().trim();
    $('#container-error').empty();
    $('#row-score').empty();
    $.ajax({
      type: 'post',
      url: '/searchScore',
      data: {
        sbd
      },
      success: (result) => {
        if (result) {
          for (let data in result) {
            $('#row-score').append('<th scope="row">' + result[data] + '</th>');
          }
        }
        else {
          $('#container-error').append('<div class="mt-4 text-danger">Không tìm thấy thí sinh</div>')
        };
      }
    });
    history.replaceState('', '', `/?sbd=${sbd}`)
  })
})