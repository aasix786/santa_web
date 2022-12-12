<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name = "description" content = "Keep the Magic of Christmas ALIVE! Show the kids Santa in front of YOUR TREE caught on camera!" />
    <title>We Caught Santa - Catch Santa in YOUR Home!</title>
    <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/all.css')}}"/>
    <link rel="stylesheet" href="{{asset('assets/external/jquery.fancybox.min.css')}}">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
    <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

    <script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
    <script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>
<!--
    <script src="{{asset('assets/external/jquery-3.3.1.slim.min.js')}}"></script>
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
    <script src="{{asset('assets/external/bootstrap.min.js')}}"></script> -->
    <style>
        @media only screen and (min-width: 320px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                /*
                                border: 3px solid gray;
                */
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "620";
                }else
                    {
                      $height ='260';
                    }

                ?>
    height: <?php echo $height;?>px;
                background-color: transparent;
                background-blend-mode: darken;
                position: relative;
                background-repeat: no-repeat;
                background-color: transparent;
                background-size: cover;
            }

        }

        @media only screen and (min-width: 425px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                /*    border: 3px solid gray;*/
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "700";
                }else
                    {
                      $height ='300';
                    }

                ?>
    height: <?php echo $height;?>px;
                background-color: transparent;
                background-blend-mode: darken;
                position: relative;
                background-repeat: no-repeat;
                background-color: transparent;
                background-size: cover;
            }
        }

        @media only screen and (min-width: 768px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                /*  border: 3px solid gray;*/
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "800";
                }else
                    {
                      $height ='350';
                    }

                ?>
    height: <?php echo $height;?>px;
                background-color: transparent;
                background-blend-mode: darken;
                position: relative;
                background-repeat: no-repeat;
                background-color: transparent;
                background-size: cover;
            }
        }

        @media only screen and (min-width: 1024px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                /*    border: 3px solid gray;*/
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "1300";
                }else
                    {
                      $height ='700';
                    }

                ?>
    height: <?php echo $height;?>px;
                background-color: transparent;
                background-blend-mode: darken;
                position: relative;
                background-repeat: no-repeat;
                background-color: transparent;
                background-size: 100% 100%;
            }
        }

        @media only screen and (min-width: 1900px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                /*  border: 3px solid gray;*/
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "2700";
                }else
                    {
                      $height ='850';
                    }

                ?>
    height: <?php echo $height;?>px;
                background-color: transparent;
                background-blend-mode: darken;
                position: relative;
                background-repeat: no-repeat;
                background-color: transparent;
                background-size: cover;
            }
        }

        .name {
            /* border: 3px solid gray;*/
            margin-top: 20px !important;
            margin: auto;
            padding: 50px;
            display: none;
        }

        .container1 {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid blue;
            border-bottom: 16px solid blue;
            width: 160px;
            height: 160px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .text-overlay {
            color: #F71D2D;
            font-size: 32px;
            font-weight: bolder;
            letter-spacing: 1px;
            text-align: center;
            padding-top: 50px;
        }


    </style>
</head>
<body>
<div class="main-boody">
    <header class="main-header">
        <img src="assets/imgs/header.jpg" class="w-100" alt="">
    </header>
    <div class="main-area">
        <div class="overlay-clr">
            <div class="itro-text padding">
                <h1 class="text3">CHOOSE A SANTA IMAGE</h1>
                <div class="santachoose">
                   @foreach($images as $image)
                        <div class=" imgs20">
                            <img src="{{$_ENV['IMAGE_URL'].$image->image}}" class="santa-dp2 selectSanta">
                        </div>
                    @endforeach

                </div>
            </div>
            <div class="container1">
                <div class="loader">
                </div>
            </div>
            <div class="replaceImg">
            <div class="catch">
                    <!-- Button trigger modal -->
                    <button type="button" class=" py-0 btn red font-text bg-transparent" data-toggle="modal" data-target="#exampleModalCenter">
                            <img src="{{asset('assets/imgs/takenewpicture.png')}}" class="w-100" alt="missing">
                        <!-- CATCH SANTA NOW! -->
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form method="post" action="{{route('store.image')}}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="modal-body">
                                        <div class="add-img pt-2">
                                            <button type="button" class="uploadbtn">TAP HERE TO TAKE or CHOOSE A PICTURE OF YOUR ROOM & TREE</button>
                                            <input class="input-type" type='file' name="image" required id="test" accept="image/*" onchange="readURL(this);"
                                            />
                                            <img id="blah" src="{{asset('assets/imgs/upload.png')}}" class="py-3 w-100"
                                                 alt=""/>
                                            <input type="hidden" name="image_position" id="image_position">
                                            <input type="hidden" name="image_width" id="image_width">
                                            <input type="hidden" name="image_height" id="image_height">
                                        </div>
                                        <button type="button" class="btn cancel-btn mb-2" data-dismiss="modal">Cancel
                                        </button>
                                        <button type="submit" class="btn btn-primary save-btn mb-2"> Continue
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="itro-text padding margin-top mt-1" id="stickytypeheader">
                <div class="row p-1">
                    <div class="col-md-6 col-6">
                        <h1 class="text-shade">BRIGHTNESS</h1>
                    </div>
                    <div class="col-md-6 col-6 left-border">
                        <h1 class="text-shade">CONTRAST</h1>
                    </div>
                    <!-- <div class="col-md-2 col-4 left-border">
                        <h2 class="font-weight-bold text-shade">RESET</h2>
                    </div> -->
                    <div class="col-md-6 col-6">
                        <img src="{{asset('assets/imgs/bright.png')}}" class="santa-dp3" id="brightness-pic">
                        <div id="brightness"></div>
                    </div>
                    <div class="col-md-6 col-6">
                        <img src="{{asset('assets/imgs/contrast.png')}}" class="santa-dp3" id="contrast-pic">
                        <div id="contrast"></div>
                    </div>
                    <!-- <div class="col-md-2 col-4">
                        <img src="{{asset("assets/imgs/reset.png")}}" class="santa-dp3" id="reset">
                    </div> -->
                </div>
            </div>


            <div class="name" id="overlay-section">

                <h1 class="text-overlay">Please wait Image is being processed ...</h1>
            </div>
            <div class="bg-santa-img showimg w-100" id="my-node">
                <p class="rotingtxt1">{{$watermark}}</p>
                <div id="container">
                    <div id="gesture-area">
                        <div id="canvas-border-hide">
                            <div class="right santa-border"></div>
                            <div class="bottom santa-border"></div>
                            <div class="top santa-border"></div>
                            <div class="left santa-border"></div>
                            <div data-clickable="true" class="bottomRight santa-border"></div>
                            <div data-clickable="true" class="topLeft santa-border"></div>
                            <div data-clickable="true" class="topRight santa-border"></div>
                            <div data-clickable="true" class="bottomLeft santa-border"></div>

                            <img src="{{asset('assets/imgs/santa12.png')}}"
                                 class='santaImg image santa-dp4 border-class' alt="sample image" id="scale-element">
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
            <div class="catch radius">
                <button class="btn text5 red bg-transparent tap-btn" id="btn">
                    <img src="{{asset('assets/imgs/saveimage.png')}}" class="w-100" alt="missing">
                </button>
            </div>
            <!-- {{-- <form id="formImg" method="post"
                   action="{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}">
                 @csrf
                 <input type="hidden" name="download_image" id="download_image">
             </form>--}} -->
            <!-- {{--<div class="notes">
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
            </div>--}} -->
        </div>

    </div>
</div>


<script>

    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            $('.loader').show();
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    btn.onclick = function () {
        // $('#canvas-border-hide').hide();
        $('.santa-border').hide();
        $('.border-class').css('border', 'none');
        let myimg = document.getElementById('my-node');
        /*var elem,
            style;
        elem = document.querySelector('.bg-santa-img');
        style = getComputedStyle(elem);
        var abc = style.height;
        console.log(style.height);*/
        $('.rotingtxt1').hide();
        window.scrollTo(0, 0);

        disableScroll();
        domtoimage.toBlob(myimg, {
            /* height:780,
             width: 1000*/
        })
            .then(dataUrl => {
                // Safari hack https://github.com/tsayen/dom-to-image/issues/343
                domtoimage
                    .toBlob(myimg, {
                        // you need height and width for safari
                        /*height: 780,
                        width: 1000*/
                    })
                    .then(dataUrl2 => {
                        const blobUrl = URL.createObjectURL(dataUrl2)
                        $('.rotingtxt1').show()
                        var reader = new FileReader();
                        reader.readAsDataURL(dataUrl2);
                        reader.onloadend = function () {
                            var base64data = reader.result;
                            $.ajax({
                                method: 'post',
                                url: "{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                                data: {"_token": "{{ csrf_token() }}", download_image: base64data},
                                success: function (response) {
                                    window.location.href = response.path;
                                }
                            });
                            //window.saveAs(dataUrl2, 'myimage.png');
                        }
                    });
            });
    }

</script>

<script src="https://hammerjs.github.io/dist/hammer.js"></script>
<script src="https://cdn.bootcss.com/dom-to-image/2.6.0/dom-to-image.min.js"></script>
<script src="https://cdn.bootcss.com/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/utils/Draggable.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
    $(document).ready(function () {
        init();
        $('.loader').hide();

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

        $('.tap-btn').click(function () {
            $('.image1').show()
            //$('.bg-santa-img').hide()
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
    });
    $(document).ready(function () {
        $('.selectSanta').on('click', function () {
            let img = $(this).attr("src");
            $(".santaImg").attr("src", img);
        });
    });
    $(function () {
        $('#draggable').resizable();
        $("#draggable").draggable();
    });
</script>
<script>
    function blur() {
        console.log("az  ")
        var brightness = $("#brightness").slider("value");
        var contrast = $("#contrast").slider("value");
        // var rotate = $("#rotate").slider("value");
        $("#container").css("-webkit-filter", "brightness(" + brightness + "%)" + "contrast(" + contrast + "%)");

    }
    // var rotate = $("#rotate").slider("value");

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
        html2canvas(document.querySelector('.bg-santa-img'), {
            letterRendering: 1, allowTaint: true, useCORS: true, logging: true,
            scale: 2, removeContainer: true,
            backgroundColor: null,
        }).then(canvas => {
            document.getElementById('save-img-section').appendChild(canvas);
            $('#save-img-section').show();
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
            $('#download_image').val(dataURL);
           // $("#formImg").submit();
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
    // ***********SLIDERS*************//
    $(function () {
        $("#brightness").slider({
            orientation: "horizontal",
            min: 50,
            max: 140,
            value: 95,
            slide: function( event, ui ) {
                console.log("az  ")
                var brightness = $("#brightness").slider("value");
                var contrast = $("#contrast").slider("value");
                // var rotate = $("#rotate").slider("value");
                $("#container").css("-webkit-filter", "brightness(" + brightness + "%)" + "contrast(" + contrast + "%)");

            }
        });
        $("#contrast").slider({
            orientation: "horizontal",
            min: 0,
            max: 300,
            value: 150,
            slide: blur,
            // change: blur
        });
    });
    // $("#reset").click(function () {
    //     $("#brightness").slider("value", 95);
    //     $("#contrast").slider("value", 150);
    // });
    $(document).on('click','.uploadbtn',function(){
        $('#test').trigger('click');
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

<script>
    function dragMoveListener(event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    //   ----
    var angleScale = {
        angle: 0,
        scale: 1
    }
    var gestureArea = document.getElementById('container')
    var scaleElement = document.getElementById('scale-element')
    var resetTimeout

    interact(gestureArea)
        .gesturable({
            listeners: {
                start(event) {
                    angleScale.angle -= event.angle

                    clearTimeout(resetTimeout)
                    scaleElement.classList.remove('reset')
                },
                move(event) {
                    // document.body.appendChild(new Text(event.scale))
                    var currentAngle = event.angle + angleScale.angle
                    var currentScale = event.scale * angleScale.scale

                    scaleElement.style.transform =
                        'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')'

                    // uses the dragMoveListener from the draggable demo above
                    dragMoveListener(event)
                },
                end(event) {
                    angleScale.angle = angleScale.angle + event.angle
                    angleScale.scale = angleScale.scale * event.scale

                    // resetTimeout = setTimeout(reset, 1000)
                    // scaleElement.classList.add('reset')
                }
            }
        })
        .draggable({
            listeners: {move: dragMoveListener}
        })

    function reset() {
        scaleElement.style.transform = 'scale(1)'

        angleScale.angle = 0
        angleScale.scale = 1
    }
    function readURL(input) {

        if (input.files && input.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    $('#image_width').val(width);
                    $('#image_height').val(height);
                    if (height > width) {

                        $('#image_position').val('vertical')
                    } else {
                        $('#image_position').val('horizantal')
                    }
                };


            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
</body>
</html>
