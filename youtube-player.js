const videos = [
  { id: '0exDW7-3Mj4', start: 2, container: 'player1' },
  { id: 'kkTVmJmHNzY', start: 0, container: 'player2' },
  { id: 'UzBlg2U8PMU', start: 1, container: 'player3' },
  { id: 'F_jw7i4TNwk', start: 0, container: 'player4' },
  { id: 'K9-7WYIisz4', start: 1, container: 'player5' },
  { id: 'TXA8Xb5Ksx4', start: 1, container: 'player6' },
  { id: 'Go3TjGBq-qU', start: 1, container: 'player7' },
  { id: 'dorb_ieZQ0A', start: 1, container: 'player8' },
  { id: 'Bjhm5_8olLk', start: 1, container: 'player9' },
  { id: 's2IxKkT6J1s', start: 1, container: 'player10' }
];

let players = {}; // Guardar os players já criados

function onYouTubeIframeAPIReady() {
  initObserver();
}

function initObserver() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const containerId = entry.target.id;

        if (!players[containerId]) {
          const videoData = videos.find(v => v.container === containerId);
          if (videoData) {
            players[containerId] = new YT.Player(containerId, {
              videoId: videoData.id,
              width: '100%',
              height: '100%',
              playerVars: {
                start: videoData.start,
                modestbranding: 1,
                rel: 0
              }
            });
          }
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  // Observar todos os elementos dos vídeos
  videos.forEach(video => {
    const el = document.getElementById(video.container);
    if (el) observer.observe(el);
  });
}

// Essa função você pode manter se estiver usando slideshow em outra parte
function mostrarVideo(index) {
  const slides = document.querySelectorAll('.video-slide');

  slides.forEach(slide => {
    slide.classList.remove('ativo', 'preview-esquerda', 'preview-direita');
    slide.style.display = 'none';
  });

  const anterior = (index - 1 + slides.length) % slides.length;
  const proximo = (index + 1) % slides.length;

  slides[anterior].classList.add('preview-esquerda');
  slides[anterior].style.display = 'block';

  slides[index].classList.add('ativo');
  slides[index].style.display = 'block';

  slides[proximo].classList.add('preview-direita');
  slides[proximo].style.display = 'block';
}
