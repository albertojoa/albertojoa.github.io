document.addEventListener("DOMContentLoaded", function () {

    const departamento = {
        "San Salvador": ["San Salvador", "Aguilares", "Apopa", "Ayutuxtepeque", "Cuscatancingo", "Delgado", "El Paisnal", "Guazapa", "Ilopango", "Mejicanos", "Nejapa", "Panchimalco", "Rosario de Mora", "San Marcos", "San Martín", "Santiago Texacuangos", "Santo Tomás", "Soyapango", "Tonacatepeque"],
        "Ahuachapán": ["Ahuachapán", "Apaneca", "Atiquizaya", "Concepción de Ataco", "El Refugio", "Guaymango", "Jujutla", "San Francisco Menéndez", "San Lorenzo", "San Pedro Puxtla", "Tacuba", "Turín"],
        "Santa Ana": ["Candelaria de la Frontera", "Chalchuapa", "Coatepeque", "El Congo", "El Porvenir", "Masahuat", "Metapán", "San Antonio Pajonal", "San Sebastián Salitrillo", "Santa Ana", "Santa Rosa Guachipilín", "Santiago de la Frontera", "Texistepeque"],
        "Sonsonate": ["Acajutla", "Armenia", "Caluco", "Cuisnahuat", "Izalco", "Juayúa", "Nahuizalco", "Nahulingo", "Salcoatitán", "San Antonio del Monte", "San Julián", "Santa Catarina Masahuat", "Santa Isabel Ishuatán", "Santo Domingo de Guzmán", "Sonsonate", "Sonzacate"],
        "Chalatenango": ["Agua Caliente", "Arcatao", "Azacualpa", "Chalatenango", "Citalá", "Comalapa", "Concepción Quezaltepeque", "Dulce Nombre de María", "El Carrizal", "El Paraíso", "La Laguna", "La Palma", "La Reina", "Las Vueltas", "Nombre de Jesús", "Nueva Concepción", "Nueva Trinidad", "Ojos de Agua", "Potonico", "San Antonio de la Cruz", "San Antonio Los Ranchos", "San Fernando", "San Francisco Lempa", "San Francisco Morazán", "San Ignacio", "San Isidro Labrador", "San Luis del Carmen", "San Miguel de Mercedes", "San Rafael", "Santa Rita", "Tejutla"],
        "Cuscatlán": ["Candelaria", "Cojutepeque", "El Carmen", "El Rosario", "Monte San Juan", "Oratorio de Concepción", "San Bartolomé Perulapía", "San Cristóbal", "San José Guayabal", "San Pedro Perulapán", "San Rafael Cedros", "San Ramón", "Santa Cruz Analquito", "Santa Cruz Michapa", "Suchitoto", "Tenancingo"],
        "La Libertad": ["Antiguo Cuscatlán", "Chiltiupán", "Ciudad Arce", "Colón", "Comasagua", "Huizúcar", "Jayaque", "Jicalapa", "La Libertad", "Nueva San Salvador", "San Juan Opico", "Quezaltepeque", "Sacacoyo", "San José Villanueva", "San Matías", "San Pablo Tacachico", "Talnique", "Tamanique", "Teotepeque", "Tepecoyo", "Zaragoza"],
        "La Paz": ["Cuyultitán", "El Rosario", "Jerusalén", "Mercedes La Ceiba", "Olocuilta", "Paraíso de Osorio", "San Antonio Masahuat", "San Emigdio", "San Francisco Chinameca", "San Juan Nonualco", "San Juan Talpa", "San Juan Tepezontes", "San Luis La Herradura", "San Luis Talpa", "San Miguel Tepezontes", "San Pedro Masahuat", "San Pedro Nonualco", "San Rafael Obrajuelo", "Santa María Ostuma", "Santiago Nonualco", "Tapalhuaca", "Zacatecoluca"],
        "Cabañas": ["Cinquera", "Dolores", "Guacotecti", "Ilobasco", "Jutiapa", "Sensuntepeque", "Tejutepeque", "Victoria"],
        "San Vicente": ["Apastepeque", "Guadalupe", "San Cayetano Istepeque", "San Esteban Catarina", "San Ildefonso", "San Lorenzo", "San Sebastián", "San Vicente", "Santa Clara", "Santo Domingo", "Tecoluca", "Tepetitán", "Verapaz"],
        "Usulután": ["Alegría", "Berlín", "California", "Concepción Batres", "El Triunfo", "Ereguayquín", "Estanzuelas", "Jiquilisco", "Jucuapa", "Jucuarán", "Mercedes Umaña", "Nueva Granada", "Ozatlán", "Puerto El Triunfo", "San Agustín", "San Buenaventura", "San Dionisio", "San Francisco Javier", "Santa Elena", "Santa María", "Santiago de María", "Tecapán", "Usulután"],
        "San Miguel": ["Carolina", "Chapeltique", "Chinameca", "Chirilagua", "Ciudad Barrios", "Comacarán", "El Tránsito", "Lolotique", "Moncagua", "Nueva Guadalupe", "Nuevo Edén de San Juan", "Quelepa", "San Antonio", "San Gerardo", "San Jorge", "San Luis de la Reina", "San Miguel", "San Rafael Oriente", "Sesori", "Uluazapa"],
        "Morazán": ["Arambala", "Cacaopera", "Chilanga", "Corinto", "Delicias de Concepción", "El Divisadero", "El Rosario", "Gualococti", "Guatajiagua", "Joateca", "Jocoaitique", "Jocoro", "Lolotiquillo", "Meanguera", "Osicala", "Perquín", "San Carlos", "San Fernando", "San Francisco Gotera", "San Isidro", "San Simón", "Sensembra", "Sociedad", "Torola", "Yamabal", "Yoloaiquín"],
        "La Unión": ["Anamorós", "Bolívar", "Concepción de Oriente", "Conchagua", "El Carmen", "El Sauce", "Intipucá", "La Unión", "Lislique", "Meanguera del Golfo", "Nueva Esparta", "Pasaquina", "Polorós", "San Alejo", "San José", "Santa Rosa de Lima", "Yayantique", "Yucuaiquín"]
    };

    const departamentoSelect = document.querySelector('select[name="departamento"]');
    const municipioSelect = document.querySelector('select[name="municipio"]');

    departamentoSelect.addEventListener('change', function () {
        const selectedDepartamento = this.value;
        const municipios = departamento[selectedDepartamento] || [];
        municipioSelect.innerHTML = '<option value="">Seleccione</option>'; // Restablece las opciones

        municipios.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio; // El valor es el nombre del municipio
            option.textContent = municipio; // El texto visible es el nombre del municipio
            municipioSelect.appendChild(option);
        });
    });

    // Inicializar municipios para el primer departamento seleccionado por defecto
    if (departamentoSelect.value) {
        const event = new Event('change');
        departamentoSelect.dispatchEvent(event);
    }
});


function generarCUI() {
    // Obtener valores del formulario
    //const primerNombre = document.getElementById('primerNombre').value;
    //const segundoNombre = document.getElementById('segundoNombre').value;
    const primerApellido = document.getElementById('primerApellido').value;
    //const segundoApellido = document.getElementById('segundoApellido').value;
    const genero = document.getElementById('genero').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const departamentoSeleccionado = document.getElementById('departamento').value;
    const municipioSeleccionado = document.getElementById('municipio').value;

    // Validar fecha de nacimiento
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        alert('Fecha de nacimiento no válida');
        return;
    }

    // Generar códigos a partir de los valores ingresados
    const primerApellidoCode = primerApellido.slice(0, 2).toUpperCase();
    const generoCode = genero === 'masculino' ? 'M' : 'F';
    const anioCode = anio.toString().slice(-2); // últimos dos dígitos del año

    // Reemplaza estos códigos con los códigos reales para departamentos y municipios
    const departamentos = {
        "Ahuachapán": "01",
        "Santa Ana": "03",
        "Sonsonate": "02",
        "Chalatenango": "07",
        "La Libertad": "09",
        "San Salvador": "10",
        "Cuscatlán": "08",
        "La Paz": "05",
        "Cabañas": "04",
        "San Vicente": "06",
        "Usulután": "14",
        "San Miguel": "13",
        "Morazán": "12",
        "La Unión": "11"
    };
    const departamentoCode = departamentos[departamentoSeleccionado];

    const municipios = {
        "Ahuachapán": {
            "Ahuachapán": "01",
            "Apaneca": "02",
            "Atiquizaya": "03",
            "Concepción de Ataco": "04",
            "El Refugio": "05",
            "Guaymango": "06",
            "Jujutla": "07",
            "San Francisco Menéndez": "08",
            "San Lorenzo": "09",
            "San Pedro Puxtla": "10",
            "Tacuba": "11",
            "Turín": "12"
        },
        "Santa Ana": {
            "Santa Ana": "01",
            "Candelaria de la Frontera": "02",
            "Chalchuapa": "03",
            "Coatepeque": "04",
            "El Congo": "05",
            "El Porvenir": "06",
            "Masahuat": "07",
            "Metapán": "08",
            "San Antonio Pajonal": "09",
            "San Sebastián Salitrillo": "10",
            "Santa Rosa Guachipilín": "11",
            "Santiago de la Frontera": "12",
            "Texistepeque": "13"
        },
        "Sonsonate": {
            "Sonsonate": "01",
            "Acajutla": "02",
            "Armenia": "03",
            "Caluco": "04",
            "Cuisnahuat": "05",
            "Izalco": "06",
            "Juayúa": "07",
            "Nahuizalco": "08",
            "Nahulingo": "09",
            "Salcoatitán": "10",
            "San Antonio del Monte": "11",
            "San Julián": "12",
            "Santa Catarina Masahuat": "13",
            "Santa Isabel Ishuatán": "14",
            "Santo Domingo de Guzmán": "15",
            "Sonzacate": "16"
        },
        "Chalatenango": {
            "Chalatenango": "01",
            "Agua Caliente": "02",
            "Arcatao": "03",
            "Azacualpa": "04",
            "Cancasque": "05",
            "Citalá": "06",
            "Comapala": "07",
            "Concepción Quezaltepeque": "08",
            "Dulce Nombre de María": "09",
            "El Carrizal": "10",
            "El Paraíso": "11",
            "La Laguna": "12",
            "La Palma": "13",
            "La Reina": "14",
            "Las Vueltas": "15",
            "Nueva Concepción": "16",
            "Nueva Trinidad": "17",
            "Nombre de Jesús": "18",
            "Ojos de Agua": "19",
            "Potonico": "20",
            "San Antonio de la Cruz": "21",
            "San Antonio Los Ranchos": "22",
            "San Fernando": "23",
            "San Francisco Lempa": "24",
            "San Francisco Morazán": "25",
            "San Ignacio": "26",
            "San Isidro Labrador": "27",
            "San Luis del Carmen": "28",
            "San Miguel de Mercedes": "29",
            "San Rafael": "30",
            "Santa Rita": "31",
            "Tejutla": "32"
        },
        "La Libertad": {
            "Santa Tecla": "01",
            "Antiguo Cuscatlán": "02",
            "Chiltiupán": "03",
            "Ciudad Arce": "04",
            "Colón": "05",
            "Comasagua": "06",
            "Huizúcar": "07",
            "Jayaque": "08",
            "Jicalapa": "09",
            "La Libertad": "10",
            "Nuevo Cuscatlán": "11",
            "San Juan Opico": "12",
            "Quezaltepeque": "13",
            "Sacacoyo": "14",
            "San José Villanueva": "15",
            "San Matías": "16",
            "San Pablo Tacachico": "17",
            "Talnique": "18",
            "Tamanique": "19",
            "Teotepeque": "20",
            "Tepecoyo": "21",
            "Zaragoza": "22"
        },
        "San Salvador": {
            "San Salvador": "01",
            "Aguilares": "02",
            "Apopa": "03",
            "Ayutuxtepeque": "04",
            "Cuscatancingo": "05",
            "Delgado": "06",
            "El Paisnal": "07",
            "Guazapa": "08",
            "Ilopango": "09",
            "Mejicanos": "10",
            "Nejapa": "11",
            "Panchimalco": "12",
            "Rosario de Mora": "13",
            "San Marcos": "14",
            "San Martín": "15",
            "Santiago Texacuangos": "16",
            "Santo Tomás": "17",
            "Soyapango": "18",
            "Tonacatepeque": "19"
        },
        "Cuscatlán": {
            "Cojutepeque": "01",
            "Candelaria": "02",
            "El Carmen": "03",
            "El Rosario": "04",
            "Monte San Juan": "05",
            "Oratorio de Concepción": "06",
            "San Bartolomé Perulapía": "07",
            "San Cristóbal": "08",
            "San José Guayabal": "09",
            "San Pedro Perulapán": "10",
            "San Rafael Cedros": "11",
            "San Ramón": "12",
            "Santa Cruz Analquito": "13",
            "Santa Cruz Michapa": "14",
            "Suchitoto": "15",
            "Tenancingo": "16"
        },
        "La Paz": {
            "Zacatecoluca": "01",
            "Cuyultitán": "02",
            "El Rosario": "03",
            "Jerusalén": "04",
            "Mercedes La Ceiba": "05",
            "Olocuilta": "06",
            "Paraíso de Osorio": "07",
            "San Antonio Masahuat": "08",
            "San Emigdio": "09",
            "San Francisco Chinameca": "10",
            "San Pedro Masahuat": "11",
            "San Juan Nonualco": "12",
            "San Juan Talpa": "13",
            "San Juan Tepezontes": "14",
            "San Luis La Herradura": "15",
            "San Luis Talpa": "16",
            "San Miguel Tepezontes": "17",
            "San Pedro Nonualco": "18",
            "San Rafael Obrajuelo": "19",
            "Santa María Ostuma": "20",
            "Santiago Nonualco": "21",
            "Tapalhuaca": "22"
        },
        "Cabañas": {
            "Sensuntepeque": "01",
            "Cinquera": "02",
            "Dolores": "03",
            "Guacotecti": "04",
            "Ilobasco": "05",
            "Jutiapa": "06",
            "San Isidro": "07",
            "Tejutepeque": "08",
            "Victoria": "09"
        },
        "San Vicente": {
            "San Vicente": "01",
            "Apastepeque": "02",
            "Guadalupe": "03",
            "San Cayetano Istepeque": "04",
            "San Esteban Catarina": "05",
            "San Ildefonso": "06",
            "San Lorenzo": "07",
            "San Sebastián": "08",
            "Santa Clara": "09",
            "Santo Domingo": "10",
            "Tecoluca": "11",
            "Tepetitán": "12",
            "Verapaz": "13"
        },
        "Usulután": {
            "Usulután": "01",
            "Alegría": "02",
            "Berlín": "03",
            "California": "04",
            "Concepción Batres": "05",
            "El Triunfo": "06",
            "Ereguayquín": "07",
            "Estanzuelas": "08",
            "Jiquilisco": "09",
            "Jucuapa": "10",
            "Jucuarán": "11",
            "Mercedes Umaña": "12",
            "Nueva Granada": "13",
            "Ozatlán": "14",
            "Puerto El Triunfo": "15",
            "San Agustín": "16",
            "San Buenaventura": "17",
            "San Dionisio": "18",
            "San Francisco Javier": "19",
            "Santa Elena": "20",
            "Santa María": "21",
            "Santiago de María": "22",
            "Tecapán": "23"
        },
        "San Miguel": {
            "San Miguel": "01",
            "Carolina": "02",
            "Chapeltique": "03",
            "Chinameca": "04",
            "Chirilagua": "05",
            "Ciudad Barrios": "06",
            "Comacarán": "07",
            "El Tránsito": "08",
            "Lolotique": "09",
            "Moncagua": "10",
            "Nueva Guadalupe": "11",
            "Nuevo Edén de San Juan": "12",
            "Quelepa": "13",
            "San Antonio": "14",
            "San Gerardo": "15",
            "San Jorge": "16",
            "San Luis de la Reina": "17",
            "San Rafael Oriente": "18",
            "Sesori": "19",
            "Uluazapa": "20"
        },
        "Morazán": {
            "San Francisco Gotera": "01",
            "Arambala": "02",
            "Cacaopera": "03",
            "Chilanga": "04",
            "Corinto": "05",
            "Delicias de Concepción": "06",
            "El Divisadero": "07",
            "El Rosario": "08",
            "Gualococti": "09",
            "Guatajiagua": "10",
            "Joateca": "11",
            "Jocoaitique": "12",
            "Jocoro": "13",
            "Lolotiquillo": "14",
            "Meanguera": "15",
            "Osicala": "16",
            "Perquín": "17",
            "San Carlos": "18",
            "San Fernando": "19",
            "San Isidro": "20",
            "San Simón": "21",
            "Sensembra": "22",
            "Sociedad": "23",
            "Torola": "24",
            "Yamabal": "25",
            "Yoloaiquín": "26"
        },
        "La Unión": {
            "La Unión": "01",
            "Anamorós": "02",
            "Bolívar": "03",
            "Concepción de Oriente": "04",
            "Conchagua": "05",
            "El Carmen": "06",
            "El Sauce": "07",
            "Intipucá": "08",
            "Lislique": "09",
            "Meanguera del Golfo": "10",
            "Nueva Esparta": "11",
            "Pasaquina": "12",
            "Polorós": "13",
            "San Alejo": "14",
            "San José": "15",
            "Santa Rosa de Lima": "16",
            "Yayantique": "17",
            "Yucuaiquín": "18"
        }
    };
    const municipioCode = municipios[departamentoSeleccionado][municipioSeleccionado];

    const cui = `${primerApellidoCode}${generoCode}${dia.toString().padStart(2, '0')}${mes.toString().padStart(2, '0')}${anioCode}${departamentoCode}${municipioCode}`;

    document.getElementById('resultado').textContent = `${cui}`;
}

function copiarCUI() {
    const resultado = document.getElementById('resultado').textContent;
    if (resultado) {
        navigator.clipboard.writeText(resultado).then(() => {
            alert('CUI copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
    } else {
        alert('No hay CUI para copiar');
    }
}
