function cambiarIdioma() {
    const btn = document.getElementById('langBtn');
    
    let opt = btn.getAttribute('data-opt');
    Object.keys(lang[opt]).forEach(key => {
        const text = lang[opt][key];
        console.log({text, key});
        document.querySelectorAll('[data-lang="' + key + '"]').forEach(el => {
          el.innerHTML = text;
        });
    });
    if (opt == 'es') {
        btn.setAttribute('data-opt', 'en');
    } else {
        btn.setAttribute('data-opt', 'es');
    }

  }

let lang = {
    es: {
        inicio:'Inicio',
        acercade:'Acerca de mi',
        proyetos:'Proyectos',
        habilidades:'Habilidades',
        contacto:'Contacto',
        idioma:'EN',
        pre1:'Hola ',
        pre2:'Mi nombre es ',
        pre4:'Simplificando lo complejo',
        acercade2:'Acerca de <span>mi</span>',
        presentacion1:'Estudiante de Ingeniería En Sistemas y Redes Informáticas',
        presentacion2:'Soy un estudiante de Ingeniería En Sistemas y Redes Informáticas, interesado en la implementación y administración de redes de comunicaciones y sistemas informáticos y seguridad, soy aprendiz en el manejo de lenguajes de programación tales como Java, C#, y SQL, Cisco OS, lo que me permite desarrollar aplicaciones simples y funcionales. Tengo como meta especializarme en el diseño y configuración de sistemas de redes para empresas, incluyendo la implementación de soluciones de seguridad informática y monitoreo de redes.',
        descargar:'Descargar CV',
        proyectos:'Proyectos <span>Recientes</span>',
        proj1p1:'Proyecto 1',
        proj1p2:'Animacion 3D',
        proj1p3:'Proyecto personal 3D de cortometraje animado creado en Blender',
        proj2p1:'Proyecto 2',
        proj2p2:'Autenticacion de sesión con sensor de huella Android',
        proj3p1:'Proyecto 3',
        proj3p2:'Base de datos relacional con SQLServer',
        proj4p1:'Proyecto 4',
        proj4p2:'Alquiler de películas desarrollado con CouchDB y Java en Android Studios',
        proj5p1:'Proyecto 5',
        proj5p2:'Aplicación para realizar votaciones nacionales desarrollado con CouchDB y Java en Android Studios',
        proj6p1:'Proyecto 6',
        proj6p2:'Ayudante QR para controlar asistencia de estudiantes desarrollado con PHP para Base de Datos en servidor y Java en Android Studios',
        proj7p1:'Proyecto 7',
        proj7p2:'Configuración de red básica IPV4, usando métodos estáticos y dinámicos',
        proj7p3:'Configuración básica de una red usando los métodos de siguiente salto, ruta resumen, ruta por defecto, interfaz de salida, RIP, EIGRP y OSPF con direcciones IPV4.',
        proj8p1:'Proyecto 8',
        proj8p2:'FellsGood',
        proj8p3:'La propuesta del proyecto consiste en desarrollar una inteligencia artificial capaz de analizar las emociones de las personas mientras chatean con ella, para poder recomendar actividades en función de su estado de ánimo.',

        habilidades2: '<span>H</span>abilidades',
        quiensoy:'Soy un estudiante con capacidades sobre resolución de problemas, flexible al trabajo en equipo, lo que me permite el trabajo colaborativo con diferentes áreas y niveles de mi equipo.',
        habi1p1:'Diseño y creación en topologías de redes con IPV4',
        habi1p2:'Manejo de los fundamentos básicos en los protocolos de red, arquitectura y administración. Enrutamientos estáticos con IPV4, siguiente salto, ruta resumen, ruta por defecto, interfaz de salida. Enrutamientos dinámicos con IPV4, RIP, EIGRP, OSPF, Protocolos de redundancia como STP, VPT, EthernetChannel.',
        habi2p1:'Manejo básico en lenguajes de programación:  Java, C#',
        habi2p2:'Manejo básico de los fundamentales de programación orientada a objetos, creación de clases, métodos y variables, y conexiones a bases de datos locales y servidores. ',
        habi3p1:'Trabajo en equipo',
        habi3p2:'Trabajo profesional en equipo para desarrollar proyectos complejos, resolver problemas técnicos y alcanzar objetivos plasmados',
        habi4p1:'Manejo básico de base de datos relacionales: MySQL, SQL Server, PostgreSQL, MariaDB',
        habi4p2:'Manejo básico de los fundamentales en bases de datos, como creación de tablas, campos, relaciones y administración como modificar, agregar, actualizar y eliminar datos en ellas.',
        correomail:'Correo',
        contacto2:'<span>Contacto</span>',

    },
    en: {
        inicio:"Home",
        acercade:'About me',
        proyetos:'Projects',
        habilidades:'Skills',
        contacto:'Contact',
        idioma:'Es',
        pre1:'Hello ',
        pre2:'My name is ',
        pre4:'Simplifying complexity',
        acercade2:'About <span>me</span>',
        presentacion1:'Computer Systems and Network Engineering Student',
        presentacion2:'I am a student of Computer Systems and Network Engineering, interested in the implementation and administration of communication networks and computer systems and security, I am an apprentice in programming languages such as Java, C#, and SQL, Cisco OS, which allows me to develop simple and functional applications. My goal is to specialize in the design and configuration of network systems for companies, including the implementation of computer security solutions and network monitoring.',
        descargar:'Download CV',
        proyectos:'Recent <span>Projects</span>',
        proj1p1:'Project 1',
        proj1p2:'3D animation',
        proj1p3:'Personal 3D animated short film project created in Blender',
        proj2p1:'Project 2',
        proj2p2:'Session authentication with android fingerprint sensor',
        proj3p1:'Project 3',
        proj3p2:'Relational database with SQLServer',
        proj4p1: 'Project 4',
        proj4p2:'Movie rental developed with CouchDB and Java in Android Studios',
        proj5p1:'Project 5',
        proj5p2:'National voting application developed with CouchDB and Java in Android Studios',
        proj6p1:'Project 6',
        proj6p2:'QR helper to control student attendance developed with PHP for CouchDB and Java on Android Studios', 
        proj7p1:'Project 7',
        proj7p2:'Basic IPV4 network configuration, using static and dynamic methods', 
        proj7p3:'Basic network configuration using next hop, summary route, default route, outgoing interface, RIP, EIGRP and OSPF methods with IPV4 addresses', 
        proj8p1:'Project 8',
        proj8p2:'FellsGood',
        proj8p3:'The project proposal consists of developing an artificial intelligence capable of analyzing peoples emotions while they chat with it, in order to recommend activities based on their mood.',

      
        habilidades2: '<span>S</span>kills',
        contacto2:'<span>Contact</span>',

        quiensoy:'I am a student with problem solving skills, flexible to teamwork, which allows me to work collaboratively with different areas and levels of my team',
        habi1p1:'Design and creation of network topologies with IPV4',
        habi1p2:'Handling of basic fundamentals in network protocols, architecture and administration. Static routing with IPV4, next hop, summary route, default route, outgoing interface. Dynamic routing with IPV4, RIP, EIGRP, OSPF, Redundancy protocols such as STP, VPT, EthernetChannel',
        habi2p1:'Basic programming languages: Java, C#',
        habi2p2:'Basic handling of object oriented programming fundamentals, creation of classes, methods and variables, and connections to local databases and servers. ',
        habi3p1:'Team work',
        habi3p2:'Professional teamwork to develop complex projects, solve technical problems and achieve set objectives',
        habi4p1:'Basic handling of relational databases: MySQL, SQL Server, PostgreSQL, MariaDB', habi4p2:'Basic handling of relational databases: MySQL, SQL Server, PostgreSQL, MariaDB',
        habi4p2:'Basic handling of the fundamentals in databases, such as creation of tables, database field, relations and administration such as modifying, adding, updating and deleting data in them',
        correomail:'Email'

    },
}