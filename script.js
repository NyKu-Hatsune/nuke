document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('video');
    var audio = document.getElementById('audio');

    playButton.addEventListener('click', function() {
        // Oculta o botão quando é clicado
        playButton.style.display = 'none';
        
        // Exibe o vídeo em tela cheia e reproduz
        video.style.display = 'block';
        video.play();
        
        // Modifica o volume do vídeo para 0.5 (meio volume)
        video.volume = 0.95;
        
        // Reproduz o áudio
        //audio.play();
    });

    // Mostra o botão novamente quando o vídeo terminar
    video.addEventListener('ended', function() {
        // Exibe o botão
        playButton.style.display = 'block';
        // Oculta o vídeo
        video.style.display = 'none';
        // Volta o fundo para branco
        document.body.style.backgroundColor = 'white';
    });
});
