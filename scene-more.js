// More scenes: food-date, start-small, map-pins, note-drop.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, walkSeg, fig, inkFill, rr, ln, text, seg, lp, lerp, breathe, pulse, sparks, tick, tickBadge, bubble } = R;
  const ANU = { ink: '#B96F59', far: '#dcb4a8' };
  const TEJ = { ink: '#5E6E54', far: '#b8c4ac' };
  const REST = P({ hF: [12, -60], hB: [-4, -52] });
  const CHIN = P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] });
  const CHEER = P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] });
  const rev = (ws, sx) => (ws.dir * sx < 0 ? { ph: -ws.ph, amp: ws.amp, stride: ws.stride } : ws);
  const cheerK = (T, a, b) => E.back(seg(T, a, a + 0.3)) * (1 - E.soft(seg(T, b, b + 0.4)));
  const dot = (g, x, y, r, f) => { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); inkFill(g, f, 1.3); };

  // ---------- food-date ----------
  SC['food-date'] = {
    dur: 6, width: 400,
    label: 'Two figures walk up to a table, push their plates together, taste each other\'s food and say yum.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const wL = T < 0 ? null : (T < 3.5 ? walkSeg(T, 0.8, 1.6, -84, -62) : walkSeg(T, 4.6, 5.4, -62, -84));
      const wR = T < 0 ? null : (T < 3.5 ? walkSeg(T, 0.8, 1.6, 84, 62) : walkSeg(T, 4.6, 5.4, 62, 84));
      const xl = wL ? wL.x : -84, xr = wR ? wR.x : 84;
      const mk = (base, x, sx, ws, off) => {
        let p = breathe(base, t + off);
        if (T < 0) return mix(p, CHIN, pulse(t, 5.5 + off, 2, 2.2));
        const push = E.soft(seg(T, 0.7, 1.0)) * (1 - E.soft(seg(T, 1.9, 2.2)));
        const taste = E.soft(seg(T, 2.3, 2.6)) * (1 - E.soft(seg(T, 3.3, 3.6)));
        p = mix(p, P({ hF: lp([x + sx * 26, -52], x, 0, sx), hB: [-4, -54], head: [9, -114], chest: [3, -90] }), push);
        p = mix(p, CHIN, taste);
        return mix(p, CHEER, cheerK(T, 3.7, 4.5));
      };
      const pl = mk(REST, xl, 1, wL, 0), pr = mk(REST, xr, -1, wR, 1.1);
      const gl = wL ? rev(wL, 1) : { ph: 0, amp: 0 }, gr = wR ? rev(wR, -1) : { ph: 0, amp: 0 };
      ln(g, -60, -40, -60, 0, 2.2); ln(g, 60, -40, 60, 0, 2.2);
      rr(g, -74, -46, 148, 7, 3); inkFill(g, C.wood, 1.8);
      // plates ride along with each figure
      const px1 = xl + 34, px2 = xr - 34;
      rr(g, px1 - 20, -50, 40, 4, 2); inkFill(g, C.paper, 1.5);
      dot(g, px1 - 8, -56, 6, '#E39A3B'); dot(g, px1 + 5, -57, 6.5, '#ECAA46'); dot(g, px1 + 15, -54, 5, '#5C3829');
      rr(g, px2 - 20, -50, 40, 4, 2); inkFill(g, C.paper, 1.5);
      g.beginPath(); g.arc(px2, -52, 15, Math.PI, 0); g.closePath(); inkFill(g, '#9BB08C', 1.5);
      dot(g, px2 - 7, -60, 4, '#D96B4F'); dot(g, px2 + 6, -61, 4, '#E3B24C');
      fig(g, legs(pl, gl.ph, gl.amp, { arms: false, stride: gl.stride }), xl, 0, Object.assign({ wave: S.wave, wt: S.wt }, ANU));
      fig(g, legs(pr, gr.ph, gr.amp, { arms: false, stride: gr.stride }), xr, 0, Object.assign({ sx: -1 }, TEJ));
      KIT.tag(g, xl, 'Anusha', 'loves sweets', ANU.ink); KIT.tag(g, xr, 'Teja', 'loves veggies', TEJ.ink);
      if (T >= 0) bubble(g, 0, -92, 'yum!', seg(T, 3.4, 3.6) * (1 - seg(T, 5.0, 5.3)), { tail: 0 });
    },
  };

  // ---------- start-small ----------
  function deskAt(g, x, dir) {
    const a = dir > 0 ? x + 22 : x - 86;
    ln(g, a + 6, -40, a + 6, 0, 2.2); ln(g, a + 58, -40, a + 58, 0, 2.2);
    rr(g, a, -46, 64, 7, 3); inkFill(g, C.wood, 1.8);
  }
  SC['start-small'] = {
    dur: 6.4, width: 440,
    label: 'One figure fills jars with sweets while the other builds the online shop. A board ticks off menu, test batch, brand and soft launch.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const AX = -150, TX = 150, f = T < 0 ? 0 : 1 - seg(T, 5.9, 6.3);
      const mk = (x, sx, off, target, typing) => {
        let p = breathe(REST, t + off);
        if (T < 0) return mix(p, CHIN, pulse(t, 5.5 + off * 2, 2, 2.2));
        const work = E.soft(seg(T, 0.4 + off * 0.1, 0.8 + off * 0.1)) * (1 - E.soft(seg(T, 4.6, 5.0)));
        const bob = Math.sin(t * 22 + off) * 2.2;
        const tg = target(T);
        p = mix(p, P({ hF: lp([tg[0], tg[1] + (typing ? bob : 0)], x, 0, sx), hB: typing ? lp([tg[0] + sx * -8, tg[1] - bob], x, 0, sx) : [-4, -54], head: [9, -114], chest: [3, -90] }), work);
        return mix(p, CHEER, cheerK(T, 5.0, 5.7) * 0.0);
      };
      const pa = mk(AX, 1, 0, (T) => [AX + 44 + Math.sin(T * 5) * 4, -56], false);
      const pt = mk(TX, -1, 1, () => [TX - 44, -50], true);
      deskAt(g, AX, 1);
      [0, 1, 2].forEach((i) => { rr(g, AX + 36 + i * 17, -62, 13, 16, 3); inkFill(g, '#F6F0E4', 1.5); rr(g, AX + 35 + i * 17, -66, 15, 5, 2); inkFill(g, '#B96F59', 1.4); });
      deskAt(g, TX, -1);
      rr(g, TX - 62, -52, 28, 6, 2); inkFill(g, C.paper, 1.6); rr(g, TX - 68, -80, 6, 30, 2); inkFill(g, '#2b2b2b', 1.4);
      ln(g, -22, -52, -22, 0, 2.2); ln(g, 38, -52, 38, 0, 2.2);
      rr(g, -34, -118, 84, 66, 4); inkFill(g, C.paper, 1.8);
      ['menu', 'test batch', 'brand + app', 'soft launch'].forEach((s, i) => {
        const y = -104 + i * 14;
        text(g, s, 12, y + 3, 8.5, C.umber);
        if (T >= 0) tick(g, -24, y, seg(T, 1.1 + i * 1.0, 1.5 + i * 1.0) * f, 0.7, C.greenInk);
      });
      fig(g, legs(pa, 0, 0, { arms: false }), AX, 0, Object.assign({ wave: S.wave, wt: S.wt }, ANU));
      fig(g, legs(pt, 0, 0, { arms: false }), TX, 0, Object.assign({ sx: -1 }, TEJ));
      KIT.tag(g, AX, 'Anusha', 'tests the batch', ANU.ink); KIT.tag(g, TX, 'Teja', 'builds the shop', TEJ.ink);
      if (T >= 0) { sparks(g, 8, -122, seg(T, 4.6, 5.3) * f, 18, 7); bubble(g, 8, -132, 'soft launch!', seg(T, 4.8, 5.1) * f, { tail: 0 }); }
    },
  };

  // ---------- map-pins ----------
  const POSTS = [{ x: -105, n: 'Kerala' }, { x: 25, n: 'Goa' }, { x: 150, n: 'Kashmir' }];
  SC['map-pins'] = {
    dur: 7.6, width: 420,
    label: 'A traveller walks along signposts for Kerala, Goa and Kashmir and plants a flag at each one.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const W = [walkSeg(T, 0.2, 1.1, -175, -65), walkSeg(T, 1.9, 2.7, -65, 65), walkSeg(T, 3.5, 4.3, 65, 190), walkSeg(T, 5.8, 7.4, 190, -175)];
      let ws = { x: -175, ph: 0, amp: 0 };
      if (T >= 0) ws = T < 1.5 ? W[0] : T < 3.1 ? W[1] : T < 4.7 ? W[2] : W[3];
      const sx = T >= 5.7 ? -1 : 1;
      let p = breathe(REST, t);
      if (T < 0) p = mix(p, CHIN, pulse(t, 5.5, 2, 2.2));
      else {
        [[1.2, 1.7], [2.8, 3.3], [4.4, 4.9]].forEach(([a, b], i) => {
          const k = E.soft(seg(T, a, a + 0.3)) * (1 - E.soft(seg(T, b - 0.3, b)));
          p = mix(p, P({ hF: lp([POSTS[i].x + 22, -106], ws.x, 0, 1), hB: [-4, -54], head: [9, -114], chest: [3, -88] }), k);
        });
        p = mix(p, CHEER, cheerK(T, 5.0, 5.6));
      }
      const fadeF = T < 0 ? 0 : 1 - seg(T, 6.6, 7.2);
      POSTS.forEach((o, i) => {
        ln(g, o.x, 0, o.x, -76, 2.2);
        rr(g, o.x - 34, -98, 68, 22, 4); inkFill(g, C.paper, 1.8);
        text(g, o.n, o.x, -83, 9.5, C.umber);
        const a = [1.4, 3.0, 4.6][i];
        const k = T < 0 ? 0 : E.back(seg(T, a, a + 0.4)) * fadeF;
        if (k > 0.02) { ln(g, o.x + 22, -98, o.x + 22, -98 - 26 * k, 2); rr(g, o.x + 22, -124, 20 * k, 11 * k, 2); inkFill(g, C.butter, 1.5); }
      });
      const gt = rev(ws, sx);
      fig(g, legs(p, gt.ph, gt.amp, { arms: false, stride: ws.stride }), ws.x, 0, Object.assign({ sx, wave: S.wave, wt: S.wt }, ANU));
      KIT.tag(g, ws.x, 'Anusha', 'picks the places', ANU.ink);
    },
  };

  // ---------- note-drop ----------
  SC['note-drop'] = {
    dur: 6.4, width: 400,
    label: 'A figure writes a note at a desk, walks it to a mailbox and drops it in. The mailbox flag pops up.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const w1 = walkSeg(T, 1.7, 2.8, -120, 92), w2 = walkSeg(T, 4.9, 6.2, 92, -120);
      let ws = { x: -120, ph: 0, amp: 0 };
      if (T >= 0) ws = T < 4.0 ? w1 : w2;
      const sx = T >= 4.8 ? -1 : 1;
      let p = breathe(REST, t);
      if (T < 0) p = mix(p, CHIN, pulse(t, 5.5, 2, 2.2));
      else {
        const wr = E.soft(seg(T, 0.3, 0.6)) * (1 - E.soft(seg(T, 1.4, 1.7)));
        const carry = E.soft(seg(T, 1.6, 1.9)) * (1 - E.soft(seg(T, 3.6, 3.9)));
        const post = E.soft(seg(T, 2.9, 3.2)) * (1 - E.soft(seg(T, 3.6, 3.9)));
        p = mix(p, P({ hF: lp([-76 + Math.sin(T * 14) * 3, -52], -120, 0, 1), hB: [-4, -54], head: [10, -112], chest: [4, -88] }), wr);
        p = mix(p, P({ hF: [26, -70], hB: [-4, -54], head: [9, -114] }), carry);
        p = mix(p, P({ hF: lp([124, -66], 92, 0, 1), hB: [-4, -54], head: [9, -114], chest: [3, -90] }), post);
        p = mix(p, CHEER, cheerK(T, 4.0, 4.6));
      }
      ln(g, -100, -40, -100, 0, 2.2); ln(g, -52, -40, -52, 0, 2.2);
      rr(g, -108, -46, 64, 7, 3); inkFill(g, C.wood, 1.8);
      rr(g, -92, -50, 22, 4, 1); inkFill(g, C.butterSoft, 1.3);
      ln(g, 140, 0, 140, -62, 2.4);
      rr(g, 118, -90, 44, 28, 7); inkFill(g, C.paper, 1.8);
      ln(g, 124, -78, 136, -78, 2.2);
      text(g, 'Teja', 140, -69, 8.5, C.umber);
      const fk = T < 0 ? 0 : E.back(seg(T, 3.6, 4.0)) * (1 - seg(T, 5.6, 6.0));
      rr(g, 162, -88 - 18 * fk, 5, 14 + 18 * fk, 1); inkFill(g, '#B96F59', 1.4);
      const gt = rev(ws, sx);
      const J = fig(g, legs(p, gt.ph, gt.amp, { arms: false, stride: ws.stride }), ws.x, 0, Object.assign({ sx, wave: S.wave, wt: S.wt }, ANU));
      if (T >= 1.6 && T < 3.6 && J && J.w && J.w.handF) {
        const h = J.w.handF, s = 1 - seg(T, 3.2, 3.6);
        g.save(); g.translate(h[0] + 6, h[1] - 6); g.rotate(-0.12); g.scale(s, s);
        rr(g, -9, -7, 18, 14, 2); inkFill(g, C.butter, 1.4); ln(g, -5, -2, 5, -2, 1.2, C.umber); ln(g, -5, 2, 2, 2, 1.2, C.umber);
        g.restore();
        if (R.frontArm) R.frontArm(g, J);
      }
      KIT.tag(g, ws.x, 'Anusha', 'writes her answers', ANU.ink);
      if (T >= 0) { sparks(g, 140, -96, seg(T, 3.6, 4.2), 18, 7); tickBadge(g, 160, -104, seg(T, 3.9, 4.2) * (1 - seg(T, 5.6, 6.0))); }
    },
  };
})();
