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
        { id: 9, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Apartamento', nombre: 'Brisa Marina piso 3', imagen: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg', galeria: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 215000, descripcion: 'Siente la brisa del mar desde este luminoso apartamento en un tercer piso. Ideal para parejas o pequeñas familias.', servicios: ['Balcón', 'Cocina', 'Aire Acondicionado', 'WiFi'] },
        { id: 10, departamento: 'Magdalena', capital: 'SANTA MARTA', tipo: 'Hotel', nombre: 'Bello Caribe', imagen: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg', galeria: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'], precio: 190000, descripcion: 'Un hotel encantador con un servicio personalizado. Disfruta de nuestra piscina y restaurante con platos típicos de la región.', servicios: ['Piscina', 'Restaurante', 'WiFi Gratis', 'Recepción 24h'] },
        // Cundinamarca (ID 14-15)
        { id: 14, departamento: 'Cundinamarca', capital: 'La Mesa', tipo: 'Casa en condominio', nombre: 'Casa en condominio', imagen: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg', galeria: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg', 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg'], precio: 550000, descripcion: 'Escápate de la ciudad a esta hermosa casa en un condominio exclusivo. Piscina privada, BBQ y amplias zonas verdes.', servicios: ['Piscina Privada', 'BBQ', 'Cocina Equipada', 'Seguridad 24h'] },
        { id: 15, departamento: 'Cundinamarca', capital: 'Chinauta', tipo: 'Hotel', nombre: 'Hotel Chinauta', imagen: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg', galeria: ['https://images.pexels.com/photos/751204/pexels-photo-751204.jpeg', 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg', 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg'], precio: 290000, descripcion: 'El lugar perfecto para un fin de semana de descanso. Disfruta del mejor clima, piscinas y actividades recreativas.', servicios: ['Piscinas', 'Canchas Deportivas', 'Restaurante', 'Salón de Juegos'] },
    ];

    // ================================================================
    // ===========           DICCIONARIO DE TRADUCCIONES          ===========
    // ================================================================
    const translations = {
        es: { nav_alojamientos: "Alojamientos", nav_activities: "Actividades", nav_blog: "Blog", nav_contact: "Contacto", topbar_follow: "Síguenos:", hero_title: "Disfruta Colombia", hero_subtitle: "AVENTURA Y EXPERIENCIAS ÚNICAS", hero_description: "Descubre los mejores hoteles y apartamentos que Colombia tiene para ofrecer. Tu próxima aventura empieza aquí.", hero_button: "Empezar ahora", search_destination: "Destino", search_type: "Tipo", search_duration: "Duración", search_guests: "Huéspedes", search_button: "Buscar", footer_description: "Somos tu agencia de viajes, nuestro servicio es brindar: comodidad, seguridad y garantía al plan que adquieres con nosotros.", footer_links_title: "Enlaces Rápidos", footer_links_about: "Sobre Nosotros", footer_links_tours: "Alojamientos", footer_links_contact: "Contacto", footer_gallery_title: "Galería", footer_newsletter_title: "Newsletter", footer_newsletter_placeholder: "Ingresa tu correo", footer_newsletter_terms: "Acepto los términos y políticas.", footer_copyright: "Copyright © 2025 ReservaPlan.co. Todos los derechos reservados." },
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
        const mascotas = params.get('mascotas');

        const searchTitle = document.getElementById('search-title');
        const searchGrid = document.getElementById('search-results-grid');
        
        let filteredPlans = allPlans;

        if (destino) {
            filteredPlans = filteredPlans.filter(plan => plan.departamento === destino || plan.capital === destino);
        }
        if (tipo) {
            filteredPlans = filteredPlans.filter(plan => plan.tipo === tipo);
        }
        if (mascotas === 'true') {
            filteredPlans = filteredPlans.filter(plan => plan.mascotas === true);
        }
        
        searchTitle.textContent = `Resultados de Búsqueda (${filteredPlans.length})`;
        renderCategory(filteredPlans, searchGrid);
    }
    
    // ================================================================
    // == LÓGICA ESPECÍFICA PARA LA PÁGINA DE DETALLE (plan-detalle.html) ==
    // ================================================================
    // MODIFICADO: Esta sección ha sido reescrita para generar el nuevo diseño de la galería.
    const detalleContainer = document.getElementById('detalle-container');
    if (detalleContainer) {
        const params = new URLSearchParams(window.location.search);
        const planId = params.get('id');
        const plan = allPlans.find(p => p.id == planId);
        
        if (plan) {
            document.title = `${plan.nombre} - ReservaPlan`;

            // Construir la galería principal y las miniaturas
            const mainMediaHTML = plan.video ? `
                <video controls autoplay muted loop class="main-media">
                    <source src="${plan.video}" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
            ` : `
                <img src="${plan.imagen}" alt="Vista principal de ${plan.nombre}" class="main-media">
            `;

            let galleryThumbnailsHTML = '';
            const numThumbnailsToShow = 3; // Mostrar 3 miniaturas + el overlay de "más fotos"

            for (let i = 0; i < Math.min(plan.galeria.length, numThumbnailsToShow); i++) {
                galleryThumbnailsHTML += `<img src="${plan.galeria[i]}" alt="Detalle de ${plan.nombre} ${i + 1}">`;
            }

            // Si hay más fotos de las que se muestran, añadir el overlay
            if (plan.galeria.length > numThumbnailsToShow) {
                galleryThumbnailsHTML += `
                    <div class="more-photos">
                        <img src="${plan.galeria[numThumbnailsToShow]}" alt="Detalle de ${plan.nombre} más">
                        <div class="overlay"><span>+${plan.galeria.length - numThumbnailsToShow} fotos</span></div>
                    </div>
                `;
            } else if (plan.galeria.length === 0) {
                // Si no hay galería, al menos mostrar la imagen principal en el slot de la primera miniatura.
                // Esto es un fallback, idealmente deberías tener al menos una imagen en la galería.
                galleryThumbnailsHTML = `<img src="${plan.imagen}" alt="Detalle de ${plan.nombre}">`;
            }

            const galleryHTML = `
                <div class="detalle-header-galeria">
                    <div class="main-media-wrapper">
                        ${mainMediaHTML}
                    </div>
                    <div class="thumbnail-grid">
                        ${galleryThumbnailsHTML}
                    </div>
                </div>
            `;
            
            // Construir la sección de información (similar al Marriott)
            const infoHTML = `
                <div class="detalle-info-marriott">
                    <div class="detalle-main-content">
                        <h1>${plan.nombre}</h1>
                        <p class="location-address">${plan.departamento}, ${plan.capital}</p>
                        <div class="price-section">
                            <span class="price">$${plan.precio.toLocaleString('es-CO')} COP / noche</span>
                            <button class="btn btn-primary reserve-btn">Reservar Ahora</button>
                        </div>
                        <p class="description">${plan.descripcion}</p>

                        <h3>Servicios Incluidos</h3>
                        <div class="amenities-grid">
                            ${plan.servicios.map(servicio => `
                                <div class="amenity-item">
                                    <i class='bx bx-check-circle'></i> <span>${servicio}</span>
                                </div>
                            `).join('')}
                            ${plan.mascotas ? `
                                <div class="amenity-item pet-friendly">
                                    <i class='bx bxs-dog'></i> <span>Acepta mascotas</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="detalle-sidebar-marriott">
                        <div class="rating-box">
                            <span>Fantástico</span>
                            <span class="rating-score">9,1</span>
                            <span class="reviews-count">1.687 comentarios</span>
                        </div>
                        <div class="highlights-box">
                            <h4>Lo que más gustó a quienes se alojaron aquí</h4>
                            <p>"El hotel es espectacular, la habitación amplia, y la cama súper cómoda. Muy aseado."</p>
                            <span class="reviewer-name"><i class='bx bxs-user-circle'></i> Alcaraz <img src="/assets/colombia-flag.png" alt="Colombia" class="flag-inline"> Colombia</span>
                            <div class="excellent-location">
                                <span>¡Excelente ubicación!</span>
                                <span class="location-score">9,4</span>
                            </div>
                        </div>
                        <div class="map-box">
                            <img src="/assets/mapa-ejemplo.png" alt="Ubicación en el mapa" class="map-img">
                            <button class="btn btn-secondary view-map-btn">Ver en el mapa</button>
                        </div>
                    </div>
                </div>
            `;
            
            detalleContainer.innerHTML = galleryHTML + infoHTML;

            // Lógica para cambiar la imagen principal al hacer clic en las miniaturas (opcional)
            const mainMediaElement = detalleContainer.querySelector('.main-media');
            if (mainMediaElement && !plan.video) { // Solo si es una imagen, no un video
                detalleContainer.querySelectorAll('.thumbnail-grid img').forEach(thumbnail => {
                    thumbnail.addEventListener('click', () => {
                        mainMediaElement.src = thumbnail.src;
                    });
                });
            }

        } else {
            detalleContainer.innerHTML = '<h1>Error: Alojamiento no encontrado</h1><p><a href="index.html">Volver al inicio</a>.</p>';
        }
    }
});