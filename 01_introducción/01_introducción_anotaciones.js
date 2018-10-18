

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
					una vez cargado el csv lo llamaremos el source, este tiene:
						- los campos
						- el tipo de campo
							- numérico
							- categórico
							- fecha/hora
							- items: posee varias etiquetas (características) separadas por comas. Ejemplo: pan, jamón serrano, tomate
							- texto: cuando no esta delimitado con etiquetas o estas superan las 1000. Se puede analizar el texto completo, configurar su idioma, hacer uppercase o usar la lematización.
								valor para tokenize:full terms only


		2.2 Ingeniería de atributos antes del modelado
			- Feature engineering para el aprendizaje

	-los algoritmos  de aprendizaje

/*
 * MÓDULO 3. Soluciones De Machine Learning: Aprendizaje Supervisado
 */

	Video A
		- Problemas de aprendizaje supervisado: el modelo aprende de datos etiquetados por un experto.
			- clasificación, modelo árbol de decisión
			- regresión
		- Aprendizaje no supervisado: el modelo aprende de datos no etiquetados.
			- como el clustering, detección de anormalias y las asociaciones.
 
	- Clasificación y regresión: árboles de decisión 
	
//xxxxxxxxxxxxxx
1 ¿Se pueden usar estos datos para determinar si un nuevo paciente es diabético usando Machine Learning?
Sí, porque las tablas incluyen información relevante sobre los factores que pueden influir en el diagnóstico para cada paciente y el propio diagnóstico.
2. Respecto al formato de los datos de la pregunta anterior, ¿están en un formato que permita usarlos en Machine Learning?
No todos, ya que sólo los datos de la tabla de diagnósticos tienen la estructura necesaria: una fila por usuario y una columna por cada propiedad o atributo que queremos usar en el aprendizaje.
3. ¿Qué transformaciones o procesos deberíamos utilizar para preparar dichos datos para el aprendizaje?
Deberíamos usar pivoting sobre las filas de cada usuario de la tabla de pruebas analíticas y construir una única tabla con una fila por paciente. En dicha tabla tendríamos por columnas: glucosa, insulina, edad y diagnóstico de cada paciente.
4. Los tipos de cada campo que usamos en Machine Learning determinan cómo va a tratar los datos el algoritmo para aprender, y por lo tanto es importante que sean correctos.¿Cuáles son los tipos de cada uno de los campos que contiene el fichero Diabetes_es_ext.csv?
El campo Fecha de diagnóstico es de tipo fecha/hora y se ha expandido automáticamente en sus componentes. Todos los demás son numéricos excepto el campo Diabetes que es categórico, el campo Medicación previa que es de tipo items y el campo Observaciones que es de tipo texto.
5. ¿Cuáles de estas afirmaciones son ciertas?
El Dataset contiene 768 instancias útiles para el Machine Learning, aunque los campos Medicación previa y Observaciones tienen valores ausentes (754 y 755 respectivamente). El campo Fecha de diagnóstico contiene dos errores y los campos derivados de él (Fecha de diagnóstico.year, etc.) estarán ausentes en esos dos casos. El rango de valores del campo Glucosa va del 0 al 199.
