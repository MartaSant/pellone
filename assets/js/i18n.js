/**
 * i18n.js - Internationalization System
 * 
 * Simple translation system using data-i18n attributes.
 * 
 * How to add a new translation key:
 * 1. Add the key to the translations object below (all languages)
 * 2. Add data-i18n="your.key.path" attribute to the HTML element
 * 
 * Example:
 *   HTML: <p data-i18n="page.home.title">Default text</p>
 *   Translations: { it: { page: { home: { title: "Titolo" } } } }
 */

const translations = {
    it: {
        nav: {
            home: "Home",
            menu: "Menù",
            story: "Storia",
            awards: "Riconoscimenti",
            contacts: "Info & Contatti"
        },
        footer: {
            rights: "Tutti i diritti riservati."
        },
        actions: {
            call: "Chiama ora",
            maps: "Apri in Google Maps",
            menu: "Sfoglia il menù",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Pizzeria storica a Napoli",
            title: "La pizza napoletana di famiglia, dal 1960.",
            subtitle: "Nel cuore di [Quartiere di Napoli], forno a legna e impasto tradizionale.",
            badge: "Gestita dai 3 fratelli [Cognome].",
            note: "Non accettiamo prenotazioni – vi aspettiamo direttamente in pizzeria.",
            imagePlaceholder: "Foto del forno a legna o della pizza"
        },
        quick: {
            sectionTitle: "Info rapide",
            today: "Oggi siamo",
            statusOpen: "Aperti",
            statusClosed: "Chiusi",
            hoursLabel: "Orari di oggi: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Indirizzo",
            addressLabel: "Via [Indirizzo], [Quartiere], Napoli.",
            reservationsNote: "Non accettiamo prenotazioni – vi aspettiamo direttamente in pizzeria."
        },
        storyPreview: {
            title: "Dal 1960: la nostra storia",
            body: "Dal forno a legna acceso nel 1960 a oggi, la pizzeria è rimasta un punto di riferimento per chi cerca una pizza napoletana fatta come una volta, con lo stesso impasto tramandato in famiglia.",
            link: "Scopri la storia completa",
            oldPhotoLabel: "Foto storica del locale negli anni '60",
            todayPhotoLabel: "Foto attuale dei tre fratelli in pizzeria"
        },
        storyPage: {
            eyebrow: "Pizzeria storica a Napoli",
            heroTitle: "Dal 1960: la nostra storia",
            heroSubtitle: "Una pizzeria di quartiere diventata un punto di riferimento per chi ama la vera pizza napoletana.",
            traditionTitle: "Forno a legna e impasto tradizionale",
            traditionBody1: "Tutto inizia nel 1960, quando [Nome Fondatore] apre una piccola pizzeria di quartiere, con un solo forno a legna e poche pizze in carta. L'impasto è semplice, fatto a mano, con la stessa ricetta che la famiglia continua a tramandare ancora oggi.",
            traditionBody2: "Nel tempo il locale cresce, ma la filosofia resta la stessa: pochi ingredienti scelti, cottura veloce nel forno a legna e una pizza che profuma di Napoli autentica.",
            traditionPhotoLabel: "Una delle prime foto della pizzeria negli anni '60.",
            familyTitle: "Tre fratelli, un'unica pizzeria",
            familyBody1: "Oggi la pizzeria è gestita dai tre fratelli [Cognome], che sono cresciuti tra il banco, il forno e i tavoli del locale. Ognuno porta il proprio carattere, ma tutti condividono la stessa idea di ospitalità semplice e calorosa.",
            familyBody2: "La sala è ancora quella di una volta, con poche concessioni alla modernità, perché la vera protagonista deve restare la pizza: sottile, morbida e con il cornicione che si scioglie in bocca.",
            familyPhotoLabel: "I tre fratelli [Cognome] oggi al banco della pizzeria.",
            todayTitle: "Oggi come ieri",
            todayBody1: "Tra clienti del quartiere, napoletani che tornano ogni settimana e visitatori da tutto il mondo, la pizzeria è diventata una tappa fissa per chi cerca un'esperienza autentica.",
            todayBody2: "Non ci sono impasti \"2.0\" o mode del momento: solo la pizza napoletana tradizionale, cotta nel forno a legna come nel 1960, con il sorriso di chi la prepara da una vita."
        },
        pizzasHighlight: {
            title: "Le nostre pizze",
            subtitle: "Una selezione delle pizze più richieste, tutte con impasto tradizionale napoletano e cottura nel forno a legna.",
            imagePlaceholder: "Foto della pizza",
            bestSeller: "La più richiesta",
            cta: "Vedi il menù completo",
            margheritaDescription: "Pomodoro, fior di latte, basilico fresco e olio extravergine.",
            marinaraDescription: "Pomodoro, aglio, origano, olio extravergine.",
            diavolaDescription: "Pomodoro, fior di latte e salame piccante.",
            quattroStagioniDescription: "Pomodoro, fior di latte e selezione di ingredienti di stagione."
        },
        menuPage: {
            heroEyebrow: "Menù",
            heroTitle: "Il nostro menù",
            heroSubtitle: "Pizze tradizionali napoletane, fritti di pizzeria e qualche classico da bere. Nessun impasto \"2.0\": solo ricette di famiglia.",
            classicsTitle: "Le classiche",
            specialsTitle: "Le speciali",
            friedTitle: "Fritti di pizzeria",
            drinksTitle: "Da bere",
            noteAllergens: "Chiedi al personale informazioni su allergeni e intolleranze.",
            classics: {
                margherita: "Pomodoro, fior di latte, basilico fresco e olio extravergine.",
                marinara: "Pomodoro, aglio, origano, olio extravergine.",
                capricciosa: "Pomodoro, fior di latte, prosciutto cotto, funghi, carciofi e olive."
            },
            specials: {
                salsicciaFriarielli: "Fior di latte, salsiccia, friarielli napoletani e pepe nero.",
                bufalina: "Pomodoro, mozzarella di bufala DOP, basilico e olio extravergine.",
                provolaPepe: "Pomodoro, provola affumicata, basilico e pepe nero."
            },
            fried: {
                crocche: "Crocchè di patate con cuore di fior di latte.",
                frittatina: "Frittatina di pasta alla napoletana.",
                arancino: "Riso ripieno e fritto, stile pizzeria."
            },
            drinks: {
                water: "Acqua naturale o frizzante.",
                softDrinks: "Bibite in lattina.",
                beer: "Birre alla spina e in bottiglia."
            }
        },
        awardsPreview: {
            title: "Premi & riconoscimenti",
            subtitle: "Negli anni la nostra pizzeria è stata segnalata da guide, giornali e siti di viaggio come uno dei punti fermi per la pizza napoletana tradizionale.",
            logoGuide: "Logo guida gastronomica",
            logoMagazine: "Logo rivista o giornale",
            logoTravel: "Logo sito di viaggi",
            logoCommunity: "Logo premi della community",
            quote: "«Una delle migliori pizzerie di Napoli secondo [nome guida].»",
            link: "Vedi tutti i riconoscimenti"
        },
        awardsPage: {
            eyebrow: "Premi & riconoscimenti",
            heroTitle: "Premi, guide e recensioni",
            heroSubtitle: "Una selezione dei riconoscimenti ricevuti nel tempo da guide gastronomiche, stampa e portali di viaggio.",
            guidesTitle: "Guide gastronomiche",
            pressTitle: "Stampa e riviste",
            onlineTitle: "Recensioni online",
            note: "I riferimenti a guide e articoli sono indicativi: saranno aggiornati in base ai riconoscimenti effettivi confermati dalla pizzeria.",
            guides: {
                item1: {
                    title: "[Nome guida] – Selezione pizzerie Napoli",
                    year: "Dal [Anno]",
                    description: "Inserita tra le pizzerie consigliate a Napoli per la pizza napoletana tradizionale."
                },
                item2: {
                    title: "[Altra guida] – Pizzerie storiche",
                    year: "[Anno]",
                    description: "Riconoscimento come pizzeria storica con forno a legna attivo dal 1960."
                }
            },
            press: {
                item1: {
                    title: "Articolo su [Nome giornale]",
                    year: "[Anno]",
                    description: "Articolo dedicato alle pizzerie di quartiere storiche di Napoli, con focus sulla nostra pizza cotta nel forno a legna."
                },
                item2: {
                    title: "Recensione su [Rivista gastronomica]",
                    year: "[Anno]",
                    description: "Recensione che sottolinea l'impasto tradizionale e l'atmosfera familiare della sala."
                }
            },
            online: {
                item1: {
                    title: "Punteggi su portali di viaggio",
                    description: "Valutazioni positive su portali di viaggio e recensioni dei clienti che raccontano la pizza e l'accoglienza come \"una tappa fissa a Napoli\"."
                },
                item2: {
                    title: "Premi della community",
                    description: "Riconoscimenti basati sulle recensioni degli utenti per costanza nella qualità e fedeltà alla tradizione."
                }
            }
        },
        contactsHome: {
            title: "Dove siamo & contatti",
            address: "Via [Indirizzo], [Quartiere], Napoli.",
            phoneLabel: "Telefono:",
            hours: "Orari di apertura: 12:00 – 15:00, 19:00 – 23:30 (chiuso il [giorno di chiusura]).",
            note: "Non accettiamo prenotazioni: vi aspettiamo direttamente in pizzeria.",
            socialTitle: "Seguici sui social"
        },
        contactsPage: {
            eyebrow: "Info & contatti",
            heroTitle: "Dove siamo e come raggiungerci",
            heroSubtitle: "Tutte le informazioni pratiche per arrivare in pizzeria, chiamarci e sapere quando siamo aperti.",
            mapTitle: "Siamo nel cuore di [Quartiere]",
            mapBody: "La pizzeria si trova in Via [Indirizzo], nel quartiere [Quartiere] a Napoli. Una zona storica, facile da raggiungere con i mezzi pubblici e a pochi minuti a piedi dalle principali vie del centro.",
            hoursTitle: "Orari di apertura",
            hoursIntro: "Gli orari possono variare nei giorni festivi: controlla sempre i nostri social per eventuali aggiornamenti.",
            hoursWeekdays: "Lunedì – Venerdì",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Sabato",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Domenica",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "Giorno di chiusura",
            hoursClosedDayValue: "[Giorno di chiusura settimanale]",
            contactsTitle: "Contatti",
            phoneLabel: "Telefono",
            emailLabel: "Email",
            addressLabel: "Indirizzo",
            addressValue: "Via [Indirizzo], [Quartiere], Napoli.",
            socialTitle: "Social & aggiornamenti",
            socialIntro: "Segui i nostri profili per aggiornamenti su orari speciali, chiusure straordinarie e novità dal forno.",
            faqTitle: "Prenotazioni",
            faqBody: "Al momento non accettiamo prenotazioni: la pizzeria funziona con arrivo diretto. Ti consigliamo di venire con un po' di anticipo nei giorni e negli orari di maggiore affluenza."
        },
        glovoSection: {
            title: "Asporto con Glovo",
            body: "Vuoi gustare la nostra pizza a casa o in hotel? Per l'asporto ci appoggiamo a Glovo: scegli la pizzeria nell'app, ordina e attendi la consegna dove preferisci.",
            note: "Consegna gestita da Glovo. Orari e zone servite possono variare in base alla piattaforma.",
            hint: "Cerca il nome della pizzeria all'interno dell'app o del sito Glovo.",
            logoLabel: "Spazio per il logo/icone Glovo"
        },
        page: {
            home: {
                title: "Benvenuti alla Pizzeria [Nome]",
                subtitle: "Tradizione napoletana dal [Anno]",
                quickInfo: {
                    title: "Info Rapide",
                    text: "Placeholder text for quick info section."
                },
                glovo: {
                    title: "Ordina Online",
                    text: "Placeholder text for Glovo section."
                }
            },
            menu: {
                title: "Il Nostro Menù",
                subtitle: "Le nostre specialità",
                pizzas: {
                    title: "Pizze",
                    text: "Placeholder text for pizza menu."
                }
            },
            story: {
                title: "La Nostra Storia",
                subtitle: "Tradizione e passione",
                content: {
                    title: "La Tradizione",
                    text: "Placeholder text for story content."
                }
            },
            awards: {
                title: "Riconoscimenti",
                subtitle: "I nostri premi e riconoscimenti",
                content: {
                    title: "Premi e Certificazioni",
                    text: "Placeholder text for awards content."
                }
            },
            contacts: {
                title: "Info & Contatti",
                subtitle: "Contattaci",
                map: {
                    title: "Dove Siamo",
                    text: "Placeholder text for map and contact information."
                }
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            menu: "Menu",
            story: "Our Story",
            awards: "Awards",
            contacts: "Info & Contacts"
        },
        footer: {
            rights: "All rights reserved."
        },
        actions: {
            call: "Call now",
            maps: "Open in Google Maps",
            menu: "View the menu",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Historic pizzeria in Naples",
            title: "Family Neapolitan pizza since 1960.",
            subtitle: "In the heart of [district in Naples], wood-fired oven and traditional dough.",
            badge: "Run by the three [Surname] brothers.",
            note: "We don't take reservations – just come by the pizzeria.",
            imagePlaceholder: "Photo of the wood-fired oven or pizza"
        },
        quick: {
            sectionTitle: "Quick info",
            today: "Today we are",
            statusOpen: "Open",
            statusClosed: "Closed",
            hoursLabel: "Today's opening hours: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Address",
            addressLabel: "Via [Address], [District], Naples.",
            reservationsNote: "We do not take reservations: just come by the pizzeria."
        },
        storyPreview: {
            title: "Since 1960: our story",
            body: "From the wood-fired oven lit in 1960 to today, the pizzeria has remained a landmark for those who love Neapolitan pizza made the traditional way, with the same family recipe.",
            link: "Read the full story",
            oldPhotoLabel: "Historic photo of the pizzeria in the 1960s",
            todayPhotoLabel: "Current photo of the three brothers in the pizzeria"
        },
        storyPage: {
            eyebrow: "Historic pizzeria in Naples",
            heroTitle: "Since 1960: our story",
            heroSubtitle: "A neighborhood pizzeria that has become a landmark for those who love real Neapolitan pizza.",
            traditionTitle: "Wood-fired oven and traditional dough",
            traditionBody1: "It all begins in 1960, when [Founder's Name] opens a small neighborhood pizzeria with a single wood-fired oven and just a few pizzas on the menu. The dough is simple, handmade, using the same family recipe that is still followed today.",
            traditionBody2: "Over time the place grows, but the philosophy stays the same: carefully selected ingredients, quick baking in the wood-fired oven, and a pizza that smells of authentic Naples.",
            traditionPhotoLabel: "One of the first photos of the pizzeria in the 1960s.",
            familyTitle: "Three brothers, one pizzeria",
            familyBody1: "Today the pizzeria is run by the three [Surname] brothers, who grew up among the counter, the oven and the tables. Each brings their own personality, but they all share the same idea of simple, warm hospitality.",
            familyBody2: "The dining room is still much like it used to be, with few modern changes, because the real star must remain the pizza: thin, soft and with a cornicione that melts in your mouth.",
            familyPhotoLabel: "The three [Surname] brothers today behind the pizzeria counter.",
            todayTitle: "Today, just like yesterday",
            todayBody1: "Between local regulars, Neapolitans who return every week and visitors from all over the world, the pizzeria has become a must-stop for those seeking an authentic experience.",
            todayBody2: "There are no trendy '2.0' doughs here: only traditional Neapolitan pizza, baked in a wood-fired oven just like in 1960, with the smile of those who have been making it for a lifetime."
        },
        pizzasHighlight: {
            title: "Our pizzas",
            subtitle: "A selection of our most popular pizzas, all with traditional Neapolitan dough and baked in a wood-fired oven.",
            imagePlaceholder: "Pizza photo",
            bestSeller: "Most popular",
            cta: "See the full menu",
            margheritaDescription: "Tomato, fior di latte, fresh basil and extra virgin olive oil.",
            marinaraDescription: "Tomato, garlic, oregano and extra virgin olive oil.",
            diavolaDescription: "Tomato, fior di latte and spicy salami.",
            quattroStagioniDescription: "Tomato, fior di latte and a selection of seasonal toppings."
        },
        menuPage: {
            heroEyebrow: "Menu",
            heroTitle: "Our menu",
            heroSubtitle: "Traditional Neapolitan pizzas, classic fried snacks and drinks. No trendy \"2.0\" doughs here: just family recipes.",
            classicsTitle: "Classics",
            specialsTitle: "Special pizzas",
            friedTitle: "Fried snacks",
            drinksTitle: "Drinks",
            noteAllergens: "Ask our staff for information about allergens and intolerances.",
            classics: {
                margherita: "Tomato, fior di latte, fresh basil and extra virgin olive oil.",
                marinara: "Tomato, garlic, oregano and extra virgin olive oil.",
                capricciosa: "Tomato, fior di latte, cooked ham, mushrooms, artichokes and olives."
            },
            specials: {
                salsicciaFriarielli: "Fior di latte, sausage, Neapolitan friarielli and black pepper.",
                bufalina: "Tomato, buffalo mozzarella PDO, basil and extra virgin olive oil.",
                provolaPepe: "Tomato, smoked provola cheese, basil and black pepper."
            },
            fried: {
                crocche: "Potato crocchè with a fior di latte filling.",
                frittatina: "Small fried pasta omelette, Neapolitan style.",
                arancino: "Stuffed and fried rice ball, pizzeria style."
            },
            drinks: {
                water: "Still or sparkling water.",
                softDrinks: "Soft drinks in cans.",
                beer: "Draft and bottled beers."
            }
        },
        awardsPreview: {
            title: "Awards & recognitions",
            subtitle: "Over the years our pizzeria has been mentioned by guides, newspapers and travel websites as a landmark for traditional Neapolitan pizza.",
            logoGuide: "Food guide logo",
            logoMagazine: "Magazine or newspaper logo",
            logoTravel: "Travel website logo",
            logoCommunity: "Community awards logo",
            quote: "\"One of the best pizzerias in Naples according to [guide name].\"",
            link: "See all recognitions"
        },
        awardsPage: {
            eyebrow: "Awards & recognitions",
            heroTitle: "Awards, guides and reviews",
            heroSubtitle: "A selection of recognitions received over time from food guides, press and travel platforms.",
            guidesTitle: "Food guides",
            pressTitle: "Press & magazines",
            onlineTitle: "Online reviews",
            note: "References to guides and articles are indicative and will be updated based on the official recognitions confirmed by the pizzeria.",
            guides: {
                item1: {
                    title: "[Guide name] – Naples pizzeria selection",
                    year: "Since [Year]",
                    description: "Included among the recommended pizzerias in Naples for traditional Neapolitan pizza."
                },
                item2: {
                    title: "[Another guide] – Historic pizzerias",
                    year: "[Year]",
                    description: "Recognition as a historic pizzeria with a wood-fired oven active since 1960."
                }
            },
            press: {
                item1: {
                    title: "Article in [Newspaper name]",
                    year: "[Year]",
                    description: "Feature about historic neighborhood pizzerias in Naples, focusing on our wood-fired pizza."
                },
                item2: {
                    title: "Review in [Food magazine]",
                    year: "[Year]",
                    description: "Review highlighting the traditional dough and the family atmosphere of the dining room."
                }
            },
            online: {
                item1: {
                    title: "Scores on travel platforms",
                    description: "Positive ratings on travel platforms and customer reviews that describe us as \"a must-stop in Naples\"."
                },
                item2: {
                    title: "Community awards",
                    description: "Awards based on user reviews for consistency in quality and loyalty to tradition."
                }
            }
        },
        contactsHome: {
            title: "Where we are & contacts",
            address: "[Street address], [District], Naples.",
            phoneLabel: "Phone:",
            hours: "Opening hours: 12:00 – 3:00 pm, 7:00 – 11:30 pm (closed on [closing day]).",
            note: "We do not take reservations: just come by the pizzeria.",
            socialTitle: "Follow us on social media"
        },
        contactsPage: {
            eyebrow: "Info & contacts",
            heroTitle: "Where we are and how to reach us",
            heroSubtitle: "All the practical information you need to get to the pizzeria, call us and know when we are open.",
            mapTitle: "In the heart of [district]",
            mapBody: "The pizzeria is located in [Street address], in the [district] area of Naples. A historic neighborhood, easy to reach by public transport and a short walk from the main streets of the city center.",
            hoursTitle: "Opening hours",
            hoursIntro: "Opening hours may change on holidays: please check our social profiles for the latest updates.",
            hoursWeekdays: "Monday – Friday",
            hoursWeekdaysValue: "12:00 – 3:00 pm, 7:00 – 11:30 pm",
            hoursSaturday: "Saturday",
            hoursSaturdayValue: "12:00 – 3:00 pm, 7:00 pm – 12:00 am",
            hoursSunday: "Sunday",
            hoursSundayValue: "7:00 – 11:30 pm",
            hoursClosedDay: "Closing day",
            hoursClosedDayValue: "[Weekly closing day]",
            contactsTitle: "Contacts",
            phoneLabel: "Phone",
            emailLabel: "Email",
            addressLabel: "Address",
            addressValue: "[Street address], [District], Naples.",
            socialTitle: "Social & updates",
            socialIntro: "Follow our profiles for news about special opening times, extraordinary closures and fresh updates from the oven.",
            faqTitle: "Reservations",
            faqBody: "We do not take reservations at the moment: the pizzeria works on a walk-in basis. We recommend coming a bit earlier on the busiest days and times."
        },
        glovoSection: {
            title: "Takeaway with Glovo",
            body: "Want to enjoy our pizza at home or at your hotel? For takeaway we rely on Glovo: choose the pizzeria in the app, place your order and wait for delivery wherever you are.",
            note: "Delivery is managed by Glovo. Available areas and times may vary according to the platform.",
            hint: "Search for the pizzeria's name inside the Glovo app or website.",
            logoLabel: "Placeholder area for Glovo logo/icons"
        },
        page: {
            home: {
                title: "Welcome to [Name] Pizzeria",
                subtitle: "Neapolitan tradition since [Year]",
                quickInfo: {
                    title: "Quick Info",
                    text: "Placeholder text for quick info section."
                },
                glovo: {
                    title: "Order Online",
                    text: "Placeholder text for Glovo section."
                }
            },
            menu: {
                title: "Our Menu",
                subtitle: "Our specialties",
                pizzas: {
                    title: "Pizzas",
                    text: "Placeholder text for pizza menu."
                }
            },
            story: {
                title: "Our Story",
                subtitle: "Tradition and passion",
                content: {
                    title: "The Tradition",
                    text: "Placeholder text for story content."
                }
            },
            awards: {
                title: "Awards",
                subtitle: "Our awards and recognitions",
                content: {
                    title: "Awards and Certifications",
                    text: "Placeholder text for awards content."
                }
            },
            contacts: {
                title: "Info & Contacts",
                subtitle: "Contact us",
                map: {
                    title: "Where We Are",
                    text: "Placeholder text for map and contact information."
                }
            }
        }
    },
    es: {
        nav: {
            home: "Inicio",
            menu: "Menú",
            story: "Nuestra Historia",
            awards: "Reconocimientos",
            contacts: "Info y Contacto"
        },
        footer: {
            rights: "Todos los derechos reservados."
        },
        actions: {
            call: "Llama ahora",
            maps: "Abrir en Google Maps",
            menu: "Ver el menú",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Pizzería histórica en Nápoles",
            title: "Pizza napolitana familiar desde 1960.",
            subtitle: "En el corazón de [barrio en Nápoles], horno de leña y masa tradicional.",
            badge: "Dirigida por los tres hermanos [Apellido].",
            note: "No aceptamos reservas – los esperamos directamente en la pizzería.",
            imagePlaceholder: "Foto del horno de leña o la pizza"
        },
        quick: {
            sectionTitle: "Información rápida",
            today: "Hoy estamos",
            statusOpen: "Abierto",
            statusClosed: "Cerrado",
            hoursLabel: "Horario de hoy: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Dirección",
            addressLabel: "Via [Dirección], [Barrio], Nápoles.",
            reservationsNote: "No aceptamos reservas – los esperamos directamente en la pizzería."
        },
        storyPreview: {
            title: "Desde 1960: nuestra historia",
            body: "Desde el horno de leña encendido en 1960 hasta hoy, la pizzería ha seguido siendo un referente para quienes buscan una pizza napolitana hecha como antes, con la misma masa transmitida en familia.",
            link: "Descubre la historia completa",
            oldPhotoLabel: "Foto histórica del local en los años 60",
            todayPhotoLabel: "Foto actual de los tres hermanos en la pizzería"
        },
        storyPage: {
            eyebrow: "Pizzería histórica en Nápoles",
            heroTitle: "Desde 1960: nuestra historia",
            heroSubtitle: "Una pizzería de barrio que se ha convertido en un referente para quienes aman la verdadera pizza napolitana.",
            traditionTitle: "Horno de leña y masa tradicional",
            traditionBody1: "Todo comienza en 1960, cuando [Nombre del Fundador] abre una pequeña pizzería de barrio, con un solo horno de leña y pocas pizzas en el menú. La masa es sencilla, hecha a mano, con la misma receta que la familia sigue transmitiendo hoy en día.",
            traditionBody2: "Con el tiempo el local crece, pero la filosofía sigue siendo la misma: pocos ingredientes elegidos, cocción rápida en el horno de leña y una pizza que huele a Nápoles auténtica.",
            traditionPhotoLabel: "Una de las primeras fotos de la pizzería en los años 60.",
            familyTitle: "Tres hermanos, una única pizzería",
            familyBody1: "Hoy la pizzería es gestionada por los tres hermanos [Apellido], que crecieron entre el mostrador, el horno y las mesas del local. Cada uno aporta su carácter, pero todos comparten la misma idea de hospitalidad simple y cálida.",
            familyBody2: "La sala sigue siendo la de antes, con pocas concesiones a la modernidad, porque la verdadera protagonista debe seguir siendo la pizza: fina, suave y con el borde que se deshace en la boca.",
            familyPhotoLabel: "Los tres hermanos [Apellido] hoy en el mostrador de la pizzería.",
            todayTitle: "Hoy como ayer",
            todayBody1: "Entre clientes del barrio, napolitanos que regresan cada semana y visitantes de todo el mundo, la pizzería se ha convertido en una parada fija para quienes buscan una experiencia auténtica.",
            todayBody2: "No hay masas \"2.0\" o modas del momento: solo la pizza napolitana tradicional, cocida en el horno de leña como en 1960, con la sonrisa de quienes la preparan desde hace toda la vida."
        },
        pizzasHighlight: {
            title: "Nuestras pizzas",
            subtitle: "Una selección de las pizzas más solicitadas, todas con masa tradicional napolitana y horneadas en horno de leña.",
            imagePlaceholder: "Foto de la pizza",
            bestSeller: "La más solicitada",
            cta: "Ver el menú completo",
            margheritaDescription: "Tomate, fior di latte, albahaca fresca y aceite de oliva virgen extra.",
            marinaraDescription: "Tomate, ajo, orégano y aceite de oliva virgen extra.",
            diavolaDescription: "Tomate, fior di latte y salami picante.",
            quattroStagioniDescription: "Tomate, fior di latte y selección de ingredientes de temporada."
        },
        menuPage: {
            heroEyebrow: "Menú",
            heroTitle: "Nuestro menú",
            heroSubtitle: "Pizzas tradicionales napolitanas, fritos de pizzería y algunos clásicos para beber. Sin masas \"2.0\": solo recetas familiares.",
            classicsTitle: "Las clásicas",
            specialsTitle: "Las especiales",
            friedTitle: "Fritos de pizzería",
            drinksTitle: "Para beber",
            noteAllergens: "Consulta al personal sobre información de alérgenos e intolerancias.",
            classics: {
                margherita: "Tomate, fior di latte, albahaca fresca y aceite de oliva virgen extra.",
                marinara: "Tomate, ajo, orégano y aceite de oliva virgen extra.",
                capricciosa: "Tomate, fior di latte, jamón cocido, champiñones, alcachofas y aceitunas."
            },
            specials: {
                salsicciaFriarielli: "Fior di latte, salchicha, friarielli napolitanos y pimienta negra.",
                bufalina: "Tomate, mozzarella de búfala DOP, albahaca y aceite de oliva virgen extra.",
                provolaPepe: "Tomate, provola ahumada, albahaca y pimienta negra."
            },
            fried: {
                crocche: "Crocchè de patata con relleno de fior di latte.",
                frittatina: "Tortilla de pasta frita, estilo napolitano.",
                arancino: "Bola de arroz rellena y frita, estilo pizzería."
            },
            drinks: {
                water: "Agua natural o con gas.",
                softDrinks: "Refrescos en lata.",
                beer: "Cervezas de barril y botella."
            }
        },
        awardsPreview: {
            title: "Premios y reconocimientos",
            subtitle: "A lo largo de los años nuestra pizzería ha sido mencionada por guías, periódicos y sitios web de viajes como un referente para la pizza napolitana tradicional.",
            logoGuide: "Logo de guía gastronómica",
            logoMagazine: "Logo de revista o periódico",
            logoTravel: "Logo de sitio web de viajes",
            logoCommunity: "Logo de premios de la comunidad",
            quote: "\"Una de las mejores pizzerías de Nápoles según [nombre de guía].\"",
            link: "Ver todos los reconocimientos"
        },
        awardsPage: {
            eyebrow: "Premios y reconocimientos",
            heroTitle: "Premios, guías y reseñas",
            heroSubtitle: "Una selección de reconocimientos recibidos con el tiempo de guías gastronómicas, prensa y portales de viajes.",
            guidesTitle: "Guías gastronómicas",
            pressTitle: "Prensa y revistas",
            onlineTitle: "Reseñas online",
            note: "Las referencias a guías y artículos son indicativas: se actualizarán según los reconocimientos reales confirmados por la pizzería.",
            guides: {
                item1: {
                    title: "[Nombre de guía] – Selección de pizzerías Nápoles",
                    year: "Desde [Año]",
                    description: "Incluida entre las pizzerías recomendadas en Nápoles para la pizza napolitana tradicional."
                },
                item2: {
                    title: "[Otra guía] – Pizzerías históricas",
                    year: "[Año]",
                    description: "Reconocimiento como pizzería histórica con horno de leña activo desde 1960."
                }
            },
            press: {
                item1: {
                    title: "Artículo en [Nombre de periódico]",
                    year: "[Año]",
                    description: "Artículo dedicado a las pizzerías de barrio históricas de Nápoles, centrándose en nuestra pizza cocida en horno de leña."
                },
                item2: {
                    title: "Reseña en [Revista gastronómica]",
                    year: "[Año]",
                    description: "Reseña que subraya la masa tradicional y el ambiente familiar de la sala."
                }
            },
            online: {
                item1: {
                    title: "Puntuaciones en portales de viajes",
                    description: "Valoraciones positivas en portales de viajes y reseñas de clientes que describen la pizza y la acogida como \"una parada fija en Nápoles\"."
                },
                item2: {
                    title: "Premios de la comunidad",
                    description: "Reconocimientos basados en las reseñas de usuarios por constancia en la calidad y fidelidad a la tradición."
                }
            }
        },
        contactsHome: {
            title: "Dónde estamos y contactos",
            address: "Calle [Dirección], [Barrio], Nápoles.",
            phoneLabel: "Teléfono:",
            hours: "Horario de apertura: 12:00 – 15:00, 19:00 – 23:30 (cerrado el [día de cierre]).",
            note: "No aceptamos reservas: los esperamos directamente en la pizzería.",
            socialTitle: "Síguenos en redes sociales"
        },
        contactsPage: {
            eyebrow: "Info y contactos",
            heroTitle: "Dónde estamos y cómo llegar",
            heroSubtitle: "Toda la información práctica para llegar a la pizzería, llamarnos y saber cuándo estamos abiertos.",
            mapTitle: "Estamos en el corazón de [Barrio]",
            mapBody: "La pizzería se encuentra en la Calle [Dirección], en el barrio [Barrio] de Nápoles. Una zona histórica, fácil de alcanzar con transporte público y a pocos minutos a pie de las principales calles del centro.",
            hoursTitle: "Horario de apertura",
            hoursIntro: "Los horarios pueden variar en días festivos: consulta siempre nuestras redes sociales para actualizaciones.",
            hoursWeekdays: "Lunes – Viernes",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Sábado",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Domingo",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "Día de cierre",
            hoursClosedDayValue: "[Día de cierre semanal]",
            contactsTitle: "Contactos",
            phoneLabel: "Teléfono",
            emailLabel: "Email",
            addressLabel: "Dirección",
            addressValue: "Calle [Dirección], [Barrio], Nápoles.",
            socialTitle: "Redes sociales y actualizaciones",
            socialIntro: "Sigue nuestros perfiles para actualizaciones sobre horarios especiales, cierres extraordinarios y novedades del horno.",
            faqTitle: "Reservas",
            faqBody: "Actualmente no aceptamos reservas: la pizzería funciona con llegada directa. Te recomendamos venir con un poco de anticipación en los días y horarios de mayor afluencia."
        },
        glovoSection: {
            title: "Comida para llevar con Glovo",
            body: "¿Quieres disfrutar de nuestra pizza en casa o en el hotel? Para comida para llevar confiamos en Glovo: elige la pizzería en la app, haz tu pedido y espera la entrega donde prefieras.",
            note: "La entrega es gestionada por Glovo. Los horarios y las zonas servidas pueden variar según la plataforma.",
            hint: "Busca el nombre de la pizzería dentro de la app o del sitio web de Glovo.",
            logoLabel: "Espacio para el logo/iconos de Glovo"
        },
        page: {
            home: {
                title: "Bienvenidos a la Pizzería [Nombre]",
                subtitle: "Tradición napolitana desde [Año]",
                quickInfo: {
                    title: "Información Rápida",
                    text: "Texto de marcador de posición para la sección de información rápida."
                },
                glovo: {
                    title: "Pedir en Línea",
                    text: "Texto de marcador de posición para la sección de Glovo."
                }
            },
            menu: {
                title: "Nuestro Menú",
                subtitle: "Nuestras especialidades",
                pizzas: {
                    title: "Pizzas",
                    text: "Texto de marcador de posición para el menú de pizzas."
                }
            },
            story: {
                title: "Nuestra Historia",
                subtitle: "Tradición y pasión",
                content: {
                    title: "La Tradición",
                    text: "Texto de marcador de posición para el contenido de la historia."
                }
            },
            awards: {
                title: "Reconocimientos",
                subtitle: "Nuestros premios y reconocimientos",
                content: {
                    title: "Premios y Certificaciones",
                    text: "Texto de marcador de posición para el contenido de premios."
                }
            },
            contacts: {
                title: "Info y Contacto",
                subtitle: "Contáctanos",
                map: {
                    title: "Dónde Estamos",
                    text: "Texto de marcador de posición para el mapa y la información de contacto."
                }
            }
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            menu: "Menu",
            story: "Notre Histoire",
            awards: "Récompenses",
            contacts: "Infos & Contact"
        },
        footer: {
            rights: "Tous droits réservés."
        },
        actions: {
            call: "Appeler maintenant",
            maps: "Ouvrir dans Google Maps",
            menu: "Voir le menu",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Pizzeria historique à Naples",
            title: "Pizza napolitaine familiale depuis 1960.",
            subtitle: "Au cœur de [quartier à Naples], four à bois et pâte traditionnelle.",
            badge: "Dirigée par les trois frères [Nom de famille].",
            note: "Nous n'acceptons pas les réservations – venez directement à la pizzeria.",
            imagePlaceholder: "Photo du four à bois ou de la pizza"
        },
        quick: {
            sectionTitle: "Infos rapides",
            today: "Aujourd'hui nous sommes",
            statusOpen: "Ouvert",
            statusClosed: "Fermé",
            hoursLabel: "Horaires d'aujourd'hui: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Adresse",
            addressLabel: "Via [Adresse], [Quartier], Naples.",
            reservationsNote: "Nous n'acceptons pas les réservations: nous vous attendons directement à la pizzeria."
        },
        storyPreview: {
            title: "Depuis 1960: notre histoire",
            body: "Du four à bois allumé en 1960 à aujourd'hui, la pizzeria est restée un point de référence pour ceux qui cherchent une pizza napolitaine faite comme autrefois, avec la même pâte transmise en famille.",
            link: "Découvrez l'histoire complète",
            oldPhotoLabel: "Photo historique du local dans les années 60",
            todayPhotoLabel: "Photo actuelle des trois frères à la pizzeria"
        },
        storyPage: {
            eyebrow: "Pizzeria historique à Naples",
            heroTitle: "Depuis 1960: notre histoire",
            heroSubtitle: "Une pizzeria de quartier devenue un point de référence pour ceux qui aiment la vraie pizza napolitaine.",
            traditionTitle: "Four à bois et pâte traditionnelle",
            traditionBody1: "Tout commence en 1960, lorsque [Nom du Fondateur] ouvre une petite pizzeria de quartier, avec un seul four à bois et quelques pizzas au menu. La pâte est simple, faite à la main, avec la même recette que la famille continue de transmettre encore aujourd'hui.",
            traditionBody2: "Au fil du temps, le lieu grandit, mais la philosophie reste la même: quelques ingrédients choisis, cuisson rapide au four à bois et une pizza qui sent Naples authentique.",
            traditionPhotoLabel: "Une des premières photos de la pizzeria dans les années 60.",
            familyTitle: "Trois frères, une seule pizzeria",
            familyBody1: "Aujourd'hui la pizzeria est gérée par les trois frères [Nom de famille], qui ont grandi entre le comptoir, le four et les tables du local. Chacun apporte son caractère, mais tous partagent la même idée d'hospitalité simple et chaleureuse.",
            familyBody2: "La salle est encore celle d'autrefois, avec peu de concessions à la modernité, car la vraie protagoniste doit rester la pizza: fine, moelleuse et avec un cornicione qui fond dans la bouche.",
            familyPhotoLabel: "Les trois frères [Nom de famille] aujourd'hui au comptoir de la pizzeria.",
            todayTitle: "Aujourd'hui comme hier",
            todayBody1: "Entre clients du quartier, Napolitains qui reviennent chaque semaine et visiteurs du monde entier, la pizzeria est devenue une étape incontournable pour ceux qui cherchent une expérience authentique.",
            todayBody2: "Il n'y a pas de pâtes \"2.0\" ou de modes du moment: seulement la pizza napolitaine traditionnelle, cuite au four à bois comme en 1960, avec le sourire de ceux qui la préparent depuis toujours."
        },
        pizzasHighlight: {
            title: "Nos pizzas",
            subtitle: "Une sélection des pizzas les plus demandées, toutes à base de pâte traditionnelle napolitaine et cuites au four à bois.",
            imagePlaceholder: "Photo de la pizza",
            bestSeller: "La plus demandée",
            cta: "Voir le menu complet",
            margheritaDescription: "Tomate, fior di latte, basilic frais et huile d'olive extra vierge.",
            marinaraDescription: "Tomate, ail, origan et huile d'olive extra vierge.",
            diavolaDescription: "Tomate, fior di latte et salami piquant.",
            quattroStagioniDescription: "Tomate, fior di latte et sélection d'ingrédients de saison."
        },
        menuPage: {
            heroEyebrow: "Menu",
            heroTitle: "Notre menu",
            heroSubtitle: "Pizzas traditionnelles napolitaines, fritures de pizzeria et quelques classiques à boire. Pas de pâtes \"2.0\": seulement des recettes familiales.",
            classicsTitle: "Les classiques",
            specialsTitle: "Les spéciales",
            friedTitle: "Fritures de pizzeria",
            drinksTitle: "À boire",
            noteAllergens: "Demandez au personnel des informations sur les allergènes et les intolérances.",
            classics: {
                margherita: "Tomate, fior di latte, basilic frais et huile d'olive extra vierge.",
                marinara: "Tomate, ail, origan et huile d'olive extra vierge.",
                capricciosa: "Tomate, fior di latte, jambon cuit, champignons, artichauts et olives."
            },
            specials: {
                salsicciaFriarielli: "Fior di latte, saucisse, friarielli napolitains et poivre noir.",
                bufalina: "Tomate, mozzarella de bufflonne AOP, basilic et huile d'olive extra vierge.",
                provolaPepe: "Tomate, provola fumée, basilic et poivre noir."
            },
            fried: {
                crocche: "Crocchè de pomme de terre avec cœur de fior di latte.",
                frittatina: "Petite omelette de pâtes frite, style napolitain.",
                arancino: "Boule de riz farcie et frite, style pizzeria."
            },
            drinks: {
                water: "Eau plate ou pétillante.",
                softDrinks: "Boissons gazeuses en canette.",
                beer: "Bières pression et en bouteille."
            }
        },
        awardsPreview: {
            title: "Prix et reconnaissances",
            subtitle: "Au fil des années, notre pizzeria a été mentionnée par des guides, journaux et sites de voyage comme un point de référence pour la pizza napolitaine traditionnelle.",
            logoGuide: "Logo guide gastronomique",
            logoMagazine: "Logo magazine ou journal",
            logoTravel: "Logo site de voyage",
            logoCommunity: "Logo prix de la communauté",
            quote: "\"Une des meilleures pizzerias de Naples selon [nom du guide].\"",
            link: "Voir toutes les reconnaissances"
        },
        awardsPage: {
            eyebrow: "Prix et reconnaissances",
            heroTitle: "Prix, guides et avis",
            heroSubtitle: "Une sélection des reconnaissances reçues au fil du temps de guides gastronomiques, presse et plateformes de voyage.",
            guidesTitle: "Guides gastronomiques",
            pressTitle: "Presse et magazines",
            onlineTitle: "Avis en ligne",
            note: "Les références aux guides et articles sont indicatives et seront mises à jour en fonction des reconnaissances officielles confirmées par la pizzeria.",
            guides: {
                item1: {
                    title: "[Nom du guide] – Sélection pizzerias Naples",
                    year: "Depuis [Année]",
                    description: "Incluse parmi les pizzerias recommandées à Naples pour la pizza napolitaine traditionnelle."
                },
                item2: {
                    title: "[Autre guide] – Pizzerias historiques",
                    year: "[Année]",
                    description: "Reconnaissance comme pizzeria historique avec four à bois actif depuis 1960."
                }
            },
            press: {
                item1: {
                    title: "Article dans [Nom du journal]",
                    year: "[Année]",
                    description: "Reportage sur les pizzerias de quartier historiques de Naples, en se concentrant sur notre pizza cuite au four à bois."
                },
                item2: {
                    title: "Critique dans [Magazine gastronomique]",
                    year: "[Année]",
                    description: "Critique soulignant la pâte traditionnelle et l'atmosphère familiale de la salle."
                }
            },
            online: {
                item1: {
                    title: "Notes sur les plateformes de voyage",
                    description: "Évaluations positives sur les plateformes de voyage et avis clients qui nous décrivent comme \"une étape incontournable à Naples\"."
                },
                item2: {
                    title: "Prix de la communauté",
                    description: "Prix basés sur les avis des utilisateurs pour la constance de la qualité et la fidélité à la tradition."
                }
            }
        },
        contactsHome: {
            title: "Où nous sommes et contacts",
            address: "[Adresse], [Quartier], Naples.",
            phoneLabel: "Téléphone:",
            hours: "Heures d'ouverture: 12:00 – 15:00, 19:00 – 23:30 (fermé le [jour de fermeture]).",
            note: "Nous n'acceptons pas les réservations: nous vous attendons directement à la pizzeria.",
            socialTitle: "Suivez-nous sur les réseaux sociaux"
        },
        contactsPage: {
            eyebrow: "Info et contacts",
            heroTitle: "Où nous sommes et comment nous trouver",
            heroSubtitle: "Toutes les informations pratiques pour vous rendre à la pizzeria, nous appeler et savoir quand nous sommes ouverts.",
            mapTitle: "Nous sommes au cœur de [Quartier]",
            mapBody: "La pizzeria se trouve au [Adresse], dans le quartier [Quartier] à Naples. Un quartier historique, facilement accessible en transports en commun et à quelques minutes à pied des principales rues du centre-ville.",
            hoursTitle: "Heures d'ouverture",
            hoursIntro: "Les horaires peuvent varier les jours fériés: consultez toujours nos réseaux sociaux pour les mises à jour.",
            hoursWeekdays: "Lundi – Vendredi",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Samedi",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Dimanche",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "Jour de fermeture",
            hoursClosedDayValue: "[Jour de fermeture hebdomadaire]",
            contactsTitle: "Contacts",
            phoneLabel: "Téléphone",
            emailLabel: "Email",
            addressLabel: "Adresse",
            addressValue: "[Adresse], [Quartier], Naples.",
            socialTitle: "Réseaux sociaux et actualités",
            socialIntro: "Suivez nos profils pour les actualités sur les horaires spéciaux, fermetures extraordinaires et nouveautés du four.",
            faqTitle: "Réservations",
            faqBody: "Nous n'acceptons pas les réservations pour le moment: la pizzeria fonctionne sur place. Nous recommandons de venir un peu plus tôt les jours et heures les plus chargés."
        },
        glovoSection: {
            title: "À emporter avec Glovo",
            body: "Vous voulez déguster notre pizza à la maison ou à l'hôtel? Pour la livraison, nous comptons sur Glovo: choisissez la pizzeria dans l'app, passez votre commande et attendez la livraison où vous voulez.",
            note: "La livraison est gérée par Glovo. Les horaires et zones desservies peuvent varier selon la plateforme.",
            hint: "Recherchez le nom de la pizzeria dans l'app ou sur le site web de Glovo.",
            logoLabel: "Espace pour le logo/icônes Glovo"
        },
        page: {
            home: {
                title: "Bienvenue à la Pizzeria [Nom]",
                subtitle: "Tradition napolitaine depuis [Année]",
                quickInfo: {
                    title: "Infos Rapides",
                    text: "Texte d'espace réservé pour la section d'informations rapides."
                },
                glovo: {
                    title: "Commander en Ligne",
                    text: "Texte d'espace réservé pour la section Glovo."
                }
            },
            menu: {
                title: "Notre Menu",
                subtitle: "Nos spécialités",
                pizzas: {
                    title: "Pizzas",
                    text: "Texte d'espace réservé pour le menu des pizzas."
                }
            },
            story: {
                title: "Notre Histoire",
                subtitle: "Tradition et passion",
                content: {
                    title: "La Tradition",
                    text: "Texte d'espace réservé pour le contenu de l'histoire."
                }
            },
            awards: {
                title: "Récompenses",
                subtitle: "Nos prix et reconnaissances",
                content: {
                    title: "Prix et Certifications",
                    text: "Texte d'espace réservé pour le contenu des récompenses."
                }
            },
            contacts: {
                title: "Infos & Contact",
                subtitle: "Contactez-nous",
                map: {
                    title: "Où Nous Sommes",
                    text: "Texte d'espace réservé pour la carte et les informations de contact."
                }
            }
        }
    },
    de: {
        nav: {
            home: "Startseite",
            menu: "Menü",
            story: "Unsere Geschichte",
            awards: "Auszeichnungen",
            contacts: "Info & Kontakt"
        },
        footer: {
            rights: "Alle Rechte vorbehalten."
        },
        actions: {
            call: "Jetzt anrufen",
            maps: "In Google Maps öffnen",
            menu: "Menü ansehen",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Historische Pizzeria in Neapel",
            title: "Familien-Pizza nach neapolitanischer Art seit 1960.",
            subtitle: "Im Herzen von [Stadtteil in Neapel], Holzofen und traditioneller Teig.",
            badge: "Geführt von den drei [Nachname] Brüdern.",
            note: "Wir nehmen keine Reservierungen entgegen – kommen Sie direkt zur Pizzeria.",
            imagePlaceholder: "Foto des Holzofens oder der Pizza"
        },
        quick: {
            sectionTitle: "Schnellinfo",
            today: "Heute sind wir",
            statusOpen: "Geöffnet",
            statusClosed: "Geschlossen",
            hoursLabel: "Öffnungszeiten heute: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Adresse",
            addressLabel: "Via [Adresse], [Stadtteil], Neapel.",
            reservationsNote: "Wir nehmen keine Reservierungen entgegen: wir erwarten Sie direkt in der Pizzeria."
        },
        storyPreview: {
            title: "Seit 1960: unsere Geschichte",
            body: "Vom 1960 angezündeten Holzofen bis heute ist die Pizzeria ein Fixpunkt geblieben für alle, die eine neapolitanische Pizza wie früher suchen, mit demselben Teig, der in der Familie weitergegeben wird.",
            link: "Geschichte vollständig lesen",
            oldPhotoLabel: "Historisches Foto des Lokals in den 60er Jahren",
            todayPhotoLabel: "Aktuelles Foto der drei Brüder in der Pizzeria"
        },
        storyPage: {
            eyebrow: "Historische Pizzeria in Neapel",
            heroTitle: "Seit 1960: unsere Geschichte",
            heroSubtitle: "Eine Stadtteilpizzeria, die zu einem Fixpunkt für alle geworden ist, die echte neapolitanische Pizza lieben.",
            traditionTitle: "Holzofen und traditioneller Teig",
            traditionBody1: "Alles beginnt 1960, als [Name des Gründers] eine kleine Stadtteilpizzeria eröffnet, mit nur einem Holzofen und wenigen Pizzen auf der Karte. Der Teig ist einfach, von Hand gemacht, mit demselben Rezept, das die Familie bis heute weitergibt.",
            traditionBody2: "Mit der Zeit wächst der Ort, aber die Philosophie bleibt dieselbe: wenige ausgewählte Zutaten, schnelles Backen im Holzofen und eine Pizza, die nach authentischem Neapel riecht.",
            traditionPhotoLabel: "Eines der ersten Fotos der Pizzeria in den 60er Jahren.",
            familyTitle: "Drei Brüder, eine Pizzeria",
            familyBody1: "Heute wird die Pizzeria von den drei [Nachname] Brüdern geführt, die zwischen Theke, Ofen und Tischen des Lokals aufgewachsen sind. Jeder bringt seinen eigenen Charakter mit, aber alle teilen dieselbe Idee von einfacher und herzlicher Gastfreundschaft.",
            familyBody2: "Der Saal ist immer noch der von früher, mit wenigen Zugeständnissen an die Moderne, denn der wahre Star muss die Pizza bleiben: dünn, weich und mit einem Rand, der im Mund zergeht.",
            familyPhotoLabel: "Die drei [Nachname] Brüder heute an der Theke der Pizzeria.",
            todayTitle: "Heute wie gestern",
            todayBody1: "Zwischen Stammgästen aus dem Viertel, Neapolitanern, die jede Woche zurückkehren, und Besuchern aus aller Welt ist die Pizzeria zu einer festen Station für alle geworden, die eine authentische Erfahrung suchen.",
            todayBody2: "Es gibt keine \"2.0\"-Teige oder Moden des Moments: nur traditionelle neapolitanische Pizza, im Holzofen gebacken wie 1960, mit dem Lächeln derer, die sie ein Leben lang zubereiten."
        },
        pizzasHighlight: {
            title: "Unsere Pizzen",
            subtitle: "Eine Auswahl unserer beliebtesten Pizzen, alle mit traditionellem neapolitanischem Teig und im Holzofen gebacken.",
            imagePlaceholder: "Pizzafoto",
            bestSeller: "Am beliebtesten",
            cta: "Vollständige Speisekarte ansehen",
            margheritaDescription: "Tomate, Fior di Latte, frisches Basilikum und natives Olivenöl extra.",
            marinaraDescription: "Tomate, Knoblauch, Oregano und natives Olivenöl extra.",
            diavolaDescription: "Tomate, Fior di Latte und scharfe Salami.",
            quattroStagioniDescription: "Tomate, Fior di Latte und eine Auswahl an saisonalen Zutaten."
        },
        menuPage: {
            heroEyebrow: "Menü",
            heroTitle: "Unser Menü",
            heroSubtitle: "Traditionelle neapolitanische Pizzen, klassische frittierte Snacks und Getränke. Keine trendigen \"2.0\"-Teige: nur Familienrezepte.",
            classicsTitle: "Die Klassiker",
            specialsTitle: "Besondere Pizzen",
            friedTitle: "Frittierte Snacks",
            drinksTitle: "Getränke",
            noteAllergens: "Fragen Sie unser Personal nach Informationen zu Allergenen und Unverträglichkeiten.",
            classics: {
                margherita: "Tomate, Fior di Latte, frisches Basilikum und natives Olivenöl extra.",
                marinara: "Tomate, Knoblauch, Oregano und natives Olivenöl extra.",
                capricciosa: "Tomate, Fior di Latte, gekochter Schinken, Pilze, Artischocken und Oliven."
            },
            specials: {
                salsicciaFriarielli: "Fior di Latte, Wurst, neapolitanische Friarielli und schwarzer Pfeffer.",
                bufalina: "Tomate, Büffelmozzarella g.U., Basilikum und natives Olivenöl extra.",
                provolaPepe: "Tomate, geräucherte Provola, Basilikum und schwarzer Pfeffer."
            },
            fried: {
                crocche: "Kartoffel-Crocchè mit Fior di Latte-Füllung.",
                frittatina: "Kleine frittierte Pastete, neapolitanischer Art.",
                arancino: "Gefüllte und frittierte Reiskugel, Pizzeria-Art."
            },
            drinks: {
                water: "Stilles oder sprudelndes Wasser.",
                softDrinks: "Erfrischungsgetränke in Dosen.",
                beer: "Fass- und Flaschenbier."
            }
        },
        awardsPreview: {
            title: "Auszeichnungen & Anerkennungen",
            subtitle: "Im Laufe der Jahre wurde unsere Pizzeria von Reiseführern, Zeitungen und Reiseportalen als Fixpunkt für traditionelle neapolitanische Pizza erwähnt.",
            logoGuide: "Logo Restaurantführer",
            logoMagazine: "Logo Zeitschrift oder Zeitung",
            logoTravel: "Logo Reisewebsite",
            logoCommunity: "Logo Community-Auszeichnungen",
            quote: "\"Eine der besten Pizzerien in Neapel laut [Führername].\"",
            link: "Alle Anerkennungen ansehen"
        },
        awardsPage: {
            eyebrow: "Auszeichnungen & Anerkennungen",
            heroTitle: "Auszeichnungen, Führer und Bewertungen",
            heroSubtitle: "Eine Auswahl der im Laufe der Zeit erhaltenen Anerkennungen von Restaurantführern, Presse und Reiseplattformen.",
            guidesTitle: "Restaurantführer",
            pressTitle: "Presse & Magazine",
            onlineTitle: "Online-Bewertungen",
            note: "Die Verweise auf Führer und Artikel sind indikativ und werden basierend auf den von der Pizzeria bestätigten offiziellen Anerkennungen aktualisiert.",
            guides: {
                item1: {
                    title: "[Führername] – Neapel Pizzeria-Auswahl",
                    year: "Seit [Jahr]",
                    description: "Aufgenommen unter den empfohlenen Pizzerien in Neapel für traditionelle neapolitanische Pizza."
                },
                item2: {
                    title: "[Anderer Führer] – Historische Pizzerien",
                    year: "[Jahr]",
                    description: "Anerkennung als historische Pizzeria mit Holzofen, aktiv seit 1960."
                }
            },
            press: {
                item1: {
                    title: "Artikel in [Zeitungsname]",
                    year: "[Jahr]",
                    description: "Feature über historische Stadtteilpizzerien in Neapel, mit Fokus auf unsere im Holzofen gebackene Pizza."
                },
                item2: {
                    title: "Rezension in [Food-Magazin]",
                    year: "[Jahr]",
                    description: "Rezension, die den traditionellen Teig und die familiäre Atmosphäre des Speisesaals hervorhebt."
                }
            },
            online: {
                item1: {
                    title: "Bewertungen auf Reiseplattformen",
                    description: "Positive Bewertungen auf Reiseplattformen und Kundenbewertungen, die uns als \"einen Muss-Stopp in Neapel\" beschreiben."
                },
                item2: {
                    title: "Community-Auszeichnungen",
                    description: "Auszeichnungen basierend auf Benutzerbewertungen für Beständigkeit in der Qualität und Treue zur Tradition."
                }
            }
        },
        contactsHome: {
            title: "Wo wir sind und Kontakte",
            address: "[Straßenadresse], [Stadtteil], Neapel.",
            phoneLabel: "Telefon:",
            hours: "Öffnungszeiten: 12:00 – 15:00, 19:00 – 23:30 (geschlossen am [Schließtag]).",
            note: "Wir nehmen keine Reservierungen entgegen: wir erwarten Sie direkt in der Pizzeria.",
            socialTitle: "Folgen Sie uns in den sozialen Medien"
        },
        contactsPage: {
            eyebrow: "Info & Kontakte",
            heroTitle: "Wo wir sind und wie Sie uns erreichen",
            heroSubtitle: "Alle praktischen Informationen, um zur Pizzeria zu gelangen, uns anzurufen und zu wissen, wann wir geöffnet sind.",
            mapTitle: "Wir sind im Herzen von [Stadtteil]",
            mapBody: "Die Pizzeria befindet sich in der [Straßenadresse], im Stadtteil [Stadtteil] von Neapel. Ein historisches Viertel, leicht mit öffentlichen Verkehrsmitteln erreichbar und nur wenige Gehminuten von den Hauptstraßen des Stadtzentrums entfernt.",
            hoursTitle: "Öffnungszeiten",
            hoursIntro: "Die Öffnungszeiten können sich an Feiertagen ändern: Bitte überprüfen Sie unsere Social-Media-Profile für die neuesten Updates.",
            hoursWeekdays: "Montag – Freitag",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Samstag",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Sonntag",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "Schließtag",
            hoursClosedDayValue: "[Wöchentlicher Schließtag]",
            contactsTitle: "Kontakte",
            phoneLabel: "Telefon",
            emailLabel: "E-Mail",
            addressLabel: "Adresse",
            addressValue: "[Straßenadresse], [Stadtteil], Neapel.",
            socialTitle: "Social Media & Updates",
            socialIntro: "Folgen Sie unseren Profilen für Neuigkeiten über besondere Öffnungszeiten, außerordentliche Schließungen und frische Updates aus dem Ofen.",
            faqTitle: "Reservierungen",
            faqBody: "Wir nehmen derzeit keine Reservierungen entgegen: die Pizzeria funktioniert nach dem Prinzip des direkten Kommens. Wir empfehlen, an den geschäftigsten Tagen und Zeiten etwas früher zu kommen."
        },
        glovoSection: {
            title: "Lieferservice mit Glovo",
            body: "Möchten Sie unsere Pizza zu Hause oder im Hotel genießen? Für den Lieferservice verlassen wir uns auf Glovo: Wählen Sie die Pizzeria in der App, geben Sie Ihre Bestellung auf und warten Sie auf die Lieferung, wo immer Sie sind.",
            note: "Die Lieferung wird von Glovo verwaltet. Verfügbare Gebiete und Zeiten können je nach Plattform variieren.",
            hint: "Suchen Sie nach dem Namen der Pizzeria in der Glovo-App oder auf der Website.",
            logoLabel: "Platzhalter für Glovo-Logo/Symbole"
        },
        page: {
            home: {
                title: "Willkommen in der Pizzeria [Name]",
                subtitle: "Neapolitanische Tradition seit [Jahr]",
                quickInfo: {
                    title: "Schnellinfo",
                    text: "Platzhaltertext für den Schnellinfo-Bereich."
                },
                glovo: {
                    title: "Online Bestellen",
                    text: "Platzhaltertext für den Glovo-Bereich."
                }
            },
            menu: {
                title: "Unser Menü",
                subtitle: "Unsere Spezialitäten",
                pizzas: {
                    title: "Pizzen",
                    text: "Platzhaltertext für das Pizza-Menü."
                }
            },
            story: {
                title: "Unsere Geschichte",
                subtitle: "Tradition und Leidenschaft",
                content: {
                    title: "Die Tradition",
                    text: "Platzhaltertext für den Geschichtsinhalt."
                }
            },
            awards: {
                title: "Auszeichnungen",
                subtitle: "Unsere Preise und Anerkennungen",
                content: {
                    title: "Preise und Zertifizierungen",
                    text: "Platzhaltertext für den Auszeichnungsinhalt."
                }
            },
            contacts: {
                title: "Info & Kontakt",
                subtitle: "Kontaktieren Sie uns",
                map: {
                    title: "Wo Wir Sind",
                    text: "Platzhaltertext für Karte und Kontaktinformationen."
                }
            }
        }
    },
    ru: {
        nav: {
            home: "Главная",
            menu: "Меню",
            story: "Наша История",
            awards: "Награды",
            contacts: "Информация и Контакты"
        },
        footer: {
            rights: "Все права защищены."
        },
        actions: {
            call: "Позвонить сейчас",
            maps: "Открыть в Google Maps",
            menu: "Посмотреть меню",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Историческая пиццерия в Неаполе",
            title: "Семейная неаполитанская пицца с 1960 года.",
            subtitle: "В сердце [район в Неаполе], дровяная печь и традиционное тесто.",
            badge: "Управляется тремя братьями [Фамилия].",
            note: "Мы не принимаем бронирование – ждём вас прямо в пиццерии.",
            imagePlaceholder: "Фото дровяной печи или пиццы"
        },
        quick: {
            sectionTitle: "Быстрая информация",
            today: "Сегодня мы",
            statusOpen: "Открыто",
            statusClosed: "Закрыто",
            hoursLabel: "Часы работы сегодня: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Адрес",
            addressLabel: "Via [Адрес], [Район], Неаполь.",
            reservationsNote: "Мы не принимаем бронирования – мы ждем вас прямо в пиццерии."
        },
        storyPreview: {
            title: "С 1960 года: наша история",
            body: "От дровяной печи, зажженной в 1960 году, до наших дней пиццерия остается ориентиром для тех, кто ищет неаполитанскую пиццу, приготовленную как раньше, с тем же тестом, передаваемым в семье.",
            link: "Прочитать полную историю",
            oldPhotoLabel: "Историческое фото заведения в 60-е годы",
            todayPhotoLabel: "Текущее фото трех братьев в пиццерии"
        },
        storyPage: {
            eyebrow: "Историческая пиццерия в Неаполе",
            heroTitle: "С 1960 года: наша история",
            heroSubtitle: "Районная пиццерия, которая стала ориентиром для тех, кто любит настоящую неаполитанскую пиццу.",
            traditionTitle: "Дровяная печь и традиционное тесто",
            traditionBody1: "Все начинается в 1960 году, когда [Имя Основателя] открывает небольшую районную пиццерию с одной дровяной печью и всего несколькими видами пиццы в меню. Тесто простое, ручной работы, по тому же рецепту, который семья продолжает передавать и сегодня.",
            traditionBody2: "Со временем место растет, но философия остается той же: несколько отобранных ингредиентов, быстрая выпечка в дровяной печи и пицца, которая пахнет настоящим Неаполем.",
            traditionPhotoLabel: "Одно из первых фото пиццерии в 60-е годы.",
            familyTitle: "Трое братьев, одна пиццерия",
            familyBody1: "Сегодня пиццерию ведут трое братьев [Фамилия], которые выросли между прилавком, печью и столами заведения. Каждый привносит свой характер, но все разделяют одну идею простого и теплого гостеприимства.",
            familyBody2: "Зал все еще как раньше, с минимальными уступками современности, потому что главной звездой должна оставаться пицца: тонкая, мягкая и с краем, который тает во рту.",
            familyPhotoLabel: "Трое братьев [Фамилия] сегодня за прилавком пиццерии.",
            todayTitle: "Сегодня, как вчера",
            todayBody1: "Среди местных постоянных клиентов, неаполитанцев, возвращающихся каждую неделю, и посетителей со всего мира пиццерия стала обязательной остановкой для тех, кто ищет аутентичный опыт.",
            todayBody2: "Здесь нет модных тестов \"2.0\" или трендов момента: только традиционная неаполитанская пицца, запеченная в дровяной печи, как в 1960 году, с улыбкой тех, кто готовит ее всю жизнь."
        },
        pizzasHighlight: {
            title: "Наши пиццы",
            subtitle: "Подборка самых популярных пицц, все с традиционным неаполитанским тестом и запеченные в дровяной печи.",
            imagePlaceholder: "Фото пиццы",
            bestSeller: "Самая популярная",
            cta: "Посмотреть полное меню",
            margheritaDescription: "Томат, фьор ди латте, свежий базилик и оливковое масло экстра вирджин.",
            marinaraDescription: "Томат, чеснок, орегано и оливковое масло экстра вирджин.",
            diavolaDescription: "Томат, фьор ди латте и острая салями.",
            quattroStagioniDescription: "Томат, фьор ди латте и подборка сезонных начинок."
        },
        menuPage: {
            heroEyebrow: "Меню",
            heroTitle: "Наше меню",
            heroSubtitle: "Традиционные неаполитанские пиццы, классические жареные закуски и напитки. Никаких модных тестов \"2.0\": только семейные рецепты.",
            classicsTitle: "Классические",
            specialsTitle: "Особые пиццы",
            friedTitle: "Жареные закуски",
            drinksTitle: "Напитки",
            noteAllergens: "Обратитесь к персоналу за информацией об аллергенах и непереносимости.",
            classics: {
                margherita: "Томат, фьор ди латте, свежий базилик и оливковое масло экстра вирджин.",
                marinara: "Томат, чеснок, орегано и оливковое масло экстра вирджин.",
                capricciosa: "Томат, фьор ди латте, вареная ветчина, грибы, артишоки и оливки."
            },
            specials: {
                salsicciaFriarielli: "Фьор ди латте, колбаса, неаполитанские фриариелли и черный перец.",
                bufalina: "Томат, моццарелла из буйволиного молока ЗОУ, базилик и оливковое масло экстра вирджин.",
                provolaPepe: "Томат, копченая провола, базилик и черный перец."
            },
            fried: {
                crocche: "Картофельные крокеты с начинкой из фьор ди латте.",
                frittatina: "Маленькая жареная паста-омлет, неаполитанский стиль.",
                arancino: "Фаршированный и жареный рисовый шарик, стиль пиццерии."
            },
            drinks: {
                water: "Вода без газа или газированная.",
                softDrinks: "Газированные напитки в банках.",
                beer: "Разливное и бутылочное пиво."
            }
        },
        awardsPreview: {
            title: "Награды и признания",
            subtitle: "На протяжении многих лет наша пиццерия упоминалась в путеводителях, газетах и туристических сайтах как ориентир для традиционной неаполитанской пиццы.",
            logoGuide: "Логотип гастрономического путеводителя",
            logoMagazine: "Логотип журнала или газеты",
            logoTravel: "Логотип туристического сайта",
            logoCommunity: "Логотип наград сообщества",
            quote: "\"Одна из лучших пиццерий в Неаполе по версии [название путеводителя].\"",
            link: "Посмотреть все признания"
        },
        awardsPage: {
            eyebrow: "Награды и признания",
            heroTitle: "Награды, путеводители и отзывы",
            heroSubtitle: "Подборка признаний, полученных со временем от гастрономических путеводителей, прессы и туристических платформ.",
            guidesTitle: "Гастрономические путеводители",
            pressTitle: "Пресса и журналы",
            onlineTitle: "Онлайн-отзывы",
            note: "Ссылки на путеводители и статьи носят ознакомительный характер и будут обновляться в зависимости от официальных признаний, подтвержденных пиццерией.",
            guides: {
                item1: {
                    title: "[Название путеводителя] – Подборка пиццерий Неаполя",
                    year: "С [Год]",
                    description: "Включена в список рекомендуемых пиццерий в Неаполе для традиционной неаполитанской пиццы."
                },
                item2: {
                    title: "[Другой путеводитель] – Исторические пиццерии",
                    year: "[Год]",
                    description: "Признание как историческая пиццерия с дровяной печью, работающей с 1960 года."
                }
            },
            press: {
                item1: {
                    title: "Статья в [Название газеты]",
                    year: "[Год]",
                    description: "Статья о исторических районных пиццериях Неаполя, с акцентом на нашу пиццу, запеченную в дровяной печи."
                },
                item2: {
                    title: "Обзор в [Гастрономическом журнале]",
                    year: "[Год]",
                    description: "Обзор, подчеркивающий традиционное тесто и семейную атмосферу зала."
                }
            },
            online: {
                item1: {
                    title: "Оценки на туристических платформах",
                    description: "Положительные оценки на туристических платформах и отзывы клиентов, которые описывают нас как \"обязательную остановку в Неаполе\"."
                },
                item2: {
                    title: "Награды сообщества",
                    description: "Награды на основе отзывов пользователей за постоянство в качестве и верность традициям."
                }
            }
        },
        contactsHome: {
            title: "Где мы находимся и контакты",
            address: "[Адрес улицы], [Район], Неаполь.",
            phoneLabel: "Телефон:",
            hours: "Часы работы: 12:00 – 15:00, 19:00 – 23:30 (закрыто в [день закрытия]).",
            note: "Мы не принимаем бронирования: ждем вас прямо в пиццерии.",
            socialTitle: "Подписывайтесь на нас в социальных сетях"
        },
        contactsPage: {
            eyebrow: "Информация и контакты",
            heroTitle: "Где мы находимся и как до нас добраться",
            heroSubtitle: "Вся практическая информация, чтобы добраться до пиццерии, позвонить нам и узнать, когда мы открыты.",
            mapTitle: "Мы в самом сердце [Района]",
            mapBody: "Пиццерия находится по адресу [Адрес улицы], в районе [Район] Неаполя. Исторический район, легко доступный на общественном транспорте и в нескольких минутах ходьбы от главных улиц центра города.",
            hoursTitle: "Часы работы",
            hoursIntro: "Часы работы могут меняться в праздничные дни: всегда проверяйте наши социальные сети для обновлений.",
            hoursWeekdays: "Понедельник – Пятница",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Суббота",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Воскресенье",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "День закрытия",
            hoursClosedDayValue: "[Еженедельный день закрытия]",
            contactsTitle: "Контакты",
            phoneLabel: "Телефон",
            emailLabel: "Электронная почта",
            addressLabel: "Адрес",
            addressValue: "[Адрес улицы], [Район], Неаполь.",
            socialTitle: "Социальные сети и обновления",
            socialIntro: "Подписывайтесь на наши профили для новостей о специальных часах работы, необычных закрытиях и свежих новостях из печи.",
            faqTitle: "Бронирования",
            faqBody: "В настоящее время мы не принимаем бронирования: пиццерия работает по принципу прямого посещения. Мы рекомендуем приходить немного раньше в самые загруженные дни и время."
        },
        glovoSection: {
            title: "Доставка с Glovo",
            body: "Хотите насладиться нашей пиццей дома или в отеле? Для доставки мы используем Glovo: выберите пиццерию в приложении, сделайте заказ и дождитесь доставки, где бы вы ни находились.",
            note: "Доставка управляется Glovo. Доступные районы и время могут варьироваться в зависимости от платформы.",
            hint: "Найдите название пиццерии в приложении или на сайте Glovo.",
            logoLabel: "Место для логотипа/иконок Glovo"
        },
        page: {
            home: {
                title: "Добро пожаловать в Пиццерию [Название]",
                subtitle: "Неаполитанская традиция с [Год]",
                quickInfo: {
                    title: "Быстрая Информация",
                    text: "Заполнитель для раздела быстрой информации."
                },
                glovo: {
                    title: "Заказать Онлайн",
                    text: "Заполнитель для раздела Glovo."
                }
            },
            menu: {
                title: "Наше Меню",
                subtitle: "Наши специалитеты",
                pizzas: {
                    title: "Пиццы",
                    text: "Заполнитель для меню пицц."
                }
            },
            story: {
                title: "Наша История",
                subtitle: "Традиция и страсть",
                content: {
                    title: "Традиция",
                    text: "Заполнитель для содержания истории."
                }
            },
            awards: {
                title: "Награды",
                subtitle: "Наши награды и признания",
                content: {
                    title: "Награды и Сертификаты",
                    text: "Заполнитель для содержания наград."
                }
            },
            contacts: {
                title: "Информация и Контакты",
                subtitle: "Свяжитесь с нами",
                map: {
                    title: "Где Мы Находимся",
                    text: "Заполнитель для карты и контактной информации."
                }
            }
        }
    },
    uk: {
        nav: {
            home: "Головна",
            menu: "Меню",
            story: "Наша Історія",
            awards: "Нагороди",
            contacts: "Інформація та Контакти"
        },
        footer: {
            rights: "Всі права захищені."
        },
        actions: {
            call: "Зателефонувати зараз",
            maps: "Відкрити в Google Maps",
            menu: "Переглянути меню",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Історична піцерія в Неаполі",
            title: "Сімейна неаполітанська піца з 1960 року.",
            subtitle: "У серці [район у Неаполі], дерев'яна піч і традиційне тісто.",
            badge: "Керується трьома братами [Прізвище].",
            note: "Ми не приймаємо бронювання – чекаємо вас прямо в піцерії.",
            imagePlaceholder: "Фото дерев'яної печі або піци"
        },
        quick: {
            sectionTitle: "Швидка інформація",
            today: "Сьогодні ми",
            statusOpen: "Відкрито",
            statusClosed: "Закрито",
            hoursLabel: "Години роботи сьогодні: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Адреса",
            addressLabel: "Via [Адреса], [Район], Неаполь.",
            reservationsNote: "Ми не приймаємо бронювання – ми чекаємо вас прямо в піцерії."
        },
        storyPreview: {
            title: "З 1960 року: наша історія",
            body: "Від дерев'яної печі, запаленої в 1960 році, до сьогодення піцерія залишається орієнтиром для тих, хто шукає неаполітанську піцу, приготовану як раніше, з тим самим тістом, що передається в родині.",
            link: "Прочитати повну історію",
            oldPhotoLabel: "Історичне фото закладу в 60-ті роки",
            todayPhotoLabel: "Поточне фото трьох братів у піцерії"
        },
        storyPage: {
            eyebrow: "Історична піцерія в Неаполі",
            heroTitle: "З 1960 року: наша історія",
            heroSubtitle: "Районна піцерія, яка стала орієнтиром для тих, хто любить справжню неаполітанську піцу.",
            traditionTitle: "Дерев'яна піч і традиційне тісто",
            traditionBody1: "Все починається в 1960 році, коли [Ім'я Засновника] відкриває невелику районну піцерію з однією дерев'яною піччю і всього кількома видами піци в меню. Тісто просте, ручної роботи, за тим самим рецептом, який родина продовжує передавати і сьогодні.",
            traditionBody2: "З часом місце зростає, але філософія залишається тією ж: кілька відібраних інгредієнтів, швидка випічка в дерев'яній печі і піца, яка пахне справжнім Неаполем.",
            traditionPhotoLabel: "Одне з перших фото піцерії в 60-ті роки.",
            familyTitle: "Троє братів, одна піцерія",
            familyBody1: "Сьогодні піцерію ведуть троє братів [Прізвище], які виросли між прилавком, піччю і столами закладу. Кожен привносить свій характер, але всі поділяють одну ідею простого і теплого гостинного прийому.",
            familyBody2: "Зал все ще як раніше, з мінімальними поступками сучасності, тому що головною зіркою має залишатися піца: тонка, м'яка і з краєм, який тане в роті.",
            familyPhotoLabel: "Троє братів [Прізвище] сьогодні за прилавком піцерії.",
            todayTitle: "Сьогодні, як вчора",
            todayBody1: "Серед місцевих постійних клієнтів, неаполітанців, які повертаються щотижня, і відвідувачів з усього світу піцерія стала обов'язковою зупинкою для тих, хто шукає автентичний досвід.",
            todayBody2: "Тут немає модних тістець \"2.0\" або трендів моменту: лише традиційна неаполітанська піца, випічена в дерев'яній печі, як у 1960 році, з посмішкою тих, хто готує її все життя."
        },
        pizzasHighlight: {
            title: "Наші піци",
            subtitle: "Підбірка найпопулярніших піц, всі з традиційним неаполітанським тістом і випічені в дерев'яній печі.",
            imagePlaceholder: "Фото піци",
            bestSeller: "Найпопулярніша",
            cta: "Переглянути повне меню",
            margheritaDescription: "Томат, фьор ді латте, свіжий базилік і оливкова олія екстра верджін.",
            marinaraDescription: "Томат, часник, орегано і оливкова олія екстра верджін.",
            diavolaDescription: "Томат, фьор ді латте і гостра салямі.",
            quattroStagioniDescription: "Томат, фьор ді латте і підбірка сезонних начинок."
        },
        menuPage: {
            heroEyebrow: "Меню",
            heroTitle: "Наше меню",
            heroSubtitle: "Традиційні неаполітанські піци, класичні смажені закуски та напої. Жодних модних тістець \"2.0\": лише сімейні рецепти.",
            classicsTitle: "Класичні",
            specialsTitle: "Особливі піци",
            friedTitle: "Смажені закуски",
            drinksTitle: "Напої",
            noteAllergens: "Зверніться до персоналу за інформацією про алергени та непереносимість.",
            classics: {
                margherita: "Томат, фьор ді латте, свіжий базилік і оливкова олія екстра верджін.",
                marinara: "Томат, часник, орегано і оливкова олія екстра верджін.",
                capricciosa: "Томат, фьор ді латте, варена шинка, гриби, артишоки і оливки."
            },
            specials: {
                salsicciaFriarielli: "Фьор ді латте, ковбаса, неаполітанські фріаріеллі і чорний перець.",
                bufalina: "Томат, моцарела з буйволиного молока ЗОП, базилік і оливкова олія екстра верджін.",
                provolaPepe: "Томат, копчена провола, базилік і чорний перець."
            },
            fried: {
                crocche: "Картопляні крокети з начинкою з фьор ді латте.",
                frittatina: "Маленька смажена паста-омлет, неаполітанський стиль.",
                arancino: "Фарширована і смажена рисова кулька, стиль піцерії."
            },
            drinks: {
                water: "Вода без газу або газована.",
                softDrinks: "Газовані напої в банках.",
                beer: "Розливне і пляшкове пиво."
            }
        },
        awardsPreview: {
            title: "Нагороди та визнання",
            subtitle: "Протягом багатьох років нашу піцерію згадували в путівниках, газетах і туристичних сайтах як орієнтир для традиційної неаполітанської піци.",
            logoGuide: "Логотип гастрономічного путівника",
            logoMagazine: "Логотип журналу або газети",
            logoTravel: "Логотип туристичного сайту",
            logoCommunity: "Логотип нагород спільноти",
            quote: "\"Одна з найкращих піцерій у Неаполі за версією [назва путівника].\"",
            link: "Переглянути всі визнання"
        },
        awardsPage: {
            eyebrow: "Нагороди та визнання",
            heroTitle: "Нагороди, путівники та відгуки",
            heroSubtitle: "Підбірка визнань, отриманих з часом від гастрономічних путівників, преси та туристичних платформ.",
            guidesTitle: "Гастрономічні путівники",
            pressTitle: "Прес-служба та журнали",
            onlineTitle: "Онлайн-відгуки",
            note: "Посилання на путівники та статті носять ознайомчий характер і будуть оновлюватися залежно від офіційних визнань, підтверджених піцерією.",
            guides: {
                item1: {
                    title: "[Назва путівника] – Підбірка піцерій Неаполя",
                    year: "З [Рік]",
                    description: "Включена до списку рекомендованих піцерій у Неаполі для традиційної неаполітанської піци."
                },
                item2: {
                    title: "[Інший путівник] – Історичні піцерії",
                    year: "[Рік]",
                    description: "Визнання як історична піцерія з дерев'яною піччю, що працює з 1960 року."
                }
            },
            press: {
                item1: {
                    title: "Стаття в [Назва газети]",
                    year: "[Рік]",
                    description: "Стаття про історичні районні піцерії Неаполя з акцентом на нашу піцу, випічену в дерев'яній печі."
                },
                item2: {
                    title: "Огляд у [Гастрономічному журналі]",
                    year: "[Рік]",
                    description: "Огляд, що підкреслює традиційне тісто та сімейну атмосферу залу."
                }
            },
            online: {
                item1: {
                    title: "Оцінки на туристичних платформах",
                    description: "Позитивні оцінки на туристичних платформах та відгуки клієнтів, які описують нас як \"обов'язкову зупинку в Неаполі\"."
                },
                item2: {
                    title: "Нагороди спільноти",
                    description: "Нагороди на основі відгуків користувачів за сталість у якості та вірність традиціям."
                }
            }
        },
        contactsHome: {
            title: "Де ми знаходимося і контакти",
            address: "[Адреса вулиці], [Район], Неаполь.",
            phoneLabel: "Телефон:",
            hours: "Години роботи: 12:00 – 15:00, 19:00 – 23:30 (закрито в [день закриття]).",
            note: "Ми не приймаємо бронювання: чекаємо вас прямо в піцерії.",
            socialTitle: "Підписуйтесь на нас у соціальних мережах"
        },
        contactsPage: {
            eyebrow: "Інформація і контакти",
            heroTitle: "Де ми знаходимося і як до нас дістатися",
            heroSubtitle: "Вся практична інформація, щоб дістатися до піцерії, подзвонити нам і дізнатися, коли ми відкриті.",
            mapTitle: "Ми в самому серці [Району]",
            mapBody: "Піцерія знаходиться за адресою [Адреса вулиці], в районі [Район] Неаполя. Історичний район, легко доступний на громадському транспорті та в кількох хвилинах ходьби від головних вулиць центру міста.",
            hoursTitle: "Години роботи",
            hoursIntro: "Години роботи можуть змінюватися в святкові дні: завжди перевіряйте наші соціальні мережі для оновлень.",
            hoursWeekdays: "Понеділок – П'ятниця",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Субота",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Неділя",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "День закриття",
            hoursClosedDayValue: "[Щотижневий день закриття]",
            contactsTitle: "Контакти",
            phoneLabel: "Телефон",
            emailLabel: "Електронна пошта",
            addressLabel: "Адреса",
            addressValue: "[Адреса вулиці], [Район], Неаполь.",
            socialTitle: "Соціальні мережі та оновлення",
            socialIntro: "Підписуйтесь на наші профілі для новин про спеціальні години роботи, незвичайні закриття та свіжі новини з печі.",
            faqTitle: "Бронювання",
            faqBody: "Наразі ми не приймаємо бронювання: піцерія працює за принципом прямого відвідування. Ми рекомендуємо приходити трохи раніше в найбільш завантажені дні та час."
        },
        glovoSection: {
            title: "Доставка з Glovo",
            body: "Хочете насолодитися нашою піцою вдома або в готелі? Для доставки ми використовуємо Glovo: оберіть піцерію в додатку, зробіть замовлення та дочекайтеся доставки, де б ви не знаходилися.",
            note: "Доставку керує Glovo. Доступні райони та час можуть змінюватися залежно від платформи.",
            hint: "Знайдіть назву піцерії в додатку або на сайті Glovo.",
            logoLabel: "Місце для логотипу/іконок Glovo"
        },
        page: {
            home: {
                title: "Ласкаво просимо до Піцерії [Назва]",
                subtitle: "Неаполітанська традиція з [Рік]",
                quickInfo: {
                    title: "Швидка Інформація",
                    text: "Заповнювач для розділу швидкої інформації."
                },
                glovo: {
                    title: "Замовити Онлайн",
                    text: "Заповнювач для розділу Glovo."
                }
            },
            menu: {
                title: "Наше Меню",
                subtitle: "Наші спеціалітети",
                pizzas: {
                    title: "Піци",
                    text: "Заповнювач для меню піц."
                }
            },
            story: {
                title: "Наша Історія",
                subtitle: "Традиція та пристрасть",
                content: {
                    title: "Традиція",
                    text: "Заповнювач для змісту історії."
                }
            },
            awards: {
                title: "Нагороди",
                subtitle: "Наші нагороди та визнання",
                content: {
                    title: "Нагороди та Сертифікати",
                    text: "Заповнювач для змісту нагород."
                }
            },
            contacts: {
                title: "Інформація та Контакти",
                subtitle: "Зв'яжіться з нами",
                map: {
                    title: "Де Ми Знаходимося",
                    text: "Заповнювач для карти та контактної інформації."
                }
            }
        }
    },
    pl: {
        nav: {
            home: "Strona Główna",
            menu: "Menu",
            story: "Nasza Historia",
            awards: "Nagrody",
            contacts: "Info i Kontakt"
        },
        footer: {
            rights: "Wszelkie prawa zastrzeżone."
        },
        actions: {
            call: "Zadzwoń teraz",
            maps: "Otwórz w Google Maps",
            menu: "Zobacz menu",
            glovo: "Glovo"
        },
        hero: {
            eyebrow: "Historyczna pizzeria w Neapolu",
            title: "Rodzinna pizza neapolitańska od 1960 roku.",
            subtitle: "W sercu [dzielnica w Neapolu], piec opalany drewnem i tradycyjne ciasto.",
            badge: "Prowadzona przez trzech braci [Nazwisko].",
            note: "Nie przyjmujemy rezerwacji – zapraszamy bezpośrednio do pizzerii.",
            imagePlaceholder: "Zdjęcie pieca opalanego drewnem lub pizzy"
        },
        quick: {
            sectionTitle: "Szybkie informacje",
            today: "Dzisiaj jesteśmy",
            statusOpen: "Otwarte",
            statusClosed: "Zamknięte",
            hoursLabel: "Godziny otwarcia dzisiaj: 12:00 – 15:00, 19:00 – 23:30",
            addressTitle: "Adres",
            addressLabel: "Via [Adres], [Dzielnica], Neapol.",
            reservationsNote: "Nie przyjmujemy rezerwacji – czekamy na Ciebie bezpośrednio w pizzerii."
        },
        storyPreview: {
            title: "Od 1960: nasza historia",
            body: "Od pieca opalanego drewnem zapalonego w 1960 roku do dziś pizzerią pozostaje punktem odniesienia dla tych, którzy szukają neapolitańskiej pizzy robionej jak dawniej, z tym samym ciastem przekazywanym w rodzinie.",
            link: "Przeczytaj pełną historię",
            oldPhotoLabel: "Historyczne zdjęcie lokalu z lat 60.",
            todayPhotoLabel: "Aktualne zdjęcie trzech braci w pizzerii"
        },
        storyPage: {
            eyebrow: "Historyczna pizzeria w Neapolu",
            heroTitle: "Od 1960: nasza historia",
            heroSubtitle: "Sąsiedzka pizzeria, która stała się punktem odniesienia dla miłośników prawdziwej neapolitańskiej pizzy.",
            traditionTitle: "Piec opalany drewnem i tradycyjne ciasto",
            traditionBody1: "Wszystko zaczyna się w 1960 roku, gdy [Imię Założyciela] otwiera małą sąsiedzką pizzerią z jednym piecem opalanym drewnem i tylko kilkoma pizzami w menu. Ciasto jest proste, robione ręcznie, według tego samego przepisu, który rodzina przekazuje do dziś.",
            traditionBody2: "Z czasem miejsce rośnie, ale filozofia pozostaje ta sama: kilka wybranych składników, szybkie pieczenie w piecu opalanym drewnem i pizza pachnąca autentycznym Neapolem.",
            traditionPhotoLabel: "Jedno z pierwszych zdjęć pizzerii z lat 60.",
            familyTitle: "Trzej bracia, jedna pizzeria",
            familyBody1: "Dziś pizzerią zarządzają trzej bracia [Nazwisko], którzy wyrośli między ladą, piecem a stołami w lokalu. Każdy wnosi swój charakter, ale wszyscy dzielą tę samą ideę prostej i ciepłej gościnności.",
            familyBody2: "Sala wciąż jest taka jak kiedyś, z niewielkimi ustępstwami na rzecz nowoczesności, ponieważ prawdziwą gwiazdą musi pozostać pizza: cienka, miękka i z brzegiem, który rozpływa się w ustach.",
            familyPhotoLabel: "Trzej bracia [Nazwisko] dziś przy ladzie pizzerii.",
            todayTitle: "Dziś jak wczoraj",
            todayBody1: "Między klientami z sąsiedztwa, Neapolitańczykami wracającymi co tydzień i gośćmi z całego świata pizzeria stała się stałym przystankiem dla tych, którzy szukają autentycznego doświadczenia.",
            todayBody2: "Nie ma tu modnych ciast \"2.0\" czy chwilowych trendów: tylko tradycyjna neapolitańska pizza, pieczona w piecu opalanym drewnem jak w 1960 roku, z uśmiechem tych, którzy przygotowują ją od całego życia."
        },
        pizzasHighlight: {
            title: "Nasze pizze",
            subtitle: "Wybór najpopularniejszych pizz, wszystkie z tradycyjnym neapolitańskim ciastem i pieczone w piecu opalanym drewnem.",
            imagePlaceholder: "Zdjęcie pizzy",
            bestSeller: "Najpopularniejsza",
            cta: "Zobacz pełne menu",
            margheritaDescription: "Pomidor, fior di latte, świeża bazylia i oliwa z oliwek extra vergine.",
            marinaraDescription: "Pomidor, czosnek, oregano i oliwa z oliwek extra vergine.",
            diavolaDescription: "Pomidor, fior di latte i pikantna salami.",
            quattroStagioniDescription: "Pomidor, fior di latte i wybór sezonowych dodatków."
        },
        menuPage: {
            heroEyebrow: "Menu",
            heroTitle: "Nasze menu",
            heroSubtitle: "Tradycyjne neapolitańskie pizze, klasyczne smażone przekąski i napoje. Bez modnych ciast \"2.0\": tylko rodzinne przepisy.",
            classicsTitle: "Klasyki",
            specialsTitle: "Pizze specjalne",
            friedTitle: "Smażone przekąski",
            drinksTitle: "Napoje",
            noteAllergens: "Zapytaj personel o informacje dotyczące alergenów i nietolerancji.",
            classics: {
                margherita: "Pomidor, fior di latte, świeża bazylia i oliwa z oliwek extra vergine.",
                marinara: "Pomidor, czosnek, oregano i oliwa z oliwek extra vergine.",
                capricciosa: "Pomidor, fior di latte, gotowana szynka, grzyby, karczochy i oliwki."
            },
            specials: {
                salsicciaFriarielli: "Fior di latte, kiełbasa, neapolitańskie friarielli i czarny pieprz.",
                bufalina: "Pomidor, mozzarella z mleka bawoliego CHNP, bazylia i oliwa z oliwek extra vergine.",
                provolaPepe: "Pomidor, wędzona provola, bazylia i czarny pieprz."
            },
            fried: {
                crocche: "Krokiety ziemniaczane z nadzieniem fior di latte.",
                frittatina: "Mała smażona omlet z makaronem, styl neapolitański.",
                arancino: "Nadziewana i smażona kulka ryżowa, styl pizzerii."
            },
            drinks: {
                water: "Woda niegazowana lub gazowana.",
                softDrinks: "Napój gazowane w puszkach.",
                beer: "Piwo beczkowe i butelkowe."
            }
        },
        awardsPreview: {
            title: "Nagrody i wyróżnienia",
            subtitle: "Na przestrzeni lat nasza pizzeria była wymieniana w przewodnikach, gazetach i portalach podróżniczych jako punkt odniesienia dla tradycyjnej neapolitańskiej pizzy.",
            logoGuide: "Logo przewodnika gastronomicznego",
            logoMagazine: "Logo magazynu lub gazety",
            logoTravel: "Logo portalu podróżniczego",
            logoCommunity: "Logo nagród społecznościowych",
            quote: "\"Jedna z najlepszych pizzerii w Neapolu według [nazwa przewodnika].\"",
            link: "Zobacz wszystkie wyróżnienia"
        },
        awardsPage: {
            eyebrow: "Nagrody i wyróżnienia",
            heroTitle: "Nagrody, przewodniki i recenzje",
            heroSubtitle: "Wybór wyróżnień otrzymanych na przestrzeni czasu od przewodników gastronomicznych, prasy i platform podróżniczych.",
            guidesTitle: "Przewodniki gastronomiczne",
            pressTitle: "Prasa i magazyny",
            onlineTitle: "Recenzje online",
            note: "Odniesienia do przewodników i artykułów mają charakter orientacyjny i będą aktualizowane w oparciu o oficjalne wyróżnienia potwierdzone przez pizzerię.",
            guides: {
                item1: {
                    title: "[Nazwa przewodnika] – Wybór pizzerii Neapol",
                    year: "Od [Rok]",
                    description: "Włączona do listy rekomendowanych pizzerii w Neapolu dla tradycyjnej neapolitańskiej pizzy."
                },
                item2: {
                    title: "[Inny przewodnik] – Historyczne pizzerie",
                    year: "[Rok]",
                    description: "Uznanie jako historyczna pizzeria z piecem opalanym drewnem aktywnym od 1960 roku."
                }
            },
            press: {
                item1: {
                    title: "Artykuł w [Nazwa gazety]",
                    year: "[Rok]",
                    description: "Reportaż o historycznych sąsiedzkich pizzeriach w Neapolu, skupiając się na naszej pizzy pieczonej w piecu opalanym drewnem."
                },
                item2: {
                    title: "Recenzja w [Magazynie gastronomicznym]",
                    year: "[Rok]",
                    description: "Recenzja podkreślająca tradycyjne ciasto i rodzinną atmosferę sali."
                }
            },
            online: {
                item1: {
                    title: "Oceny na portalach podróżniczych",
                    description: "Pozytywne oceny na portalach podróżniczych i recenzje klientów opisujące nas jako \"obowiązkowy przystanek w Neapolu\"."
                },
                item2: {
                    title: "Nagrody społecznościowe",
                    description: "Nagrody oparte na recenzjach użytkowników za stałość jakości i wierność tradycji."
                }
            }
        },
        contactsHome: {
            title: "Gdzie jesteśmy i kontakty",
            address: "[Adres ulicy], [Dzielnica], Neapol.",
            phoneLabel: "Telefon:",
            hours: "Godziny otwarcia: 12:00 – 15:00, 19:00 – 23:30 (zamknięte w [dzień zamknięcia]).",
            note: "Nie przyjmujemy rezerwacji: czekamy na Ciebie bezpośrednio w pizzerii.",
            socialTitle: "Śledź nas w mediach społecznościowych"
        },
        contactsPage: {
            eyebrow: "Informacje i kontakty",
            heroTitle: "Gdzie jesteśmy i jak do nas dotrzeć",
            heroSubtitle: "Wszystkie praktyczne informacje, aby dostać się do pizzerii, zadzwonić do nas i wiedzieć, kiedy jesteśmy otwarci.",
            mapTitle: "Jesteśmy w sercu [Dzielnicy]",
            mapBody: "Pizzeria znajduje się przy [Adres ulicy], w dzielnicy [Dzielnica] w Neapolu. Historyczna dzielnica, łatwo dostępna komunikacją publiczną i w zaledwie kilka minut spaceru od głównych ulic centrum miasta.",
            hoursTitle: "Godziny otwarcia",
            hoursIntro: "Godziny otwarcia mogą się zmieniać w dni świąteczne: zawsze sprawdź nasze profile w mediach społecznościowych, aby uzyskać najnowsze informacje.",
            hoursWeekdays: "Poniedziałek – Piątek",
            hoursWeekdaysValue: "12:00 – 15:00, 19:00 – 23:30",
            hoursSaturday: "Sobota",
            hoursSaturdayValue: "12:00 – 15:00, 19:00 – 00:00",
            hoursSunday: "Niedziela",
            hoursSundayValue: "19:00 – 23:30",
            hoursClosedDay: "Dzień zamknięcia",
            hoursClosedDayValue: "[Tygodniowy dzień zamknięcia]",
            contactsTitle: "Kontakty",
            phoneLabel: "Telefon",
            emailLabel: "Email",
            addressLabel: "Adres",
            addressValue: "[Adres ulicy], [Dzielnica], Neapol.",
            socialTitle: "Media społecznościowe i aktualizacje",
            socialIntro: "Śledź nasze profile, aby otrzymywać wiadomości o specjalnych godzinach otwarcia, nadzwyczajnych zamknięciach i świeżych aktualizacjach z pieca.",
            faqTitle: "Rezerwacje",
            faqBody: "W chwili obecnej nie przyjmujemy rezerwacji: pizzeria działa na zasadzie bezpośredniego przybycia. Zalecamy przyjście nieco wcześniej w najbardziej obłożonych dniach i godzinach."
        },
        glovoSection: {
            title: "Na wynos z Glovo",
            body: "Chcesz cieszyć się naszą pizzą w domu lub w hotelu? Do zamówień na wynos korzystamy z Glovo: wybierz pizzerię w aplikacji, złóż zamówienie i czekaj na dostawę, gdziekolwiek jesteś.",
            note: "Dostawa jest obsługiwana przez Glovo. Dostępne obszary i godziny mogą się różnić w zależności od platformy.",
            hint: "Wyszukaj nazwę pizzerii w aplikacji lub na stronie internetowej Glovo.",
            logoLabel: "Miejsce na logo/ikony Glovo"
        },
        page: {
            home: {
                title: "Witamy w Pizzerii [Nazwa]",
                subtitle: "Tradycja neapolitańska od [Rok]",
                quickInfo: {
                    title: "Szybkie Informacje",
                    text: "Tekst zastępczy dla sekcji szybkich informacji."
                },
                glovo: {
                    title: "Zamów Online",
                    text: "Tekst zastępczy dla sekcji Glovo."
                }
            },
            menu: {
                title: "Nasze Menu",
                subtitle: "Nasze specjalności",
                pizzas: {
                    title: "Pizze",
                    text: "Tekst zastępczy dla menu pizz."
                }
            },
            story: {
                title: "Nasza Historia",
                subtitle: "Tradycja i pasja",
                content: {
                    title: "Tradycja",
                    text: "Tekst zastępczy dla treści historii."
                }
            },
            awards: {
                title: "Nagrody",
                subtitle: "Nasze nagrody i wyróżnienia",
                content: {
                    title: "Nagrody i Certyfikaty",
                    text: "Tekst zastępczy dla treści nagród."
                }
            },
            contacts: {
                title: "Info i Kontakt",
                subtitle: "Skontaktuj się z nami",
                map: {
                    title: "Gdzie Jesteśmy",
                    text: "Tekst zastępczy dla mapy i informacji kontaktowych."
                }
            }
        }
    }
};

// Current language (default: Italian)
let currentLang = 'it';

/**
 * Get nested value from object using dot notation
 * @param {Object} obj - The object to search in
 * @param {string} path - Dot-separated path (e.g., "nav.home")
 * @returns {string} - The value or the path if not found
 */
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : path;
    }, obj);
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const langTranslations = translations[currentLang] || translations.it;
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(langTranslations, key);
        element.textContent = translation;
    });
    
    // Update toggle and option states
    updateLanguageToggle(currentLang);
    updateLanguageOptionsActiveState(currentLang);
}

/**
 * Update the language toggle label to show current language code
 * @param {string} lang - Language code (it, en, es, etc.)
 */
function updateLanguageToggle(lang) {
    const currentEl = document.querySelector('.language-switcher__current');
    if (!currentEl) return;
    currentEl.textContent = lang.toUpperCase();
}

/**
 * Update the active state of language option buttons
 * @param {string} lang - Language code (it, en, es, etc.)
 */
function updateLanguageOptionsActiveState(lang) {
    const buttons = document.querySelectorAll('.language-option[data-lang]');
    buttons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        const isActive = btnLang === lang;
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
}

/**
 * Change the current language (central function)
 * @param {string} lang - Language code (it, en, es, etc.)
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not found. Using Italian as fallback.`);
        lang = 'it';
    }
    
    currentLang = lang;
    localStorage.setItem('pizzeria-lang', lang);
    applyTranslations();
    updateLanguageToggle(lang);
    updateLanguageOptionsActiveState(lang);
    
    // Close dropdown after language selection
    const switcher = document.querySelector('.language-switcher');
    if (switcher) {
        switcher.classList.remove('is-open');
        const toggle = switcher.querySelector('.language-switcher__toggle');
        if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
        }
    }
}

/**
 * Change the current language (backward compatibility alias)
 * @param {string} lang - Language code (it, en, es, etc.)
 */
function changeLanguage(lang) {
    setLanguage(lang);
}

/**
 * Initialize language option button click handlers
 */
function initLanguageOptions() {
    const buttons = document.querySelectorAll('.language-option[data-lang]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

/**
 * Initialize i18n system
 * - Load saved language from localStorage or use default (it)
 * - Set up language option buttons
 * - Apply translations
 */
function initI18n() {
    // Load saved language or default to Italian
    const savedLang = localStorage.getItem('pizzeria-lang');
    const initialLang = (savedLang && translations[savedLang]) ? savedLang : 'it';
    
    // Set initial language (this will update toggle, options, and translations)
    setLanguage(initialLang);
    
    // Set up language option button handlers
    initLanguageOptions();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

