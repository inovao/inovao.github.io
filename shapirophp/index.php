<!DOCTYPE html>

<html lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
<title>Shapiro MD | Hair Loss Quiz</title>
<link rel="stylesheet" href="css/ui-progress-bar.css">
<link rel="stylesheet" type="text/css" href="css/style.css" />

<!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->

</head>

<body>

<!-- BEGIN BODY -->

<div class="main-wrapper"> 
  
  <!-- BEGIN HEADER -->
  
  <header>
    <div class="wrapper">
      <h1>Will the Shapiro MD&trade; hair loss <br>
        system Work For You Too<span>?</span></h1>
      <span class="header-down"> <span class="arrow"></span> <span class="arrow"></span> </span> </div>
  </header>
  
  <!-- HEADER EOF   --> 
  
  <!-- BEGIN CONTENT -->
  
  <?php 
	session_start();
/*	echo "<pre>";
print_r($_SESSION);
	echo "</pre>";*/
	?>
  <main class="content">
    <form action="" method="post">
    <?php 
	if(empty($_POST['step']) || (int)$_POST['step'] == 0) : 
		include("include/step-0.php");
	elseif((int)$_POST['step'] == 1):
		include("include/step-1.php");	
	elseif((int)$_POST['step'] == 2):
		include("include/step-2.php");	
	elseif((int)$_POST['step'] == 3):
		include("include/step-3.php");	
	elseif((int)$_POST['step'] == 4):
		include("include/step-4.php");	
	elseif((int)$_POST['step'] == 5):
		include("include/step-5.php");	
	elseif((int)$_POST['step'] == 6):
		include("include/finish.php");	
	endif; 
	?>
    	
    <?php 
	if(isset($_POST['step'])) $step = $_POST['step'];
	if(isset($_POST['puncte'])) $puncte = $_POST['puncte'];
	if(isset($_POST['value'])) $value = $_POST['value'];
	?>
      <input type="hidden" name="step" value="<?php echo $step;?>">
      <input type="hidden" name="puncte" value="<?php echo $puncte;?>">
      <input type="hidden" name="value" value="<?php echo $value;?>">
    </form>
  </main>
  
  <!-- CONTENT EOF   -->
  
  <?php include("page-1.php");?>
  <?php include("page-2.php");?>
  
  <!-- BEGIN FOOTER -->
  
  <footer>
    <div class="wrapper">
      <div class="logo"><a href="#"><img src="img/logo.png" alt=""></a></div>
      <ul class="footer-menu">
        <li class="footer-menu__item"> <a href="/returns.php">Return Policy</a> </li>
        <li class="footer-menu__item"> <a href="/privacy.php">Privacy Policy</a> </li>
        <li class="footer-menu__item"> <a href="/anti-spam.php">Anti Spam</a> </li>
        <li class="footer-menu__item"> <a href="/terms.php">Terms of Use</a> </li>
      </ul>
    </div>
  </footer>
  
  <!-- FOOTER EOF   --> 
  
</div>

<!-- BODY EOF   -->

<div class="icon-load"></div>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="js/jquery-migrate.min.js"></script> 
<script type="text/javascript" src="js/custom.js"></script> 


    
<script>

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');



  ga('create', 'UA-90904320-2', 'auto');

  ga('send', 'pageview');



</script> 

<script>

    (function(h,o,t,j,a,r){

        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};

        h._hjSettings={hjid:490890,hjsv:5};

        a=o.getElementsByTagName('head')[0];

        r=o.createElement('script');r.async=1;

        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;

        a.appendChild(r);

    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

</script> 
<script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script> 

<!-- begin olark code --> 

<script type="text/javascript" async>

    ;(function(o,l,a,r,k,y){if(o.olark)return;

    r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];

    y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);

    y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};

    y.extend=function(i,j){y("extend",i,j)};

    y.identify=function(i){y("identify",k.i=i)};

    y.configure=function(i,j){y("configure",i,j);k.c[i]=j};

    k=y._={s:[],t:[+new Date],c:{},l:a};

    })(window,document,"static.olark.com/jsclient/loader.js");

    /* Add configuration calls below this comment */

    olark.identify('9324-309-10-1637');</script> 
<script> olark.configure('system.group', 'c2f517cec43f1043467838fabc6372f5'); /*Routes to Shapiro MD*/ </script> 

<!-- ConnectRetarget PowerPixel --> 

<script>

var CRConfig = {

    'pixel_prefix':'25internalpowerpixel',

    'init_fb':false,

    'fb_pixel_id':'768490633329283'

};

</script> 
<script src='//connectio.s3.amazonaws.com/connect-retarget.js?v=1.1'></script>
<noscript>
<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=768490633329283&ev=PageView&noscript=1' />
</noscript>

<!-- End ConnectRetarget PowerPixel -->

</body>
</html>
