# UPEX-Bootcamp

Level-UP Experience (UPEX) for QA 
UPEX BOOTCAMP TESTING METHODOLOGY (UBTM):
Debido a que el programa UPEX no cuenta aún con un ambiente real de Developers, se usará una website o app existente en producción, para determinarlo como nuestro SOFTWARE UNDER TEST (SUT).

 

1ra FASE: SINCRONIZACIÓN DE FLUJO DE TRABAJO
En Confluence, cada tester podrá chequear y documentarse tanto de los proyectos del Bootcamp (websites o aplicaciones) como también de las herramientas de Jira y sus integraciones (XRay y Slack). 

☑️Etapa 1: KNOWLEDGE TRANSFER (KT)
En esta fase, el tester deberá pasar por el proceso “KT”, el cual significa “Transferencia de Conocimientos”, cuyo procedimiento es obtener unas clases especiales por Google Meet (o Stream) acerca de las herramientas de trabajo, procesos laborales y demás.

PD: En una verdadera empresa, también existe esta pequeña fase, el cual es cuando comienzas en un proyecto (nuevo o en mantenimiento), cuyo propósito se basa en hacer Reuniones consecutivas, para transferirle el conocimiento al otro lo más pronto posible acerca de Todo sobre el Proyecto.

☑️Etapa 2: DEMO - FUNCTIONAL WALKTHROUGH (FWT)
En esta fase, el tester deberá realizar varias reuniones “FWT”, el cual significa “Recorrido de Funcionalidad”, cuyo procedimiento, primero se comienza por una DEMO FWT, la cual describe eficientemente todas las funcionalidad del SUT (o al menos gran parte del mismo, como si fuera un resumen). Dicha actividad se lleva a cabo mediante Stream. 

Las DEMO son reuniones largas donde se le enseña -en líneas generales- todas las funcionalidades del SUT.

Los FWT son pequeñas reuniones donde se le enseña a los testers cómo usar una o varias funciones específicas del SUT (como un tutorial específico).

 

2da FASE: PLANIFICACIÓN DE PRUEBAS
Una vez todos los miembros se encuentren habilitados en el poryecto UPEX BOOTCAMP en Jira, y toda la configuración estté hecha, se procederá entonces a la etapa de planificación de pruebas (es aquí cuando ya comienzan las labores que todo QA debe conocer más):

☑️Etapa 6: Elaboración del Test Planning (versión corta) (con Confluence)
Antes de comenzar con la etapa de desarrollo de pruebas, siempre será necesario un "Plan de Pruebas" (Test Plan o TP), el cual es elaborado por el Líder QA en un equipo de trabajo. Para ello, se creará un archivo correspondiente en Confluence llamado: "Test Plan" (TP). Este documento es esencial para indicar el alcance de las pruebas, recursos (dispositivos de pruebas), los enfoques de pruebas (tipos de testing, técnicas, etc.), los horarios, roles y responsabilidades de cada tester en el Sprint, y los riesgos de pruebas (obstáculos y límites).

En el BOOTCAMP de UPEX, el Test Plan será elaborado de forma sencilla y concisa, colocando solamente los puntos más importantes.

PD: Esta tarea realmente no la realizará el tester, pero es bueno que se guíe por esta documentación.

☑️Etapa 7: Elaboración del Test Design Strategy (TDS) (con Confluence)
Luego de haber elaborado el Test Plan, se procederá a realizar "La Estrategia de Prueba" o bien llamado: "Test Design Strategy” (TDS), cuyo documento será de guía para el diseño de las pruebas, diseño de los workflows y la organización de ejecución de pruebas con el team. Este documento será únicamente editado por el Líder QA.

En el BOOTCAMP de UPEX, el TDS ya estará elaborado previamente por el Elyer Maldonado (Project Lead), ya que dentro de esta medodología, se manejará la misma estrategia y diseño para todos los SUT que se agreguen al Bootcamp.

 

3ra FASE: DESARROLLO DE PRUEBAS
En cada Sprint se desarrollarán los procesos y tareas de Testing, según las instrucciones del Test Plan (como si estuviéramos en una empresa). Comenzando con el análisis de las US (en método BDD), luego con el desarrollo de las Incidencias de Pruebas de tal Feature (usando el Diseño de pruebas explicado en el TDS).

☑️Etapa 8: Elaboración del Test Set (o Test Suite) y Test Execution a partir de cada US
Antes de empezar a realizar los Escenarios o Casos de Pruebas, con X-Ray de Jira, se deberá crear un "Test Set” (Set de Pruebas o también conocido como Test Suite, Test Cycle). Cada Tester deberá realizar su propio Test Set a partir de la US en la que estén trabajando. El nombre de cada Test Set creado, debe tener el ID y título de la US para identificarlos; porque cada US tiene su propio Set de Pruebas.

El contenido de un Test Set es para definir la estretegia de casos de pruebas para la US trabajada, aplicando lo que se llama BBTT (Black Box Testing Techniques) o Técnicas de Testing, para así derivar cuántos casos de pruebas se realizarían para hacer una completa Cobertura de Pruebas suficientemente buena para la feature.

Cada Test Set que se cree, debe estar linkeado al correspondiente Test Execution de su US.

Al igual que crear un Test Set por US, también debe crearse un Test Execution correspondiente, cuyo contenido es simplemente para albergar los Test para su Ejecución.

Como resumen, cada US debe tener una tarea de Test Set (que sería la tarea de diseñar las pruebas) y una de Test Execution (que sería la tarea de ejecutar las pruebas). Debe haber siempre estas 2 incidencias por cada US.

☑️Etapa 9: Elaboración de CASOS DE PRUEBAS (Test Cases) a partir de cada US
Esta es la etapa principal y más larga de trabajar de un Tester.
Cada tester deberá realizar sus Test de acuerdo al planteamiento de diseño y organización del Test Plan y Test Design Strategy, usando las herramientas de Jira: X-Ray y Google Sheet para su creación.

En cada elaboración de prueba, primero se analiza la Historia de Usuario a trabajar, cuya incidencia de Jira deberá tener todos los detalles necesarios para derivar los Test:

"Como/Quiero/Para" para conocer la descripción general de la Story.

"Rules Spec" (Especificaciones de Reglas) para conocer cada regla del negocio del SUT.

y Los Criterios de Aceptación, de lenguaje Gherkin: "Given/When/Then" (también pueden estar agregadas otras sintaxis como: Background, And, But, etc) para derivar las Precondiciones, Escenarios, Resultados y Pos-condiciones.

Posteriormente al análisis de la US, se procede a crear los "Test" en los Test Set de la US. En este caso con X-Ray de Jira, se puede derivar los Casos de Pruebas directamente desde la incidencia de US con el campo “Test Coverage” debajo de los Criterios de Aceptación, así automáticamente se enlazará una incidencia con la otra. Los pasos son sencillos y se explican en los meetings de UPEX.

Es importante tomar en cuenta, que existen 2 tipos de TEST CASES que se pueden desarrollar, es decir, se puede hacer el Script de forma "Manual" o "BDD" (Cucumber según X-Ray). Ambas son distintas de escribir pero se asemejan; más específico o más rápido respectivamente.

Cada incidencia de "Test" deberá respetar sus transiciones y estados de su "Workflow", cuyo diseño debe estar aclarado y explicado en el Test Design Strategy.

☑️Ceremonia: Daily Sprint (en Slack)
A la par de las tareas de testing, y mientras corre el Sprint, se deberá llevar a cabo las ceremonias: "Daily Sprint" al inicio de cada jornada laboral diaria. Primero, el equipo debe analizar el "Burndown Chart" (BDC) y ver cómo va esa gráfica. Luego entre todos hacerse las 3 preguntas del día: "Qué se hizo ayer?", "Qué se hará hoy?" y "Qué obstáculos tendremos ahora?". Al conversar por unos 15 minutos (exactos) y respondernos las preguntas, se procederá a iniciar las tareas del día teniendo en cuenta lo conversado en esta ceremonia.
En el caso del BOOTCAMP UPEX, aquí deberá reunirse el equipo en Slack por cada nuevo día, y en el tiempo de cada uno, deberá dejar por escrito un reporte del día de esas 3 mismas preguntas, así sin necesidad de hacer un Meeting.

 

4ta FASE: EJECUCIÓN DE PRUEBAS
Una vez finalizado el desarrollo de las pruebas, se procederá a ejecutar las mismas. Normalmente otro tester diferente al que desarrolló las pruebas, será el encargado de ejecutar las mismas. Esto es con el objetivo de obtener un feedback recíproco y comprobar si la redacción de las pruebas es correcta o no.

☑️Etapa 10: Ejecución de Pruebas y Cierre de User Story
En esta instancia, se procede a realizar la Ejecución de pruebas mediante el "Test Execution" correspondiente de una US. El Tester deberá seguir las instrucciones de las pruebas, ya sea que tenga conocimiento suficiente para ejecutarlas con solo leer el Escenario de Prueba o bien ya sea leyendo detenidamente los Steps. Es importante que luego de culminar todas las pruebas de un Test Execution, habrá que cerrar su User Story perteneciente. Para ello, el tester debe asegurarse de transitar todas las incidencias linkeadas: el Test Set (sus Test Cases) y el Test Execution al estado "All DONE" y a su respectiva User Story también.

☑️Etapa 11: Elaboración del “Bug Report” (en caso de descubrir uno)
En esta instancia, en caso de haber encontrado un Bug en la Ejecución de Pruebas, el mismo ejecutor procederá a crear la incidencia BUG, cuya actividad es conocida como "Bug Report". Dicho Reporte de Bug debe estar relacionado y conectado a la incidencia "Test" correspondiente, y visualizarse en la Trazabilidad.

En caso de que un Bug ya haya sido reportado antes, entonces el tester deberá agregar el Bug preexistente en el Caso de Prueba donde lo encontró, colocando el ID del mismo.

Para realizar un reporte de Bug, se deberá seguir el diseño propuesto por la documentación "TDS". Todo reporte debe estar completamente rellenado e informado al equipo.

Cada incidencia de BUG deberá seguir su “Ciclo de Vida del Bug”. Pero en este Proyecto en particular, por no haber un departamente de desarrollo, las transiciones y estados de su "Workflow" serán diferentes, cuyo diseño debe estar aclarado y explicado en el TDS.

 

5ta FASE: CIERRE DE PRUEBAS Y REPORTES
☑️Etapa 12: Análisis de "Métricas de Avance" con el reporte "Burndown Chart" (BDC)
Al finalizar cada Sprint del proyecto, lo primero es revisar y evaluar el reporte "Burndown Chart" (BDC) para apreciar el historial de avance de equipo del Sprint terminado. Luego, se debe exportar dicho reporte a formato Excel y mostrárselo al team en Slack como medio repositorio.

☑️Etapa 13: Análisis y Reporte de “Trazabilidad de Incidencias”
Al finalizar cada Sprint del proyecto, se analizará la Trazabilidad en Jira, con el fin de verificar que haya quedado perfecta y analizar las Métricas de Testing del mismo, como resultante de los Sprints del proyecto. Luego, realizar el correspondiente "Reporte de Trazabilidad de Incidencias" / Issue Traceability Report (ITR). Exportarlo todo a formato Excel para presentarlas al team en Slack como medio repositorio.

☑️Ceremonia: Sprint Retrospective (en Jira)
Una vez finalizado y cerrado un Sprint, se procederá a llevar a cabo la última ceremonia: "Retrospectiva". Aquí deberá reunirse el equipo en un meeting para hacer un procedimiento de introspección cada uno. Se realizará a través de Jira, en el cuál pondrá a prueba el análisis del equipo en cuanto al desarrollo del proyecto con el fin de definir "qué se puede mejorar" para el próximo sprint. En la reunión se medirán las motivaciones, las metas, los obstáculos y el peso del proyecto para plasmar nuevas estrategias.

PD: En un proyecto real, también está la ceremonia "Sprint Review", donde el Product Owner evalúa el desarrollo del proyecto y marca el OK de las tareas realizadas en el Sprint. En el caso de UPEX, no es posible empeñar esta actividad ya que se requiere un producto real en desarrollo.

 

FASE FINAL: CONTINUOUS INTEGRATION (CI)
Aclaratoria en un ambiente real de equipo de trabajo completo:
La CI se utiliza generalmente junto con un flujo de trabajo de desarrollo de software de metodología ágil. Una organización compilará una lista de tareas que constituyan una hoja de ruta de productos. A continuación, estas tareas se distribuyen entre los miembros del equipo de ingeniería de software para la entrega. Al utilizar la CI, estas tareas de desarrollo de software pueden desarrollarse independientemente y en paralelo entre los desarrolladores asignados. Una vez que una de estas tareas esté completa, un desarrollador introducirá el nuevo trabajo en el sistema de CI para integrarlo con el resto del proyecto.

En este caso, en el programa UPEX, con CI haremos lo siguiente:
Cada nueva finalización de Sprint, se va haciendo el correspondiente Deployment al área de “Producción” (que en este caso es una ficticia). Y seguir continuando con los procedimientos, es decir, se deberá repetir las tareas de:

Sprint Planning por cada Sprint nuevo

Sprint Daily por cada día de trabajo

Etapas de Desarrollo y Ejecución por cada duración de un Sprint

Etapas de Cierres, Reportes y Retrospectivas por cada finalización de un Sprint.

Así sucesivamente hasta culminar todas las US del Release del Proyecto.
Una vez terminado todo, y cerrado el Proyecto, los testers miembros tendrán la oportunidad de usar dicho proyecto como portafolio de trabajo y experiencia para demostrar en sus entrevistas de trabajo. También podrán usar toda esta aventura para desenvolverse en las entrevistas de una forma tan seguro como si hubiese trabajado de verdad. Esto es lo que lograría cualquier tester que cumpla con este programa.

UPEX - “Tu primera Experiencia”
