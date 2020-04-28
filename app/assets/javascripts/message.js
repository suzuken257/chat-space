$(function () {
  function buildHTML(message) {
    if (message.image) {
      var html = 
        `<div class="main-list">
          <div class="main_content">
            <div class="main_content__user_name">
              ${message.user_name}
            </div>
            <div class="main_content__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main_message"> 
            ${message.content}
            <img class="main_message__image", src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="main-list">
          <div class="main_content">
            <div class="main_content__user_name">
              ${message.user_name}
            </div>
            <div class="main_content__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main_message">
            ${message.content}
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('input').prop('disabled', false)
    })
    .fail(function(){
      alert('error')
      $('input').prop('disabled', false);
  })
  });
});