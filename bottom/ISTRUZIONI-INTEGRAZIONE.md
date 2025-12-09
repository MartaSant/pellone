# 📋 Istruzioni di Integrazione - Bottom Bar

Guida passo-passo per integrare la bottom bar nel tuo progetto.

## 🎯 Prerequisiti

- File HTML delle tue pagine
- File CSS principale (o nuovo file CSS)
- Font Awesome 6.x (o libreria icone alternativa)
- (Opzionale) Google Analytics 4 configurato

## 📝 Passo 1: Includi Font Awesome

Aggiungi Font Awesome nel `<head>` di ogni pagina:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Oppure usa la versione locale se già presente nel progetto.

## 📝 Passo 2: Aggiungi il CSS

### Opzione A: Includi il file CSS separato

Aggiungi nel `<head>`:

```html
<link rel="stylesheet" href="path/to/bottom-bar.css">
```

### Opzione B: Copia gli stili nel tuo CSS principale

Copia tutto il contenuto di `bottom-bar.css` nel tuo file CSS principale.

## 📝 Passo 3: Aggiungi l'HTML

Aggiungi la struttura HTML della bottom bar **prima della chiusura del tag `</body>`** in ogni pagina dove vuoi mostrarla.

### Template Base

```html
<div class="bottom-bar">
    <!-- Aggiungi i tuoi bottoni qui -->
</div>
```

### Esempio Completo

```html
<div class="bottom-bar">
    <a href="https://wa.me/1234567890" class="bottom-bar-btn bottom-bar-btn--wa" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
    </a>
    <a href="https://www.instagram.com/tuoprofilo/" class="bottom-bar-btn bottom-bar-btn--ig" target="_blank" rel="noopener">
        <i class="fab fa-instagram"></i>
        <span>Instagram</span>
    </a>
    <a href="tel:+39123456789" class="bottom-bar-btn bottom-bar-btn--call">
        <i class="fas fa-phone"></i>
        <span>Chiama</span>
    </a>
</div>
```

## 📝 Passo 4: Personalizza i Bottoni

### 4.1 Scegli le Icone

Usa le icone Font Awesome. Esempi:
- `fab fa-whatsapp` - WhatsApp
- `fab fa-instagram` - Instagram
- `fas fa-phone` - Telefono
- `fas fa-envelope` - Email
- `fas fa-map-marker-alt` - Mappa
- `fab fa-facebook` - Facebook

### 4.2 Personalizza i Colori

Modifica o crea nuove classi CSS per i tuoi bottoni:

```css
.bottom-bar-btn--mio-bottone {
    background-color: #TUO_COLORE;
    color: #COLORE_TESTO;
    border-color: #TUO_COLORE;
}

.bottom-bar-btn--mio-bottone:hover {
    filter: brightness(1.1); /* o altro effetto */
}
```

Poi usa la classe nell'HTML:

```html
<a href="..." class="bottom-bar-btn bottom-bar-btn--mio-bottone">
    <i class="fas fa-icona"></i>
    <span>Nome Bottone</span>
</a>
```

### 4.3 Personalizza i Link

Sostituisci gli `href` con i tuoi link:
- **WhatsApp**: `https://wa.me/NUMERO` (solo numeri, senza + o spazi)
- **Telefono**: `tel:+39NUMERO`
- **Email**: `mailto:email@esempio.com`
- **Social**: Link completo al profilo
- **Mappa**: Link Google Maps

## 📝 Passo 5: Aggiungi Spazio alle Pagine

Per evitare che la barra copra i contenuti, aggiungi padding-bottom alle tue pagine:

```css
.page {
    padding-bottom: 4.6rem; /* Aumenta se necessario */
}

/* O per pagine specifiche */
.menu-page {
    padding-bottom: 7rem;
}
```

## 📝 Passo 6: (Opzionale) Aggiungi il Tracking

Se vuoi tracciare i click sui bottoni con GA4:

1. Assicurati che GA4 sia già configurato nel progetto
2. Includi lo script di tracking **dopo** il caricamento di GA4:

```html
<!-- Dopo il caricamento di GA4 -->
<script src="path/to/bottom-bar-tracking.js"></script>
```

Il tracking funzionerà automaticamente e invierà eventi `social_click` con:
- `button_name`: Nome del bottone
- `button_type`: Tipo di azione (social, contact, map, etc.)

## 📝 Passo 7: Verifica Safe Area (iPhone)

Assicurati che il viewport meta tag includa `viewport-fit=cover`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

Questo è necessario per il supporto completo dei safe area insets su iPhone con notch.

## ✅ Checklist Finale

- [ ] Font Awesome incluso
- [ ] CSS della bottom bar incluso
- [ ] HTML della bottom bar aggiunto in tutte le pagine necessarie
- [ ] Bottoni personalizzati con link corretti
- [ ] Colori personalizzati (se necessario)
- [ ] Padding-bottom aggiunto alle pagine
- [ ] Viewport meta tag con `viewport-fit=cover`
- [ ] (Opzionale) Tracking GA4 configurato
- [ ] Test su dispositivi reali (specialmente iPhone)

## 🎨 Personalizzazione Avanzata

### Modificare la Posizione Verticale

Nel CSS, modifica il valore `bottom`:

```css
.bottom-bar {
    bottom: calc(0.85rem + 29px + env(safe-area-inset-bottom));
    /* Modifica 0.85rem per spostare su/giù */
}
```

### Modificare la Larghezza

```css
.bottom-bar {
    width: 85vw; /* Cambia da 90vw a 85vw per una barra più stretta */
}
```

### Modificare lo Stile dello Sfondo

```css
.bottom-bar {
    background: rgba(0, 0, 0, 0.95); /* Più opaco */
    /* oppure */
    background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(17,17,17,0.95));
}
```

### Rimuovere il Backdrop Blur

Se causa problemi di performance:

```css
.bottom-bar {
    backdrop-filter: none; /* Rimuove il blur */
}
```

## 🐛 Risoluzione Problemi

### La barra non appare
1. Verifica che il CSS sia incluso
2. Controlla la console per errori
3. Verifica che non ci siano conflitti di z-index

### I bottoni non sono cliccabili
1. Verifica che non ci siano overlay sopra la barra
2. Controlla gli z-index (la barra ha z-index: 50)
3. Verifica che i link abbiano href validi

### La barra copre i contenuti
1. Aumenta il padding-bottom delle pagine
2. Modifica il valore `bottom` nel CSS

### Safe area non funziona
1. Verifica il viewport meta tag
2. Testa su un iPhone reale
3. Controlla che il browser supporti `env()`

## 📚 Esempi Completi

Vedi `bottom-bar.html` per esempi completi di implementazione con diversi tipi di bottoni.

## 🔄 Aggiornamenti

Se modifichi la bottom bar in futuro, ricorda di:
1. Aggiornare tutti i file HTML che la includono
2. Testare su dispositivi reali
3. Verificare che il tracking (se presente) funzioni ancora

