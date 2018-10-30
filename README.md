# Hay-muchas-bacterias-en-nuestro-intestino
A partir de datos de abundancias absolutas, de bacterias identificadas en el intestino humano se pretende conocer cuan compartidas están en una muestra de la población

## What?
OTU (Operational Taxonomic Unit) table, que contiene en las filas las muestras disponibles y en las columnas los nombres de las bacterias encontradas en muestras fecales de cada uno de los individuos, el valor de cada celda corresponde a la abundancia absoluta de cada bacteria en cada muestra disponible.

 - Tipos de datos de interés para la visualización:
 -- Muestra: Categórico de tipo ID
 -- OTU: Categórico de tipo ID
 -- Abundancia absoluta: Ordinal Cuantitativa secuencial (0 - 15000)
 
 ## Why?
 Tarea principal: Idenrificar cuan compartidas se encuentran las bacterias entre las diferentes muestras (Tamara = Summarize:dependency)
 
 Tareas secundarias: 
 - Identificar diferencias entre la distribución de abundancias de las diferentes OTU (Tamara = Identify:Features)
 - Observar cuales OTUs son más abundantes a lo largo de las diferentes personas (Tamara = Locate:Outliers)
 - A partir de los datos originales csv derivar información para crear una topología consistente entre las muestras y las bacterias disponibles (Tamara = Derive:topology)
 
 ## How?
 IDIOM radial network 
 El primer IDIOM dot and linechart para describir la temperatura promedio de cada día (calculada previamente como parte del procesamiento de los datos para obtener la tabla de "AverageTemperature.txt")
 - Marcar: Líneas y Puntos --> El primero para detallar los cambios en la temperatura por días, el segundo para hacer énfasis en el dato de la temperatura para cada día.
 - Canales: posición en x los números de los días de la semana para su uso en un <Arrange-Tables Express>, posición en y de la temperatura en ªC (ninguno de los datos llega temperaturas inferiores a los 10ªC) tambien con un Encode Arrange Tables Express
 - Encode => Express
 
 El segundo IDIOM radial line chart para describir la temperatura por horas de cada uno de los días de la semana (los datos preprocesados se encuentran en "TempByDayHour.txt")
- Marcas: Líneas (Para mostrar las tendencias en los cambios de la temperatura por días
- Canales: posición radial de los valores de temperatura - Encode Radial Axis Orientation, Order Align para cada una de las horas del día para generar los segmentos en los que se divide el gráfico radial y respetar el caracter cíclico de los datos. 

## Insights
- La primera gráfica muestra como a medida que van pasando los días la temperatura promedio tiende a disminuir, a pesar de que el cambio en realidad es de menos de 1ºC 
- En cuanto a la distribución por horas (pendiente de graficar) los datos son limitados tanto para el primer como para el segundo día, obteniendo datos de la tarde para el primer día y de la madrugada para el último día, lo que puede estar sesgando que la temperatura promedio en el último sea más baja
- En el gráfico radial se espera observar como la temperatura tiene una tendencia a aumentar hacia el medio día y a disminuir en las noches, siendo similar en los diferentes días.
 
