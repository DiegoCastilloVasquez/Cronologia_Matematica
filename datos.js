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
    },
    {
        "nombre": "Teeteto de Atenas",
        "fecha_nacimiento": 417,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 369,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Atenas, Grecia",
        "lugar_fallecimiento": "Atenas, Grecia",
        "resumen": "Teeteto fue un matemático griego que realizó contribuciones muy importantes a la teoría de los irracionales. Su trabajo se describe en los Elementos de Euclides."
    },
    {
        "nombre": "Eudoxo de Cnido",
        "fecha_nacimiento": 408,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 355,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Cnido, Asia Menor (actual Knidos, Turquía)",
        "lugar_fallecimiento": "Cnido, Asia Menor (actual Turquía)",
        "resumen": "Eudoxo fue un matemático y astrónomo griego que contribuyó a los Elementos de Euclides. Cartografió las estrellas y compiló un mapa del mundo conocido. Su filosofía influyó en Aristóteles."
    },
    {
        "nombre": "Gan De",
        "fecha_nacimiento": 400,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 340,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "China",
        "lugar_fallecimiento": "China",
        "resumen": "Gan De fue uno de los primeros astrónomos chinos."
    },
    {
        "nombre": "Timáridas de Paros",
        "fecha_nacimiento": 400,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 350,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Paros, Grecia",
        "lugar_fallecimiento": "",
        "resumen": "Timáridas fue un seguidor griego de Pitágoras que escribió sobre números primos y dio métodos para resolver ecuaciones lineales simultáneas."
    },
    {
        "nombre": "Jenócrates de Calcedonia",
        "fecha_nacimiento": 396,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 314,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Calcedonia (actual Kadiköy, cerca de Estambul), Bitinia (actual Turquía)",
        "lugar_fallecimiento": "Atenas, Grecia",
        "resumen": "Jenócrates fue un estudiante de Platón que llegó a ser director de la Academia. Fue un creyente temprano de la teoría atómica y originó la distinción clásica entre mente, cuerpo y alma."
    },
    {
        "nombre": "Dinóstrato",
        "fecha_nacimiento": 390,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 320,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Grecia",
        "lugar_fallecimiento": "",
        "resumen": "Dinóstrato fue un matemático griego que pudo haber usado la cuadratriz de Hipias para resolver el problema de la cuadratura del círculo."
    },
    {
        "nombre": "Heráclides del Ponto",
        "fecha_nacimiento": 387,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 312,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Heraclea Póntica (actual Eregli, Turquía)",
        "lugar_fallecimiento": "Heraclea Póntica",
        "resumen": "Heráclides fue un astrónomo griego que propuso que la tierra gira sobre su eje una vez al día y que pudo haber creído que el sol era el centro del sistema solar."
    },
    {
        "nombre": "Aristóteles",
        "fecha_nacimiento": 384,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 322,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Estagira, Macedonia, Grecia",
        "lugar_fallecimiento": "Calcis, Eubea, Grecia",
        "resumen": "Aristóteles fue un filósofo griego que hizo contribuciones importantes al sistematizar la lógica deductiva y escribió sobre temas físicos. Su filosofía tuvo una influencia duradera en el desarrollo de todas las teorías filosóficas occidentales."
    },
    {
        "nombre": "Menechmo",
        "fecha_nacimiento": 380,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 320,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Alopeconnesus, Asia Menor (actual Turquía)",
        "lugar_fallecimiento": "",
        "resumen": "Menechmo fue un matemático griego que tutoró a Alejandro Magno en la materia. Fue el primero en investigar la elipse, parábola e hipérbola como secciones de un cono."
    },
    {
        "nombre": "Aristeo el Viejo",
        "fecha_nacimiento": 370,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 300,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Grecia",
        "lugar_fallecimiento": "",
        "resumen": "Aristeo el Viejo fue un matemático griego que trabajó en las secciones cónicas."
    },
    {
        "nombre": "Calipo de Cízico",
        "fecha_nacimiento": 370,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 310,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Cízico, Asia Menor (actual Turquía)",
        "lugar_fallecimiento": "",
        "resumen": "Calipo fue un astrónomo griego que hizo determinaciones precisas de la duración de las estaciones y construyó un calendario utilizado por todos los astrónomos posteriores."
    },
    {
        "nombre": "Autólico de Pitane",
        "fecha_nacimiento": 360,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 290,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Pitane, Asia Menor (actual Turquía)",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Autólico fue un astrónomo y matemático griego que escribió sobre la geometría de la esfera."
    },
    {
        "nombre": "Eudemo de Rodas",
        "fecha_nacimiento": 350,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 290,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Rodas, Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Eudemo fue un griego que fue el primer historiador importante de las matemáticas."
    },
    {
        "nombre": "Euclides de Alejandría",
        "fecha_nacimiento": 325,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 265,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Alejandría, Egipto",
        "lugar_fallecimiento": "Alejandría, Egipto",
        "resumen": "Euclides fue un matemático griego conocido principalmente por su tratado de geometría: Los Elementos. Esto influyó en el desarrollo de las matemáticas occidentales durante más de 2000 años."
    },
    {
        "nombre": "Aristarco de Samos",
        "fecha_nacimiento": 310,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 230,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Samos, Grecia",
        "lugar_fallecimiento": "Grecia",
        "resumen": "Aristarco fue un matemático y astrónomo griego que es celebrado como el exponente de un universo centrado en el Sol y por su intento pionero de determinar los tamaños y distancias del Sol y la Luna."
    },
    {
        "nombre": "Arquímedes de Siracusa",
        "fecha_nacimiento": 287,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 212,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Siracusa, Sicilia (actual Italia)",
        "lugar_fallecimiento": "Siracusa, Sicilia (actual Italia)",
        "resumen": "Arquímedes fue el matemático más grande de su época. Sus contribuciones en geometría revolucionaron la materia y sus métodos anticiparon el cálculo integral. Fue un hombre práctico que inventó una amplia variedad de máquinas, incluyendo poleas y el tornillo de Arquímedes para bombear agua."
    },
    {
        "nombre": "Crisipo de Soli",
        "fecha_nacimiento": 280,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 206,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Soli, Cilicia, Asia Menor (actual Turquía)",
        "lugar_fallecimiento": "Atenas, Grecia",
        "resumen": "Crisipo fue un filósofo griego que es considerado el cofundador del estoicismo."
    },
    {
        "nombre": "Conón de Samos",
        "fecha_nacimiento": 280,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 220,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Samos, Grecia",
        "lugar_fallecimiento": "Alejandría, Egipto",
        "resumen": "Conón de Samos fue un astrónomo y matemático griego que descubrió la curva ahora conocida como espiral de Arquímedes."
    },
    {
        "nombre": "Nicomedes",
        "fecha_nacimiento": 280,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 210,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Grecia",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Nicomedes fue un matemático griego famoso por su tratado Sobre las líneas concoides que contiene su descubrimiento de la curva concoide que utilizó para resolver varios problemas matemáticos, incluida la trisección de ángulos."
    },
    {
        "nombre": "Filón de Bizancio",
        "fecha_nacimiento": 280,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 220,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Bizancio (Turquía)",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Filón fue un griego que escribió sobre varios aspectos de la mecánica y trabajó en el problema de la duplicación del cubo."
    },
    {
        "nombre": "Eratóstenes de Cirene",
        "fecha_nacimiento": 276,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 194,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Cirene, África del Norte (actual Libia)",
        "lugar_fallecimiento": "Alejandría, Egipto",
        "resumen": "Eratóstenes fue un matemático griego famoso por su trabajo sobre los números primos y por medir el diámetro de la Tierra."
    },
    {
        "nombre": "Apolonio de Perge",
        "fecha_nacimiento": 262,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 190,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Perge, Panfilia, Jonia griega (actual Turquía)",
        "lugar_fallecimiento": "Alejandría, Egipto",
        "resumen": "Apolonio fue un matemático griego conocido como 'El Gran Geómetra'. Sus obras tuvieron una gran influencia en el desarrollo de las matemáticas y su famoso libro Cónicas introdujo los términos parábola, elipse e hipérbola."
    },
    {
        "nombre": "Dionisodoro",
        "fecha_nacimiento": 250,
        "era_nacimiento": "a. C.",
        "fecha_fallecimiento": 190,
        "era_fallecimiento": "a. C.",
        "lugar_nacimiento": "Cauno, Caria, Asia Menor (actual Turquía)",
        "lugar_fallecimiento": "Desconocido",
        "resumen": "Dionisodoro fue un matemático griego que resolvió una ecuación cúbica utilizando la intersección de una parábola y una hipérbola."
    }
];
