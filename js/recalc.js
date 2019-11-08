//JS动态适配,修改html的font-size,
  // resizeEvt是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。这里是判断窗口有没有orientationchange这个方法，有就返回orientationchange，没有就返回resize
  // clientWidth 获取整个窗口的宽度
  //win.addEventListener(resizeEvt, recalc, false); 绑定浏览器缩放与加载时间
  // doc.addEventListener(‘DOMContentLoaded’, recalc, false)当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
  (function(doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', 
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        if(clientWidth > 1920) clientWidth = 1920;
        if(clientWidth < 1200) clientWidth = 1200;
        docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px';
      };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);