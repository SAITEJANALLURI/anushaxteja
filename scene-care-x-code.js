// Care x Code: one figure treats a patient while the other types code, then both cheer.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, fig, inkFill, rr, ln, text, seg, lp, breathe, pulse, sparks, bubble, floatText } = R;
  const AX = -92, TX = 88;
  const ANU = { ink: '#B96F59', far: '#dcb4a8' };
  const TEJ = { ink: '#5E6E54', far: '#b8c4ac' };

  function chair(g, k) {
    ln(g, -30, -30, -30, 0, 2.4);
    ln(g, -48, 0, -12, 0, 2.4);
    rr(g, -70, -38, 78, 9, 4);
    inkFill(g, C.paper, 1.8);
    g.beginPath(); g.arc(-58, -52, 8, 0, Math.PI * 2); inkFill(g, C.paper, 1.8);
    ln(g, -49, -47, -18, -45, 2.4);
    ln(g, -18, -45, 6, -45, 2.4);
    ln(g, -61, -50, -55, -50, 1.4 + k * 0.6);
    rr(g, -64, -118, 26, 8, 4);
    inkFill(g, C.butterSoft, 1.6);
    ln(g, -52, -110, -52, -66, 1.4);
    text(g, 'patient', -30, 16, 9.5, C.umber);
  }
  function desk(g) {
    ln(g, 36, -40, 36, 0, 2.2);
    ln(g, 82, -40, 82, 0, 2.2);
    rr(g, 30, -46, 58, 7, 3);
    inkFill(g, C.wood, 1.8);
    rr(g, 46, -52, 30, 6, 2);
    inkFill(g, C.paper, 1.6);
    rr(g, 44, -80, 6, 30, 2);
    inkFill(g, '#2b2b2b', 1.4);
    text(g, '</>', 33, 16, 9.5, C.umber);
  }

  SC['care-x-code'] = {
    dur: 6.5,
    width: 420,
    label: 'One figure treats a patient in a dental chair while the other writes code. Both cheer and a bubble reads care times code.',
    draw(g, S) {
      const T = S.on ? S.u * this.dur : -1;
      const t = S.t;
      let pa = breathe(P({ hF: [12, -60], hB: [-4, -52] }), t);
      let pt = breathe(P({ hF: [12, -60], hB: [-4, -52] }), t + 1.3);
      if (T < 0) {
        pa = mix(pa, P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] }), pulse(t, 5.5, 2, 2.2));
        pt = mix(pt, P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] }), pulse(t, 6.5, 4, 2.2));
      } else {
        const cheer = E.back(seg(T, 3.8, 4.1)) * (1 - E.soft(seg(T, 4.9, 5.3)));
        const work = E.soft(seg(T, 0.5, 0.9)) * (1 - E.soft(seg(T, 3.6, 3.9))) * (1 - cheer);
        const bob = Math.sin(t * 22) * 2.2;
        pa = mix(pa, P({ hF: lp([-58 + Math.sin(T * 9) * 3, -64 + Math.cos(T * 9) * 2], AX, 0, 1), hB: [-4, -54], head: [9, -114], chest: [3, -90] }), work);
        pt = mix(pt, P({ hF: lp([68, -50 + bob], TX, 0, -1), hB: [-4, -54], head: [9, -114], chest: [3, -90] }), work);
        const CH = P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] });
        pa = mix(pa, CH, cheer);
        pt = mix(pt, CH, cheer);
      }
      pa = legs(pa, 0, 0, { arms: false });
      pt = legs(pt, 0, 0, { arms: false });
      const fade = T < 0 ? 0 : 1 - seg(T, 5.9, 6.4);

      chair(g, T >= 0 ? seg(T, 2.6, 3.4) * (1 - seg(T, 5.9, 6.4)) : 0);
      desk(g);
      fig(g, pa, AX, 0, Object.assign({ wave: S.wave, wt: S.wt }, ANU));
      fig(g, pt, TX, 0, Object.assign({ sx: -1 }, TEJ));
      if (T >= 0) {
        sparks(g, -58, -58, seg(T, 2.4, 3.2) * fade, 22, 8);
        floatText(g, '</>', 62, -84, seg(T, 1.2, 3.2) * fade);
        bubble(g, 0, -136, 'care × code', seg(T, 4.0, 4.3) * (1 - seg(T, 5.6, 5.9)), { tail: 0 });
      }
    },
  };
})();
