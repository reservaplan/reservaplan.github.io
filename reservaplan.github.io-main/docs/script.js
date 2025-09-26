document.addEventListener('DOMContentLoaded', () => {

    // ================================================================
    // ===========     "BASE DE DATOS" CENTRAL DE PLANES        ===========
    // ================================================================
    // MODIFICADO: Añadida la propiedad "galeria" y "video" a los planes.
const allPlans = [
    // Bolivar (ID 1-3)
    { id: 1, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Nuevo Conquistador', imagen: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg', galeria: ['https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg', 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg', 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg'], precio: 250000, descripcion: 'Disfruta de una vista espectacular al mar Caribe en el corazón de Bocagrande. Nuestro hotel ofrece piscina, restaurante y acceso directo a la playa.', servicios: ['Piscina', 'WiFi Gratis', 'Restaurante', 'Aire Acondicionado', 'Acceso a Playa'] },
    { id: 2, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Bocagrande en el Laguito', imagen: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg', video: 'https://videos.pexels.com/video-files/5361353/5361353-hd_1280_720_25fps.mp4', galeria: ['https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg', 'https://images.pexels.com/photos/6782473/pexels-photo-6782473.jpeg', 'https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg'], precio: 320000, descripcion: 'Elegancia y confort se unen en este hotel de lujo. Perfecto para familias y viajes de negocios, con amplias habitaciones y un servicio excepcional.', servicios: ['Piscina', 'Gimnasio', 'WiFi Premium', 'Servicio a la habitación'] },
    { id: 3, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Islas del Sol', imagen: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg', galeria: ['https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg', 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg', 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg', 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg'], precio: 450000, descripcion: 'Vive una experiencia única en las Islas del Rosario. Cabañas privadas, aguas cristalinas y la tranquilidad que buscas para desconectarte.', servicios: ['Playa Privada', 'Snorkel', 'Restaurante', 'Transporte en lancha'] },
    // San Andres (ID 4-5)
    { id: 4, departamento: 'San Andres', capital: 'SAN ANDRES', tipo: 'Hostal', nombre: 'By San Andres Colombia', imagen: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg', galeria: ['https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg', 'https://images.pexels.com/photos/271681/pexels-photo-271681.jpeg', 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg', 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg'], precio: 180000, descripcion: 'La opción ideal para viajeros que buscan explorar la isla. Ofrecemos un ambiente amigable, habitaciones limpias y tours locales.', servicios: ['Cocina Compartida', 'WiFi Gratis', 'Terraza', 'Alquiler de Motos'] },
    { id: 5, departamento: 'San Andres', capital: 'SAN ANDRES', tipo: 'Hostal', nombre: 'Vecino de San Andres', imagen: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg', galeria: ['https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg'], precio: 160000, descripcion: 'Un hostal acogedor y céntrico, perfecto para hacer amigos y disfrutar de la vida nocturna de la isla. Desayuno incluido.', servicios: ['Desayuno Incluido', 'WiFi Gratis', 'Área Social', 'Taquillas de seguridad'] },
    // Magdalena (ID 6-12)
    { id: 6, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Rodadero Cristal Caribean', imagen: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', galeria: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 280000, descripcion: 'Moderno apartamento con balcón y vista al mar en la zona del Rodadero. Totalmente equipado para que te sientas como en casa.', servicios: ['Cocina Equipada', 'Aire Acondicionado', 'Piscina', 'Parqueadero'] },
    { id: 7, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Tacoa 2', imagen: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', galeria: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 220000, descripcion: 'Apartamento cómodo y espacioso, ideal para familias. Ubicado a pocas cuadras de la playa, con fácil acceso a tiendas y restaurantes.', servicios: ['Cocina Equipada', 'Ventiladores', 'Piscina', 'Vigilancia 24h'] },
    { id: 8, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Gaira', imagen: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', galeria: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 195000, descripcion: 'Disfruta de la auténtica vida de Santa Marta en este apartamento en el barrio Gaira. Cómodo y económico, cerca del transporte local.', servicios: ['Cocina', 'WiFi', 'TV por Cable', 'Patio'] },
    
    // --- OBJETO MODIFICADO PARA "BRISA MARINA" ---
    {
        id: 9,
        departamento: 'Magdalena',
        capital: 'SANTA MARTA',
        sector: 'Rodadero',
        tipo: 'Apartamento',
        nombre: 'Brisa Marina piso 3',
        codigo: 'ALJ-5PAX-SM-BRI3',
        rnt: '186502',
        capacidad: 6,
        mascotas: false,
        imagen: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        video: 'https://www.pexels.com/download/video/28210850/',
        galeria: [ { type: 'image', url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457844.jpeg' },
    // --- NUEVO FORMATO PARA VIDEOS DE YOUTUBE ---
    { 
      type: 'youtube', 
      url: 'https://youtu.be/0gOensngfWg?si=d0fObYEeXg5lZ004', // Usa el link "embed" de YouTube
      thumbnail: 'https://i.ytimg.com/vi/0gOensngfWg/hq720.jpg' // Miniatura del video
    },
    // --- FORMATO PARA VIDEOS MP4 ---
    {
      type: 'video',
      url: 'https://www.pexels.com/download/video/28210850/'
    },
    { type: 'image', url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' }, { type: 'image', url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' }, { type: 'image', url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' },
    //...etc
        ],
        precio: 215000,
        // La descripción simple se mantiene para la vista previa
        descripcion: 'Siente la brisa del mar desde este luminoso apartamento en un tercer piso. Ideal para parejas o pequeñas familias.',
        servicios: ['Balcón', 'Cocina', 'Aire Acondicionado', 'WiFi'], // <-- Puedes mantener los servicios principales aquí para la vista previa.
        
        // --- NUEVA SECCIÓN DE DETALLES ---
        detalles: {
            habitaciones: 2,
            baños: 2,
            vista: 'A la calle',
            wifi: true,
            acomodacion: [
                { cuarto: 'Alcoba 1', contenido: 'Cama doble debajo cama doble de rodachin (4 Personas), Aire Acondicionado, TV, Cable, Baño interno, vista a Balcón.' },
                { cuarto: 'Alcoba 2', contenido: 'Cama doble (2 Personas), Ventilador.' },
                { cuarto: 'Sala', contenido: 'Sofá cama sencillo (1 persona), TV, Cable, ventilador de techo.' }
            ],
            cocina: 'Nevera, Estufa, Licuadora, menaje básico.',
            zonasComunes: 'Recepción 24h, 2 Ascensores, Parqueadero Cubierto (1 auto), Piscina (8am-8pm, excepto martes), Vestidor/Duchas.',
            ubicacion: 'A 1-2 calles de Playa Rodadero, supermercados, C.C Arrecife y embarcadero marítimo.',
            costosAdicionales: [
                { item: 'Manilla', valor: 13000, nota: 'por persona (obligatoria)' },
                { item: 'Limpieza', valor: 60000, nota: 'pago único' },
                { item: 'Alquiler Toallas', valor: 5000, nota: 'por unidad' }
            ],
            horarios: {
                checkin: '3:00 PM',
                checkout: '12:00 PM',
                lateCheckout: 'Sujeto a disponibilidad con costo adicional.'
            },
            reglas: [
                { regla: 'Fiestas', permitido: false },
                { regla: 'Mascotas', permitido: false, nota: 'Excepto Guías' },
                { regla: 'Visitas externas', permitido: false },
                { regla: 'Música a volumen alto', permitido: false }
            ],
            politicasReserva: 'Abonar 20% del valor total. Saldo en efectivo o transferencia al recibir. No se aceptan tarjetas.'
        }
    }, // <-- ¡LA COMA ES CLAVE! Separa este objeto del siguiente.
    
    { id: 10, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Hotel', nombre: 'Bello Caribe', imagen: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg', galeria: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 190000, descripcion: 'Un hotel encantador con un servicio personalizado. Disfruta de nuestra piscina y restaurante con platos típicos de la región.', servicios: ['Piscina', 'Restaurante', 'WiFi Gratis', 'Recepción 24h'] },
    // Cundinamarca (ID 14-15)
    { id: 14, departamento: 'Cundinamarca', capital: 'La Mesa', tipo: 'Casa en condominio', nombre: 'Casa en condominio', imagen: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg', galeria: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg', 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg'], precio: 550000, descripcion: 'Escápate de la ciudad a esta hermosa casa en un condominio exclusivo. Piscina privada, BBQ y amplias zonas verdes.', servicios: ['Piscina Privada', 'BBQ', 'Cocina Equipada', 'Seguridad 24h'] },
    { id: 15, departamento: 'Cundinamarca', capital: 'Chinauta', tipo: 'Hotel', nombre: 'Hotel Chinauta', imagen: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg', galeria: ['https://images.pexels.com/photos/751204/pexels-photo-751204.jpeg', 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg', 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg'], precio: 290000, descripcion: 'El lugar perfecto para un fin de semana de descanso. Disfruta del mejor clima, piscinas y actividades recreativas.', servicios: ['Piscinas', 'Canchas Deportivas', 'Restaurante', 'Salón de Juegos'] },
];

    // ================================================================
    // ===========           DICCIONARIO DE TRADUCCIONES          ===========
    // ================================================================
    const translations = {
        es: { nav_alojamientos: "Alojamientos", nav_activities: "Alojamientos", nav_blog: "Blog", nav_contact: "Contacto", topbar_follow: "Síguenos:", hero_title: "Disfruta Colombia", hero_subtitle: "AVENTURA Y EXPERIENCIAS ÚNICAS", hero_description: "Descubre los mejores hoteles y apartamentos que Colombia tiene para ofrecer. Tu próxima aventura empieza aquí.", hero_button: "Empezar ahora", search_destination: "Destino", search_type: "Tipo", search_duration: "Duración", search_guests: "Huéspedes", search_button: "Buscar", footer_description: "Somos tu agencia de viajes, nuestro servicio es brindar: comodidad, seguridad y garantía al plan que adquieres con nosotros.", footer_links_title: "Enlaces Rápidos", footer_links_about: "Sobre Nosotros", footer_links_tours: "Alojamientos", footer_links_contact: "Contacto", footer_gallery_title: "Galería", footer_newsletter_title: "Newsletter", footer_newsletter_placeholder: "Ingresa tu correo", footer_newsletter_terms: "Acepto los términos y políticas.", footer_copyright: "Copyright © 2025 ReservaPlan.co. Todos los derechos reservados." },
        en: { nav_alojamientos: "Accommodations", nav_activities: "Activities", nav_blog: "Blog", nav_contact: "Contact", topbar_follow: "Follow Us:", hero_title: "Enjoy Colombia", hero_subtitle: "ADVENTURE AND UNIQUE EXPERIENCES", hero_description: "Discover the best hotels and apartments Colombia has to offer. Your next adventure starts here.", hero_button: "Start Now", search_destination: "Destination", search_type: "Type", search_duration: "Duration", search_guests: "Guests", search_button: "Search", footer_description: "We are your travel agency. Our service is to provide comfort, security, and a guarantee for the plan you purchase with us.", footer_links_title: "Quick Links", footer_links_about: "About Us", footer_links_tours: "Accommodations", footer_links_contact: "Contact", footer_gallery_title: "Gallery", footer_newsletter_title: "Newsletter", footer_newsletter_placeholder: "Enter your email", footer_newsletter_terms: "I agree to the terms and policies.", footer_copyright: "Copyright © 2025 ReservaPlan.co. All rights reserved." },
        fr: { nav_alojamientos: "Hébergements", nav_activities: "Activités", nav_blog: "Blog", nav_contact: "Contact", topbar_follow: "Suivez-nous:", hero_title: "Profitez de la Colombie", hero_subtitle: "AVENTURE ET EXPÉRIENCES UNIQUES", hero_description: "Découvrez les meilleurs hôtels et appartements que la Colombie a à offrir. Votre prochaine aventure commence ici.", hero_button: "Commencer maintenant", search_destination: "Destination", search_type: "Type", search_duration: "Durée", search_guests: "Invités", search_button: "Rechercher", footer_description: "Nous sommes votre agence de voyages. Notre mission est de vous offrir confort, sécurité et garantie pour le voyage que vous réservez chez nous.", footer_links_title: "Liens Rapides", footer_links_about: "À Propos de Nous", footer_links_tours: "Hébergements", footer_links_contact: "Contact", footer_gallery_title: "Galerie", footer_newsletter_title: "Newsletter", footer_newsletter_placeholder: "Entrez votre email", footer_newsletter_terms: "J'accepte les termes et politiques.", footer_copyright: "Copyright © 2025 ReservaPlan.co. Tous droits réservés." }
    };

    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- LÓGICA DE TRADUCCIÓN ---
    window.changeLanguage = function(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[lang] && translations[lang][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    };
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);

    // ================================================================
    // ===========   LÓGICA PARA RENDERIZAR PLANES POR CATEGORÍA   ========
    // ================================================================
    function renderCategory(plans, containerElement) {
        if (!containerElement) return;
        containerElement.innerHTML = '';
        if (plans.length === 0) {
            containerElement.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No se encontraron alojamientos que coincidan con tu búsqueda.</p>';
            return;
        }
        plans.forEach(plan => {
            // Preparamos el mensaje de WhatsApp con el nombre del plan
            const whatsappMessage = `https://wa.me/573244418618?text=Hola,%20quisiera%20más%20información%20sobre%20el%20alojamiento:%20${encodeURIComponent(plan.nombre)}`;
            
            const planCardHTML = `
                <div class="plan-card">
                    <a href="plan-detalle.html?id=${plan.id}" class="plan-card-link">
                        <img src="${plan.imagen}" alt="${plan.nombre}">
                        <div class="plan-info">
                            <span class="location">${plan.departamento}, ${plan.capital}</span>
                            <h3>${plan.nombre}</h3>
                            <div class="type-badge">${plan.tipo}</div>
                        </div>
                    </a>
                    <div class="plan-card-cta">
                        <a href="${whatsappMessage}" class="btn btn-primary cta-button" target="_blank">
                            <i class='bx bxl-whatsapp'></i> Consultar Plan
                        </a>
                    </div>
                </div>
            `;
            containerElement.insertAdjacentHTML('beforeend', planCardHTML);
        });
    }
    function renderGroupedPlans() {
        const cartagenaGrid = document.getElementById('cartagena-grid');
        const santaMartaGrid = document.getElementById('santa-marta-grid');
        const islasGrid = document.getElementById('islas-grid');
        const cundinamarcaGrid = document.getElementById('cundinamarca-grid');

        const cartagenaPlans = allPlans.filter(plan => plan.capital === 'CARTAGENA');
        const santaMartaPlans = allPlans.filter(plan => plan.capital === 'SANTA MARTA');
        const islasPlans = allPlans.filter(plan => plan.capital === 'SAN ANDRES');
        const cundinamarcaPlans = allPlans.filter(plan => plan.departamento === 'Cundinamarca');

        renderCategory(cartagenaPlans, cartagenaGrid);
        renderCategory(santaMartaPlans, santaMartaGrid);
        renderCategory(islasPlans, islasGrid);
        renderCategory(cundinamarcaPlans, cundinamarcaGrid);
    }
    
    if (document.getElementById('plans-section')) {
        renderGroupedPlans();
    }

    // ================================================================
    // ===========       LÓGICA PARA ACORDEÓN INTERACTIVO       ===========
    // ================================================================
    const locationHeaders = document.querySelectorAll('.location-header');
    locationHeaders.forEach(header => {
        header.addEventListener('click', () => {
            locationHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    const otherContent = document.querySelector(otherHeader.dataset.target);
                    if (otherContent) otherContent.classList.remove('active');
                }
            });
            const targetContent = document.querySelector(header.dataset.target);
            if (targetContent) {
                header.classList.toggle('active');
                targetContent.classList.toggle('active');
            }
        });
    });

    // ================================================================
    // ======   LÓGICA PARA LA BARRA DE BÚSQUEDA EN INDEX.HTML   ======
    // ================================================================
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        // --- Lógica del calendario ---
        flatpickr("#date-picker", { mode: "range", dateFormat: "Y-m-d", minDate: "today" });

        // --- Lógica COMPLETA del contador de huéspedes ---
        const guestsInput = document.getElementById('guests-input');
        const guestsDropdown = document.getElementById('guests-dropdown');
        const counters = {
            adults: { count: 1, min: 1, max: 20, span: document.getElementById('adults-count') },
            children: { count: 0, min: 0, max: 10, span: document.getElementById('children-count') },
            pets: { count: 0, min: 0, max: 5, span: document.getElementById('pets-count') }
        };

        guestsInput.addEventListener('click', (e) => {
            e.stopPropagation();
            guestsDropdown.classList.toggle('active');
        });

        guestsDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target.classList.contains('counter-btn')) {
                const action = e.target.dataset.action;
                const target = e.target.dataset.target;
                const counter = counters[target];

                if (action === 'increment' && counter.count < counter.max) {
                    counter.count++;
                } else if (action === 'decrement' && counter.count > counter.min) {
                    counter.count--;
                }
                updateGuestsDisplay();
            }
        });
        
        function updateGuestsDisplay() {
            Object.values(counters).forEach(counter => {
                counter.span.textContent = counter.count;
                const decrementBtn = guestsDropdown.querySelector(`[data-target="${counter.span.id.split('-')[0]}"][data-action="decrement"]`);
                if (decrementBtn) {
                    decrementBtn.disabled = counter.count <= counter.min;
                }
            });
            document.getElementById('adults-display').textContent = counters.adults.count;
            document.getElementById('children-display').textContent = counters.children.count;
        }
        
        document.addEventListener('click', () => guestsDropdown.classList.remove('active'));
        updateGuestsDisplay();


        // --- Lógica de redirección del formulario ---
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const destination = document.getElementById('destination-select').value;
            const type = document.getElementById('type-select').value;
            const pets = counters.pets.count;

            const queryParams = new URLSearchParams();
            if (destination) queryParams.append('destino', destination);
            if (type) queryParams.append('tipo', type);
            if (pets > 0) queryParams.append('mascotas', 'true');

            window.location.href = `search-results.html?${queryParams.toString()}`;
        });
    }

// ================================================================
    // ======   LÓGICA PARA LA PÁGINA DE RESULTADOS DE BÚSQUEDA   ======
    // ================================================================
    const searchResultsContainer = document.getElementById('search-results-page');
    if (searchResultsContainer) {
        const params = new URLSearchParams(window.location.search);
        const destino = params.get('destino');
        const tipo = params.get('tipo');
        const mascotas = params.get('mascotas') === 'true'; // Convertir a booleano

        // --- INICIO DE LA MODIFICACIÓN PRECISA ---

        // 1. Rellenar los campos de la barra de búsqueda con los valores de la URL
        const destinationSelect = document.getElementById('destination-select');
        const typeSelect = document.getElementById('type-select');

        if (destinationSelect && destino) {
            destinationSelect.value = destino;
        }
        if (typeSelect && tipo) {
            typeSelect.value = tipo;
        }

        // 2. La lógica de filtrado de alojamientos no cambia
        const searchTitle = document.getElementById('search-title');
        const searchGrid = document.getElementById('search-results-grid');
        
        let filteredPlans = allPlans;

        if (destino) {
            filteredPlans = filteredPlans.filter(plan => plan.capital === destino || plan.departamento === destino);
        }
        if (tipo) {
            filteredPlans = filteredPlans.filter(plan => plan.tipo === tipo);
        }
        if (mascotas) {
            // Se compara con la propiedad booleana `mascotas` en cada plan
            filteredPlans = filteredPlans.filter(plan => plan.mascotas === true);
        }
        
        // 3. Mostrar los resultados (sin cambios en esta parte)
        searchTitle.textContent = `Resultados de Búsqueda (${filteredPlans.length})`;
        renderCategory(filteredPlans, searchGrid);

        // --- FIN DE LA MODIFICACIÓN PRECISA ---
    }
    
// ================================================================
// == LÓGICA ESPECÍFICA PARA LA PÁGINA DE DETALLE (plan-detalle.html) ==
// ================================================================
const detalleContainer = document.getElementById('detalle-container');
if (detalleContainer) {
    const params = new URLSearchParams(window.location.search);
    const planId = params.get('id');
    const plan = allPlans.find(p => p.id == planId);

    if (plan) {
        document.title = `${plan.nombre} - ReservaPlan`;

        const mediaList = plan.galeria || [];
        const firstMedia = mediaList.length > 0 ? mediaList[0] : { type: 'image', url: plan.imagen };
        const mainMediaHTML = createMediaElement(firstMedia.url, firstMedia.type);

        let thumbnailsHTML = '';
        const maxThumbnails = 5;
        for (let i = 0; i < Math.min(mediaList.length, maxThumbnails); i++) {
            const mediaItem = mediaList[i];
            const thumbnailUrl = mediaItem.type === 'youtube' ? mediaItem.thumbnail : mediaItem.url;

            if (i === maxThumbnails - 1 && mediaList.length > maxThumbnails) {
                thumbnailsHTML += `
                    <div class="thumbnail more-photos-trigger" onclick="openGalleryModal()">
                        <img src="${thumbnailUrl}" alt="Ver más fotos">
                        <div class="overlay">+${mediaList.length - maxThumbnails}</div>
                    </div>`;
            } else {
                thumbnailsHTML += `
                    <div class="thumbnail" onclick="changeMainMedia('${mediaItem.url}', '${mediaItem.type}')">
                        ${mediaItem.type !== 'image' ? `<img src="${thumbnailUrl}" alt="Miniatura de video"><i class='bx bx-play'></i>` : `<img src="${thumbnailUrl}" alt="Miniatura ${i + 1}">`}
                    </div>`;
            }
        }

        const galleryHTML = `
            <div class="new-gallery-layout">
                <div class="main-media-viewer">${mainMediaHTML}</div>
                <div class="thumbnails-sidebar">${thumbnailsHTML}</div>
            </div>`;

        // actualizacion
let infoHTML;
        if (plan.detalles) {
             const detalles = plan.detalles;
             // El enlace de WhatsApp se mantiene, pero lo usaremos en el nuevo botón
             const whatsappMessage = `https://wa.me/573244418618?text=Hola,%20quisiera%20cotizar%20el%20alojamiento%20${encodeURIComponent(plan.nombre)}%20(Código:%20${plan.codigo})`;
             const reglasHTML = detalles.reglas.map(regla => `<li class="rule-item ${regla.permitido ? 'rule-allowed' : 'rule-denied'}"><i class='bx ${regla.permitido ? 'bx-check-circle' : 'bx-x-circle'}'></i><span>${regla.regla} ${regla.nota ? `<em>(${regla.nota})</em>` : ''}</span></li>`).join('');
             // Eliminamos la variable costosHTML ya que no la mostraremos
             // const costosHTML = detalles.costosAdicionales.map(costo => ... );
             
             infoHTML = `
             <div class="detalle-grid">
                 <div class="detalle-main">
                     <div class="detalle-title"><h1>${plan.nombre}</h1><span class="location-address"><i class='bx bx-map'></i> ${plan.capital}, ${plan.sector}</span></div>
                     <div class="info-tags"><span><i class='bx bx-code-alt'></i> Código: ${plan.codigo || 'N/A'}</span><span><i class='bx bx-award'></i> RNT: ${plan.rnt || 'N/A'}</span><span><i class='bx bxs-user-pin'></i> Hasta ${plan.capacidad} personas</span></div>
                     <h3>Acomodación y Distribución</h3>
                     <ul class="accommodation-list">${detalles.acomodacion.map(a => `<li><strong>${a.cuarto}:</strong> ${a.contenido}</li>`).join('')}</ul>
                     <h3>Zonas Comunes</h3><p>${detalles.zonasComunes}</p>
                     <h3>Reglas del Alojamiento</h3><ul class="rules-list">${reglasHTML}</ul>
                 </div>
                 <div class="detalle-sidebar">
                     <div class="price-box cta-box">
                         <h4>¿Te interesa este lugar?</h4>
                         <p>Haz clic para recibir una cotización personalizada y resolver tus dudas.</p>
                         <a href="${whatsappMessage}" class="btn btn-primary reserve-btn" target="_blank">
                            <i class='bx bxl-whatsapp'></i> Cotizar por WhatsApp
                         </a>
                     </div>
                     <div class="sidebar-card"><h4><i class='bx bx-time-five'></i> Horarios</h4><p><strong>Check-in:</strong> ${detalles.horarios.checkin}<br><strong>Check-out:</strong> ${detalles.horarios.checkout}</p></div>
                     <div class="sidebar-card booking-policy"><h4><i class='bx bx-file'></i> Política de Reserva</h4><p>${detalles.politicasReserva}</p></div>
                 </div>
             </div>`;
        } else {
             // --- CAMBIO EN EL MODO DE RESPALDO ---
             const whatsappMessage = `https://wa.me/573244418618?text=Hola,%20quisiera%20cotizar%20el%20alojamiento%20${encodeURIComponent(plan.nombre)}`;
             infoHTML = `<div class="legacy-details">
                            <h1>${plan.nombre}</h1>
                            <p class="location-address">${plan.departamento}, ${plan.capital}</p>
                            <p class="description">${plan.descripcion}</p>
                            <h3>Servicios Incluidos</h3>
                            <ul class="amenities-list">${plan.servicios.map(servicio => `<li><i class='bx bx-check-circle'></i> ${servicio}</li>`).join('')}</ul>
                            <a href="${whatsappMessage}" class="btn btn-primary reserve-btn" target="_blank" style="margin-top: 1.5rem;">
                                <i class='bx bxl-whatsapp'></i> Cotizar por WhatsApp
                            </a>
                        </div>`;
        }
        detalleContainer.innerHTML = galleryHTML + infoHTML;

        // --- FUNCIONES GLOBALES PARA LA GALERÍA ---
        function createMediaElement(src, type) {
            if (type === 'youtube') {
                return `<iframe class="main-media" src="${src}?autoplay=1&mute=1&loop=1&playlist=${src.split('/').pop()}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else if (type === 'video') {
                return `<video controls autoplay muted loop class="main-media" src="${src}"></video>`;
            }
            return `<img src="${src}" alt="Vista principal" class="main-media">`;
        }
        
        window.changeMainMedia = function(src, type) {
            document.querySelector('.main-media-viewer').innerHTML = createMediaElement(src, type);
        }

        window.openGalleryModal = function() {
            const modal = document.getElementById('gallery-modal');
            const modalGrid = document.getElementById('modal-grid');
            modalGrid.innerHTML = '';
            mediaList.forEach(mediaItem => {
                const thumbnailUrl = mediaItem.type === 'youtube' ? mediaItem.thumbnail : (mediaItem.type === 'video' ? mediaItem.url : mediaItem.url);
                const clickAction = `onclick="changeMainMedia('${mediaItem.url}', '${mediaItem.type}'); closeGalleryModal();"`;
                let mediaHTML = `<div class="modal-media-container ${mediaItem.type !== 'image' ? 'is-video' : ''}" ${clickAction}>
                                    <img src="${thumbnailUrl}" alt="Miniatura de la galería">
                                    ${mediaItem.type !== 'image' ? "<i class='bx bx-play'></i>" : ''}
                                 </div>`;
                modalGrid.innerHTML += mediaHTML;
            });
            modal.style.display = 'flex';
        }

        window.closeGalleryModal = function() {
            document.getElementById('gallery-modal').style.display = 'none';
        }

    } else {
        detalleContainer.innerHTML = '<h1>Error: Alojamiento no encontrado</h1><p><a href="index.html">Volver al inicio</a>.</p>';
    }
}
});