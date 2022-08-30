<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/Css/style.css">
    <link rel="stylesheet" href="assets/Css/responsive.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
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
</head>
<body>
    
    <div class="main-boody">
        <header class="main-header">
            <img src="assets/imgs/header.jpeg" class="w-100" alt="">
        </header>
        <div class="main-area">
            <div class="overlay-clr">
                <div class="itro-text padding text-black">
                <h1 class="text3">CLICK THE CAMERA ICON TO TAKE OR CHOOSE A PHOTO OF YOUR CHRISTMAS TREE</h1>
                <img id="blah" src="assets/imgs/camera1.png" class="camera-img" alt="" />
                <input class="input-type" type='file' onchange="readURL(this);" />
            </div>
             
            </div>      
        </div>
    </div>
    <script>
        $(document).ready(function(){
            $('.camera-img').change(function() {
                window.location("Image.html");
            })
        })
    </script>


</body>
</html>