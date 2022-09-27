<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
        <link rel="stylesheet" href="{{asset('assets/external/bootstrap.min.css')}}">
        <!-- <link rel="stylesheet" href="{{asset('assets/external/all.css')}}"/> -->
        <!-- <link rel="stylesheet" href="{{asset('assets/external/jquery.fancybox.min.css')}}"> -->
        <!-- <script src="{{asset('assets/external/jquery-3.3.1.slim.min.js')}}"></script>
        <script src="{{asset('assets/external/popper.min.js')}}"></script>
        <script src="{{asset('assets/external/bootstrap.min.js')}}"></script> -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css">
        <style>
            @media only screen and (min-width: 320px) {
                .downloadImage {
                    background-image: url(<?php echo request()->query("a"); ?>);
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
height:<?php echo $height;?>px;
                    background-color: transparent;
                    background-blend-mode: darken;
                    position: relative;
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-size: cover;
                }

            }
            @media only screen and (min-width: 425px) {
                .downloadImage {
                    background-image: url(<?php echo request()->query("a"); ?>);
                    border: 3px solid gray;
                    margin-top: 20px !important;
                    margin: auto;
                    width: 85%;
                    <?php

                    if (request()->query("h") > request()->query("w"))
                    {
                        $height = "525";
                    }else
                        {
                          $height ='300';
                        }

                    ?>
height:<?php echo $height;?>px;
                    background-color: transparent;
                    background-blend-mode: darken;
                    position: relative;
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-size: cover;
                }
            }
            @media only screen and (min-width: 768px) {
                .downloadImage {
                    background-image: url(<?php echo request()->query("a"); ?>);
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
height:<?php echo $height;?>px;
                    background-color: transparent;
                    background-blend-mode: darken;
                    position: relative;
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-size: cover;
                }
            }
            @media only screen and (min-width: 1024px) {
                .downloadImage {
                    background-image: url(<?php echo request()->query("a"); ?>);
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
height:<?php echo $height;?>px;
                    background-color: transparent;
                    background-blend-mode: darken;
                    position: relative;
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-size: 100% 100%;
                }
            }
            @media only screen and (min-width: 1900px) {
                .downloadImage {
                    background-image: url(<?php echo request()->query("a"); ?>);
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
height:<?php echo $height;?>px;
                    background-color: transparent;
                    background-blend-mode: darken;
                    position: relative;
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-size: cover;
                }
            }

        </style>
    </head>
    <body>
        <div class="main-boody">
            <header
                class="main-header">
                <img src="{{asset('assets/imgs/header.jpeg')}}" class="w-100" alt="">
            </header>
            <div class="main">
                <div class="downloadImage w-100">
                    <img src="{{$custom_image->image}}" class="w-100" alt="">
                    <a href="{{$custom_image->image }}"download><button type="button" class="btn red font-text bg-transparent w-100" data-toggle="modal" data-target="#exampleModalCenter">
                     DOWNLOAD
                    </button></a>
                </div>
            </div>
        </div>



    </body>
</html>
