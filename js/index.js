 console.log(window.innerHeight,'window.innerHeight')
 // 页面加载完成后再初始化swiper
 var mySwiper = new Swiper ('.swiper-container', {
   autoHeight: true,
  direction: 'vertical', // 垂直切换选项
  speed: 1000, // 速度
  width: window.innerWidth,
  height: window.innerHeight,
  mousewheelControl : true,
  mousewheel: true,
  releaseOnEdges: true, // Swiper处于边缘位置时（第一个或最后一个slide），Swiper释放鼠标滚轮事件，鼠标可以控制页面滚动
   on:{
      slideChange: function() {
         scrollFun(this.activeIndex);
      }
   },
  mousewheelControl : true, // 鼠标滚轮控制slide滑动
  mousewheelForceToAxis: true, // 鼠标滚轮固定于轴向 垂直或者水平
  paginationClickable: true, // 分页器
  clickable :true,
  pagination: { 
     el: '.swiper-pagination',
  },
  loop: false, // 循环模式选项
}) 
// 分页器点击事件
$(".swiper-pagination").on("click","span",function(){
   var index = $(this).index();
   scrollFun(index);
   mySwiper.slideTo(index);
})
// 显示隐藏菜单
$('.h-nav').click(function() {
   $('.h-menu').show()
})
$('.h-menu').click(function() {
   $('.h-menu').hide()
})

// 滚轮事件
function scrollFun(activeIndex) {
   document.title = ['融易科技官网', '融易科技-技术成就', '融易科技-产品服务', '融易科技-业内新闻', '融易科技-公司动态', '融易科技-人才招聘'][activeIndex];
   activeIndex === 3 || activeIndex === 5 ? ($('.h-contact').css('color','#7A2ACC')) : ($('.h-contact').css('color','#fff')); 
   if(activeIndex === 1) {
      var pList = $('.h-pageTwo_main > p');
      pList.each(function(i) {
         // pList.eq(i).css('animation',"circleAni .5s linear "+0.3+0.5*i+"s forwards");
         // pList.eq(i).find('.lineY').css('animation', "lineAniY .3s linear "+0.8+0.3*i+"s forwards");
         // pList.eq(i).find('.lineX').css('animation', "lineAniX .3s linear "+1.1+0.3*i+"s forwards");
         // pList.eq(i).find('.h-sTitle').css('animation', "titleAni .3s linear "+1.4+0.3*i+"s forwards");
         // pList.eq(i).find('.h-sIntro').css('animation', "titleAni .3s linear "+1.7+0.3*i+"s forwards");
         switch(i) {
            case 0: 
               $(this).css('animation',"circleAni .5s linear 0.3s forwards");
               $(this).find('.lineY').css('animation', "lineAniY .3s linear 0.8s forwards");
               $(this).find('.lineX').css('animation', "lineAniX .3s linear 1.1s forwards");
               $(this).find('.h-sTitle').css('animation', "titleAni .3s linear 1.4s forwards");
               $(this).find('.h-sIntro').css('animation', "titleAni .3s linear 1.7s forwards");
               break;
            case 1:
               $(this).css('animation', "circleAni .5s linear 0.8s forwards");
               $(this).find('.lineY').css('animation', "lineAniY .3s linear 1s forwards");
               $(this).find('.lineX').css('animation', "lineAniX .3s linear 1.4s forwards");
               $(this).find('.h-sTitle').css('animation', "titleAni .3s linear 1.7s forwards");
               $(this).find('.h-sIntro').css('animation', "titleAni .3s linear 2s forwards");
               break;
            case 2:
               $(this).css('animation', "circleAni .5s linear 1.2s forwards");
               $(this).find('.lineY').css('animation', "lineAniY .3s linear 1.5s forwards");
               $(this).find('.lineX').css('animation', "lineAniX .3s linear 1.8s forwards");
               $(this).find('.h-sTitle').css('animation', "titleAni .3s linear 2.1s forwards");
               $(this).find('.h-sIntro').css('animation', "titleAni .3s linear 2.4s forwards");
               break;
            case 3:
               $(this).css('animation', "circleAni .5s linear 1.5s forwards");
               $(this).find('.lineY').css('animation', "lineAniY .3s linear 1.8s forwards");
               $(this).find('.lineX').css('animation', "lineAniX .3s linear 2.1s forwards");
               $(this).find('.h-sTitle').css('animation', "titleAni .3s linear 2.4s forwards");
               $(this).find('.h-sIntro').css('animation', "titleAni .3s linear 2.7s forwards");
         }
      })
   } else {
      setTimeout(function() {
         $('.h-pageTwo_main > p').css('animation', "circleBackAni .3s linear forwards");
         $('.h-pageTwo_main > p').find('.lineY').css('animation', "lineBackAniY .3s linear forwards");
         $('.h-pageTwo_main > p').find('.lineX').css('animation', "lineBackAniX .3s linear forwards");
         $('.h-pageTwo_main > p').find('.h-sTitle').css('animation', "titleBackAni .3s linear forwards");
         $('.h-pageTwo_main > p').find('.h-sIntro').css('animation', "titleBackAni .3s linear forwards");
      }, 1000)
   }
   // 分页指示器以及中英文按钮样式
   if(activeIndex % 2 !==0) {
      $('.swiper-pagination-bullet').css('border-color', 'rgb(146, 48, 157)');
      $('.swiper-pagination-bullet-active').css('background-color', 'rgb(146, 48, 157)');
      $('.h-nav>img').attr('src', "images/index/iconpurse.png");
   } else {
      $('.swiper-pagination-bullet').css('border-color', '#fff');
      $('.swiper-pagination-bullet-active').css('background-color', '#fff');
      $('.h-nav>img').attr('src', "images/index/icon.png");
   }
}

// 菜单跳转
function scrollWindow(index) {
   mySwiper.slideTo(index);
   scrollFun(index);
}

$(".h-article").click(function() {
   var index = $(this).index();
   window.open('news.html?nid='+ (index+1))
})
