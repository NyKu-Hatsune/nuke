document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');
    var audio = document.getElementById('audio');

    button.addEventListener('click', function() {
        // Verifica se o áudio está pausado
        if (audio.paused) {
            // Inicia a reprodução do áudio
            audio.play();
        } else {
            // Pausa o áudio se já estiver reproduzindo
            audio.pause();
            // Define o tempo de reprodução para 0 para reiniciar o áudio
            audio.currentTime = 0;
        }
    });
});
