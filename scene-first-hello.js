// First hello: a paper plane carries a hello from Santhanutalapadu to Ongole and the other house lights up.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, fig, inkFill, rr, text, seg, breathe, pulse, sparks, tickBadge, bubble, plane } = R;
  const LX = -150, RX = 150;

  function house(g, cx, label, lit) {
    rr(g, cx - 34, -68, 68, 68, 4);
    inkFill(g, lit ? C.butterSoft : C.paper, 1.8);
    g.beginPath();
    g.moveTo(cx - 42, -68); g.lineTo(cx, -102); g.lineTo(cx + 42, -68); g.closePath();
    inkFill(g, C.butter, 1.8);
    rr(g, cx - 8, -32, 16, 32, 3);
    inkFill(g, C.paper, 1.6);
    rr(g, cx + 14, -56, 13, 13, 2);
    inkFill(g, lit ? C.butter : C.paper, 1.4);
    rr(g, cx - 27, -56, 13, 13, 2);
    inkFill(g, lit ? C.butter : C.paper, 1.4);
    text(g, label, cx, 16, 9.5, C.umber);
  }

  SC['first-hello'] = {
    dur: 6,
    width: 400,
    label: 'A paper plane carries a hello from one family home to the other, and the second house lights up.',
    draw(g, S) {
      const T = S.on ? S.u * this.dur : -1;
      const t = S.t;
      let pose = breathe(P({ hF: [12, -60], hB: [-4, -52] }), t);
      if (T < 0) {
        pose = mix(pose, P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] }), pulse(t, 5.5, 2, 2.2));
      } else {
        const cheer = E.back(seg(T, 3.0, 3.3)) * (1 - E.soft(seg(T, 4.6, 5.0)));
        pose = mix(pose, P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] }), cheer);
      }
      pose = legs(pose, 0, 0, { arms: false });
      const fade = T < 0 ? 0 : 1 - seg(T, 5.5, 5.9);
      const rightLit = T >= 0 && seg(T, 0.2, 0.4) * (1 - seg(T, 2.5, 2.7)) > 0.5;
      const leftLit = T >= 0 && seg(T, 2.7, 2.9) * fade > 0.5;

      house(g, RX, 'Santhanutalapadu', rightLit);
      house(g, LX, 'Ongole', leftLit);
      fig(g, pose, 0, 0, { sx: -1, wave: S.wave, wt: S.wt });
      const kp = seg(T, 0.5, 2.6);
      if (T >= 0 && kp > 0 && kp < 1) plane(g, [RX - 24, -92], [LX + 24, -92], kp, 46, 1);
      if (T >= 0) {
        tickBadge(g, LX + 34, -100, seg(T, 2.9, 3.2) * fade);
        sparks(g, LX, -104, seg(T, 2.7, 3.3), 18, 7);
        bubble(g, 38, -128, 'hello!', seg(T, 3.1, 3.3) * (1 - seg(T, 4.8, 5.0)), { tail: -30 });
      }
    },
  };
})();
