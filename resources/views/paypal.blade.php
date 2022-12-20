<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
          content="Keep the Magic of Christmas ALIVE! Show the kids Santa in front of YOUR TREE caught on camera!"/>
    <title>We Caught Santa - Catch Santa in YOUR Home!</title>
    <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/external/all.css')}}"/>
    <link rel="stylesheet" href="{{asset('assets/external/jquery.fancybox.min.css')}}">
    <!-- <script src="{{asset('assets/external/jquery-3.3.1.slim.min.js')}}"></script> -->
    <!-- <script src="{{asset('assets/external/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/external/popper.min.js')}}"></script> -->
    <script src="https://js.braintreegateway.com/web/3.57.0/js/client.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/venmo.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/data-collector.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

   <script>

   </script>
    <style>
        footer p{

    font-family: 'Bebas Neue', cursive;
        }
    body {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
           #paypal-button-container .paypal-button-label-container,
           #paypal-button-container .paypal-button,
           #paypal-button-container .paypal-button-row.paypal-button-layout-vertical,
           #paypal-button-container .paypal-button > .paypal-button-label-container{
                display: none!important;
                visibility: hidden!important;
            }


        @media only screen and (min-width: 320px) {
            .bg-santa-img {
                background-image: url(<?php echo  $_ENV['IMAGE_URL'].request()->query("a"); ?>);
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 100%;
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
                border: 3px solid gray;
                margin-top: 20px !important;
                margin: auto;
                width: 100%;
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
                width: 100%;
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
                width: 100%;
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
                width: 100%;
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
.hide{
    display: none;
}

    </style>
</head>
<body oncontextmenu="return false">

<div class="main-boody">
    <header class="main-header">
        <!-- <h1 class="text1">WE CAUGHT SANTA!</h1>
        <h1 class="text2">Custom Pictures of Santa under YOUR TREE!</h1> -->
        <img src="{{asset('assets/imgs/header.jpg')}}" class="w-100" alt="">
    </header>

    <div class="main-area">
        <div class="overlay-clr">
            <div class="itro-text padding">
                <!-- <div class="pt-1">
                    <h1 class="text5">{{$custom_text->custom_text}}</h1>

                </div>
                <div class="santa-profile">
                    <img src="{{asset('assets/imgs/santa12.png')}}" class="santa-dp">
                    <h1 class="text6">${{$price}}</h1>
                </div> -->

                <img src="{{asset('assets/imgs/paymentheader.jpeg')}}" class="w-100" alt="missing">
            <!-- <div class="bg-santa-img">
                        <img src="{{asset('assets/imgs/santa12.png')}}"  class="santa-dp4">
                    </div> -->
                <div class="bg-santa-img">

                    <p class="rotingtxt">{{$watermark}} </p>

                </div>

                <div style="padding: 15px 15px 0 15px;" class="btnz" id="paypal-button-container">
                    <div class="">
                        <button type="button" class="btn btn-primary card-paymnet-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Card Payment</button>
                    </div>
                </div>
                <!-- Button trigger modal -->
                <!-- Button trigger modal -->
                        <!-- Modal -->
                        <div class="modal fade card-payment" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-dark" id="exampleModalLabel"><strong>Payment Details</strong></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="panel panel-default credit-card-box">
                                            <!-- <div class="panel-heading display-table">
                                                <h3 class="panel-title"></h3>
                                            </div> -->
                                            <div class="panel-body">
                                                @if (Session::has('success'))
                                                    <div class="alert alert-success text-center">
                                                        <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                                                        <p>{{ Session::get('success') }}</p>
                                                    </div>
                                                @endif
                                                <form
                                                    role="form" action="{{ route('stripe.post')}}" method="post" class="require-validation"
                                                    data-cc-on-file="false" data-stripe-publishable-key="{{ env('STRIPE_KEY') }}" id="payment-form">
                                                    @csrf
                                                    <div class='form-row row'>
                                                        <div class='col-xs-12 col-12 form-group required text-start'>
                                                            <input type="hidden" name="image" value="{{request()->query("a")}}">
                                                            <label class='control-label'>Name on Card</label> <input class='form-control' size='4' type='text'>
                                                        </div>
                                                    </div>
                                                    <div class='form-row row'>
                                                         <div class='col-xs-12 form-group required text-start'>
                                                            <label class='control-label'>Card Number</label> <input autocomplete='off' class='form-control card-number' size='20' type='text'>
                                                        </div>
                                                    </div>
                                                    <div class='form-row row'>
                                                        <div class='col-xs-12 col-md-4 form-group cvc required'>
                                                            <label class='control-label'>CVC</label>
                                                            <input autocomplete='off' class='form-control card-cvc' placeholder='ex. 311' size='4' type='text'>
                                                        </div>
                                                        <div class='col-xs-12 col-md-4 form-group expiration required'>
                                                            <label class='control-label'>Expiration Month</label>
                                                            <input class='form-control card-expiry-month' placeholder='MM' size='2' type='text'>
                                                        </div>
                                                        <div class='col-xs-12 col-md-4 form-group expiration required'>
                                                            <label class='control-label'>Expiration Year</label>
                                                            <input class='form-control card-expiry-year' placeholder='YYYY' size='4' type='text'>
                                                        </div>
                                                    </div>
                                                    <div class='form-row row'>
                                                        <div class='col-md-12 error form-group hide'>
                                                            <div class='alert-danger alert'>Please correct the errors and try again.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <button class="btn btn-primary btn-lg btn-block" type="submit">Pay Now
                                                                (${{$price}})
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                <!-- Card payment End -->

                <div class="payment-method mt-0">
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card1.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card2.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card3.png')}}" class="img-size"></div>
                    <div class="payment-cards"><img src="{{asset('assets/imgs/card4.png')}}" class="img-size"></div>
                    <div class=""></div>
                    <div class=""></div>
                </div>
                <div class="catch radius mbottom">
                    <a href="{{url()->previous()}}">
                        <button type="button" class="btn red font-text bg-transparent w-100"><img
                                src="{{asset('assets/imgs/returntoeditor.png')}}" alt="missing" class="w-100"></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <footer class="bg-dark text-center py-2 ">
        <p class="text-white mb-0">"Having trouble?  E-mail: <a href=" info@b3events.net">info@b3events.net</a></p>
    </footer>
</div>
</body>
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>



<script type="text/javascript">



    $(function() {
        /*------------------------------------------

        --------------------------------------------

        Stripe Payment Code

        --------------------------------------------

        --------------------------------------------*/

        var $form = $(".require-validation");

        $('form.require-validation').bind('submit', function(e) {

            var $form = $(".require-validation"),

                inputSelector = ['input[type=email]', 'input[type=password]',

                    'input[type=text]', 'input[type=file]',

                    'textarea'].join(', '),

                $inputs = $form.find('.required').find(inputSelector),

                $errorMessage = $form.find('div.error'),

                valid = true;

            $errorMessage.addClass('hide');
            $('.has-error').removeClass('has-error');

            $inputs.each(function(i, el) {

                var $input = $(el);

                if ($input.val() === '') {

                    $input.parent().addClass('has-error');

                    $errorMessage.removeClass('hide');

                    e.preventDefault();

                }

            });

            if (!$form.data('cc-on-file')) {

                e.preventDefault();

                Stripe.setPublishableKey($form.data('stripe-publishable-key'));

                Stripe.createToken({

                    number: $('.card-number').val(),

                    cvc: $('.card-cvc').val(),

                    exp_month: $('.card-expiry-month').val(),

                    exp_year: $('.card-expiry-year').val()

                }, stripeResponseHandler);

            }
        });



        /*------------------------------------------

        --------------------------------------------

        Stripe Response Handler

        --------------------------------------------

        --------------------------------------------*/

        function stripeResponseHandler(status, response) {

            if (response.error) {

                $('.error')

                    .removeClass('hide')

                    .find('.alert')

                    .text(response.error.message);

            } else {

                /* token contains id, last4, and card type */

                var token = response['id'];
                $form.find('input[type=text]').empty();

                $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");

                $form.get(0).submit();

            }

        }
    });

</script>
</html>
<script>
    /* $(document).on("contextmenu", function (e) {
         e.preventDefault();
     });*/
</script>
{{--&enable-funding=venmo--}}
<script
    src="https://www.paypal.com/sdk/js?client-id={{ env('PAYPAL_CLIENT_ID') }}&currency=USD&intent=capture&disable-funding=credit,card,paylater,bancontact,ideal&enable-funding=venmo"
    data-sdk-integration-source="integrationbuilder"></script>
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
                            value: "{{$price}}"
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
        }).finally(() => {


    });

    $(window).on('keydown', function (event) {
        if (event.keyCode == 123) {
            return false; //Disable F12
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false; //Disable ctrl+shift+i
        } else if (event.ctrlKey && event.keyCode == 73) {
            return false; //Disable ctrl+shift+i
        } else if (event.ctrlKey && event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 117) {
            return false; //Disable ctrl+shift+i
        }
    });

</script>

