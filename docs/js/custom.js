var imga = new Image();
imga.src = 'http://k.zol-img.com.cn/diybbs/7252/a7251872_1000.jpg';
function changeback() {
  var bkchanging = false;
  if (navigator.platform.indexOf('arm') != -1 || navigator.platform.indexOf('android') != -1 || navigator.platform.indexOf('Phone') != -1 || navigator.platform.indexOf('BlackBerry') != -1 || navigator.platform.indexOf('Mobile') != -1 || navigator.platform.indexOf('iPad') != -1 || navigator.platform.indexOf('iPod') != -1 || navigator.platform.indexOf('iPhone') != -1) {
    return;
  }
  if (bkchanging)  return;
  bkchanging = true;

  var $main = document.getElementById("main");
  var $loading = document.getElementById('loading')
  $loading.style.left = (0 - Math.random() * 70) + '%'

  bgurl = 'http://www.ruanyifeng.com/images_pub/pub_' + (Math.round(Math.random() * 100) + 1) + '.jpg';

  var imgb = new Image();
  imgb.onload = function () {
    if (!(imgb.height > 0 && imgb.width > 0)) {
      alert('背景图片加载出错');
      return;
    }
    
    $loading.style.left = (0 - Math.random() * 30) + '%'
    var imag1 = document.getElementById('imag1');
    var imag1s = document.getElementById('imag1s');
    var imag2 = document.getElementById('imag2');
    var imag2s = document.getElementById('imag2s');

    var wwidth = document.documentElement.clientWidth;
    var wheight = document.documentElement.clientHeight;
    var wrate = wheight / wwidth;

    var iwidth = imgb.width;
    var iheight = iwidth * wrate;
    var wtheight = (wwidth / iwidth) * imgb.height;
    var itop = (wtheight - wheight) / 2;

    imag2s.style.display = "block";
    iwidth = imga.width;
    iheight = iwidth * wrate;
    wtheight = (wwidth / iwidth) * imga.height;
    itop = (wtheight - wheight) / 2;

    imag1.src = imgb.src;
    imag2.src = imga.src;

    imag1s.style.width = wwidth * 2 + 'px';
    imag2s.style.width = wwidth * 2 + 'px';

    imag1s.style.height = wheight + 'px';
    imag2s.style.height = wheight + 'px';

    imag1.style.top = -itop + 'px';
    imag2.style.top = -itop + 'px';

    imag1.style.width = wwidth + 'px';
    imag2.style.width = wwidth + 'px';
    
    imag1s.style.right = -wwidth + 'px';
    imag2s.style.left  = -wwidth + 'px';
    
    imag1.style.height = wheight + 'px';
    imag2.style.height = wheight + 'px';

    imag2s.style.animation = "gone 1.5s";
    
    setTimeout(function () {
      imag2s.style.display = "none";
      imag2s.style.animation = "none";
    }, 1300);
    
    $main.style.backgroundImage = "none";

    setTimeout(function () {
      imag1s.style.display = "block";
      imag1s.style.animation = "enter 1.5s";

      setTimeout(function () {
        $main.style.backgroundImage = 'url(' + imgb.src + ')';
        imag1s.style.display = "none";
        imag1s.style.animation = "none";
        imga = imgb;
        $loading.style.left = 0;
        $loading.style.left = '-100%';
        bkchanging = false;
      }, 1500);
    }, 200);
  };
  imgb.onerror = function () {
    alert('背景图片加载出错');
  };
  imgb.src = bgurl;
}