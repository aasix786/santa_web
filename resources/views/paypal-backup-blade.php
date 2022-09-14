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
    <style>
        .bg-santa-img {
            background-image: url(<?php echo request()->query("a"); ?>);
            width: 97%;
            border: 3px solid gray;
            height: 475px;
            margin-top: 20px !important;
            margin: auto;
            margin-top: auto;
            background-size: 100% 100%;
            background-color: #232020a6;
            background-blend-mode: darken;
            position: relative;
            overflow: hidden;
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

                {{--<div class="paypal">
                    <!-- <i class="fa-brands fa-paypal"></i> -->
                    <a href="{{route('payment',['a'=>request()->query("a")])}}">   <i class="fab fa-paypal"></i>
                    Pay<span class="sky-clr">Pal</span></a>
                </div>
                <div class="paypal text-white venmo">
                    <a id="venmo-button" href="">Venmo</a>
                </div>
                <div class="paypal text-white credit">
                    <!-- <i class="fa-brands fa-paypal"></i> -->
                    <i class="fab fa-paypal"></i>
                    PayPal CREDIT
                </div>--}}
                <div style="padding: 15px;" id="paypal-button-container"></div>


                {{-- <div class="payment-method">
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card1.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card2.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card3.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card4.png')}}" class="img-size"></div>
                    <div class=""></div>
                    <div class=""></div>
                </div>--}}
                <div class="catch radius mbottom">

                    <a href="{{url()->previous()}}"><button type="button" class="btn red font-text bg-transparent w-100">

                            OR RETURN TO EDITOR
                        </button> </a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script src="https://www.paypal.com/sdk/js?client-id=AULyAP0tzxBRnBZNi1VCjnRxW4HFjKVFKzzLFTwP8oSC87icTFVLMb9g9E5Z6rDqZdbteIxR0UHWA-VR&currency=USD&intent=capture&enable-funding=venmo" data-sdk-integration-source="integrationbuilder"></script>
<script>

    var image = "{{request()->query("a") }}";
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
