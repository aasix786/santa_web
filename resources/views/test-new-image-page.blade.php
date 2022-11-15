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
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> -->
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
    <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <style>
        @media only screen and (min-width: 320px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "620";
                }else
                    {
                      $height ='250';
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
                border: 3px solid gray;
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
                border: 3px solid gray;
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
                border: 3px solid gray;
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
                border: 3px solid gray;
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
            border: 3px solid gray;
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
            width: 120px;
            height: 120px;
            border-top: 4px solid rgb(237, 44, 73);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
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
                <div class="row imgs20">
                    <div class="col-md-3 col-3">
                        <img src="{{asset("assets/imgs/santa12.png")}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3 col-3">
                        <img src="{{asset("assets/imgs/santa9.png")}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3">
                        <img src="{{asset("assets/imgs/santa13.png")}}" class="santa-dp2 selectSanta">
                    </div>
                    <div class="col-md-3 col-3">
                        <img src="{{asset("assets/imgs/santa12.png")}}" class="santa-dp2 selectSanta">
                    </div>
                </div>
            </div>
            <div class="itro-text padding margin-top">
                <div class="row p-1">
                    <div class="col-md-4 col-4">
                        <h1 class="text-shade">BRIGHTNESS</h1>
                    </div>
                    <div class="col-md-4 col-4 left-border">
                        <h1 class="text-shade">CONTRAST</h1>
                    </div>
                    <div class="col-md-4 col-4 left-border">
                        <h1 class="text-shade">RESET</h1>
                    </div>
                    <div class="col-md-4 col-4">
                        <img src={{asset("assets/imgs/bright.png")}} class="santa-dp3" id="brightness-pic">
                        <div id="brightness"></div>
                    </div>
                    <div class="col-md-4 col-4">
                        <img src={{asset("assets/imgs/contrast.png")}} class="santa-dp3" id="contrast-pic">
                        <div id="contrast"></div>
                    </div>
                    <div class="col-md-4 col-4">
                        <img src={{asset("assets/imgs/reset.png")}} class="santa-dp3" id="reset">
                    </div>
                </div>
            </div>


            <div class="name" id="overlay-section">
                <div class="container1">
                    <div class="loader">
                    </div>
                </div>
                <h1 class="text-overlay">Please wait Image is being processed ...</h1>
            </div>
            <div class="bg-santa-img showimg w-100" id="my-node">
                <p class="rotingtxt1">{{$watermark}}</p>

                <!-- <div id="draggable" class="ui-widget-content">
                    <img src="assets/imgs/santa12.jpeg"  id="santaImg" class="image santa-dp4 border-class">
                </div> -->
                <div id="container">
                    <div class="right"></div>
                    <div class="bottom"></div>
                    <div class="top"></div>
                    <div class="left"></div>
                    <div data-clickable="true" class="bottomRight"></div>
                    <div data-clickable="true" class="topLeft"></div>
                    <div data-clickable="true" class="topRight"></div>
                    <div data-clickable="true" class="bottomLeft"></div>
                    <img src={{asset('assets/imgs/santa12.png')}} id="santaImg" class="image santa-dp4 border-class"
                         alt="missing">
                </div>
            </div>
            <div class="catch radius">
                <button class="btn text5 red bg-transparent tap-btn" id="btn">CLICK HERE TO SAVE IMAGE</button>
            </div>
            {{-- <form id="formImg" method="post"
                   action="{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}">
                 @csrf
                 <input type="hidden" name="download_image" id="download_image">
             </form>--}}
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
<script>
    /*btn.onclick = function () {
            $("#my-node #container>div").hide();
            $('#btn').text('Please wait Image is being processed ...');
            $('.rotingtxt1').hide();
            domtoimage.toBlob(document.getElementById('my-node'))
                .then(function (blob) {
                    const blobUrl = URL.createObjectURL(blob)
                    $('.rotingtxt1').show()
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        var base64data = reader.result;
                        $.ajax({
                            method:'post',
                            url:"{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                        data:{"_token": "{{ csrf_token() }}", download_image:base64data},
                        success:function (response) {
                            window.location.href = response.path;
                        }
                    });
                    // $('#download_image').val(base64data);
                    //window.saveAs(blob, 'my-node.png')
                    // $("#formImg").submit();
                }
            });
    }*/
    btn.onclick = function () {
        let myimg = document.getElementById('my-node');
        domtoimage.toBlob(myimg, {
            height: 1200,
            width: 675
        })
            .then(dataUrl => {
                // Safari hack https://github.com/tsayen/dom-to-image/issues/343
                domtoimage
                    .toBlob(myimg, {
                        // you need height and width for safari
                        height: 1200,
                        width: 675
                    })
                    .then(dataUrl2 => {
                        const blobUrl = URL.createObjectURL(dataUrl2)
                        $('.rotingtxt1').show()
                        var reader = new FileReader();
                        reader.readAsDataURL(dataUrl2);
                        reader.onloadend = function () {
                            var base64data = reader.result;
                            $.ajax({
                                method:'post',
                                url:"{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                                data:{"_token": "{{ csrf_token() }}", download_image:base64data},
                                success:function (response) {
                                    window.location.href = response.path;
                                }
                            });
                            window.saveAs(dataUrl2, 'myimage.png');
                        }
                    });
            });
    }

</script>
{{--<div>
    <button id="btn">Preview</button>
    <img src="" id="image1" alt="">
</div>--}}
<script src="https://cdn.bootcss.com/dom-to-image/2.6.0/dom-to-image.min.js"></script>
<script src="https://cdn.bootcss.com/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
{{--<script>

    var node = document.getElementById('my-node');
    var btn = document.getElementById('btn');
   const canvas = document.getElementById('my-node');

btn.onclick = function () {
         $("#my-node #container>div").hide();
         $('#btn').text('Please wait Image is being processed ...');
         $('.rotingtxt1').hide();
         domtoimage.toBlob(document.getElementById('my-node'))
             .then(function (blob) {
                 const blobUrl = URL.createObjectURL(blob)
                 $('.rotingtxt1').show()
                 var reader = new FileReader();
                 reader.readAsDataURL(blob);
                 reader.onloadend = function () {
                     var base64data = reader.result;
                     $.ajax({
                         method:'post',
                         url:"{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                        data:{"_token": "{{ csrf_token() }}", download_image:base64data},
                        success:function (response) {
                            window.location.href = response.path;
                        }
                    });
                   // $('#download_image').val(base64data);
                    //window.saveAs(blob, 'my-node.png')
                   // $("#formImg").submit();
                }
            });
    }
</script>--}}
<script>


    var node = document.getElementById('my-node');
    var btn = document.getElementById('btn');
    const canvas = document.getElementById('my-node');
    /* btn.onclick = function () {
         $("#my-node #container>div").hide();
         $('#btn').text('Please wait Image is being processed ...');
         $('.rotingtxt1').hide();

         domtoimage.toSvg(document.getElementById('my-node'))
             .then(function (blob) {
                 console.log(blob);
                 $.ajax({
                     method: 'post',
                     url: "{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                    data: {"_token": "{{ csrf_token() }}", download_image: blob},
                    success: function (response) {
                        window.location.href = response.path;
                    }
                });
            });
    }*/

    /* btn.onclick = function () {
            $("#my-node #container>div").hide();
            $('#btn').text('Please wait Image is being processed ...');
            $('.rotingtxt1').hide();

            domtoimage.toSvg(document.getElementById('my-node'))
                .then(function (src) {
                    //console.log("abc",abc)
                    //    const download_image = blob;
                    downloadPNGFromAnyImageSrc(src);

                    function downloadPNGFromAnyImageSrc(src) {
                        //recreate the image with src recieved
                        var img = new Image;
                        //when image loaded (to know width and height)
                        img.onload = function () {
                            //drow image inside a canvas
                            var canvas = convertImageToCanvas(img);
                            //get image/png from convas
                            var pngImage = convertCanvasToImage(canvas);
                            //download
                            /!*          var anchor = document.createElement('A');
                                      anchor.setAttribute('href', pngImage.src);
                                      anchor.setAttribute('download', 'image.png');
                                      anchor.click();*!/
                        };
                        img.src = src;

                        // Converts image to canvas; returns new canvas element
                        function convertImageToCanvas(image) {
                            var canvas = document.createElement("canvas");
                            canvas.width = image.width;
                            canvas.height = image.height;
                            canvas.getContext("2d").drawImage(image, 0, 0);
                            return canvas;
                        }

                        // Converts canvas to an image
                        function convertCanvasToImage(canvas) {
                            var image = new Image();
                            image.src = canvas.toDataURL("image/png");
                            $.ajax({
                                method: 'post',
                                url: "{{route('store.image',['height'=>request()->query("h"),'width'=>request()->query("w")])}}",
                            data: {"_token": "{{ csrf_token() }}", download_image: image.src},
                            success: function (response) {
                                window.location.href = response.path;
                            }
                        });
                        console.log(image.src);
                        // return image;
                    }

                    $('.rotingtxt1').show()

                };

            })
    }*/

</script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/utils/Draggable.min.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
<script>
    $(document).ready(function () {
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
    /*  $(document).ready(function () {
          $('.selectSanta').on('click', function () {
              let img = $(this).attr("src");
              $("#santaImg").attr("src", img);
          });
      });*/
    // $( function() {
    //     $('#draggable').resizable();
    //     $( "#draggable" ).draggable();
    // } );
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
    $("#reset").click(function () {
        $("#contrast").slider("value", 100);
        $("#brightness").slider("value", 0);
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
