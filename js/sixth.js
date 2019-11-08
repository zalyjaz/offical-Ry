$(function(){
    $('#featured-area ul').roundabout({
        easing: 'easeOutInCirc',
        duration: 600, // 运动速度                               
        minOpacity: 0.4, //最小的透明度              
        maxOpacity: 1, //最大的透明度                
        btnPrev:$(".topPre"),
        btnNext:$(".topNext"),        
    });

   // 微博点击跳转
   $('.weibo').click(function(){
       window.open('https://weibo.com/u/7270827580');
   });
   // 鼠标经过
   $('.weibo').mouseover(function(){
       $(this).find('img').attr('src','./images/sixth/weiboHover.png');
       $(this).find('span').css('text-decoration','underline');
   });
   $('.weibo').mouseout(function(){
       $(this).find('img').attr('src','./images/sixth/weibo.png');
       $(this).find('span').css('text-decoration','none');
   });
   // 微信鼠标事件
   $('.wechat').mouseover(function(){
       $(this).find('img').attr('src','./images/sixth/wechatHover.png');
       $(this).find('span').css('text-decoration','underline');
       $('.qrCode').css('display','block');
   });
   $('.wechat').mouseout(function(){
       $(this).find('img').attr('src','./images/sixth/wechat.png');
       $(this).find('span').css('text-decoration','none');
       $('.qrCode').css('display','none');
   });
});