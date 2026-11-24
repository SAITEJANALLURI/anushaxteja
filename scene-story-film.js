// The whole story in six short chapters: two hometowns -> the connection -> the hello -> the families -> the two of us -> what's next.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, fig, seg, ln, text, breathe, sparks, tickBadge, bubble, plane, lerp } = R;
  const REST = P({ hF: [12, -60], hB: [-4, -52] });
  const TALK = P({ hF: [24, -92], hB: [-4, -54], head: [8, -114] });
  const CHEER = P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] });
  const COL = {
    anusha: { ink: '#B96F59', far: '#dcb4a8' }, teja: { ink: '#5E6E54', far: '#b8c4ac' },
    laxmi: { ink: '#7A5C8C', far: '#c9bbd3' }, sarada: { ink: '#A8542F', far: '#e0b9a6' },
    karunya: { ink: '#3d7a8c', far: '#a9c9d1' }, srikanth: { ink: '#6B5B95', far: '#cfc7e0' },
    kote: { ink: '#5E6E54', far: '#b8c4ac' }, suresh: { ink: '#7E6A3A', far: '#d9c9a0' },
  };
  const CH = [
    [0.0, 4.2, 'Two hometowns'], [4.2, 8.4, 'A thoughtful connection'], [8.4, 12.6, 'One hello between mothers'],
    [12.6, 16.8, 'Two families get talking'], [16.8, 21.0, 'Anusha and Teja get talking'], [21.0, 25.4, '...and the chapters ahead'],
  ];
  const env = (T, a, b) => (T < 0 ? 0 : E.soft(seg(T, a, a + 0.5)) * (1 - E.soft(seg(T, b - 0.5, b))));

  function person(g, t, key, name, what, x, sx, a, talk, cheer, off) {
    if (a < 0.03) return;
    let p = breathe(REST, t + off);
    p = mix(p, TALK, talk); p = mix(p, CHEER, cheer);
    g.save(); g.globalAlpha = a;
    fig(g, legs(p, 0, 0, { arms: false }), x, 0, Object.assign({ sx }, COL[key]));
    g.restore();
    KIT.tag(g, x, name, what, COL[key].ink, a);
  }

  SC['story-film'] = {
    dur: 26, width: 480,
    label: 'The story in six short chapters: two hometowns, a thoughtful connection by Karunya and Srikanth, a hello between Laxmi and Sarada, two families talking, Anusha and Teja getting to know each other, and the chapters ahead.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const e = CH.map(([a, b]) => env(T, a, b));
      const leftLit = T >= 0 && (seg(T, 10.9, 11.1) * (1 - seg(T, 24.6, 25)) > 0.5);
      const rightLit = T >= 0 && (seg(T, 8.6, 8.8) * (1 - seg(T, 24.6, 25)) > 0.5);
      KIT.house(g, -180, 'Ongole', leftLit);
      KIT.house(g, 180, 'Santhanutalapadu', rightLit);

      // chapter 1: a dotted road grows between the two hometowns
      if (T >= 0 && e[0] > 0.02) {
        g.save(); g.globalAlpha = e[0]; g.setLineDash([6, 6]);
        const k = seg(T, 0.8, 3.4);
        ln(g, -140, -6, -140 + 280 * k, -6, 2.2, C.butter);
        g.setLineDash([]); g.restore();
      }
      // chapter 2: Karunya & Srikanth link the two homes
      if (T >= 0 && e[1] > 0.02) {
        g.save(); g.globalAlpha = e[1]; g.setLineDash([6, 6]);
        const k = seg(T, 5.4, 7.6);
        g.beginPath(); g.moveTo(-140, -90); g.quadraticCurveTo(0, -150 - 12 * k, -140 + 280 * k, -90 + 0 * k); g.strokeStyle = C.butter; g.lineWidth = 2.4; g.stroke();
        g.setLineDash([]); g.restore();
        sparks(g, 0, -138, seg(T, 7.0, 7.8) * e[1], 18, 7);
      }
      person(g, t, 'karunya', 'Karunya', 'makes the introduction', -62, 1, e[1], 0, E.back(seg(T, 6.0, 6.3)) * 0.8, 0.2);
      person(g, t, 'srikanth', 'Srikanth', 'brings us together', 62, -1, e[1], 0, E.back(seg(T, 6.4, 6.7)) * 0.8, 0.9);

      // chapter 3: Laxmi -> Sarada
      person(g, t, 'laxmi', 'Laxmi', 'reaches out', 112, -1, e[2], E.soft(seg(T, 9.0, 9.3)) * (1 - E.soft(seg(T, 9.6, 9.9))), 0, 0.5);
      person(g, t, 'sarada', 'Sarada', 'says hello back', -112, 1, e[2], 0, E.back(seg(T, 11.0, 11.3)) * 0.9, 1.3);
      if (T >= 0 && e[2] > 0.02) {
        const kp = seg(T, 9.4, 11.0);
        if (kp > 0 && kp < 1) plane(g, [100, -92], [-100, -92], kp, 44, 1);
        tickBadge(g, -150, -108, seg(T, 11.1, 11.4) * e[2]);
      }

      // chapter 4: families talk
      const f4 = e[3], b = (a, c) => seg(T, a, a + 0.25) * (1 - seg(T, c, c + 0.25)) * f4;
      person(g, t, 'sarada', 'Sarada', 'mother', -135, 1, f4, E.soft(seg(T, 14.8, 15.0)) * (1 - E.soft(seg(T, 15.6, 15.9))), 0, 0.2);
      person(g, t, 'kote', 'Koteswararao', 'father', -45, 1, f4, E.soft(seg(T, 13.4, 13.6)) * (1 - E.soft(seg(T, 14.2, 14.5))), 0, 0.8);
      person(g, t, 'suresh', 'Suresh', 'father', 45, -1, f4, E.soft(seg(T, 14.1, 14.3)) * (1 - E.soft(seg(T, 14.9, 15.2))), 0, 1.4);
      person(g, t, 'laxmi', 'Laxmi', 'mother', 135, -1, f4, E.soft(seg(T, 15.4, 15.6)) * (1 - E.soft(seg(T, 16.0, 16.3))), 0, 2.0);
      if (T >= 0 && f4 > 0.02) {
        bubble(g, -45, -134, 'namaste', b(13.4, 14.2), { tail: 0 });
        bubble(g, 45, -134, 'namaste', b(14.1, 14.9), { tail: 0 });
        bubble(g, -135, -134, 'chai?', b(14.8, 15.6), { tail: 0 });
        bubble(g, 135, -134, 'so happy', b(15.4, 16.2), { tail: 0 });
      }

      // chapter 5: Anusha & Teja
      const f5 = e[4], c5 = (a, c) => seg(T, a, a + 0.25) * (1 - seg(T, c, c + 0.25)) * f5;
      person(g, t, 'anusha', 'Anusha', 'dentist', -60, 1, f5, E.soft(seg(T, 17.4, 17.6)) * (1 - E.soft(seg(T, 18.2, 18.5))) + E.soft(seg(T, 19.6, 19.8)) * (1 - E.soft(seg(T, 20.2, 20.5))), 0, 0.3);
      person(g, t, 'teja', 'Teja', 'software engineer', 60, -1, f5, E.soft(seg(T, 18.4, 18.6)) * (1 - E.soft(seg(T, 19.2, 19.5))), 0, 1.0);
      if (T >= 0 && f5 > 0.02) {
        bubble(g, -60, -134, 'motichoor!', c5(17.4, 18.3), { tail: 0 });
        bubble(g, 60, -134, 'veggies!', c5(18.4, 19.3), { tail: 0 });
        bubble(g, -60, -134, 'travel?', c5(19.6, 20.4), { tail: 0 });
      }

      // chapter 6: the road ahead
      const f6 = e[5];
      person(g, t, 'anusha', 'Anusha', 'next chapter', -52, 1, f6, 0, E.back(seg(T, 22.0, 22.3)) * 0.6, 0.3);
      person(g, t, 'teja', 'Teja', 'next chapter', 52, -1, f6, 0, E.back(seg(T, 22.2, 22.5)) * 0.6, 1.0);
      if (T >= 0 && f6 > 0.02) {
        g.save(); g.globalAlpha = f6;
        ['Kerala', 'Goa', 'Kashmir'].forEach((n, i) => {
          const x = -115 + i * 115;
          const k = E.back(seg(T, 22.6 + i * 0.7, 23.0 + i * 0.7));
          ln(g, x, 0, x, -34 * k, 2);
          if (k > 0.05) {
            g.beginPath(); g.moveTo(x, -34 * k); g.lineTo(x + 18 * k, -29 * k); g.lineTo(x, -24 * k); g.closePath();
            g.fillStyle = C.butter; g.fill(); g.strokeStyle = C.ink; g.lineWidth = 1.4; g.stroke();
            text(g, n, x + 4, -42 * k, 9, C.umber);
          }
        });
        g.restore();
        sparks(g, 0, -138, seg(T, 23.4, 24.4) * f6, 22, 8);
        bubble(g, 120, -112, 'to be continued', seg(T, 23.8, 24.1) * (1 - seg(T, 25.0, 25.3)) * f6, { tail: -66 });
      }
      // chapter title + progress dots
      CH.forEach(([a, b2, title], i) => {
        if (e[i] > 0.02) { g.save(); g.globalAlpha = e[i]; text(g, (i + 1) + '. ' + title, 0, 18, 11, C.umber); g.restore(); }
        const on = T >= a;
        g.beginPath(); g.arc(-50 + i * 20, 31, 3, 0, 7); g.fillStyle = on ? '#B96F59' : '#E4DACB'; g.fill();
      });
    },
  };
})();
