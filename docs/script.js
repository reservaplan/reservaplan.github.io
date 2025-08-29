document.addEventListener('DOMContentLoaded', () => {

    // ================================================================
    // ===========     "BASE DE DATOS" CENTRAL DE PLANES        ===========
    // ================================================================
    const allPlans = [
        // Bolivar (ID 1-3)
        { id: 1, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Nuevo Conquistador', imagen: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg', precio: 250000, descripcion: 'Disfruta de una vista espectacular al mar Caribe en el corazón de Bocagrande. Nuestro hotel ofrece piscina, restaurante y acceso directo a la playa.', servicios: ['Piscina', 'WiFi Gratis', 'Restaurante', 'Aire Acondicionado', 'Acceso a Playa'] },
        { id: 2, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Bocagrande en el Laguito', imagen: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg', precio: 320000, descripcion: 'Elegancia y confort se unen en este hotel de lujo. Perfecto para familias y viajes de negocios, con amplias habitaciones y un servicio excepcional.', servicios: ['Piscina', 'Gimnasio', 'WiFi Premium', 'Servicio a la habitación'] },
        { id: 3, departamento: 'Bolivar', capital: 'CARTAGENA', tipo: 'Hotel', nombre: 'Islas del Sol', imagen: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg', precio: 450000, descripcion: 'Vive una experiencia única en las Islas del Rosario. Cabañas privadas, aguas cristalinas y la tranquilidad que buscas para desconectarte.', servicios: ['Playa Privada', 'Snorkel', 'Restaurante', 'Transporte en lancha'] },
        // San Andres (ID 4-5)
        { id: 4, departamento: 'San Andres', capital: 'SAN ANDRES', tipo: 'Hostal', nombre: 'By San Andres Colombia', imagen: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg', precio: 180000, descripcion: 'La opción ideal para viajeros que buscan explorar la isla. Ofrecemos un ambiente amigable, habitaciones limpias y tours locales.', servicios: ['Cocina Compartida', 'WiFi Gratis', 'Terraza', 'Alquiler de Motos'] },
        { id: 5, departamento: 'San Andres', capital: 'SAN ANDRES', tipo: 'Hostal', nombre: 'Vecino de San Andres', imagen: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg', precio: 160000, descripcion: 'Un hostal acogedor y céntrico, perfecto para hacer amigos y disfrutar de la vida nocturna de la isla. Desayuno incluido.', servicios: ['Desayuno Incluido', 'WiFi Gratis', 'Área Social', 'Taquillas de seguridad'] },
        // Magdalena (ID 6-12)
        { id: 6, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Rodadero Cristal Caribean', imagen: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', precio: 280000, descripcion: 'Moderno apartamento con balcón y vista al mar en la zona del Rodadero. Totalmente equipado para que te sientas como en casa.', servicios: ['Cocina Equipada', 'Aire Acondicionado', 'Piscina', 'Parqueadero'] },
        { id: 7, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Tacoa 2', imagen: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', precio: 220000, descripcion: 'Apartamento cómodo y espacioso, ideal para familias. Ubicado a pocas cuadras de la playa, con fácil acceso a tiendas y restaurantes.', servicios: ['Cocina Equipada', 'Ventiladores', 'Piscina', 'Vigilancia 24h'] },
        { id: 8, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Gaira', imagen: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', precio: 195000, descripcion: 'Disfruta de la auténtica vida de Santa Marta en este apartamento en el barrio Gaira. Cómodo y económico, cerca del transporte local.', servicios: ['Cocina', 'WiFi', 'TV por Cable', 'Patio'] },
        { id: 9, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Brisa Marina piso 3', imagen: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg', precio: 215000, descripcion: 'Siente la brisa del mar desde este luminoso apartamento en un tercer piso. Ideal para parejas o pequeñas familias.', servicios: ['Balcón', 'Cocina', 'Aire Acondicionado', 'WiFi'] },
        { id: 10, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Hotel', nombre: 'Bello Caribe', imagen: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg', precio: 190000, descripcion: 'Un hotel encantador con un servicio personalizado. Disfruta de nuestra piscina y restaurante con platos típicos de la región.', servicios: ['Piscina', 'Restaurante', 'WiFi Gratis', 'Recepción 24h'] },
        { id: 11, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Hotel', nombre: 'Rodadero Real', imagen: 'https://images.pexels.com/photos/70442/pexels-photo-70442.jpeg', precio: 240000, descripcion: 'La combinación perfecta de precio y ubicación en El Rodadero. Habitaciones cómodas y un excelente punto de partida para tus aventuras.', servicios: ['Piscina', 'WiFi', 'Aire Acondicionado', 'Caja Fuerte'] },
        { id: 12, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Hotel', nombre: 'Bambu Tairona', imagen: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg', precio: 310000, descripcion: 'Sumérgete en la naturaleza cerca del Parque Tayrona. Un hotel ecológico con un ambiente tranquilo y relajante.', servicios: ['Piscina Natural', 'Restaurante Orgánico', 'Yoga', 'Senderismo'] },
        // Quindio (ID 13)
        { id: 13, departamento: 'Quindio', capital: 'ARMENIA', tipo: 'Hotel', nombre: 'Parque Los Arrieros', imagen: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg', precio: 350000, descripcion: 'Más que un hotel, una experiencia cultural cafetera. Alojamiento temático con acceso al parque y actividades para toda la familia.', servicios: ['Acceso al Parque', 'Piscina', 'Restaurante', 'Shows Culturales'] },
        // Cundinamarca (ID 14-15)
        { id: 14, departamento: 'Cundinamarca', capital: 'La Mesa', tipo: 'Casa en condominio', nombre: 'Casa en condominio', imagen: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg', precio: 550000, descripcion: 'Escápate de la ciudad a esta hermosa casa en un condominio exclusivo. Piscina privada, BBQ y amplias zonas verdes.', servicios: ['Piscina Privada', 'BBQ', 'Cocina Equipada', 'Seguridad 24h'] },
        { id: 15, departamento: 'Cundinamarca', capital: 'Chinauta', tipo: 'Hotel', nombre: 'Hotel Chinauta', imagen: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg', precio: 290000, descripcion: 'El lugar perfecto para un fin de semana de descanso. Disfruta del mejor clima, piscinas y actividades recreativas.', servicios: ['Piscinas', 'Canchas Deportivas', 'Restaurante', 'Salón de Juegos'] },
        // Tolima (ID 16)
        { id: 16, departamento: 'Tolima', capital: 'Ricaurte', tipo: 'Apartamento', nombre: 'Apartamento - Conjunto', imagen: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg', precio: 230000, descripcion: 'Ideal para vacaciones en familia. Moderno apartamento en un conjunto con múltiples piscinas y áreas sociales.', servicios: ['Piscinas', 'Toboganes', 'Parqueadero', 'Cocina Equipada'] },
    ];

    // ================================================================
    // ===========           DICCIONARIO DE TRADUCCIONES          ===========
    // ================================================================
    const translations = {
        // ... (Tu objeto de traducciones completo va aquí) ...
        es: {
            topbar_follow: "Síguenos:",
            nav_tours: "Tours",
            nav_activities: "Actividades",
            nav_blog: "Blog",
            nav_contact: "Contacto",
            hero_title: "Disfruta Colombia",
            hero_subtitle: "AVENTURA Y EXPERIENCIAS ÚNICAS",
            hero_description: "Descubre los mejores hoteles y apartamentos que ReservaPlan.co tiene para ofrecer. Tu próxima aventura empieza aquí.",
            hero_button: "Empezar ahora",
            search_destination: "Donde quieres descansar?",
            search_type: "Tipo de alojamiento",
            search_type_apartment: "Apartamento",
            search_type_room: "Habitación",
            search_type_tour: "Tour",
            search_duration: "Ingreso y Salida",
            search_guests: "Huéspedes",
            search_guests_pets: "Mascotas",
            search_button: "Buscar",
            tours_title: "Habitaciones y Alojamientos",
            tours_reviews: "Reseñas",
            tours_days: "días",
            tours_upto: "Hasta",
            tours_people: "personas",
            tours_from: "Desde",
            footer_description: "Tu agencia de viajes #1 para descubrir las maravillas de Colombia. Vive experiencias inolvidables con nosotros.",
            footer_links_title: "Enlaces Rápidos",
            footer_links_about: "Sobre Nosotros",
            footer_links_tours: "Tours Populares",
            footer_links_gallery: "Galería",
            footer_links_contact: "Contacto",
            footer_gallery_title: "Galería",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_placeholder: "Ingresa tu correo",
            footer_newsletter_terms: "Acepto los términos y políticas.",
            footer_copyright: "Copyright © 2025 ReservaPlan. Todos los derechos reservados.",
        },
        en: {
            topbar_follow: "Follow Us:",
            nav_tours: "Tours",
            nav_activities: "Activities",
            nav_blog: "Blog",
            nav_contact: "Contact",
            hero_title: "Explore Colombia",
            hero_subtitle: "ADVENTURE AND UNIQUE EXPERIENCES",
            hero_description: "Discover the best destinations and activities Colombia has to offer. Your next adventure starts here.",
            hero_button: "Start Now",
            search_destination: "Destination",
            search_type: "Type",
            search_type_apartment: "Apartment",
            search_type_room: "Room",
            search_type_tour: "Tour",
            search_duration: "Duration",
            search_guests: "Guests",
            search_guests_pets: "Pets",
            search_button: "Search",
            tours_title: "Featured Tour Packages",
            tours_reviews: "Reviews",
            tours_days: "days",
            tours_upto: "Up to",
            tours_people: "people",
            tours_from: "From",
            footer_description: "Your #1 travel agency to discover the wonders of Colombia. Live unforgettable experiences with us.",
            footer_links_title: "Quick Links",
            footer_links_about: "About Us",
            footer_links_tours: "Popular Tours",
            footer_links_gallery: "Gallery",
            footer_links_contact: "Contact",
            footer_gallery_title: "Gallery",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_placeholder: "Enter your email",
            footer_newsletter_terms: "I agree to the terms and policies.",
            footer_copyright: "Copyright © 2025 ReservaPlan. All rights reserved.",
        },
        fr: {
                        topbar_follow: "Suivez-nous:",
            nav_tours: "Circuits",
            nav_activities: "Activités",
            nav_blog: "Blog",
            nav_contact: "Contact",
            hero_title: "Explorez la Colombie",
            hero_subtitle: "AVENTURE ET EXPÉRIENCES UNIQUES",
            hero_description: "Découvrez les meilleures destinations et activités que la Colombie a à offrir. Votre prochaine aventure commence ici.",
            hero_button: "Commencer maintenant",
            search_destination: "Destination",
            search_type: "Type",
            search_type_apartment: "Appartement",
            search_type_room: "Chambre",
            search_type_tour: "Circuit",
            search_duration: "Durée",
            search_guests: "Invités",
            search_guests_pets: "Animaux",
            search_button: "Rechercher",
            tours_title: "Forfaits de Circuits en Vedette",
            tours_reviews: "Avis",
            tours_days: "jours",
            tours_upto: "Jusqu'à",
            tours_people: "personnes",
            tours_from: "Dès",
            footer_description: "Votre agence de voyages n°1 pour découvrir les merveilles de la Colombie. Vivez des expériences inoubliables avec nous.",
            footer_links_title: "Liens Rapides",
            footer_links_about: "À Propos de Nous",
            footer_links_tours: "Circuits Populaires",
            footer_links_gallery: "Galerie",
            footer_links_contact: "Contact",
            footer_gallery_title: "Galerie",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_placeholder: "Entrez votre email",
            footer_newsletter_terms: "J'accepte les termes et politiques.",
            footer_copyright: "Copyright © 2025 ReservaPlan. Tous droits réservés.",
        }
    };

    // ================================================================
    // ===========           LÓGICA GENERAL DEL SITIO           ===========
    // ================================================================

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

    // Aplicar idioma guardado al cargar
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);

    // ================================================================
    // ====== LÓGICA ESPECÍFICA PARA LA PÁGINA DE INICIO (index.html) ======
    // ================================================================
    const plansGrid = document.getElementById('plans-grid');
    if (plansGrid) {
        const destinationSelect = document.getElementById('destination-select');
        const typeSelect = document.getElementById('type-select');

        function renderPlans(plansToRender) {
            plansGrid.innerHTML = '';
            if (plansToRender.length === 0) {
                plansGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">No se encontraron alojamientos.</p>';
                return;
            }
            plansToRender.forEach(plan => {
                const planCardHTML = `
                    <a href="plan-detalle.html?id=${plan.id}" class="plan-card">
                        <img src="${plan.imagen}" alt="${plan.nombre}">
                        <div class="plan-info">
                            <span class="location">${plan.departamento}, ${plan.capital}</span>
                            <h3>${plan.nombre}</h3>
                            <div class="type-badge">${plan.tipo}</div>
                            <div class="price">Desde $${plan.precio.toLocaleString('es-CO')} COP</div>
                        </div>
                    </a>
                `;
                plansGrid.insertAdjacentHTML('beforeend', planCardHTML);
            });
        }

        function filterAndRender() {
            let filteredPlans = allPlans;
            const selectedDestination = destinationSelect.value;
            const selectedType = typeSelect.value;
            if (selectedDestination) {
                filteredPlans = filteredPlans.filter(plan => plan.capital === selectedDestination);
            }
            if (selectedType) {
                filteredPlans = filteredPlans.filter(plan => plan.tipo === selectedType);
            }
            renderPlans(filteredPlans);
        }

        destinationSelect.addEventListener('change', filterAndRender);
        typeSelect.addEventListener('change', filterAndRender);
        renderPlans(allPlans); // Carga inicial
    }

    // --- LÓGICA DEL CALENDARIO Y HUÉSPEDES (SOLO EN INDEX) ---
    const datePicker = document.getElementById('date-picker');
    if (datePicker) {
        flatpickr("#date-picker", {
            mode: "range",
            dateFormat: "Y-m-d", // Formato de fecha: Año-Mes-Día
            minDate: "today",    // No permite seleccionar fechas pasadas
            locale: {
                firstDayOfWeek: 1, // Lunes como primer día de la semana
                weekdays: {
                    shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                    longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                },
                months: {
                    shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                    longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                },
            }
        });
    }
    
    const guestsInput = document.getElementById('guests-input');
    if (guestsInput) {
        const guestsDropdown = document.getElementById('guests-dropdown');
        const counters = {
            rooms: { count: 1, min: 1, max: 10 },
            adults: { count: 1, min: 1, max: 20 },
            children: { count: 0, min: 0, max: 10 },
            pets: { count: 0, min: 0, max: 5 }
        };

        guestsInput.addEventListener('click', () => {
            guestsDropdown.classList.toggle('active');
        });

        guestsDropdown.addEventListener('click', (e) => {
            if (e.target.classList.contains('counter-btn')) {
                const action = e.target.dataset.action;
                const target = e.target.dataset.target;
                const counter = counters[target];

                if (action === 'increment' && counter.count < counter.max) {
                    counter.count++;
                } else if (action === 'decrement' && counter.count > counter.min) {
                    counter.count--;
                }
                updateDisplay();
            }
        });

        function updateDisplay() {
            document.getElementById('rooms-count').textContent = counters.rooms.count;
            document.getElementById('adults-count').textContent = counters.adults.count;
            document.getElementById('children-count').textContent = counters.children.count;
            document.getElementById('pets-count').textContent = counters.pets.count;

            document.getElementById('adults-display').textContent = counters.adults.count;
            document.getElementById('children-display').textContent = counters.children.count;
            
            // Suponiendo que tienes un span con id="pets-display" en tu HTML
            const petsDisplay = document.getElementById('pets-display');
            if (petsDisplay) {
                petsDisplay.textContent = counters.pets.count;
            }

            document.querySelector('[data-target="rooms"][data-action="decrement"]').disabled = counters.rooms.count <= counters.rooms.min;
            document.querySelector('[data-target="adults"][data-action="decrement"]').disabled = counters.adults.count <= counters.adults.min;
            document.querySelector('[data-target="children"][data-action="decrement"]').disabled = counters.children.count <= counters.children.min;
            document.querySelector('[data-target="pets"][data-action="decrement"]').disabled = counters.pets.count <= counters.pets.min;
        }
        
        document.addEventListener('click', (e) => {
            if (!guestsInput.contains(e.target) && !guestsDropdown.contains(e.target)) {
                guestsDropdown.classList.remove('active');
            }
        });
        
        updateDisplay();
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
            detalleContainer.innerHTML = `
                <div class="detalle-galeria">
                    <img src="${plan.imagen}" alt="${plan.nombre}">
                </div>
                <div class="detalle-info">
                    <h1>${plan.nombre}</h1>
                    <p class="location">${plan.departamento}, ${plan.capital}</p>
                    <div class="price">$${plan.precio.toLocaleString('es-CO')} COP / noche</div>
                    <p>${plan.descripcion}</p>
                    <h3>Servicios Incluidos</h3>
                    <ul class="amenities-list">
                        ${plan.servicios.map(servicio => `<li>${servicio}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary">Reservar Ahora</button>
                </div>
            `;
        } else {
            detalleContainer.innerHTML = '<h1>Error: Alojamiento no encontrado</h1><p><a href="index.html">Volver al inicio</a>.</p>';
        }
    }
});

