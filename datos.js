const datos = [
    {
        "nombre": "Ahmes",
        "fecha_nacimiento": 1680,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 1620,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Egipto",
        "lugar_fallecimiento": "Egipto",
        "resumen": "Ahmes fue el escriba egipcio que redactó el Papiro Rhind, uno de los documentos matemáticos más antiguos que se conocen."
    },
    {
        "nombre": "Baudhayana",
        "fecha_nacimiento": 800,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 800,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "India",
        "lugar_fallecimiento": "India",
        "resumen": "Baudhayana fue el autor de uno de los primeros Sulbasutras: documentos que contienen algunas de las matemáticas indias más antiguas."
    },
    {
        "nombre": "Manava",
        "fecha_nacimiento": 750,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 750,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "India",
        "lugar_fallecimiento": "India",
        "resumen": "Manava fue el autor de uno de los Sulbasutras: documentos que contienen algunas de las matemáticas indias más antiguas."
    },
    {
        "nombre": "Thales de Mileto",
        "fecha_nacimiento": 624,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 547,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Mileto, Asia Menor (ahora Turquía)",
        "lugar_fallecimiento": "Mileto, Asia Menor (ahora Turquía)",
        "resumen": "Thales fue el primer filósofo, científico y matemático griego conocido. Se le atribuyen cinco teoremas de geometría elemental."
    },
    {
        "nombre": "Anaximandro de Mileto",
        "fecha_nacimiento": 611,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 546,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Mileto cerca de Söke, Turquía",
        "lugar_fallecimiento": "",
        "resumen": "Anaximandro de Mileto fue un erudito griego que primero propuso que el sol, la luna y los planetas giraban alrededor de la tierra. Inventó el gnomon de un reloj de sol."
    },
    {
        "nombre": "Apastamba",
        "fecha_nacimiento": 600,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 600,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "India",
        "lugar_fallecimiento": "India",
        "resumen": "Apastamba fue el autor indio de uno de los Sulbasutras más interesantes desde un punto de vista matemático."
    },
    {
        "nombre": "Pitágoras de Samos",
        "fecha_nacimiento": 570,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 490,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Samos, Jonia",
        "lugar_fallecimiento": "",
        "resumen": "Pitágoras fue un filósofo griego que realizó importantes desarrollos en matemáticas, astronomía y teoría musical. El teorema ahora conocido como teorema de Pitágoras era conocido por los babilonios 1000 años antes, pero puede haber sido el primero en demostrarlo."
    },
    {
        "nombre": "Panini",
        "fecha_nacimiento": 520,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 460,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Shalatula (cerca de Attock), ahora Pakistán",
        "lugar_fallecimiento": "India",
        "resumen": "Panini fue un gramático sánscrito que dio una teoría completa y científica de fonética, fonología y morfología."
    },
    {
        "nombre": "Anaxágoras de Clazomenae",
        "fecha_nacimiento": 499,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 428,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Clazomenae (30 km al oeste de Izmir), Lidia (ahora Turquía)",
        "lugar_fallecimiento": "Lampsacus, Misia (ahora Turquía)",
        "resumen": "Anaxágoras fue un matemático griego conocido por ser el primero en introducir la filosofía a los atenienses. Fue encarcelado por afirmar que el Sol no era un dios y que la Luna reflejaba la luz del Sol."
    },
    {
        "nombre": "Ahmes",
        "fecha_nacimiento": 1680,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 1620,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Egipto",
        "lugar_fallecimiento": "Egipto",
        "resumen": "Ahmes fue el escriba egipcio que redactó el Papiro Rhind, uno de los documentos matemáticos más antiguos que se conocen."
    },
    {
        "nombre": "Empédocles de Acragas",
        "fecha_nacimiento": 492,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 432,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Acragas (actual Agrigento, Sicilia, Italia)",
        "lugar_fallecimiento": "Peloponeso, Grecia",
        "resumen": "Empédocles fue un filósofo griego conocido por su creencia de que toda materia estaba compuesta por cuatro elementos: fuego, aire, agua y tierra. Algunos lo consideran el inventor de la retórica y el fundador de la ciencia médica en Italia."
    },
    {
        "nombre": "Enópides de Quíos",
        "fecha_nacimiento": 490,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 420,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Quíos, Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Enópides fue un griego que hizo importantes contribuciones a la astronomía y pudo ser el primero en fijar un valor para la oblicuidad de la eclíptica."
    },
    {
        "nombre": "Zenón de Elea",
        "fecha_nacimiento": 490,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 425,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Elea, Lucania (actual sur de Italia)",
        "lugar_fallecimiento": "Elea, Lucania (actual sur de Italia)",
        "resumen": "Zenón de Elea fue un filósofo griego famoso por plantear paradojas que desafiaron la visión de los matemáticos sobre el mundo real durante muchos siglos."
    },
    {
        "nombre": "Antifonte el Sofista",
        "fecha_nacimiento": 480,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 411,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "(posiblemente) Atenas, Grecia",
        "lugar_fallecimiento": "Atenas, Grecia",
        "resumen": "Antifonte fue un orador y estadista griego que adoptó la retórica como profesión. Fue un sofista y contemporáneo de Sócrates. Hay cierta disputa sobre si hubo uno o dos filósofos con este nombre."
    },
    {
        "nombre": "Leucipo de Mileto",
        "fecha_nacimiento": 480,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 420,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "(posiblemente) Mileto, Asia Menor",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Leucipo fue un filósofo griego que originó la teoría atómica de los indivisibles desarrollada más tarde por Demócrito."
    },
    {
        "nombre": "Hipócrates de Quíos",
        "fecha_nacimiento": 470,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 410,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Quíos, Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Hipócrates fue un matemático griego que trabajó en los problemas clásicos de la cuadratura del círculo y la duplicación del cubo."
    },
    {
        "nombre": "Teodoro de Cirene",
        "fecha_nacimiento": 465,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 398,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Cirene (actual Shahhat, Libia)",
        "lugar_fallecimiento": "Cirene (actual Shahhat, Libia)",
        "resumen": "Teodoro fue un filósofo griego de la escuela cirenaica de filosofía moral. Fue alumno de Protágoras y tutor de Platón y de Teeteto."
    },
    {
        "nombre": "Demócrito de Abdera",
        "fecha_nacimiento": 460,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 370,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Abdera, Tracia, Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Demócrito fue un erudito griego conocido por su teoría atómica, aunque también fue un excelente geómetra."
    },
    {
        "nombre": "Hipias de Elis",
        "fecha_nacimiento": 460,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 400,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Elis, Peloponeso, Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Hipias fue un griego contemporáneo de Sócrates cuya única contribución a las matemáticas parece ser la cuadratriz, una curva que pudo haber usado para cuadrar el círculo y trisecar ángulos."
    },
    {
        "nombre": "Brisón de Heraclea",
        "fecha_nacimiento": 450,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": null,
        "era_fallecimiento": "",
        "lugar_nacimiento": "Tarento, Heraclea (actual Taranto, Italia)",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Brisón fue un matemático griego que probablemente fue alumno de Sócrates y contribuyó al problema de la cuadratura del círculo."
    },
    {
        "nombre": "Arquitas de Tarento",
        "fecha_nacimiento": 428,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 350,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Tarento, Magna Grecia (actual Taranto, Italia)",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Arquitas fue un matemático, estadista y filósofo griego que trabajó en la media armónica y el problema de la duplicación del cubo."
    },
    {
        "nombre": "Platón",
        "fecha_nacimiento": 427,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 347,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Atenas, Grecia",
        "lugar_fallecimiento": "Atenas, Grecia",
        "resumen": "Platón es uno de los filósofos griegos más importantes. Fundó la Academia en Atenas. Sus obras sobre filosofía, política y matemáticas fueron muy influyentes y sentaron las bases para el enfoque sistemático de Euclides hacia las matemáticas."
    }
];