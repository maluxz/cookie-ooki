document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('slider');
    const startButton = document.getElementById('startButton');
    const progress = document.getElementById('progress');
    const milkEmoji = document.getElementById('milk-emoji');
    const victoryMessage = document.getElementById('victoryMessage');
    const victoryText = document.getElementById('victoryText');
    const timeTaken = document.getElementById('timeTaken');

    let totalMovement = 0;
    let previousValue = 0;
    let startTime;
    const movementGoal = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000; // Objetivo entre 3000 y 5000

    startButton.addEventListener('click', startGame);

    function startGame() {
        totalMovement = 0;
        previousValue = 0;
        progress.textContent = `Desplazamiento: ${totalMovement}%`;
        slider.value = 0;
        milkEmoji.style.opacity = 0; // Asegurarse de que la leche esté oculta al comenzar
        victoryMessage.classList.add('hidden'); // Ocultar el mensaje de victoria

        startTime = new Date(); // Registrar el tiempo de inicio

        slider.addEventListener('input', updateMovement);
    }

    function updateMovement() {
        const currentValue = parseInt(slider.value);
        const movement = Math.abs(currentValue - previousValue);
        totalMovement += movement;
        previousValue = currentValue;

        progress.textContent = `Desplazamiento: ${totalMovement}%`;

        if (totalMovement >= movementGoal) {
            slider.removeEventListener('input', updateMovement);
            milkEmoji.style.opacity = 1; // Mostrar el emoji de leche al lograr la victoria

            const endTime = new Date(); // Registrar el tiempo de fin
            const timeDifference = (endTime - startTime) / 1000; // Tiempo en segundos

            victoryText.textContent = "¡Victoria!";
            timeTaken.textContent = `Tiempo tomado: ${timeDifference.toFixed(2)} segundos`;
            victoryMessage.classList.remove('hidden'); // Mostrar el mensaje de victoria
        }
    }
});
