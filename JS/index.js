$(document).ready(function(){
$("#query_box_send").click(function (da) {
  $.ajax({
          url: "http://127.0.0.1:8080/query",
        dataType: 'json',
        method: "POST",
        data: { key:$("#query_box").val() }
        })
        .done(function(Data) {
        $("#chat_side_bot").html(Data.key);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          alert(textStatus);
        });
});
});
