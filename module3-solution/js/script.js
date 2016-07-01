$('#container-1').scrollspy({ target: '.navbar-example' })

$('#navbar-collapse-1 ul li a[href="#Chicken"]').click(function(){
	$('#navbar-collapse-1 ul li a[href="#Chicken"]').parent().attr('class', 'active');
	$('#navbar-collapse-1 ul li a[href="#Beef"]').parent().removeAttr('class');
	$('#navbar-collapse-1 ul li a[href="#Sushi"]').parent().removeAttr('class');
});

$('#navbar-collapse-1 ul li a[href="#Beef"]').click(function(){
	$('#navbar-collapse-1 ul li a[href="#Chicken"]').parent().removeAttr('class');
	$('#navbar-collapse-1 ul li a[href="#Beef"]').parent().attr('class', 'active');
	$('#navbar-collapse-1 ul li a[href="#Sushi"]').parent().removeAttr('class');
});

$('#navbar-collapse-1 ul li a[href="#Sushi"]').click(function(){
	$('#navbar-collapse-1 ul li a[href="#Chicken"]').parent().removeAttr('class');
	$('#navbar-collapse-1 ul li a[href="#Beef"]').parent().removeAttr('class');
	$('#navbar-collapse-1 ul li a[href="#Sushi"]').parent().attr('class', 'active');
});