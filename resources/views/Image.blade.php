<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image</title>
    <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/all.css')}}"/>
    <link rel="stylesheet" href="{{asset('assets/external/jquery.fancybox.min.css')}}">
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
    <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <style>
        .bg-santa-img {
            background-image: url(<?php echo request()->query("a"); ?>);
            width: 75%;
            border: 3px solid gray;
            height: <?php echo  request()->query("h"); ?>px;
            margin-top: 20px !important;
            margin: auto;
            background-color: transparent;
            background-blend-mode: darken;
            position: relative;
            background-repeat: no-repeat;
            background-color: transparent;
            background-size: 100% 100%;
        }
    </style>
</head>
<body>
<div class="main-boody" oncontextmenu="return true">
    <header class="main-header">
        <img src="{{asset('assets/imgs/header.jpeg')}}" class="w-100" alt="">
    </header>
    <div class="main-area">
        <div class="overlay-clr">
            <div class="itro-text padding">
                <h1 class="text3 mb-0">CHOOSE A SANTA IMAGE</h1>
                <div class="mx-0 row imgs20">
                    <div class="col-md-3 col-3">
                        <img src="{{asset('assets/imgs/santa12.png')}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3 col-3">
                        <img src="{{asset('assets/imgs/santa9.png')}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3">
                        <img src="{{asset('assets/imgs/santa13.png')}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3">
                        <img src="{{asset('assets/imgs/santa12.png')}}" class="santa-dp2 selectSanta">
                    </div>
                </div>
            </div>
            <div class="itro-text padding margin-top">
                <div class="row p-1 mx-0">
                    <div class="col-md-4 col-5">
                        <h1 class="text-shade">BRIGHTNESS</h1>
                    </div>
                    <div class="col-md-4 col-5 left-border">
                        <h1 class="text-shade">CONTRAST</h1>
                    </div>
                    <div class="col-md-4 col-2 left-border px-0 pl-2 text-center">
                        <h1 class="text-shade">RESET</h1>
                    </div>
                    <div class="col-md-4 col-5 px-0 ">
                        <img src="{{asset('assets/imgs/bright.png')}}" class="santa-dp3" id="brightness-pic">
                        <div id="brightness"></div>
                    </div>
                    <div class="col-md-4 col-5 px-0" >
                        <img src="{{asset('assets/imgs/contrast.png')}}" class="santa-dp3" id="contrast-pic">
                        <div id="contrast"></div>
                    </div>
                    <div class="col-md-4 col-2">
                        <img src="{{asset('assets/imgs/reset.png')}}" class="santa-dp3" id="reset">
                    </div>
                </div>
            </div>
            <div class="bg-santa-img showimg w-100">
                <p class="rotingtxt1">{{$watermark}}</p>
                <div id="container">
                    <div id="canvas-border-hide">
                        <div class="right"></div>
                        <div class="bottom"></div>
                        <div class="top"></div>
                        <div class="left"></div>
                        <div data-clickable="true" class="bottomRight"></div>
                        <div data-clickable="true" class="topLeft"></div>
                        <div data-clickable="true" class="topRight"></div>
                        <div data-clickable="true" class="bottomLeft"></div>
                    </div>
                    <img src="{{asset('assets/imgs/santa12.png')}}" id="santaImg" class="image santa-dp4 border-class"
                         alt="missing">
                </div>
            </div>

            <div class="catch radius" id="img-button-section">
                <button type="button" class="btn text5 red bg-transparent tap-btn">CLICK HERE TO SAVE IMAGE</button>
            </div>

            <div class="save-img" id="save-img-section"></div>
            <form id="formImg" method="post" action="{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}">
                @csrf
                <input type="hidden" name="download_image" id="download_image">
            </form>

            <div class="notes">
                <h1 class="text3">NOTES:
                    <ul>
                        <li>Taken or choosen image appears in editor as background</li>
                        <li>Santa overlay appearsin editor when santa image is choosen</li>
                        <li>Santa should swap out if another santa image is choosen after orignal</li>
                        <li>User should be able to DRAG (move) Santa overlay, Resize by dragging corners, and use the
                            Brightness/Contrast/Hue Sliders
                        </li>
                        <li>Watermark should be similar to above</li>
                    </ul>
                </h1>
            </div>
        </div>

    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/utils/Draggable.min.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script>



    var dataURL;
    //   $(document).ready(function () {
    init();

    function touchHandler(event) {
        var touch = event.changedTouches[0];

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }[event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);

        touch.target.dispatchEvent(simulatedEvent);
    }

    function init() {
        document.addEventListener("touchstart", touchHandler, true);
        document.addEventListener("touchmove", touchHandler, true);
        document.addEventListener("touchend", touchHandler, true);
        document.addEventListener("touchcancel", touchHandler, true);
    }

    const download = () => {
        html2canvas(document.querySelector('.bg-santa-img'),{letterRendering: 1, allowTaint: true, useCORS: true, logging: true,
            scale: 2,removeContainer: true,
            backgroundColor: null,
        }).then(canvas => {
            document.getElementById('save-img-section').appendChild(canvas);

            $('#save-img-section').hide();
            var canvas = $("canvas")[0];
            var context = $("canvas")[0].getContext('2d');

            context.beginPath();
            context.moveTo(170, 80);
            context.bezierCurveTo(130, 100, 130, 150, 230, 150);
            context.bezierCurveTo(250, 180, 320, 180, 340, 150);
            context.bezierCurveTo(420, 150, 420, 120, 390, 100);
            context.bezierCurveTo(430, 40, 370, 30, 340, 50);
            context.bezierCurveTo(320, 5, 250, 20, 250, 50);
            context.bezierCurveTo(200, 5, 150, 20, 170, 80);
            context.closePath();
            context.lineWidth = 5;
            context.fillStyle = '#8ED6FF';
            context.fill();
            context.strokeStyle = '#0000ff';
            context.stroke();
            canvas.crossOrigin = "Anonymous";
            dataURL = canvas.toDataURL("image/png");
            console.log(dataURL)
            $('#download_image').val(dataURL);
            $("#formImg").submit();

        });



    }
    $('#img-button-section').click(function () {
        $('#canvas-border-hide').hide();

        $('.rotingtxt1').hide();
        download()
        $('.rotingtxt1').show();
    });

    $('#brightness-pic').click(function () {
        $('#brightness').show()
        $('#brightness-pic').hide()
    });
    $('#contrast-pic').click(function () {
        $('#contrast').show()
        $('#contrast-pic').hide()
    });
    $('#rotate-pic').click(function () {
        $('#rotate').show()
        $('#rotate-pic').hide()
    });

    //});
    $(document).ready(function () {
        $('.selectSanta').on('click', function () {
            let img = $(this).attr("src");
            $("#santaImg").attr("src", img);
        });
    });
</script>
<script>
    function blur() {
        var brightness = $("#brightness").slider("value");
        var contrast = $("#contrast").slider("value");
        // var rotate = $("#rotate").slider("value");
        $(".image").css("-webkit-filter", "brightness(" + brightness + "%)" + "contrast(" + contrast + "%)");
    }

    // ***********SLIDERS*************//
    $(function () {
        $("#brightness").slider({
            orientation: "horizontal",
            min: 50,
            max: 140,
            value: 95,
            slide: blur,
            change: blur
        });

        $("#contrast").slider({
            orientation: "horizontal",
            min: 0,
            max: 300,
            value: 150,
            slide: blur,
            change: blur
        });

    });
    $("#reset").click(function(){
        $("#brightness").slider("value", 95);
        $("#contrast").slider("value", 150);
    });
</script>


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
