//  function sizeMatr(szPx) {
//      var per = (szPx / 750).toFixed(4);
//      var domW = document.querySelector("section").clientWidth;
//      var sizePx = domW * per;
//      return sizePx;
//  }
//  //顶端流量使用情况 环形进度图
//  //流量满就送
//  function toCanvas1(id, progress) {
//      var canvas = document.getElementById(id);
//      canvas.width = sizeMatr(540);
//      canvas.height = sizeMatr(1300);
//      var ctx = canvas.getContext("2d"),
//          percent = progress,
//          circleX = canvas.width / 2,
//          circleY = sizeMatr(280),
//          radius = sizeMatr(255),
//          lineWidth = sizeMatr(15); //圆形线条的宽度
//      function smallcircle2(cx, cy, r) {
//          ctx.beginPath();
//          ctx.lineWidth = 1;
//          ctx.fillStyle = '#f00';
//          ctx.arc(cx, cy, r, 0, Math.PI * 2);
//          ctx.fill();
//      }
//      //画圆
//      function circle(cx, cy, r) {
//          ctx.beginPath();
//          ctx.lineWidth = lineWidth;
//          ctx.strokeStyle = '#e8fbfe';
//          ctx.arc(cx, cy, r, 1 * Math.PI, 2 * Math.PI);
//          ctx.stroke();
//      }

//      function sector(cx, cy, r, startAngle, endAngle, anti) {
//          ctx.beginPath();
//          ctx.lineWidth = lineWidth;
//          ctx.strokeStyle = "#000";
//          ctx.lineCap = 'round';
//          console.log(endAngle);
//          ctx.arc(cx, cy, r, 1 * Math.PI, (1 + endAngle / 100) * Math.PI, false);
//          ctx.stroke();
//      }
//      //清除锯齿
//      if (window.devicePixelRatio) {
//          canvas.style.width = canvas.width + "px";
//          canvas.style.height = canvas.height + "px";
//          canvas.height = canvas.height * window.devicePixelRatio;
//          canvas.width = canvas.width * window.devicePixelRatio;
//          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//      }
//      //刷新
//      function loading() {
//          if (process >= percent) {
//              clearInterval(circleLoading);
//          }
//          ctx.clearRect(0, 0, circleX * 2, circleY * 2);
//          circle(circleX, circleY, radius);
//          sector(circleX, circleY, radius, Math.PI * 2 / 3, process);
//          smallcircle2(circleX - 10 + Math.cos(2 * Math.PI / 360 * (radius + process)) * radius, circleY + Math.sin(2 * Math.PI / 360 * (radius + process)) * radius, sizeMatr(15));
//          if (process / percent > 0.90) {
//              process += 0.30;
//          } else if (process / percent > 0.80) {
//              process += 0.55;
//          } else if (process / percent > 0.70) {
//              process += 0.75;
//          } else {
//              process += 1.0;
//          }
//      }
//      var process = 0.0;
//      var circleLoading = window.setInterval(function() {
//          loading();
//      }, 20);
//  }
//  toCanvas1('progressBar', 90);
//  $(".btmNavList li").click(function() {
//      var index = $(this).index();
//      $(this).addClass("activeLi").siblings().removeClass("activeLi");
//      $(".btmListBox li").eq(index).addClass("onShow").siblings().removeClass("onShow");
//  });

var img1=document.getElementById('img1')
var img2=document.getElementById('img2')
var can=document.getElementById('canvas')
var ctx=can.getContext('2d');
ctx.drawImage(img1, 0, 0, 50, 50);
ctx.drawImage(img2, 50, 0, 50, 50);
var img=new Image();
var exportImg = can.toDataURL("image/png", 1);
img.src=exportImg
document.getElementById('body').append(img)

