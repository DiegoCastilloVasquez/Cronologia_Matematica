# Cronología Matemática

Una línea de tiempo web interactiva que presenta la historia de las matemáticas a través de los principales matemáticos desde la antigüedad hasta la Edad Media.

## Descripción

Este proyecto visualiza cronológicamente las contribuciones de los padres de las matemáticas, mostrando sus biografías, períodos de vida y lugares de origen en una línea de tiempo atractiva y responsiva. La línea de tiempo alterna las tarjetas a izquierda y derecha de una línea central, creando una experiencia visual intuitiva para explorar la evolución histórica de las matemáticas.

## Características

- **Línea de tiempo interactiva**: Visualización cronológica de matemáticos desde 1680 a.C. hasta el siglo IX d.C.
- **Diseño responsive**: Se adapta a diferentes tamaños de pantalla (móviles, tablets, escritorio)
- **Tarjetas informativas**: Cada matemático incluye:
  - Nombre
  - Fechas de nacimiento y fallecimiento (con indicación a.C./d.C.)
  - Lugares de nacimiento y fallecimiento
  - Breve resumen biográfico y contribuciones
- **Visualización alternada**: Las tarjetas se alternan a izquierda y derecha para mejor legibilidad
- **Código limpio y modular**: Separación de datos (JSON/JS), estilos (CSS) y lógica (JavaScript)

## Tecnologías utilizadas

- **HTML5**: Estructura semántica de la página
- **CSS3**: Estilos modernos con diseño responsive (media queries, flexbox)
- **JavaScript (ES6)**: Renderizado dinámico del contenido
- **JSON**: Estructura de datos para la información de los matemáticos

## Estructura del proyecto

```
.
├── index.html          # Archivo principal HTML
├── estilos.css         # Estilos CSS para la línea de tiempo
├── script.js           # Lógica JavaScript para renderizar la línea de tiempo
├── datos.js            # Array JavaScript con datos de los matemáticos
├── datos.json          # Versión JSON de los datos
└── README.md           # Este archivo
```

## Cómo usar

Visita la [web](https://diegocastillovasquez.github.io/Cronologia_Matematica).

## Datos incluidos

La línea de tiempo incluye más de 100 matemáticos históricos, desde:

- **Ahmes** (1680-1620 a.C.) - Escriba egipcio del Papiro Rhind
- **Thales de Mileto** (624-547 a.C.) - Primer matemático griego conocido
- **Pitágoras de Samos** (570-490 a.C.) - Teorema de Pitágoras
- **Euclides de Alejandría** (325-265 a.C.) - Autor de "Los Elementos"
- **Arquímedes de Siracusa** (287-212 a.C.) - Cálculo integral temprano
- **Hipatia de Alejandría** (370-415 d.C.) - Primera mujer matemática
- **Al-Juarismi** (780-850 d.C.) - Padre del álgebra
- Hasta matemáticos del siglo IX como **Brahmagupta** y **Alcuin de York**

### Fuente de datos
Los datos han sido obtenidos y adaptados de [MacTutor History of Mathematics Archive](https://mathshistory.st-andrews.ac.uk), un recurso académico reconocido sobre la historia de las matemáticas.

## Personalización

### Formato del JSON
El archivo `datos.js` o `datos.json` tiene la siguiente estructura:

```javascript
{
    "nombre": "Nombre del matemático",
    "fecha_nacimiento": año,
    "era_nacimiento": "a. C." o "d. C.",
    "fecha_fallecimiento": año o null,
    "era_fallecimiento": "a. C." o "d. C." o "",
    "lugar_nacimiento": "Lugar de nacimiento",
    "lugar_fallecimiento": "Lugar de fallecimiento" o "",
    "resumen": "Descripción de sus contribuciones matemáticas."
}
```

## Licencia

Este proyecto está disponible para uso educativo y personal. Los datos biográficos están basados en información de dominio público del MacTutor History of Mathematics Archive.

## Créditos

- **Datos históricos**: MacTutor History of Mathematics Archive, University of St Andrews
- **Desarrollo**: Proyecto educativo para visualización histórica de las matemáticas desarrollada por [Diego](https://diegocastillovasquez.github.io/Portafolio_de_Diego)

---

*"Las matemáticas son la reina de las ciencias y la aritmética es la reina de las matemáticas." - Carl Friedrich Gauss*