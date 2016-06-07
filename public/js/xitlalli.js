$(document).ready(function() {
    var $pantalla = $(window);
    $body             = $('body');
	$contenedor       = $body.find('.contenedor');
	$menuContenedor   = $contenedor.find('.menu-contenedor');
	$menuTitulo       = $contenedor.find('.menu-titulo');
	$menuNavegacion   = $contenedor.find('.menu-navegacion');
	$menuBoton        = $contenedor.find('.menu-boton');
	$paginaContenedor = $contenedor.find('.pagina-contenedor');
	menuEstado        = 'abierto';
	dimensiones       = {
		pantallaGrande: [992, -1],
		pantallaTableta:[768, 991],
		pantallaMovil:  [0, 767]
	};
    var submenu = $menuNavegacion.find('li').has('ul');
    var dimensionActual = function() {
        var ancho = $pantalla.width();
    	for(var nombre_dimension in dimensiones)
    	{
    		var dimension = dimensiones[nombre_dimension],
    		min = dimension[0],
    		max = dimension[1];
    		if(max == -1) max = ancho;
    		if(min <= ancho && max >= ancho){
    			return nombre_dimension;
            }
    	}
    	return null;
    }
    var preparaMenu = function(dimension) {
        if (dimension === "pantallaGrande") {
            $menuContenedor.addClass('menu-abierto');
        } else if (dimension === "pantallaTableta") {
            $menuContenedor.addClass('menu-cerrado');
            $menuNavegacion.find('li a span').hide();
            submenu.removeClass('abierto');
        } else if (dimension === "pantallaMovil") {
            $menuContenedor.addClass('menu-minimizado');
        }
    }
    var cambiarMenu = function(dimension) {
        if (dimension !== "pantallaMovil") {
            if ($menuContenedor.hasClass('menu-cerrado')) {
                $menuContenedor.removeClass('menu-cerrado');
                $menuContenedor.animate({width: '250px'}, 500, function(){
                    $menuContenedor.addClass('menu-abierto');
                });
            } else {
                $menuContenedor.removeClass('menu-abierto');
                ocultar();
                submenu.removeClass('abierto');
                $menuContenedor.animate({width: '60px'}, 500, function(){
                    $menuContenedor.addClass('menu-cerrado');
                });
            }
        } else {
            $menuNavegacion.toggle(300);
        }
    }
    var redimencionar = function(dimension){
    	$menuContenedor.removeClass('menu-cerrado menu-abierto menu-minimizado');
        $menuContenedor.removeAttr('style');
        $menuContenedor.find('ul').removeAttr('style');
    	if(dimension == 'pantallaGrande') {
            $menuNavegacion.find('li ul').hide();
            $menuContenedor.addClass('menu-abierto');
    	}
    	if(dimension == 'pantallaTableta'){
            $menuContenedor.addClass('menu-cerrado');
            $menuNavegacion.find('li a span').hide();
            submenu.removeClass('abierto');
    	}
        if(dimension == 'pantallaMovil'){
            $menuContenedor.addClass('menu-minimizado');
    	}
    }
    var ocultar = function() {
        $menuTitulo.find('p').hide();
        $menuNavegacion.find('li a span').hide();
        $menuNavegacion.find('li ul').hide();
    }
    preparaMenu(dimensionActual());
    $(window).resize(function(event) {
		redimencionar(dimensionActual());
	});
    $('.menu-boton').on('click', function(event) {
        event.preventDefault();
        cambiarMenu(dimensionActual());
    });
	submenu.each(function(index, el) {
		$(this).addClass('sub-menu');
	});
	submenu.find('>a').click(function(event){
		event.preventDefault();
		if($(this).parent().hasClass('abierto') && ($menuContenedor.hasClass('menu-abierto') || $menuContenedor.hasClass('menu-minimizado'))){
			$(this).parent().removeClass('abierto');
			$(this).parent().find('ul').slideUp(300);
		} else if(!$(this).parent().hasClass('abierto') && ($menuContenedor.hasClass('menu-abierto') || $menuContenedor.hasClass('menu-minimizado'))){
			submenu.find('ul').slideUp(300);
			submenu.removeClass('abierto');
			$(this).parent().addClass('abierto');
			$(this).parent().find('ul').slideDown(300);
		}
	});
});
