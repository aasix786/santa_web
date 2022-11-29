<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name = "description" content = "Keep the Magic of Christmas ALIVE! Show the kids Santa in front of YOUR TREE caught on camera!" />
    <title>We Caught Santa - Catch Santa in YOUR Home!</title>
  <!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css"> -->
  <style>
  #draggable { width: 150px; height: 150px; padding: 0.5em; }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#draggable" ).draggable();
  } );
  </script>
</head>
<body>

<div id="draggable" class="ui-widget-content">
  <span>Drag me around</span>
  <img src="{{asset('assets/imgs/bright.png')}}" alt="">
</div>


</body>
</html>
