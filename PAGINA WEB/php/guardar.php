<?php
	//conectamos Con el servidor
	$conectar=@mysql_connect('localhost','root','');
	//verificamos la conexion
	if(!$conectar){
		echo"No Se Pudo Conectar Con El Servidor";
	}else{

		$base=mysql_select_db('iris');
		if(!$base){
			echo"No Se Encontro La Base De Datos";			
		}
	}
	//recuperar las variables
	$nombre=$_POST['nombre'];
	$Apellidos=$_POST['Apellidos'];
	$Correo=$_POST['Correo'];
	$Celular=$_POST['Celular'];
	$tagenda=$_POST['tagenda'];
	$Presupuesto=$_POST['Presupuesto'];
	//hacemos la sentencia de sql
	$sql="INSERT INTO datos VALUES('$nombre',
								   '$Apellidos',
								   '$Correo,
								   '$Celular',
								   '$tagenda',
								   '$Presupuesto')";
	//ejecutamos la sentencia de sql
	$ejecutar=mysql_query($sql);
	//verificamos la ejecucion
	if(!$ejecutar){
		echo"Hubo Algun Error";
	}else{
		echo"Datos Guardados Correctamente<br><a href='index.html'>Volver</a>";
	}
?>