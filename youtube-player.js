function onYouTubeIframeAPIReady() {
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

  videos.forEach(video => {
    new YT.Player(video.container, {
      videoId: video.id,
      width: '100%',
      height: '100%',
      playerVars: {
        start: video.start,
        modestbranding: 1,
        rel: 0
      }
    });
  });
}
