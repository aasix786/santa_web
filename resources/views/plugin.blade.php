<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .imgs20 img {
                width: 20%;
                float: left;
                margin: 20px;
                height: 100px;
            }
            .showimg {
                WIDTH: 100%;
                OVERFLOW: HIDDEN;
            }
            .showimg img{
                cursor: pointer;
            }
        </style>  
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->
        <script>
        </script>
    </head>
    <body>
        <!-- Main Wrapper -->
        <div class="imgs20">
            <img src="{{asset('assets/imgs/santa1.jpg')}}" class="selectSanta">
            <img src="{{asset('assets/imgs/santa2.jpg')}}" class="selectSanta">
            <img src="{{asset('assets/imgs/santa3.jpg')}}" class="selectSanta">
            <img src="{{asset('assets/imgs/santa4.jpg')}}" class="selectSanta">
        </div>
        <div class="showimg">
            <div id="draggable" class="ui-widget-content">
                <img src="" id="santaImg">
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $('.selectSanta').on('click', function() {
                   let img = $(this).attr("src");
                   $("#santaImg").attr("src",img);
                });
            }); 
            
            $( function() {
                $( "#draggable" ).draggable();
            } );
               
        </script>
    </body>
</html>
