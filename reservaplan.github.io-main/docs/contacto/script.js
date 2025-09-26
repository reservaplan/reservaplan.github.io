document.addEventListener('DOMContentLoaded', () => {
    // ================================================================
    // ===========           DICCIONARIO DE TRADUCCIONES          ===========
    // ================================================================
    const translations = {
        es: {
            // -- NAVEGACIÓN Y BARRA SUPERIOR --
            nav_tours: "Tours",
            nav_activities: "Alojamientos",
            nav_blog: "Blog",
            nav_contact: "Contacto",
            topbar_follow: "Síguenos:",
            
            // -- PÁGINA DE INICIO (INDEX) --
            hero_title: "Explora Colombia",
            hero_subtitle: "AVENTURA Y EXPERIENCIAS ÚNICAS",
            hero_description: "Descubre los mejores destinos y actividades que Colombia tiene para ofrecer. Tu próxima aventura empieza aquí.",
            hero_button: "Empezar ahora",
            search_destination: "Destino",
            search_type: "Tipo",
            search_type_apartment: "Apartamento",
            search_type_room: "Habitación",
            search_type_tour: "Tour",
            search_duration: "Duración",
            search_guests: "Huéspedes",
            search_button: "Buscar",
            tours_title: "Paquetes de Tours Destacados",
            tours_reviews: "Reseñas",
            tours_days: "días",
            tours_upto: "Hasta",
            tours_people: "personas",
            tours_from: "Desde",

            // -- PÁGINA DE CONTACTO (CONTACTO) --
            contact_title: "Contáctanos",
            contact_breadcrumb_home: "Inicio",
            contact_breadcrumb_contact: "Contacto",
            contact_card_address_title: "Dirección",
            contact_card_phone_title: "Teléfono",
            contact_card_email_title: "Email",
            contact_form_main_title: "Ponte en Contacto",
            contact_form_description: "¿Tienes alguna pregunta o quieres reservar un tour personalizado? Déjanos un mensaje y nuestro equipo te responderá lo antes posible. ¡Estamos aquí para ayudarte a planificar tu próxima gran aventura!",
            contact_form_notice: "Tu dirección de correo no será publicada. Los campos requeridos están marcados *",
            contact_form_button: "Enviar Mensaje",
            form_title: "Rellena el Formulario",
            form_placeholder_name: "Tu Nombre*",
            form_placeholder_email: "Correo Electrónico*",
            form_placeholder_message: "Escribe tu mensaje aquí...",

            // -- FOOTER --
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
            footer_copyright: "Copyright © 2025 ReservaPlan. Todos los derechos reservados."
        },
        en: {
            // -- NAVIGATION AND TOP BAR --
            nav_tours: "Tours",
            nav_activities: "Activities",
            nav_blog: "Blog",
            nav_contact: "Contact",
            topbar_follow: "Follow Us:",

            // -- HOME PAGE (INDEX) --
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
            search_button: "Search",
            tours_title: "Featured Tour Packages",
            tours_reviews: "Reviews",
            tours_days: "days",
            tours_upto: "Up to",
            tours_people: "people",
            tours_from: "From",

            // -- CONTACT PAGE (CONTACTO) --
            contact_title: "Contact Us",
            contact_breadcrumb_home: "Home",
            contact_breadcrumb_contact: "Contact",
            contact_card_address_title: "Address",
            contact_card_phone_title: "Phone Number",
            contact_card_email_title: "Email Address",
            contact_form_main_title: "Get In Touch",
            contact_form_description: "Have a question or want to book a custom tour? Leave us a message, and our team will get back to you as soon as possible. We're here to help you plan your next great adventure!",
            contact_form_notice: "Your email address will not be published. Required fields are marked *",
            contact_form_button: "Send Message",
            form_title: "Fill Up The Form",
            form_placeholder_name: "Your Name*",
            form_placeholder_email: "Email Address*",
            form_placeholder_message: "Enter your message here...",
            
            // -- FOOTER --
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
            footer_copyright: "Copyright © 2025 ReservaPlan. All rights reserved."
        },
        fr: {
            // -- NAVIGATION ET BARRE SUPÉRIEURE --
            nav_tours: "Circuits",
            nav_activities: "Activités",
            nav_blog: "Blog",
            nav_contact: "Contact",
            topbar_follow: "Suivez-nous:",

            // -- PAGE D'ACCUEIL (INDEX) --
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
            search_button: "Rechercher",
            tours_title: "Forfaits de Circuits en Vedette",
            tours_reviews: "Avis",
            tours_days: "jours",
            tours_upto: "Jusqu'à",
            tours_people: "personnes",
            tours_from: "Dès",

            // -- PAGE DE CONTACT (CONTACTO) --
            contact_title: "Contactez-nous",
            contact_breadcrumb_home: "Accueil",
            contact_breadcrumb_contact: "Contact",
            contact_card_address_title: "Adresse",
            contact_card_phone_title: "Numéro de Téléphone",
            contact_card_email_title: "Adresse E-mail",
            contact_form_main_title: "Prenez Contact",
            contact_form_description: "Vous avez une question ou souhaitez réserver un circuit personnalisé? Laissez-nous un message et notre équipe vous répondra dans les plus brefs délais. Nous sommes là pour vous aider à planifier votre prochaine grande aventure!",
            contact_form_notice: "Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués par *",
            contact_form_button: "Envoyer le Message",
            form_title: "Remplir le Formulaire",
            form_placeholder_name: "Votre Nom*",
            form_placeholder_email: "Adresse e-mail*",
            form_placeholder_message: "Entrez votre message ici...",

            // -- PIED DE PAGE --
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
            footer_copyright: "Copyright © 2025 ReservaPlan. Tous droits réservés."
        }
    };

    // ================================================================
    // ===========           LÓGICA FUNCIONAL             ===========
    // ================================================================

    // Función para el menú hamburguesa
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Función global para cambiar idioma
    window.changeLanguage = function(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[lang] && translations[lang][key];

            if (translation) {
                // Si es un input o textarea, cambia el atributo placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                // Si no, cambia el contenido de texto normal
                    element.textContent = translation;
                }
            }
        });
    }

    // Aplicar el idioma guardado al cargar la página
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // 'es' por defecto
    changeLanguage(savedLanguage);
});