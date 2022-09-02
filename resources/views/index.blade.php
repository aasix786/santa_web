<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    </head>
    <body>
        <div class="main-boody">
            <header
                class="main-header">
                <!-- <h1 class="text1">WE CAUGHT SANTA!</h1>
                          <h1 class="text2">Custom Pictures of Santa under YOUR TREE!</h1> -->
                <img src="{{asset('assets/imgs/header.jpeg')}}" class="w-100" alt="">
            </header>
            <div class="main-area">
                <div class="overlay-clr">

                    <div class="itro-text">
                        <h1 class="text3">INTRO PARAGRAGH</h1>
                        <h3>{{$introduction->description}}</h3>
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
                    </div>
                    <div class="catch">
                        <!-- Button trigger modal -->
<button type="button" class="btn red text5 bg-transparent w-100" data-toggle="modal" data-target="#exampleModalCenter">
    CATCH SANTA NOW!
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
<form method="post" action="{{route('store.image')}}" enctype="multipart/form-data">
    @csrf
        <div class="modal-body">
            <div class="add-img pt-2">
                <button class="uploadbtn">Click here to upload </button>
                <input class="input-type" type='file' name="image" onchange="readURL(this);" />
                <img id="blah" src="{{asset('assets/imgs/upload.png')}}" class="py-3 w-100" alt="" />
                </div>
          <button type="button" class="btn cancel-btn mb-2" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary save-btn mb-2"> Continue</button>
        </div>
</form>
      </div>
    </div>
  </div>
                    </div>
                </div>
            </div>
        </div>


        <script>
            function readURL(input) {
             if (input.files && input.files[0]) {
                 var reader = new FileReader();

                 reader.onload = function (e) {
                  //    window.location.replace("image.html");
                     $('#blah').attr('src', e.target.result);
                 };

                 reader.readAsDataURL(input.files[0]);
             }
         }
      </script>
    </body>
</html>
