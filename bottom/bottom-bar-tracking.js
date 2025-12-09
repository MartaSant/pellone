/**
 * BOTTOM BAR TRACKING - Script Opzionale per Analytics
 * 
 * Questo script traccia i click sui bottoni della bottom bar
 * e invia eventi a Google Analytics 4 (GA4).
 * 
 * Istruzioni:
 * 1. Includi questo script dopo il caricamento di GA4
 * 2. Assicurati che GA4 sia configurato correttamente
 * 3. Personalizza i nomi dei bottoni e i tipi secondo le tue esigenze
 */

(function() {
    'use strict';
    
    /**
     * Traccia un click su un bottone della bottom bar
     * @param {string} buttonName - Nome del bottone (es. "WhatsApp", "Instagram")
     * @param {string} buttonType - Tipo di azione (es. "social", "contact", "map")
     */
    function trackSocialClick(buttonName, buttonType) {
        try {
            // Metodo 1: Usa gtag se disponibile (GA4 standard)
            if (window.dataLayer && typeof window.gtag === 'function') {
                window.gtag('event', 'social_click', {
                    'button_name': buttonName,
                    'button_type': buttonType
                });
                
                // Push aggiuntivo al dataLayer per compatibilità
                window.dataLayer.push({
                    'event': 'social_click',
                    'button_name': buttonName,
                    'button_type': buttonType
                });
            } 
            // Metodo 2: Fallback solo con dataLayer
            else if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'social_click',
                    'button_name': buttonName,
                    'button_type': buttonType
                });
            }
        } catch (e) {
            // Silenzioso: non bloccare l'esperienza utente se il tracking fallisce
            console.debug('Tracking error:', e);
        }
    }
    
    /**
     * Inizializza il tracking per tutti i bottoni della bottom bar
     */
    function initBottomBarTracking() {
        // Attendi che il DOM sia pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initBottomBarTracking);
            return;
        }
        
        // Seleziona tutti i bottoni della bottom bar
        const bottomBarButtons = document.querySelectorAll('.bottom-bar-btn');
        
        if (bottomBarButtons.length === 0) {
            // Nessun bottone trovato, riprova dopo un breve delay
            setTimeout(initBottomBarTracking, 100);
            return;
        }
        
        // Aggiungi listener a ogni bottone
        bottomBarButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                // Estrai informazioni dal bottone
                const buttonName = getButtonName(button);
                const buttonType = getButtonType(button);
                
                // Traccia il click
                trackSocialClick(buttonName, buttonType);
            });
        });
    }
    
    /**
     * Determina il nome del bottone dalla classe, href o testo
     * @param {HTMLElement} button - Elemento bottone
     * @returns {string} Nome del bottone
     */
    function getButtonName(button) {
        // Prova a estrarre dal testo nascosto (span)
        const span = button.querySelector('span');
        if (span && span.textContent.trim()) {
            return span.textContent.trim();
        }
        
        // Prova a estrarre dalla classe CSS
        const classes = button.className;
        if (classes.includes('--wa') || button.href.includes('wa.me') || button.href.includes('whatsapp')) {
            return 'WhatsApp';
        }
        if (classes.includes('--ig') || button.href.includes('instagram.com')) {
            return 'Instagram';
        }
        if (classes.includes('--call') || button.href.startsWith('tel:')) {
            return 'Chiama';
        }
        if (classes.includes('--email') || button.href.startsWith('mailto:')) {
            return 'Email';
        }
        if (classes.includes('--map') || button.href.includes('maps.google') || button.href.includes('google.com/maps')) {
            return 'Mappa';
        }
        if (classes.includes('--fb') || button.href.includes('facebook.com')) {
            return 'Facebook';
        }
        
        // Fallback: usa il testo dell'icona o un nome generico
        const icon = button.querySelector('i');
        if (icon) {
            const iconClass = icon.className;
            // Estrai il nome dall'icona Font Awesome (es. "fa-whatsapp" -> "WhatsApp")
            const match = iconClass.match(/fa-([a-z0-9-]+)/i);
            if (match) {
                return formatButtonName(match[1]);
            }
        }
        
        return 'Bottone';
    }
    
    /**
     * Determina il tipo di bottone (social, contact, map, etc.)
     * @param {HTMLElement} button - Elemento bottone
     * @returns {string} Tipo del bottone
     */
    function getButtonType(button) {
        const href = button.href || '';
        const classes = button.className;
        
        // Link social media
        if (href.includes('instagram.com') || 
            href.includes('facebook.com') || 
            href.includes('twitter.com') || 
            href.includes('linkedin.com') ||
            classes.includes('--ig') ||
            classes.includes('--fb')) {
            return 'social';
        }
        
        // Contatto diretto (telefono, email)
        if (href.startsWith('tel:') || 
            href.startsWith('mailto:') ||
            classes.includes('--call') ||
            classes.includes('--email')) {
            return 'contact';
        }
        
        // Mappa/Posizione
        if (href.includes('maps.google') || 
            href.includes('google.com/maps') ||
            classes.includes('--map')) {
            return 'map';
        }
        
        // WhatsApp (può essere sia social che contact)
        if (href.includes('wa.me') || 
            href.includes('whatsapp') ||
            classes.includes('--wa')) {
            return 'contact'; // Considerato contact perché è diretto
        }
        
        // Default
        return 'action';
    }
    
    /**
     * Formatta il nome del bottone da una stringa (es. "whatsapp" -> "WhatsApp")
     * @param {string} str - Stringa da formattare
     * @returns {string} Nome formattato
     */
    function formatButtonName(str) {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    // Avvia il tracking quando lo script è caricato
    initBottomBarTracking();
    
    // Re-inizializza se nuovi bottoni vengono aggiunti dinamicamente
    // (utile per SPA o contenuti caricati via AJAX)
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    // Controlla se sono stati aggiunti nuovi bottoni
                    const newButtons = document.querySelectorAll('.bottom-bar-btn:not([data-tracked])');
                    if (newButtons.length > 0) {
                        newButtons.forEach(function(button) {
                            button.setAttribute('data-tracked', 'true');
                            button.addEventListener('click', function(e) {
                                const buttonName = getButtonName(button);
                                const buttonType = getButtonType(button);
                                trackSocialClick(buttonName, buttonType);
                            });
                        });
                    }
                }
            });
        });
        
        // Osserva il body per nuovi elementi
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();

