<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
$uri1 = $this->uri->segment(3);

$about = '';
$contact = '';
$home = '';
if($uri1 == 'mindtalk' OR $uri1 == 'tos'){
    $about = "active";
}elseif($uri1 == 'contact'){
    $contact = "class='active'";
} else{
    $home = "class='active'";
}

?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?=$title?></title>
        <meta name="description" content="<?=$description?>" />
        <meta name="keyword" content="<?=$keyword?>" />
        <link rel="stylesheet" href="<?=base_url()?>css/style.css" />
        <script src="<?=base_url()?>js/modernizr.js"></script>
        <style>
            #web-tab{background:url(<?=base_url()?>images/strip1.png) no-repeat center -483px transparent}
            #desktop-tab{background:url(<?=base_url()?>images/strip1.png) no-repeat center -363px transparent}
            #mobile-tab{background:url(<?=base_url()?>images/strip1.png) no-repeat center -603px transparent}
            #img-des-tab #pro{background:url(<?=base_url()?>images/strip2.png) no-repeat center 0 transparent}
            #img-des-tab #qua{background:url(<?=base_url()?>images/strip2.png) no-repeat center -142px transparent}
            #img-des-tab #tec{background:url(<?=base_url()?>images/strip2.png) no-repeat center -71px transparent}
            #facebook{background:url(<?=base_url()?>images/sm-icons.png) no-repeat center 0 transparent}
            #inner-logo{background:url(<?=base_url()?>/images/logo-mindtalk.png) no-repeat center center transparent;}
            .portfolio-item-block .portfolio-item-pic #cfc{background:url(<?=base_url()?>/images/mindtalk.jpg) no-repeat 0 transparent}
            .portfolio-item-block .portfolio-item-pic #ptsl{background: url(<?=base_url()?>/images/mindtalk2.jpg) no-repeat 0 transparent}
        </style>
    </head>
    <body>
        <div id="top-naw" class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li <?=$home?>><a href="<?=base_url()?>"><h4>Home</h4></a></li>
                            <li class="dropdown "><a href="#" class="dropdown-toggle" data-toggle="dropdown"><h4>What We Do <b class="caret"></b></h4></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Desktop Applications Development</a></li>
                                    <li><a href="#">Web Design and Development</a></li>
                                </ul>
                            </li>
                            <li class="dropdown <?=$about?>" ><a href="#" class="dropdown-toggle" data-toggle="dropdown"><h4>About Us <b class="caret"></b></h4></a>
                                <ul class="dropdown-menu">
                                    <li><a href="<?=base_url()?>page/detail/mindtalk">About Mindtalk</a></li>
                                    <li><a href="<?=base_url()?>page/detail/tos">Term of Service</a></li>
                                    <li><a href="http://www.mindtalk.com/MindTalk-Team" target="_blank">Our Team</a></li>
                                </ul>
                            </li>
                            <li ><a href="http://mindtalk.com"><h4>Products</h4></a></li>
                            <li <?=$contact?>><a href="<?=base_url()?>page/detail/contact"><h4>Contact</h4></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <?php $this->load->view($content_template); ?>
        <footer class="navbar navbar-fixed-bottom">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="nav-collapse collapse">
                    <ul class="nav">
                        <li>
                            <a id="fb-link" data-placement="top" rel="tooltip" data-original-title="Like us on facebook" href="https://www.facebook.com/ansvia" target="_blank">
                                <div id="facebook" class="smm"></div>
                            </a>
                        </li>
                        <li class="pull-right">
                            <p>Copyright &copy; <?php echo date('Y'); ?> <abbr title="JogjaDev">surya_black6</abbr>. All rights reserved.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer> 
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="<?=base_url()?>js/script.js"></script>
    </body>
</html>