# Las bacterias son compartidas entre diferentes personas
A partir de datos de abundancias absolutas, de bacterias identificadas en el intestino humano se pretende conocer cuan compartidas están en una muestra de la población

## What?
OTU (Operational Taxonomic Unit) table, que contiene en las filas las muestras disponibles y en las columnas los nombres de las bacterias encontradas en muestras fecales de cada uno de los individuos, el valor de cada celda corresponde a la abundancia absoluta de cada bacteria en cada muestra disponible.

 Tipos de datos de interés para la visualización:
 - Muestra: Categórico de tipo ID
 - OTU: Categórico de tipo ID
 - Abundancia absoluta: Ordinal Cuantitativa secuencial (0 - 15000)
 
 ## Why?
 Tarea principal: Idenrificar cuan compartidas se encuentran las bacterias entre las diferentes muestras (Tamara = Summarize:dependency)
 
 Tareas secundarias: 
 - Identificar diferencias entre la distribución de abundancias de las diferentes OTU (Tamara = Identify:Features)
 - Observar cuales OTUs son más abundantes a lo largo de las diferentes personas (Tamara = Locate:Outliers)
 - A partir de los datos originales csv derivar información para crear una topología consistente entre las muestras y las bacterias disponibles (Tamara = Derive:topology)
 
 ## How?
 IDIOM radial network 
 El primer IDIOM dot and linechart para describir la temperatura promedio de cada día (calculada previamente como parte del procesamiento de los datos para obtener la tabla de "AverageTemperature.txt")
 - Marcas: Líneas y Puntos --> El primero para detallar los datos categóricos como los nodos de la visualización, el segundo para hacer énfasis en la relación entre las bacterias y los individuos de la muestra.
 - Canales: Arrange Networks and Trees --> Node-Link diagram, Separate by forces (Force directed placement) acompañado de un Layout density
 - Encode => "Separate" muestras de bacterias, Map por saturación de color la abundancia absoluta de las bacterias en cada uno de los individuos, éste se complementa con el tamaño de la línea correspondiente (link). Todos los datos se observan en conjunto gracias a un Superimpose 
 

## Insights
- Todas las bacterias tienen un alto número de conexiones con cada una de las personas de la muestra
- Hay varias bacterias cuya abundancia relativa es muy alta entre todas las muestras
- De forma aproximada se puede observar que cerca de 4 o 5 personas tienen una "baja" abundancia de casi todas las bacterias por la palidez de la coloración de todos sus links, dichos individuos 12, 18, 20 y 21, pueden ser de interés, ya que bajas abundancias de bacterias en ocasiones se han relacionado con ciertos estados de enfermedad  

## External Links
Slides: https://docs.google.com/presentation/d/1BKhYl2eR244f0gPyQzwiv3VE-39XMNownsrOCJDtZv4/edit?usp=sharing
Demo: 
 
