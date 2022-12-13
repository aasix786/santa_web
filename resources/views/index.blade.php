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
    <script src="{{asset('assets/external/jquery-3.3.1.slim.min.js')}}"></script>
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
    <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

</head>
<body>
<div class="main-boody">
    <header
        class="main-header">
        <img src="{{asset('assets/imgs/header.jpg')}}" class="w-100" alt="missing">
    </header>
    <div class="main-area">
        <div class="overlay-clr">
            <div class="">
                <img src="{{asset('assets/imgs/homepage.jpg')}}" class="w-100" alt="missing">
            </div>
            {{--   @if (session()->has('newurl'))
               {{ \Illuminate\Support\Facades\Session::get('newurl'),"_blank" }}
               @endif--}}
            <!-- <div class="itro-text">
                <h1 class="text3">INTRO PARAGRAGH</h1>
                <h3 class="text3">{{$introduction->description}}</h3>

            </div>
            <div class="main-banner">
                <div class="fist-section">
                    <div class="banner-text">
                        <h1 class="text4 top-heading">YOUR</h1>
                        <h1 class="text4 bottom-heading">YOUR</h1>
                    </div>
                </div>
                <div class="second-section">
                    <div class="banner-text">
                        <h1 class="text4 top-heading1">ROOM!</h1>
                        <h1 class="text4 bottom-heading1">TREE!</h1>
                    </div>
                </div>
            </div>
            <div class="main-steps pb-1">
                <h1 class="text4">IT'S EASY AS 1-2-3!</h1>
                <h1 class="text3">1. TAKE A PICTURE OF YOUR TREE.</h1>
                <h1 class="text3">2. EASILY ADD & EDIT SANTA IMAGE</h1>
                <h1 class="text3">3. JUST PAY $5 TO SAVE YOUR IMAGE</h1>
                <h1 class="text3">4. SHOW THE KIDZ "WE CAUGHT SANTA!</h1>
            </div> -->
            <div class="catch-santa">
                <div class="catch">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn red font-text bg-transparent w-100" data-toggle="modal" data-target="#exampleModalCenter">
                            <img src="{{asset('assets/imgs/catchsantanow.png')}}" class="w-100" alt="missing">
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
                                            <input class="input-type" type='file' name="image" required id="test"
                                                   onchange="readURL(this);" accept="image/*" style="display:none;"/>
                                            <img id="blah" src="{{asset('assets/imgs/upload.png')}}" class="py-3 w-100"
                                                 alt=""/>
                                            <input type="hidden" name="image_position" id="image_position">
                                            <input type="hidden" name="image_width" id="image_width">
                                            <input type="hidden" name="image_height" id="image_height">
                                        </div>
                                        <button type="button" class="btn cancel-btn mb-2" data-dismiss="modal">Cancel
                                        </button>
                                        <button type="submit" class="btn btn-primary save-btn mb-2 loader"> Continue
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="bg-dark text-center py-2 ">
        <p class="text-white mb-0">"Having trouble?  E-mail: <a href=" info@b3events.net">info@b3events.net</a></p>
    </footer>
</div>

<script>

    $(document).on('click','.save-btn',function(){

        $('.save-btn').text('Loading ...');

    });
    $(document).on('click','.uploadbtn',function(){
        $('#test').trigger('click');

    });

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
