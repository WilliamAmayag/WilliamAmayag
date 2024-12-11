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
        pre4:'La fortaleza está en lo que no se ve',
        acercade2:'Acerca de <span>mi</span>',
        presentacion1:'Egresado de Ingeniería En Sistemas y Redes Informáticas',
        presentacion2:'Me apasiona en la seguridad informática y redes. con conocimientos básicos sobre máquinas virtuales, Sistemas Operativos  Linux(Kali, debian, Ubuntu), Windows, VPN, túneles ngrok, direccionamiento IP. Mi meta es especializarme en la seguridad y explotación de sistemas en redes para empresas, incluyendo la implementación de soluciones y monitoreo de red.',
        descargar:'Descargar CV',
        proyectos:'Proyectos <span>Recientes</span>',
        proj1p1:'Videoanimacion 3D',
        proj1p2:'Proyecto personal 3D de cortometraje animado creado en Blender',
        proj2p1:'Aplicacion android de autenticacion con sensor de huella.',
        proj2p2:'Proyecto personal de login con sensor de huella en android implementado en app de votaciones.',
        proj3p1:'Analisis de Vulnerabilidades con Wazuh.',
        proj3p2:'Proyecto colaborativo, creacion de entornos Wazuh para monitoreo y protección de seguridad en activos.',
        proj4p1:'Alquiler de películas desarrollado con CouchDB y Java en Android Studios.',
        proj4p2:'Programador principal en proyecto academico colaborativo, aplicacion android de alquiler de peliculas con base de datos NoSQL.',
        proj5p1:'Votaciones nacionales, desarrollado con CouchDB y Java en Android Studios',
        proj5p2:'Programador principal en proyecto academico colaborativo, aplicacion android para realizar votaciones con base de datos NoSQL',
        proj6p1:'Ayudante QR para control de asistencias.',
        proj6p2:'Proyecto personal de Ayudante QR para controlar asistencia de estudiantes desarrollado con PHP para Base de Datos en servidor y Java en Android Studios.',
        proj7p1:'Multiples proyectos de Diseño y Configuración red básica IPV4, usando métodos estáticos y dinámicos.',
        proj7p3:'Creacion y configuración logica y fisica de red básica, con CLI Cisco, usando los métodos de siguiente salto, ruta resumen, ruta por defecto, interfaz de salida, RIP, EIGRP, OSPF, BGP con direcciones IPV4.',
        proj8p1: 'Uso de SpyNote para infectar un APK.',
        proj8p2: 'Proyecto personal, uso del exploit SpyNote para vulnerar dispositivos android, junto a diversas herramienas complementarias como Ngrok para conexion remota, apktool para firma digital android, y VirtualBox para el entorno controlado.',


        habilidades2: '<span>H</span>abilidades',
        quiensoy:'Mis capacidades resaltan en la resolución de problemas y ser flexible al trabajo en equipo, lo que me permite el trabajo colaborativo con diferentes áreas y niveles de mi equipo.',
        habi1p1:'Diseño y creación en topologías de redes con IPV4',
        habi1p2:'Manejo de los fundamentos básicos en los protocolos de red, arquitectura y administración. Enrutamientos estáticos con IPV4, siguiente salto, ruta resumen, ruta por defecto, interfaz de salida. Enrutamientos dinámicos con IPV4, RIP, EIGRP, OSPF, Protocolos de redundancia como STP, VPT, EthernetChannel.',
        habi2p1:'Conocimientos sobre distintos Sistemas Operativos',
        habi2p2:'Manejo de sistemas libres linux (Kali, debian, Ubuntu), Windows y Android.',
        habi3p1:'Trabajo en equipo',
        habi3p2:'Trabajo profesional en equipo para desarrollar proyectos complejos, resolver problemas técnicos y alcanzar objetivos plasmados',
        habi4p1:'Conocimientos básicos en lenguajes de programación',
        habi4p2:'Manejo básico de los fundamentos de la programación orientada a objetos, clases, métodos y variables, conexiones a bases de datos, CRUD en base de datos.',
        correomail:'Correo',
        contacto2:'<span>C</span>ontacto',

        certificaciones:'<span>C</span>ertificaciones', 
    },
    en: {
            inicio: 'Home',
            acercade: 'About Me',
            proyetos: 'Projects',
            habilidades: 'Skills',
            contacto: 'Contact',
            idioma: 'ES',
            pre1: 'Hello ',
            pre2: 'My name is ',
            pre4: 'Strength is in what is not seen',
            acercade2: 'About <span>Me</span>',
            presentacion1: 'Graduate of computer systems and network engineering ',
            presentacion2: 'I am passionate about computer security and networking. With basic knowledge on virtual machines, Linux operating systems (Kali, Debian, Ubuntu), Windows, VPN, ngrok tunnels, and IP addressing. My goal is to specialize in system security and exploitation in networks for companies, including the implementation and monitoring of network solutions.',
            descargar: 'Download CV',
            proyectos: 'Recent Projects',
            proj1p1: '3D Animation',
            proj1p2: 'Personal 3D project of a short animated film created in Blender',
            proj2p1: 'Android fingerprint authentication app',
            proj2p2: 'Personal project of a fingerprint login app on Android.',
            proj3p1: 'Vulnerability Analysis with Wazuh',
            proj3p2: 'Collaborative project, creating Wazuh environments for security monitoring and protection of assets.',
            proj4p1: 'Movie rental app developed with CouchDB and Java in Android Studio',
            proj4p2: 'Programmer in an academic collaborative project, Android app for renting movies with NoSQL database.',
            proj5p1: 'National voting, developed with CouchDB and Java in Android Studio',
            proj5p2: 'Programmer in an academic collaborative project, Android app for voting with NoSQL database.',
            proj6p1: 'QR Helper for attendance control',
            proj6p2: 'Personal project of a QR Helper for student attendance control developed with PHP for database on server and Java in Android Studio.',
            proj7p1: 'Multiple basic IPV4 network design and configuration projects',
            proj7p3: 'Creation and physical and logical configuration of basic network, using Cisco CLI, using next hop, route summary, default route, output interface, RIP, EIGRP, OSPF, BGP with IPV4 addresses.',
            proj8p1: 'Using SpyNote to infect an APK.',
            proj8p2: 'Personal project, using the SpyNote exploit to compromise Android devices, along with various complementary tools such as Ngrok for remote connection, apktool for Android digital signing, and VirtualBox for the controlled environment.',
            habilidades2: '<span>S</span>kills',
            quiensoy: 'My strengths lie in problem-solving and being flexible in teamwork., allowing collaborative work with different areas and levels of my team.',
            habi1p1: 'Design and creation of IPV4 network topologies',
            habi1p2: 'Basic understanding of network protocols, architecture, and management. Static routing with IPV4, next hop, route summary, default route, output interface. Dynamic routing with IPV4, RIP, EIGRP, OSPF, Redundancy protocols like STP, VTP, EthernetChannel.',
            habi2p1: 'Knowledge of various Operating Systems',
            habi2p2: 'Experience with free Linux systems (Kali, Debian, Ubuntu), Windows, and Android.',
            habi3p1: 'Teamwork',
            habi3p2: 'Professional teamwork to develop complex projects, troubleshoot technical issues, and achieve set objectives.',
            habi4p1: 'Basic knowledge in programming languages',
            habi4p2: 'Basic understanding of object-oriented programming fundamentals, classes, methods, variables, database connections, CRUD operations in a database.',
            correomail: 'Email',
            contacto2: '<span>C</span>ontact',
            certificaciones:'<span>C</span>ertifications', 
          

    },
}