$(document).ready(function(){
  var rusWord = $('#rusWord');
  var enWord = $('#enWord');

  enWord.on('keypress', function(e){
    if(e.keyCode == 13){
        render(enWord.val(), rusWord, "ru" );
    }
  });

  rusWord.on('keypress', function(e){
    if(e.keyCode == 13){
        render(rusWord.val(), enWord, "en" );
    }
  });
});

function render(selectedText, inputElem, lang){
  $.ajax({
        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140219T202649Z.14cf94ea5878dfac.c384fd8844422602dda22df054a4c64b073205dc&text="+selectedText+"&lang="+ lang +"&format=html&options=1",
        dataType: "json",
        success: function(response) {
          inputElem.val(response["text"]);
      }
  });
}
