<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <meta name="description" content="">
    <meta name="keywords" content=""><?php include_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php'); ?>

    <!-- Event snippet for Website lead conversion page -->
    <script>
        gtag('event', 'conversion', {
            'send_to': 'AW-10998516377/55o0CNivvOMDEJmVwPwo'
        });
    </script>


</head>
<style>
    .mb-0 {
        margin-top: 200px;
        color: #000 !important;
    }
</style>

<body class="page-thank-you scheme-light " data-mobile-header-scheme="light" data-mobile-nav-scheme="light">
    <?php include_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header.php'); ?>
    </head><!-- Content -->
    <div id="content-wrapper">
        <!-- <script>gtag('event','conversion',{'send_to':'AW-1052932118/-5XJCLacsgIQlvCJ9gM'})</script> -->
        <div class="">
            <div class="container" id="error-404">
                <div class="row justify-content-center d-flex pt-8 pb-5">
                    <div class="col-md-8">
                        <?php if (isset($_REQUEST['thanksMsg'])) : ?>

                            <h1 class="mb-0">
                                <?= $_REQUEST['thanksMsg']; ?>

                            </h1>
                        <?php elseif (isset($_REQUEST['successMsg'])) : ?>
                            <h1 class="mb-0">
                                <?= $_REQUEST['successMsg']; ?>

                            </h1>
                        <?php endif; ?>
                        <a href="/" class="btn-sm btn btn-solid text-uppercase round btn-bordered border-thin font-size-18 font-weight-semibold mt-4"><span><span class="btn-txt">Back To Home</span></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div><?php include_once($_SERVER['DOCUMENT_ROOT'] . '/includes/footer.php'); ?>
</body>

</html>