$(function() {
  var str, num, nid;
    str = location.href;
    num = str.indexOf("=");
    nid = str.substr(num + 1);
  document.title = $('.h-news_'+nid+' > .h-title').html();
  $('.h-news_'+nid).show().siblings().hide();
})