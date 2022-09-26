<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paypal</title>
    <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/all.css')}}"/>
    <link rel="stylesheet" href="{{asset('assets/external/jquery.fancybox.min.css')}}">
    <script src="{{asset('assets/external/jquery-3.3.1.slim.min.js')}}"></script>
    <script src="{{asset('assets/external/popper.min.js')}}"></script>
     <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/client.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/venmo.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/data-collector.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        @media only screen and (min-width: 320px) {
            .bg-santa-img {
                background-image: url(<?php echo request()->query("a"); ?>);
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "500";
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
            .bg-santa-img {
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
            .bg-santa-img {
                background-image: url(<?php echo request()->query("a"); ?>);
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
            .bg-santa-img {
                background-image: url(<?php echo request()->query("a"); ?>);
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "1000";
                }else
                    {
                      $height ='500';
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
            .bg-santa-img {
                background-image: url(<?php echo request()->query("a"); ?>);
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 85%;
                <?php

                if (request()->query("h") > request()->query("w"))
                {
                    $height = "1000";
                }else
                    {
                      $height ='500';
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
<body oncontextmenu="return false">
    <div class="main-boody">
        <header class="main-header">
            <!-- <h1 class="text1">WE CAUGHT SANTA!</h1>
            <h1 class="text2">Custom Pictures of Santa under YOUR TREE!</h1> -->
            <img src="{{asset('assets/imgs/header.jpeg')}}" class="w-100" alt="">
            </header>

        <div class="main-area">
            <div class="overlay-clr">
                <div class="itro-text padding">
                    <div class="pt-1">
                    <h1 class="text5">{{$custom_text->custom_text}}</h1>

                </div>
                    <div class="santa-profile">
                        <img src="{{asset('assets/imgs/santa12.png')}}" class="santa-dp">
                        <h1 class="text6">$5.00</h1>
                    </div>

                    <!-- <div class="bg-santa-img">
                        <img src="{{asset('assets/imgs/santa12.png')}}"  class="santa-dp4">
                    </div> -->
                    <div class="bg-santa-img">

                            <p class="rotingtxt">{{$watermark}} </p>

                        </div>


                   {{-- <div class="paypal">
                        <a href="{{route('payment',['a'=>request()->query("a")])}}">
                         <!-- <i class="fa-brands fa-paypal"></i> -->
                    <!-- <div class="paypal">
                        <a href="{{route('payment',['a'=>request()->query("a")])}}">
                         <i class="fa-brands fa-paypal"></i>

                         <i class="fab fa-paypal"></i>
                     Pay<span class="sky-clr">Pal</span></a>
                    </div>
                    <div class="paypal text-white venmo">
                     <a id="venmo-button" href="">Venmo</a>
                    </div>
                    <div class="paypal text-white credit">
                        <i class="fa-brands fa-paypal"></i>
                        <i class="fab fa-paypal"></i>
                        PayPal CREDIT

                       </div>--}}

                        <div style="padding: 15px 15px 0 15px;" id="paypal-button-container"></div>



                    <div class="payment-method mt-0">
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card1.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card2.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card3.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card4.png')}}" class="img-size"></div>
                        <div class=""></div>
                        <div class=""></div>
                           </div>
                           <div class="catch radius mbottom">
                               <a href="{{url()->previous()}}"><button type="button" class="btn red font-text bg-transparent w-100">OR RETURN TO EDITOR </button> </a>
                            </div>
                  </div>
            </div>
        </div>
    </div>
</body>
</html>
{{--&enable-funding=venmo--}}
<script src="https://www.paypal.com/sdk/js?client-id=AULyAP0tzxBRnBZNi1VCjnRxW4HFjKVFKzzLFTwP8oSC87icTFVLMb9g9E5Z6rDqZdbteIxR0UHWA-VR&currency=USD&intent=capture&disable-funding=credit" data-sdk-integration-source="integrationbuilder"></script>
<script>

    var image = "{{route('download',['a'=>request()->query("a")]) }}";
    const paypalButtonsComponent = paypal.Buttons({
        // optional styling for buttons
        // https://developer.paypal.com/docs/checkout/standard/customize/buttons-style-guide/
        style: {
            color: "gold",
            shape: "pill",
            layout: "vertical"
        },


        // set up the transaction
        createOrder: (data, actions) => {
            // pass in any options from the v2 orders create call:
            // https://developer.paypal.com/api/orders/v2/#orders-create-request-body
            const createOrderPayload = {
                purchase_units: [
                    {
                        amount: {
                            value: "5"
                        }
                    }
                ]
            };

            return actions.order.create(createOrderPayload);
        },

        // finalize the transaction
        onApprove: (data, actions) => {
            const captureOrderHandler = (details) => {
                const payerName = details.payer.name.given_name;
                console.log('Transaction completed');
                window.location.href = image;
            };

             return actions.order.capture().then(captureOrderHandler);

        },

        // handle unrecoverable errors
        onError: (err) => {
            console.error('An error prevented the buyer from checking out with PayPal');
        }
    });

    paypalButtonsComponent
        .render("#paypal-button-container")
        .catch((err) => {
            console.error('PayPal Buttons failed to render');
        });
    $(window).on('keydown', function(event) {
        if (event.keyCode == 123) {
            return false; //Disable F12
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false; //Disable ctrl+shift+i
        } else if (event.ctrlKey && event.keyCode == 73) {
            return false; //Disable ctrl+shift+i
        }
        else if (event.ctrlKey && event.keyCode == 67|| event.keyCode == 86|| event.keyCode ==85|| event.keyCode == 117) {
            return false; //Disable ctrl+shift+i
        }
    });
    $(document).on("contextmenu", function(e) {
        e.preventDefault();
    });
</script>
