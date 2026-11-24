// Two families at work: each figure does their own job; ticks pop up when the day's work is done.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, fig, inkFill, rr, ln, text, seg, lp, lerp, breathe, pulse, tick, tickBadge, floatText } = R;
  const DUR = 6.6;

  function desk(g, x) {
    ln(g, x + 28, -40, x + 28, 0, 2.2); ln(g, x + 80, -40, x + 80, 0, 2.2);
    rr(g, x + 22, -46, 64, 7, 3); inkFill(g, C.wood, 1.8);
  }
  function laptop(g, x) {
    rr(g, x + 34, -52, 28, 6, 2); inkFill(g, C.paper, 1.6);
    rr(g, x + 62, -80, 6, 30, 2); inkFill(g, '#2b2b2b', 1.4);
  }
  const ST = {
    farm: { col: { ink: '#5E6E54', far: '#b8c4ac' }, label: 'farming', hand: (x, T) => [x + 36, -44 + Math.sin(T * 6) * 5],
      draw(g, x, T) {
        const h = 24 + 16 * (T < 0 ? 0 : seg(T, 1, 4) * (1 - seg(T, 6, 6.5)));
        [32, 48, 64].forEach((dx, i) => {
          ln(g, x + dx, 0, x + dx, -h, 2);
          g.beginPath(); g.ellipse(x + dx + 6, -h * 0.7, 8, 3.6, -0.5, 0, Math.PI * 2); inkFill(g, C.green, 1.4);
          g.beginPath(); g.ellipse(x + dx - 6, -h * 0.45, 8, 3.6, 0.5, 0, Math.PI * 2); inkFill(g, C.green, 1.4);
        });
      } },
    tailor: { col: { ink: '#B96F59', far: '#dcb4a8' }, label: 'tailoring', hand: (x, T) => [x + 36 + Math.sin(T * 7) * 5, -48],
      draw(g, x, T) {
        ln(g, x + 26, -30, x + 26, 0, 2.2); ln(g, x + 82, -30, x + 82, 0, 2.2);
        rr(g, x + 20, -36, 68, 6, 3); inkFill(g, C.wood, 1.8);
        rr(g, x + 30, -48, 44, 12, 3); inkFill(g, C.paper, 1.7);
        ln(g, x + 66, -48, x + 66, -64, 2); ln(g, x + 66, -64, x + 44, -64, 2); ln(g, x + 44, -64, x + 44, -52, 2);
        rr(g, x + 36, -40, 50, 4, 1.5); inkFill(g, '#e8b7a3', 1.2);
        if (T >= 0) ln(g, x + 36, -38, x + 36 + 46 * seg(T, 1, 4), -38, 1.2, C.umber);
      } },
    code: { col: { ink: '#3d7a8c', far: '#a9c9d1' }, label: 'coding', typing: true, hand: (x) => [x + 44, -50],
      draw(g, x) { desk(g, x); laptop(g, x); } },
    consult: { col: { ink: '#7E6A3A', far: '#d9c9a0' }, label: 'consulting', typing: true, hand: (x) => [x + 44, -50],
      draw(g, x, T) {
        desk(g, x); laptop(g, x);
        ln(g, x + 76, -46, x + 76, -92, 2);
        rr(g, x + 40, -112, 56, 18, 4); inkFill(g, C.butterSoft, 1.6);
        text(g, 'consulting', x + 68, -99, 8.5, C.umber);
      } },
    super: { col: { ink: '#5E6E54', far: '#b8c4ac' }, label: 'supervising', hand: (x) => [x + 36, -86], hat: true,
      draw(g, x, T, f) {
        ln(g, x + 36, -52, x + 36, 0, 2.2); ln(g, x + 68, -52, x + 68, 0, 2.2);
        rr(g, x + 28, -112, 48, 60, 4); inkFill(g, C.paper, 1.8);
        [-100, -84, -68].forEach((y, i) => {
          ln(g, x + 44, y, x + 68, y, 1.6, C.faint);
          if (T >= 0) tick(g, x + 36, y, seg(T, 1 + i * 1.1, 1.5 + i * 1.1) * f, 0.7, C.greenInk);
        });
      } },
    accounts: { col: { ink: '#B96F59', far: '#dcb4a8' }, label: 'accounts', typing: true, hand: (x) => [x + 66, -52],
      draw(g, x, T, f) {
        desk(g, x);
        rr(g, x + 30, -53, 30, 7, 2); inkFill(g, C.paper, 1.5);
        rr(g, x + 62, -60, 16, 14, 2); inkFill(g, '#d8d2c4', 1.5);
        if (T >= 0 && f > 0.01) { g.save(); g.globalAlpha = Math.min(1, f * 1.5); text(g, String(Math.round(lerp(0, 1240, seg(T, 1, 4)))), x + 50, -80, 10, C.umber); g.restore(); }
      } },
  };

  function make(id, keys, xs, width, label) {
    SC[id] = {
      dur: DUR, width, label,
      draw(g, S) {
        const T = S.on ? S.u * this.dur : -1;
        const t = S.t;
        const fade = T < 0 ? 0 : 1 - seg(T, 6.0, 6.5);
        const poses = [];
        keys.forEach((key, i) => {
          const st = ST[key], x = xs[i];
          let pose = breathe(P({ hF: [12, -60], hB: [-4, -52] }), t + i * 0.9);
          if (T < 0) {
            pose = mix(pose, P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] }), pulse(t, 5.5 + i * 0.7, 2 + i, 2.2));
          } else {
            const work = E.soft(seg(T, 0.4 + i * 0.1, 0.8 + i * 0.1)) * (1 - E.soft(seg(T, 4.8, 5.2)));
            const bob = Math.sin(t * 22 + i) * 2.2;
            const tg = st.hand(x, T);
            pose = mix(pose, P({
              hF: lp([tg[0], tg[1] + (st.typing ? bob : 0)], x, 0, 1),
              hB: st.typing ? lp([tg[0] - 8, tg[1] - bob], x, 0, 1) : [-4, -54],
              head: [9, -114], chest: [3, -90] }), work);
          }
          poses.push(legs(pose, 0, 0, { arms: false }));
        });
        keys.forEach((key, i) => ST[key].draw(g, xs[i], T, fade));
        keys.forEach((key, i) => {
          fig(g, poses[i], xs[i], 0, Object.assign({ wave: i === 0 ? S.wave : 0, wt: S.wt }, ST[key].col, ST[key].hat ? { hat: true } : {}));
          text(g, ST[key].label, xs[i] + 46, 16, 9.5, C.umber);
          if (T >= 0) tickBadge(g, xs[i] + 40, -128, seg(T, 4.8 + i * 0.2, 5.1 + i * 0.2) * fade);
        });
      },
    };
  }
  make('nalluri-work', ['farm', 'tailor', 'code'], [-135, -15, 105], 430,
    'Three family members at work: one tends the crops, one sews, one writes code. Ticks appear as each finishes.');
  make('venigalla-work', ['super', 'accounts', 'code', 'consult'], [-200, -95, 10, 115], 470,
    'Four family members at work: a supervisor checks a list, an accountant tallies numbers, two software engineers write code. Ticks appear as each finishes.');
})();
