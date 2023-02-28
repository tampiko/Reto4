(function () {
    (function () {
      var Confetti,
        PI_2,
        canvas,
        colors,
        confetti,
        context,
        drawCircle,
        i,
        range,
        resizeWindow,
        xpos;
  
      canvas = document.getElementById("confeti");
  
      context = canvas.getContext("2d");
  
      window.w = window.innerWidth;
  
      window.h = window.innerHeight;
  
      resizeWindow = function () {
        window.w = canvas.width = window.innerWidth;
        return (window.h = canvas.height = window.innerHeight);
      };
  
      window.addEventListener("resize", resizeWindow, false);
  
      window.onload = function () {
        return setTimeout(resizeWindow, 0);
      };
  
      range = function (a, b) {
        return (b - a) * Math.random() + a;
      };
  
      colors = [
        [85, 71, 106],
        [174, 61, 99],
        [219, 56, 83],
        [244, 92, 68],
        [248, 182, 70],
      ];
  
      PI_2 = 2 * Math.PI;
  
      drawCircle = function (x, y, r, style) {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        context.fillStyle = style;
        return context.fill();
      };
  
      xpos = 0.5;
  
      document.onmousemove = function (e) {
        return (xpos = e.pageX / w);
      };
  
      window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            return window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
  
      Confetti = (function () {
        function Confetti() {
          this.style = colors[~~range(0, 5)];
          this.rgb =
            "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
          this.r = ~~range(2, 6);
          this.replace();
        }
  
        Confetti.prototype.replace = function () {
          this.opacity = 0;
          this.dop = 0.03 * range(1, 5);
          this.x = range(-2 * this.r, w - 2 * this.r);
          this.y = range(-2 * this.r, h - 2 * this.r);
          this.xmax = w - this.r;
          this.ymax = h - this.r;
          this.vx = 2 * Math.random() + 10 * xpos - 6;
          return (this.vy = this.r + range(-1, 1));
        };
  
        Confetti.prototype.draw = function () {
          var _ref;
          this.x += this.vx;
          this.y += this.vy;
          this.opacity += this.dop;
          if (this.opacity > 1) {
            this.opacity = 1;
            this.dop *= -1;
          }
          if (
            this.opacity < 0 ||
            this.y > this.ymax ||
            !(0 < (_ref = this.x) && _ref < this.xmax)
          ) {
            this.replace();
          }
          return drawCircle(
            ~~this.x,
            ~~this.y,
            this.r,
            "" + this.rgb + "," + this.opacity + ")"
          );
        };
  
        return Confetti;
      })();
  
      confetti = (function () {
        var _results;
        _results = [];
        for (i = 1; i <= 300; i++) {
          _results.push(new Confetti());
        }
        return _results;
      })();
  
      window.step = function () {
        var c, _i, _len, _results;
        requestAnimationFrame(step);
        context.clearRect(0, 0, w, h);
        _results = [];
        for (_i = 0, _len = confetti.length; _i < _len; _i++) {
          c = confetti[_i];
          _results.push(c.draw());
        }
        return _results;
      };
  
      step();
    }.call(this));
  })();
  