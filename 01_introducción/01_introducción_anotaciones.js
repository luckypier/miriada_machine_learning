

/*
 * MÓDULO 1. Introducción al Machine Learning
 */

	-	es una disciplina de la AI
	-	es una técnica

	¿Qué es Machine Learning?



	computadores encuentran patrones (reglas, relaciones subyacentes)

/*
 * MÓDULO 2. Nuestros Datos. ¿Están Preparados Para El Machine Learning?
 */


	para el machine learning necesitamos:

	-los datos, entonces:
		2.1. Tipos de datos útiles y su formato
			- ¿Cómo definir un problema de Machine Learning?
				- el sujeto del problema
				- las propiedades del sujeto que influyen en la solución
					- solo las propiedades que son relevantes para la solución
					- asegurar la disponibilidad de datos
					- asegurar las actualización de la data
			- Pasar de la definición del problema a la estructura de los datos
				- Estructurar la data en tablas
					- cada fila es una instancia
					- cada columna es una propiedad
				//- ¿qué transformaciones ayudan al aprendizaje?
				- procesos previos para estrucutrar data:
					-	De-normalización
					-	Agregación, si hay más de una instancia podemos agruparlos con contar, mínimo, máximo, media, etc
					-	Pivoting, similar a agregación, se agrega ṕropiedades que consolidan la repetición de instancias
					-	Ventanas temporales, cuando necesitamos tener los datos de tiempo de una sola instancia, podemos agregarlos como propiedades adicionales. Ejemplo: "Ocurrencias en el año X":10
			 	- exportación a CSV
					
			- el formato de los datos
		2.2 Ingeniería de atributos antes del modelado
			- Feature engineering para el aprendizaje

	-los algoritmos  de aprendizaje
