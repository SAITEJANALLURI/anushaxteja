// First hello: Laxmi (Santhanutalapadu) sends a paper-plane hello to Sarada (Ongole).
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, fig, seg, breathe, pulse, sparks, tickBadge, bubble, plane } = R;
  const REST = P({ hF: [12, -60], hB: [-4, -52] });
  const CHIN = P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] });
  const THROW = P({ hF: [26, -92], hB: [-4, -54], head: [8, -114] });
  const CHEER = P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] });
  const LAX = { ink: '#7A5C8C', far: '#c9bbd3' }, SAR = { ink: '#B96F59', far: '#dcb4a8' };
  SC['first-hello'] = {
    dur: 6, width: 420,
    label: 'Laxmi from Santhanutalapadu sends a paper-plane hello to Sarada in Ongole, and Sarada\'s house lights up.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const fade = T < 0 ? 0 : 1 - seg(T, 5.5, 5.9);
      const rightLit = T >= 0 && seg(T, 0.2, 0.4) * (1 - seg(T, 2.5, 2.7)) > 0.5;
      const leftLit = T >= 0 && seg(T, 2.7, 2.9) * fade > 0.5;
      let pl = breathe(REST, t), ps = breathe(REST, t + 1.1);
      if (T < 0) { pl = mix(pl, CHIN, pulse(t, 5.5, 2, 2.2)); ps = mix(ps, CHIN, pulse(t, 6.5, 4, 2.2)); }
      else {
        pl = mix(pl, THROW, E.soft(seg(T, 0.3, 0.6)) * (1 - E.soft(seg(T, 0.9, 1.3))));
        ps = mix(ps, CHEER, E.back(seg(T, 3.0, 3.3)) * (1 - E.soft(seg(T, 4.6, 5.0))));
      }
      KIT.house(g, 150, 'Santhanutalapadu', rightLit);
      KIT.house(g, -150, 'Ongole', leftLit);
      fig(g, legs(ps, 0, 0, { arms: false }), -92, 0, Object.assign({ wave: S.wave, wt: S.wt }, SAR));
      fig(g, legs(pl, 0, 0, { arms: false }), 92, 0, Object.assign({ sx: -1 }, LAX));
      KIT.tag(g, -92, 'Sarada', 'receives the hello', SAR.ink);
      KIT.tag(g, 92, 'Laxmi', 'sends the hello', LAX.ink);
      if (T >= 0) {
        const kp = seg(T, 0.7, 2.6);
        if (kp > 0 && kp < 1) plane(g, [78, -92], [-78, -92], kp, 46, 1);
        tickBadge(g, -116, -104, seg(T, 2.9, 3.2) * fade);
        sparks(g, -150, -104, seg(T, 2.7, 3.3), 18, 7);
        bubble(g, -92, -134, 'hello!', seg(T, 3.1, 3.3) * (1 - seg(T, 4.8, 5.0)), { tail: 0 });
      }
    },
  };
})();
