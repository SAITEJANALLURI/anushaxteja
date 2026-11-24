// Cooking together: Anusha picks jars and makes motichoor, Teja picks and chops veggies, they swap plates and taste each other's dish.
(function () {
  const SC = (window.SCENES = window.SCENES || {});
  const R = window.RIG;
  const { C, E, P, mix, legs, walkSeg, fig, inkFill, rr, ln, text, seg, lerp, breathe, pulse, sparks, tickBadge, bubble } = R;
  const ANU = { ink: '#B96F59', far: '#dcb4a8' }, TEJ = { ink: '#5E6E54', far: '#b8c4ac' };
  const REST = P({ hF: [12, -60], hB: [-4, -52] });
  const CHIN = P({ hF: [10, -96], head: [7, -116], hB: [-4, -54] });
  const CHEER = P({ hF: [14, -132], hB: [-10, -130], head: [3, -118] });
  const AX0 = -110, TX0 = 110, AM = -50, TM = 50;
  const kf = (T, keys) => {
    if (T <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      if (T <= keys[i][0]) { const [t0, p0] = keys[i - 1], [t1, p1] = keys[i]; const k = E.soft(seg(T, t0, t1)); return [lerp(p0[0], p1[0], k), lerp(p0[1], p1[1], k)]; }
    }
    return keys[keys.length - 1][1];
  };
  const dot = (g, x, y, r, f) => { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); inkFill(g, f, 1.2); };
  const inW = (T, a, b) => T >= a && T < b;
  const J1 = [-158, -92], J2 = [-146, -92], J3 = [-134, -92], BA = [-78, -58];
  const B1 = [148, -66], BD = [94, -54], BW = [72, -58];
  const AK = [[0.7, [-98, -62]], [1.2, J1], [1.3, J1], [2.1, BA], [2.3, BA], [2.8, J2], [3.0, J2], [3.8, BA], [4.0, BA], [4.3, J3], [4.5, J3], [5.2, BA], [5.4, BA], [6.9, BA], [7.5, [-98, -62]],
    [9.4, [-38, -62]], [9.8, [-16, -60]], [9.9, [-16, -60]], [10.4, [-44, -106]], [11.0, [-44, -106]], [11.4, [-38, -62]]];
  const TK = [[0.7, [98, -62]], [1.2, B1], [1.3, B1], [2.0, BD], [2.1, BD], [3.2, B1], [3.3, B1], [4.0, BD], [4.1, BD], [5.2, BD], [5.7, BW], [5.8, BW], [7.1, BW], [7.6, [98, -62]],
    [9.7, [38, -62]], [10.1, [16, -60]], [10.2, [16, -60]], [10.7, [44, -106]], [11.3, [44, -106]], [11.7, [38, -62]]];
  const AW = (T) => E.soft(seg(T, 0.6, 0.9)) * (1 - E.soft(seg(T, 7.4, 7.7))) + E.soft(seg(T, 9.3, 9.6)) * (1 - E.soft(seg(T, 11.3, 11.6)));
  const carryW = (T) => E.soft(seg(T, 7.6, 7.9)) * (1 - E.soft(seg(T, 9.0, 9.3)));

  function plate(g, x, y, sweet) {
    rr(g, x - 14, y, 28, 4, 2); inkFill(g, C.paper, 1.5);
    if (sweet) { dot(g, x - 7, y - 4, 5, '#E39A3B'); dot(g, x + 3, y - 5, 5.5, '#ECAA46'); dot(g, x + 11, y - 3, 4, '#5C3829'); }
    else { g.beginPath(); g.arc(x, y - 1, 12, Math.PI, 0); g.closePath(); inkFill(g, '#9BB08C', 1.5); dot(g, x - 5, y - 9, 3.4, '#D96B4F'); dot(g, x + 5, y - 10, 3.4, '#E3B24C'); }
  }
  function bowl(g, bx, dots, mixed) {
    g.beginPath(); g.arc(bx, -50, 14, 0, Math.PI); g.closePath(); inkFill(g, C.paper, 1.6);
    if (mixed) { g.beginPath(); g.arc(bx, -50, 12, Math.PI, 0); g.closePath(); inkFill(g, mixed, 1.2); }
    else dots.forEach((d, i) => dot(g, bx - 8 + (i % 4) * 5.5, -54 - Math.floor(i / 4) * 4, 2.6, d));
  }

  SC['cook-together'] = {
    dur: 14.6, width: 470,
    label: 'Anusha picks jars and makes motichoor while Teja picks and chops vegetables. They bring their plates to the middle, swap them and taste each other\'s dish.',
    draw(g, S) {
      KIT.sky(g, S.t, this.width);
      const T = S.on ? S.u * this.dur : -1, t = S.t;
      const run = T >= 0 && T < 13.9;
      const ax = T < 8 ? AX0 : T < 12.7 ? walkSeg(T, 8.0, 9.0, AX0, AM).x : walkSeg(T, 12.8, 13.8, AM, AX0).x;
      const tx = T < 8 ? TX0 : T < 12.7 ? walkSeg(T, 8.0, 9.0, TX0, TM).x : walkSeg(T, 12.8, 13.8, TM, TX0).x;
      const wa = T < 12.7 ? walkSeg(T, 8.0, 9.0, AX0, AM) : walkSeg(T, 12.8, 13.8, AM, AX0);
      const wt = T < 12.7 ? walkSeg(T, 8.0, 9.0, TX0, TM) : walkSeg(T, 12.8, 13.8, TM, TX0);
      const back = T >= 12.75 && T < 13.85;
      const sxa = back ? -1 : 1, sxt = back ? 1 : -1;
      const ha = kf(T, AK), ht = kf(T, TK);

      // counters, shelf, basket
      [[-128, 98], [58, 98]].forEach(([x0, w]) => { ln(g, x0 + 8, -40, x0 + 8, 0, 2.2); ln(g, x0 + w - 8, -40, x0 + w - 8, 0, 2.2); rr(g, x0, -46, w, 7, 3); inkFill(g, C.wood, 1.8); });
      ln(g, -168, -84, -126, -84, 2.4);
      [[-158, '#E8B84A'], [-146, '#FFFDF9'], [-134, '#5C3829']].forEach(([x, f]) => { rr(g, x - 6, -98, 12, 14, 3); inkFill(g, f, 1.5); rr(g, x - 7, -102, 14, 5, 2); inkFill(g, '#B96F59', 1.3); });
      rr(g, 134, -62, 28, 16, 3); inkFill(g, '#D9B98A', 1.5);
      const basketTomato = !(run && inW(T, 1.3, 7.7)), basketCaps = !(run && inW(T, 3.3, 7.7));
      if (basketTomato) dot(g, 141, -66, 5, '#D96B4F');
      if (basketCaps) dot(g, 155, -66, 5.5, '#7FA36B');
      rr(g, 80, -50, 28, 4, 2); inkFill(g, '#F1E3C8', 1.4);
      if (run) { // board pieces
        if (T >= 2.0 && T < 3.1) dot(g, 94, -55, 5, '#D96B4F');
        if (T >= 3.1 && T < 5.2) [-8, 0, 8].forEach((o) => dot(g, 94 + o, -54, 3, '#D96B4F'));
        if (T >= 4.0 && T < 5.1) dot(g, 100, -55, 5.5, '#7FA36B');
        if (T >= 5.1 && T < 5.2) [-4, 4, 12].forEach((o) => dot(g, 94 + o, -54, 3, '#7FA36B'));
      }
      if (run && T >= 7.8 && T < 13.6) { g.save(); g.globalAlpha = E.soft(seg(T, 7.8, 8.2)) * (1 - E.soft(seg(T, 13.0, 13.5))); ln(g, -40, -40, -40, 0, 2.2); ln(g, 40, -40, 40, 0, 2.2); rr(g, -48, -46, 96, 7, 3); inkFill(g, C.wood, 1.8); g.restore(); }

      // poses
      const mk = (base, x, sx, hnd, hw, off, taste) => {
        let p = breathe(base, t + off);
        if (T < 0) return mix(p, CHIN, pulse(t, 5.5 + off * 3, 2, 2.2));
        const bob = 0;
        p = mix(p, P({ hF: R.lp(hnd, x, 0, sx), hB: [-4, -54], head: [9, -114], chest: [3, -90] }), hw);
        p = mix(p, P({ hF: [30, -62], hB: [-4, -54], head: [9, -114] }), carryW(T));
        return mix(p, CHEER, E.back(seg(T, 11.9, 12.2)) * (1 - E.soft(seg(T, 12.6, 12.9))));
      };
      const wT = AW(T);
      let ha2 = ha, ht2 = ht;
      if (inW(T, 5.4, 6.9)) ha2 = [BA[0] + Math.cos(T * 8) * 6, BA[1] + Math.sin(T * 8) * 3];
      if (inW(T, 5.8, 7.1)) ht2 = [BW[0] + Math.cos(T * 8) * 6, BW[1] + Math.sin(T * 8) * 3];
      if (inW(T, 2.1, 3.1) || inW(T, 4.1, 5.1)) ht2 = [BD[0], BD[1] - Math.abs(Math.sin(T * 9)) * 10];
      const pa = mk(REST, ax, sxa, ha2, wT, 0, false), pt = mk(REST, tx, sxt, ht2, wT, 1.1, true);
      const ga = T >= 0 && wa.dir * sxa < 0 ? { ph: -wa.ph, amp: wa.amp, stride: wa.stride } : (T >= 0 ? wa : { ph: 0, amp: 0 });
      const gt = T >= 0 && wt.dir * sxt < 0 ? { ph: -wt.ph, amp: wt.amp, stride: wt.stride } : (T >= 0 ? wt : { ph: 0, amp: 0 });
      fig(g, legs(pa, ga.ph, ga.amp, { arms: false, stride: ga.stride }), ax, 0, Object.assign({ sx: sxa, wave: S.wave, wt: S.wt }, ANU));
      fig(g, legs(pt, gt.ph, gt.amp, { arms: false, stride: gt.stride }), tx, 0, Object.assign({ sx: sxt }, TEJ));

      // bowls and what is in them
      const n = (a, b, c) => (run ? (T >= c ? 3 : T >= b ? 2 : T >= a ? 1 : 0) : 0);
      if (!(run && T >= 7.2 && T < 13.0)) {
        const dots = [];
        [[2.1, '#E8B84A'], [3.8, '#FFFDF9'], [5.2, '#5C3829']].forEach(([a, f]) => { if (run && T >= a && T < 13.0) for (let i = 0; i < 3; i++) dots.push(f); });
        bowl(g, BA[0], dots, run && T >= 6.9 && T < 13.0 ? '#C98A3C' : null);
      }
      if (!(run && T >= 7.3 && T < 13.0)) {
        const dots = [];
        if (run && T >= 5.7 && T < 13.0) for (let i = 0; i < 3; i++) { dots.push('#D96B4F'); dots.push('#7FA36B'); }
        bowl(g, BW[0], dots, null);
      }
      // plates follow each person once the dishes are ready
      if (run && T >= 7.3 && T < 13.0) {
        const pf = 1 - E.soft(seg(T, 12.8, 13.0));
        g.save(); g.globalAlpha = pf;
        const sw = E.soft(seg(T, 9.2, 9.7)), lift = Math.sin(Math.PI * sw) * 16;
        plate(g, lerp(ax + 34, tx - 34, sw), -52 - lift, true);
        plate(g, lerp(tx - 34, ax + 34, sw), -52 - lift, false);
        g.restore();
      }
      // food in hand: carried ingredients and tasting bites
      if (run) {
        [[1.3, 2.1, ha, '#E8B84A'], [3.0, 3.8, ha, '#FFFDF9'], [4.5, 5.2, ha, '#5C3829'], [9.9, 10.4, ha, '#7FA36B']].forEach(([a, b, h, f]) => { if (inW(T, a, b)) dot(g, h[0], h[1] - 3, 4, f); });
        [[1.3, 2.0, ht, '#D96B4F'], [3.3, 4.0, ht, '#7FA36B'], [5.2, 5.7, ht, '#D96B4F'], [10.2, 10.7, ht, '#ECAA46']].forEach(([a, b, h, f]) => { if (inW(T, a, b)) dot(g, h[0], h[1] - 3, 4, f); });
        if (inW(T, 2.1, 3.1) || inW(T, 4.1, 5.1)) ln(g, ht2[0], ht2[1], ht2[0], ht2[1] + 9, 2.2, '#8a8a8a');
        if (inW(T, 5.4, 6.9)) ln(g, ha2[0], ha2[1], BA[0] + Math.cos(T * 8) * 3, -48, 2, '#8C583A');
        if (inW(T, 5.8, 7.1)) ln(g, ht2[0], ht2[1], BW[0] + Math.cos(T * 8) * 3, -48, 2, '#8C583A');
        sparks(g, 0, -120, seg(T, 12.0, 12.8) * (1 - seg(T, 12.8, 13.2)), 22, 8);
        tickBadge(g, 0, -140, seg(T, 12.2, 12.5) * (1 - seg(T, 13.0, 13.3)));
        bubble(g, AM, -134, 'so fresh!', seg(T, 10.6, 10.8) * (1 - seg(T, 11.8, 12.0)), { tail: 0 });
        bubble(g, TM, -134, 'so sweet!', seg(T, 10.9, 11.1) * (1 - seg(T, 12.1, 12.3)), { tail: 0 });
      }
      const wa1 = T < 0 ? 'sweet side' : T < 7.3 ? 'making motichoor' : T < 9.4 ? 'carrying her plate' : T < 12.7 ? 'tasting veggies' : 'all done!';
      const wt1 = T < 0 ? 'veggie side' : T < 7.3 ? 'chopping veggies' : T < 9.4 ? 'carrying his plate' : T < 12.7 ? 'tasting motichoor' : 'all done!';
      KIT.tag(g, ax, 'Anusha', wa1, ANU.ink); KIT.tag(g, tx, 'Teja', wt1, TEJ.ink);
    },
  };
})();
