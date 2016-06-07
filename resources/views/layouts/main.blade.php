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
				<div class="encabezado"></div>
				<div class="col-md-12">
					<div class="panel panel-default sombra">
						<div class="panel-heading">
							<div class="panel-title">
								<i class="fa fa-send"></i> Encabezado
							</div>
							<div class="panel-actions">
								<button type="button" name="button" class="btn btn-success pull-right">
									<i class="fa fa-inbox"></i> aceptar
								</button>
							</div>
						</div>
						<div class="panel-body">
							<table class="table table-bordered">
							    <thead>
							      <tr>
							        <th>Firstname</th>
							        <th>Lastname</th>
							        <th>Email</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>John</td>
							        <td>Doe</td>
							        <td>john@example.com</td>
							      </tr>
							      <tr>
							        <td>Mary</td>
							        <td>Moe</td>
							        <td>mary@example.com</td>
							      </tr>
							      <tr>
							        <td>July</td>
							        <td>Dooley</td>
							        <td>july@example.com</td>
							      </tr>
								  <tr>
							        <td>John</td>
							        <td>Doe</td>
							        <td>john@example.com</td>
							      </tr>
							      <tr>
							        <td>Mary</td>
							        <td>Moe</td>
							        <td>mary@example.com</td>
							      </tr>
							      <tr>
							        <td>July</td>
							        <td>Dooley</td>
							        <td>july@example.com</td>
							      </tr>
							    </tbody>
							  </table>
						</div>
						<div class="panel-footer">
							<button type="button" name="button" class="btn btn-danger pull-right">
								<i class="fa fa-send"></i> peligro
							</button>
							<button type="button" name="button" class="btn btn-warning pull-right">
								<i class="fa fa-tags"></i> atención
							</button>
							<button type="button" name="button" class="btn btn-info pull-right">
								<i class="fa fa-star"></i> informate
							</button>
						</div>
					</div>
				</div>
				@yield('contenido')
	        </div>
		</div>
        @include('layouts.scripts')
	</body>
</html>
