  // Cuenta regresiva automática hacia el 10 de Octubre de 2026 a las 16:00:00
        const weddingDate = new Date("Oct 10, 2026 16:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                document.querySelector(".countdown-box").innerHTML = "<div style='grid-column: span 4; color:var(--primary); font-family: Playfair Display;'>¡Ha llegado el gran día!</div>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesExact = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutesExact).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Función de confirmación vía WhatsApp al número 833 255 5301
        function confirmarAsistencia() {
            const telefono = "5218332555301";
            const mensaje = encodeURIComponent("¡Hola! Camila y Lucas, confirmo con mucho gusto mi asistencia a su boda. ¡Nos vemos allá!");
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        }