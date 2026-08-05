
        // ==========================================================
        // A) CUENTA REGRESIVA
        // ==========================================================

        // Fecha y hora exacta de la boda (formato ISO con zona horaria -06:00).
        // getTime() la convierte en milisegundos, que es más fácil de restar.
        const weddingDate = new Date("2026-11-14T16:30:00-06:00").getTime();

        // Esta función se ejecuta cada segundo y actualiza los 4 números en pantalla.
        function updateCountdown() {
            // Momento actual en milisegundos
            const now = Date.now();

            // Diferencia entre la fecha de la boda y ahora (en milisegundos)
            let diff = weddingDate - now;

            // Si la boda ya pasó, evitamos números negativos y dejamos todo en 0
            if (diff < 0) diff = 0;

            // Convertimos los milisegundos restantes a días, horas, minutos y segundos.
            // 1000 ms = 1 segundo | 60 segundos = 1 minuto | 60 minutos = 1 hora | 24 horas = 1 día
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            const secs = Math.floor((diff / 1000) % 60);

            // Actualizamos el texto de cada elemento en el HTML.
            // padStart(2, '0') asegura que siempre se vean 2 dígitos (ej. "05" en vez de "5")
            document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
            document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
            document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
        }

        // Llamamos la función una vez de inmediato para que no aparezca "00:00:00:00"
        // durante el primer segundo, antes de que corra el intervalo.
        updateCountdown();

        // Repetimos la función cada 1000 ms (1 segundo) para que el contador avance solo.
        setInterval(updateCountdown, 1000);


        // B) BOTÓN DE CONFIRMACIÓN - ABRE WHATSAPP
    

        // Esta función se dispara al hacer clic en el botón "pedir" (Confirmar por WhatsApp).
        function pedir() {
            // Número de teléfono al que se enviará el mensaje (con código de país incluido).
            const telefono = "5218332555301"; // Mantengo el número solicitado

            // Mensaje pre-escrito que aparecerá listo para enviar en WhatsApp.
            // encodeURIComponent() convierte espacios y símbolos especiales
            // en un formato válido para usarlos dentro de una URL.
            const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia a la boda de Ana & Miguel 💛");

            // Construimos el link de WhatsApp (wa.me) con el número y el mensaje,
            // y lo abrimos en una pestaña nueva del navegador.
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        }