<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta
        name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name = "description" content = "Keep the Magic of Christmas ALIVE! Show the kids Santa in front of YOUR TREE caught on camera!" />
        <title>We Caught Santa - Catch Santa in YOUR Home!</title>
        <!--  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/utils/Draggable.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <style>
            #container {
                display: block;
                position: relative;
                height: 200px;
                width: 200px;
            }
            .slide {
                display: block;
                position: relative;
                height: 200px;
                width: 200px;
                background-color: #c80000;
                border-radius: 10px;
            }
            .green {
                background: green;
            }
            .bottomRight {
                display: block;
                position: absolute;
                height: 8px;
                width: 8px;
                background: white;
                right: 0;
                bottom: 0;
            }
            .bottomLeft {
                display: block;
                position: absolute;
                height: 8px;
                width: 8px;
                background: white;
                left: 0;
                bottom: 0;
            }
            .topLeft {
                display: block;
                position: absolute;
                height: 8px;
                width: 8px;
                background: white;
                left: 0;
                top: 0;
            }
            .topRight {
                display: block;
                position: absolute;
                height: 8px;
                width: 8px;
                background: white;
                right: 0;
                top: 0;
            }
            .top {
                display: block;
                position: absolute;
                height: 1px;
                width: 100%;
                /* background: white; */
            }
            .left {
                display: block;
                position: absolute;
                height: 100%;
                width: 1px;
                /* background: white; */
                left: 0;
            }
            .right {
                display: block;
                position: absolute;
                height: 100%;
                width: 1px;
                /* background: white; */
                right: 0;
            }
            .bottom {
                display: block;
                position: absolute;
                height: 1px;
                width: 100%;
                /* background: white; */
                bottom: 0;
            }
            #container img {
                width: 100%;
                height: 100%;

            }
        </style>
    </head>
    <body>
        <div id="container">
            <div class="right"></div>
            <div class="bottom"></div>
            <div class="top"></div>
            <div class="left"></div>
            <div data-clickable="true" class="bottomRight"></div>
            <div data-clickable="true" class="topLeft"></div>
            <div data-clickable="true" class="topRight"></div>
            <div data-clickable="true" class="bottomLeft"></div>
            <img src="{{asset('assets/imgs/santa1.jpg')}}" alt="">
        </div>


        <script>
            var $container = document.getElementById("container");

            // Proxies
            var $right = document.createElement("div");
            var $bottom = document.createElement("div");
            var $top = document.createElement("div");
            var $left = document.createElement("div");

            var mainDraggable = new Draggable($container);

            var rightLastX = 0;
            var rightDraggable = new Draggable($right, {
                trigger: ".right",
                cursor: "e-resize",
                onDrag: updateRight,
                onPress: function () {
                    rightLastX = this.x;
                    mainDraggable.disable();
                },
                onRelease: function () {
                    mainDraggable.enable();
                }
            });

            function updateRight() {
                var diffX = this.x - rightLastX;
                TweenMax.set($container, {
                    width: "+=" + diffX
                });
                rightLastX = this.x;
            }

            var bottomLastY = 0;
            var bottomDraggable = new Draggable($bottom, {
                trigger: ".bottom",
                cursor: "s-resize",
                onDrag: updateBottom,
                onPress: function () {
                    bottomLastY = this.y;
                    mainDraggable.disable();
                },
                onRelease: function () {
                    mainDraggable.enable();
                }
            });

            function updateBottom() {
                var diffY = this.y - bottomLastY;
                TweenMax.set($container, {
                    height: "+=" + diffY
                });
                bottomLastY = this.y;
            }

            var topLastY = 0;
            var topDraggable = new Draggable($top, {
                trigger: ".top",
                cursor: "n-resize",
                onDrag: updateTop,
                onPress: function () {
                    topLastY = this.y;
                    mainDraggable.disable();
                },
                onRelease: function () {
                    mainDraggable.enable();
                }
            });

            function updateTop() {
                var diffY = this.y - topLastY;
                TweenMax.set($container, {
                    height: "-=" + diffY,
                    y: "+=" + diffY
                });
                topLastY = this.y;
            }

            var leftLastX = 0;
            var leftDraggable = new Draggable($left, {
                trigger: ".left",
                cursor: "w-resize",
                onDrag: updateLeft,
                onPress: function () {
                    leftLastX = this.x;
                    mainDraggable.disable();
                },
                onRelease: function () {
                    mainDraggable.enable();
                }
            });

            function updateLeft() {
                var diffX = this.x - leftLastX;
                TweenMax.set($container, {
                    width: "-=" + diffX,
                    x: "+=" + diffX
                });
                leftLastX = this.x;
            }

            // Corner triggers
            $(".bottomRight").on("mousedown touchstart", function (e) {
                mainDraggable.disable();
                rightDraggable.startDrag(e);
                bottomDraggable.startDrag(e);
            });

            $(".bottomLeft").on("mousedown touchstart", function (e) {
                mainDraggable.disable();
                leftDraggable.startDrag(e);
                bottomDraggable.startDrag(e);
            });

            $(".topLeft").on("mousedown touchstart", function (e) {
                mainDraggable.disable();
                topDraggable.startDrag(e);
                leftDraggable.startDrag(e);
            });

            $(".topRight").on("mousedown touchstart", function (e) {
                mainDraggable.disable();
                topDraggable.startDrag(e);
                rightDraggable.startDrag(e);
            });

            $(".topRight, .topLeft, .bottomLeft, .bottomRight").on("mouseup touchend", function (e) {
                mainDraggable.enable();
            });
        </script>
    </body>
</html>
