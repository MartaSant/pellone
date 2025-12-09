# 📱 Bottom Bar - Template Generico

Documentazione completa per implementare una bottom bar fissa responsive con bottoni di azione rapida.

## 📋 Caratteristiche

- ✅ **Barra fissa in basso** con design moderno e arrotondato
- ✅ **Responsive** e ottimizzata per mobile
- ✅ **Safe Area Support** per iPhone con notch e dispositivi con bordi curvi
- ✅ **Touch-friendly** con target minimi di 44x44px
- ✅ **Backdrop blur** per effetto vetro smerigliato
- ✅ **Animazioni fluide** su hover e click
- ✅ **Tracking opzionale** per analytics (GA4)

## 🎨 Design

La bottom bar è posizionata in basso al centro dello schermo con:
- Sfondo scuro semi-trasparente con blur
- Bordi arrotondati (pill-shaped)
- Ombre per profondità
- Bottoni con icone (testo nascosto per design pulito)
- Supporto per safe area insets (iPhone X e successivi)

## 📁 File Inclusi

1. **`bottom-bar.html`** - Template HTML con struttura base
2. **`bottom-bar.css`** - Stili CSS completi e personalizzabili
3. **`bottom-bar-tracking.js`** - Script opzionale per tracking analytics
4. **`ISTRUZIONI-INTEGRAZIONE.md`** - Guida passo-passo per integrazione

## 🚀 Quick Start

### 1. Includi il CSS

Aggiungi gli stili al tuo file CSS principale o includi `bottom-bar.css`:

```html
<link rel="stylesheet" href="bottom-bar.css">
```

### 2. Includi Font Awesome (per le icone)

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### 3. Aggiungi l'HTML

Copia la struttura HTML da `bottom-bar.html` e personalizza i bottoni secondo le tue esigenze.

### 4. (Opzionale) Aggiungi il tracking

Se vuoi tracciare i click sui bottoni, includi `bottom-bar-tracking.js`.

## 🎯 Personalizzazione

### Colori Bottoni

Modifica le classi CSS `.bottom-bar-btn--*` per cambiare i colori:

```css
.bottom-bar-btn--custom {
    background-color: #TUO_COLORE;
    color: #COLORE_TESTO;
    border-color: #TUO_COLORE;
}
```

### Numero di Bottoni

La barra si adatta automaticamente al numero di bottoni. Aggiungi o rimuovi elementi `<a>` secondo necessità.

### Posizione

La barra è centrata e posizionata in basso. Per modificare la posizione verticale, cambia il valore di `bottom` nel CSS:

```css
.bottom-bar {
    bottom: calc(0.85rem + 29px + env(safe-area-inset-bottom));
    /* Modifica 0.85rem e 29px per spostare su/giù */
}
```

### Spazio Contenuti

Aggiungi padding-bottom alle tue pagine per evitare che la barra copra i contenuti:

```css
.page {
    padding-bottom: 4.6rem; /* Aumenta se necessario */
}
```

## 📱 Safe Area Support

Il template include supporto completo per:
- **Safe area insets** (iPhone X, 11, 12, 13, 14, 15, ecc.)
- **Notch** e **Dynamic Island**
- **Bordi curvi** su dispositivi Android moderni

Tutti i valori utilizzano `env(safe-area-inset-*)` per adattarsi automaticamente.

## 🎨 Tipi di Bottoni Supportati

Il template è progettato per supportare qualsiasi tipo di bottone:
- Link esterni (social media, siti web)
- Link telefonici (`tel:`)
- Link email (`mailto:`)
- Link mappe (`maps.google.com`)
- Link WhatsApp (`wa.me`)
- Link personalizzati

## 📊 Tracking Analytics (Opzionale)

Se includi `bottom-bar-tracking.js`, i click sui bottoni verranno tracciati con:
- **Evento**: `social_click`
- **Parametri**:
  - `button_name`: Nome del bottone (es. "WhatsApp", "Instagram")
  - `button_type`: Tipo di azione (es. "social", "contact", "map")

### Integrazione GA4

Il tracking funziona automaticamente se GA4 è già configurato nel progetto. Assicurati che:
1. GA4 sia caricato correttamente
2. Il consenso cookie sia gestito (se applicabile)
3. `window.gtag` e `window.dataLayer` siano disponibili

## 🔧 Requisiti Tecnici

- **Browser moderni** con supporto CSS Grid/Flexbox
- **Font Awesome 6.x** (o libreria icone alternativa)
- **JavaScript** (solo per tracking opzionale)

## 📝 Note Importanti

1. **Z-index**: La barra ha `z-index: 50`. Assicurati che altri elementi non la coprano.
2. **Touch targets**: Tutti i bottoni hanno dimensioni minime di 44x44px per accessibilità.
3. **Performance**: Il backdrop-filter può impattare le performance su dispositivi vecchi. Considera di rimuoverlo se necessario.
4. **Accessibilità**: I bottoni includono `<span>` con testo per screen reader, anche se visivamente nascosti.

## 🐛 Troubleshooting

### La barra non appare
- Verifica che il CSS sia incluso correttamente
- Controlla che non ci siano conflitti di z-index
- Assicurati che il container non abbia `overflow: hidden`

### La barra copre i contenuti
- Aumenta il `padding-bottom` delle tue pagine
- Modifica il valore `bottom` nel CSS della barra

### I bottoni non sono cliccabili
- Verifica che non ci siano overlay o elementi con z-index più alto
- Controlla che i link abbiano `href` validi

### Safe area non funziona
- Verifica che il viewport meta tag includa `viewport-fit=cover`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  ```

## 📚 Esempi

Vedi i file template per esempi completi di implementazione.

## 🔄 Versioni

- **v1.0** - Versione iniziale con supporto completo safe area e tracking opzionale

