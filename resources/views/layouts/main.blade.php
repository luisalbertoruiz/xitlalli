<!DOCTYPE html>
<html lang="es-MX">
	<head>
        <title>@yield('title')</title>
		@include('layouts.metas')
        @include('layouts.styles')
	</head>
	<body>
		<div class="contenedor">
			@include('menus.side')
	        <div class="contenido">
				@yield('contenido')
	        </div>
		</div>
        @include('layouts.scripts')
	</body>
</html>
