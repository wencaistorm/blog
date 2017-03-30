(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
            '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
            '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
            '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
            '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });

  // 悬浮按钮
  window.onload = function() {
    $(".dark").on('click', function () {
      $("body").addClass("dark");
      $("#drager").removeClass("active")
    })
    var box = document.getElementById('drager');
    box.ondblclick = function () {
      $(this).addClass("active");
    }

    box.onmousedown = function(e) {
      e = e || window.event;
      var self = this;

      posX = e.clientX - self.offsetLeft;
      posY = e.clientY - self.offsetTop;

      // 禁止选中任何文本
      $('*').css({
        'user-select' : 'none',
        '-webkit-user-select' : 'none'
      });

      document.onmousemove = function(e) {
        e = e || window.event;
        var self = this;

        var X = document.documentElement.offsetWidth;
        var Y = document.documentElement.offsetHeight;
        var width = box.offsetWidth;
        var height = box.offsetHeight;

        var left = e.clientX - posX;
        var top = e.clientY - posY;

        if (left < 0) {
          left = 0;
        } else if (left > X - width) {
          left = X - width;
        }

        if (top < 0) {
          top = 0;
        } else if (top > Y - height) {
          top = Y - height;
        }

        box.style.left = left + "px";
        box.style.top = top + "px";
      };

      box.onclick = function (e) {
      };

      self.onmouseup = function() {
        document.onmousemove = null;
        document.onclick = null;

        var self = this;

        var width = self.offsetWidth;
        var height = self.offsetHeight;
        var X = document.documentElement.clientWidth;
        var Y = document.documentElement.clientHeight;

        var left = this.offsetLeft;
        var top = this.offsetTop;
        var right = X - width - left;
        var bottom = Y - height - top;

        var arr = [left, top, right, bottom];

        function numberorder(a, b) {
          return a - b;
        }
        var min = arr.sort(numberorder)[0];

        // 设置 right 或者 bottom，会与已有的 left 或者 top冲突，导致无效
        switch (min) {
          case left:
            self.style.left = "0px";
            break;

          case right:
            self.style.left = X - width + "px";
            break;

          case top:
            self.style.top = "0px";
            break;

          case bottom:
            self.style.top = Y - height + "px";
            break;

          default:
            self.style.left = "0px";
        }

        // 允许选中任何文本
        $('*').css({
          'user-select' : 'text',
          '-webkit-user-select' : 'text'
        });
      }
    };

    // 移动设备
    // box.addEventListener('touchstart', box.onmousedown)
    // box.addEventListener('touchmove', function (e) {
    //   if (e.targetTouches.length === 1) {
    //     e.preventDefault(); // 阻止浏览器默认事件，重要
    //     var touch = e.targetTouches[0];
    //   }
    // })
    // box.addEventListener('touchend', function () {
    //   console.info("end");
    // })
  }
})(jQuery);