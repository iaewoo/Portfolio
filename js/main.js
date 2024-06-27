// animate ease 구현
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)
      ) + b
    );
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
  },
});

// 네비게이션 버튼으로 이동 구현

const main_btn = document.querySelector("#main_btn");
const box0_pst = document.querySelectorAll(".main")[0].offsetTop;
main_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box0_pst });
  $(".scene2").stop().animate(
    {
      opacity: 0,
    },
    250
  );
  $(".scene3").stop().animate(
    {
      opacity: 0,
    },
    250
  );
});

const web_btn = document.querySelector("#web_btn");
const box1_pst = document.querySelectorAll(".scene2")[0].offsetTop;
web_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box1_pst });
  $(".scene2").stop().animate(
    {
      opacity: 1,
    },
    2000
  );
});

const prev_btn = document.querySelector("#prev_btn");
prev_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box1_pst });
  $(".scene2").stop().animate(
    {
      opacity: 1,
    },
    2000
  );
  $(".scene3").stop().animate(
    {
      opacity: 0,
    },
    250
  );
});

const mt_btn = document.querySelector("#mt_btn");
const box2_pst = document.querySelectorAll(".scene3")[0].offsetTop;
mt_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box2_pst });
  $(".scene3").stop().animate(
    {
      opacity: 1,
    },
    2000
  );
});

const next_btn = document.querySelector("#next_btn");
next_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box2_pst });
  $(".scene2").stop().animate(
    {
      opacity: 0,
    },
    250
  );
  $(".scene3").stop().animate(
    {
      opacity: 1,
    },
    2000
  );
});

const main1_btn = document.querySelector("#main1_btn");
main1_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box0_pst });
  $(".scene2").stop().animate(
    {
      opacity: 0,
    },
    250
  );
  $(".scene3").stop().animate(
    {
      opacity: 0,
    },
    250
  );
});

const main2_btn = document.querySelector("#main2_btn");
main2_btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: box0_pst });
  $(".scene2").stop().animate(
    {
      opacity: 0,
    },
    250
  );
  $(".scene3").stop().animate(
    {
      opacity: 0,
    },
    250
  );
});

// 네비게이션 버튼 영역 종료

// 스크롤 금지 명령 (마우스, 키보드 각각)
$(".container").on("wheel", function (e) {
  e.preventDefault();
});
$(document).keydown(function (event) {
  if (
    event.keyCode == 38 ||
    event.keyCode == 40 ||
    event.keyCode == 37 ||
    event.keyCode == 39
  ) {
    event.preventDefault();
  }
});

// 메인 화면 팝업 호출
$(".main_trigger").click(function () {
  $(".one").animate(
    {
      opacity: 0,
    },
    1500
  );
  $(".main_bg").animate(
    {
      opacity: 0.3,
    },
    1500
  );
  $(".first_wrap h1").delay(1000).animate(
    {
      right: "5%",
      opacity: 1,
    },
    1000
  );
  $(".profile_info").delay(2000).animate(
    {
      left: 0,
      opacity: 1,
      rotate: "-10deg",
    },
    1000
  );
  $(".profile_card").delay(1000).animate(
    {
      top: 0,
      opacity: 1,
    },
    1000
  );
  $(".main .close").delay(1500).animate(
    {
      left: "2.5%",
    },
    500
  );
  $(".logo").delay(1500).fadeOut();
  $(".main .POP").removeClass("off");
  $(".main .POP").addClass("on");
});

// scene2 팝업 호출
$(".web").click(function (swap) {
  $(this).addClass("up").stop().animate(
    {
      scale: 8,
    },
    500,
    "easeOutExpo"
  );
  $(".web p").hide();
  $(".scene2 .POP").addClass("on");
  //  이미지 교체
  let img = document.querySelector(".img_wrap");
  let imgsrc = swap.currentTarget.querySelector("img").getAttribute("src");
  img.querySelector("img").setAttribute("src", imgsrc);
  // 클릭한 이미지에 따라 cover 활성화
  let click = $(this).index();
  $(".img_info ul li").eq(click).addClass("click");
});

// scene3 팝업 호출

$(".scene3_trigger").click(function () {
  $(".scene3 .POP").stop().addClass("on");
  $(".scene3 .POP").css("display", "block");
  $(".third_wrap .close").stop().animate(
    {
      top: "4%",
      opacity: 0.8,
    },
    500
  );
  // 유튜브 자동 재생
  $(".active #ytVideo")[0].contentWindow.postMessage(
    '{"event":"command","func":"' + "playVideo" + '","args":""}',
    "*"
  );
});

// 슬라이드 넘기면
$(".mySwipers i").click(function () {
  // 유튜브 자동 정지
  $(".active #ytVideo")[0].contentWindow.postMessage(
    '{"event":"command","func":"' + "stopVideo" + '","args":""}',
    "*"
  );
});

// 클로즈 버튼 클릭 시 팝업 다운
$(".close").click(function () {
  if ($(".main .POP").hasClass("on")) {
    $(".one").delay(500).stop().animate(
      {
        opacity: 1,
      },
      1500
    );
    $(".main_bg").delay(500).stop().animate(
      {
        opacity: 1,
      },
      1500
    );
    $(".first_wrap h1").stop().animate(
      {
        right: "-25%",
        opacity: 1,
      },
      500
    );
    $(".profile_info").stop().animate(
      {
        left: "50%",
        opacity: 0,
        rotate: "10deg",
      },
      500
    );
    $(".profile_card").delay(300).stop().animate(
      {
        top: "117%",
        opacity: 0,
      },
      500
    );
    $(".main .close").stop().animate(
      {
        left: "-20%",
      },
      500
    );
    $(".logo").fadeIn();
    $(".main .POP").removeClass("on");
    $(".main .POP").addClass("off");
  } else if ($(".scene3 .POP").hasClass("on")) {
    $(".scene3 .POP").stop().removeClass("on");
    $(".third_wrap .close").stop().animate(
      {
        top: "50%",
        opacity: 0,
      },
      1000
    );
    // 유튜브 자동 정지
    $(".active #ytVideo")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  } else if ($(".scene2 .POP").hasClass("on")) {
    $(".up")
      .stop()
      .animate(
        {
          scale: 1,
        },
        500,
        "easeOutExpo"
      )
      .removeClass("up");
    $(".web p").delay(1000).show();
    $(".scene2 .POP").removeClass("on");
    $(".img_info ul li").removeClass("click");
  }
});

// ESC 누르면 팝업 다운
$(document).keydown(function (exit) {
  if (exit.keyCode == 27) {
    if ($(".main .POP").hasClass("on")) {
      $(".one").delay(500).stop().animate(
        {
          opacity: 1,
        },
        1500
      );
      $(".main_bg").delay(500).stop().animate(
        {
          opacity: 1,
        },
        1500
      );
      $(".first_wrap h1").stop().animate(
        {
          right: "-25%",
          opacity: 1,
        },
        500
      );
      $(".profile_info").stop().animate(
        {
          left: "50%",
          opacity: 0,
          rotate: "10deg",
        },
        500
      );
      $(".profile_card").delay(300).stop().animate(
        {
          top: "117%",
          opacity: 0,
        },
        500
      );
      $(".main .close").stop().animate(
        {
          left: "-20%",
        },
        500
      );
      $(".logo").fadeIn();
      $(".main .POP").removeClass("on");
      $(".main .POP").addClass("off");
    } else if ($(".scene3 .POP").hasClass("on")) {
      $(".scene3 .POP").stop().removeClass("on");
      $(".third_wrap .close").animate(
        {
          top: "50%",
          opacity: 0,
        },
        1000
      );
      // 유튜브 자동 정지
      $(".active #ytVideo")[0].contentWindow.postMessage(
        '{"event":"command","func":"' + "stopVideo" + '","args":""}',
        "*"
      );
    } else if ($(".scene2 .POP").hasClass("on")) {
      $(".up")
        .stop()
        .animate(
          {
            scale: 1,
          },
          500,
          "easeOutExpo"
        )
        .removeClass("up");
      $(".web p").delay(1000).show();
      $(".scene2 .POP").removeClass("on");
      $(".img_info ul li").removeClass("click");
    }
  }
});

// 클릭 효과

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}
document.addEventListener("click", clickEffect);

// 반응형 구현

$(window).resize(function () {
  if ($(window).width() < 1600) {
    // window 크기가 1600보다 작을때
  } else if ($(window).width() < 1200) {
    // window 크기가 1200보다 작을 때
  } else if ($(window).width() < 960) {
    // window 크기가 960보다 작을 때
  } else if ($(window).width() < 760) {
    // window 크기가 760보다 작을 때
  } else if ($(window).width() < 480) {
    // window 크기가 480보다 작을 때
  } else if ($(window).width() < 320) {
    // window 크기가 480보다 작을 때
  }
});
