<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paypal</title>
    <link rel="stylesheet" href="{{asset('assets/Css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/Css/responsive.css')}}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" ></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/client.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/venmo.min.js"></script>
    <script src="https://js.braintreegateway.com/web/3.57.0/js/data-collector.min.js"></script>
</head>
<body>
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
                        <img src="{{asset('assets/imgs/santa12.jpeg')}}" class="santa-dp">
                        <h1 class="text6">$5.00</h1>
                    </div>
                    <div class="bg-santa-img1">
                        <img src="{{asset('assets/imgs/santa12.jpeg')}}"  class="santa-dp4">
                    </div>
                    <div class="paypal">
                        <!-- <i class="fa-brands fa-paypal"></i> -->
                     <a href="{{route('payment')}}">   <i class="fab fa-paypal"></i>
                     Pay<span class="sky-clr">Pal</span></a>
                    </div>
                    <div class="paypal text-white venmo">
                     <a id="venmo-button" href="">venmo</a>
                    </div>
                    <div class="paypal text-white credit">
                        <!-- <i class="fa-brands fa-paypal"></i> -->
                        <i class="fab fa-paypal"></i>
                        PayPal CREDIT
                       </div>
                       <div class="payment-method">
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card1.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card2.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card3.png')}}" class="img-size"></div>
                        <div class="payment-cards"><img src="{{asset('assets/imgs/card4.png')}}" class="img-size"></div>
                        <div class=""></div>
                        <div class=""></div>
                           </div>
                           <div class="catch radius mbottom">          
<button type="button" class="btn red font-text bg-transparent w-100">
OR RETURN TO EDITOR
  </button>
  </div>
                  </div>
            </div>
        </div>
    </div>
</body>
</html>
<script>
    var venmoButton = document.querySelector('#venmo-button');
    // Create a client.
    braintree.client.create({
        authorization: 'sandbox_ndjzxsgy_b63nj7pb5jbss2d5'
    }, function (clientErr, clientInstance) {
        // Stop if there was a problem creating the client.
        // This could happen if there is a network error or if the authorization
        // is invalid.
        console.log("clientInstance:",clientInstance);
        if (clientErr) {
            console.error('Error creating client:', clientErr);
            return;
        }

        braintree.dataCollector.create({
            client: clientInstance,
            paypal: true
        }, function (dataCollectorErr, dataCollectorInstance) {
            if (dataCollectorErr) {
                // Handle error in creation of data collector.
                console.log(dataCollectorErr);
                return;
            }

            // At this point, you should access the deviceData value and provide it
            // to your server, e.g. by injecting it into your form as a hidden input.
            console.log('dataCollectorInstance:', dataCollectorInstance);
            console.log('Got device data:', dataCollectorInstance.deviceData);

        });


        function displayVenmoButton(venmoInstance) {
            // Assumes that venmoButton is initially display: none.
            venmoButton.style.display = 'block';
            venmoButton.addEventListener('click', function () {
                venmoButton.disabled = true;

                venmoInstance.tokenize(function (tokenizeErr, payload) {
                    venmoButton.removeAttribute('disabled');

                    if (tokenizeErr) {
                        handleVenmoError(tokenizeErr);
                    } else {
                        handleVenmoSuccess(payload);
                    }
                });
            });
        }

        function handleVenmoError(err) {
            if (err.code === 'VENMO_CANCELED') {
                console.log('App is not available or user aborted payment flow');
            } else if (err.code === 'VENMO_APP_CANCELED') {
                console.log('User canceled payment flow');
            } else {
                console.error('An error occurred:', err.message);
            }
        }
        braintree.venmo.create({
            client: clientInstance,
            // Add allowNewBrowserTab: false if your checkout page does not support
            // relaunching in a new tab when returning from the Venmo app. This can
            // be omitted otherwise.
            allowNewBrowserTab: false
        }, function (venmoErr, venmoInstance) {
            if (venmoErr) {
                console.error('Error creating Venmo:', venmoErr);
                return;
            }
            console.log("venmoInstance:",venmoInstance);
            // Verify browser support before proceeding.
            if (!venmoInstance.isBrowserSupported()) {
                console.log('Browser does not support Venmo');
                return;
            }
            displayVenmoButton(venmoInstance);

            // Check if tokenization results already exist. This occurs when your
            // checkout page is relaunched in a new tab. This step can be omitted
            // if allowNewBrowserTab is false.
            if (venmoInstance.hasTokenizationResult()) {
                venmoInstance.tokenize(function (tokenizeErr, payload) {
                    if (err) {
                        handleVenmoError(tokenizeErr);
                    } else {
                        handleVenmoSuccess(payload);
                    }
                });
                return;
            }
        });
    });


    function handleVenmoSuccess(payload) {
        // Send the payment method nonce to your server, e.g. by injecting
        // it into your form as a hidden input.
        console.log('Got a payment method nonce:', payload.nonce);

        // Display the Venmo username in your checkout UI.
        console.log('Venmo user:', payload.details.username);
        var amount = 1;

        //test nonce for venmo
        payload_nonce = "fake-venmo-account-nonce";

        //uncomment this for live integration
        var payerID = payload_nonce;//payload.nonce;
        var deviceDataToken = '{"correlation_id":"bc850bc0840ab2d9e1d34842d0e3ffa5"}';
        var deviceData = encodeURI(deviceDataToken);

        window.location = "/Directory_name/venmo_server.php/?payerID=" + payerID + "&deviceData=" + deviceData+ "&amount=" + amount;
    }

</script>
