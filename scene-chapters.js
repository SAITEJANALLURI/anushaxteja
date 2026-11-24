// The six chapters of the story film as separate scenes, so each can sit on the page where it belongs.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const CH = [
    [0, 4.2, 0.85, 'Two hometowns, Ongole and Santhanutalapadu, linked by a dotted road.'],
    [4.2, 8.4, 0.6, 'Karunya and Srikanth link the two family homes.'],
    [8.4, 12.6, 0.9, 'Laxmi sends a paper-plane hello to Sarada and her house lights up.'],
    [12.6, 16.8, 0.15, 'Sarada, Koteswararao, Suresh and Laxmi greet each other.'],
    [16.8, 21.0, 0.1, 'Anusha and Teja get talking about motichoor, veggies and travel.'],
    [21.0, 25.4, 0.2, 'Anusha and Teja plant flags for Kerala, Goa and Kashmir: to be continued.'],
  ];
  CH.forEach(([a, b, idle, label], i) => {
    SC['story-ch' + (i + 1)] = {
      dur: b - a, width: 480, label,
      draw(g, S) {
        const f = SC['story-film'];
        const u = S.on ? S.u : idle;
        f.draw.call(f, g, Object.assign({}, S, { on: true, u: (a + u * (b - a)) / f.dur }));
      },
    };
  });
})();
