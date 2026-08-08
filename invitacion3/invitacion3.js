
        // Cuenta regresiva hacia el 10 de julio de 2026 a las 20:00 hrs
        const fechaBoda = new Date("July 10, 2026 20:00:00").getTime();

        function actualizarCuentaRegresiva() {
            const ahora = new Date().getTime();
            const diferencia = fechaBoda - ahora;

            if (diferencia > 0) {
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

                document.getElementById("dias").innerText = String(dias).padStart(2, '0');
                document.getElementById("horas").innerText = String(horas).padStart(2, '0');
                document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
                document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
            }
        }

        setInterval(actualizarCuentaRegresiva, 1000);
        actualizarCuentaRegresiva();

        