// Shared look for all scenes: sunlit backdrop, name tags above figures, family houses.
(function () {
  const R = window.RIG;
  const { C, rr, inkFill, text } = R;
  const KIT = (window.KIT = { W: 420 });
  KIT.sky = function (g, t, W) {
    KIT.W = W;
    const x0 = -W / 2 - 700, w = W + 1400;
    const gr = g.createLinearGradient(0, -230, 0, 0);
    gr.addColorStop(0, '#FBEFD9'); gr.addColorStop(1, '#F7E6D4');
    g.fillStyle = gr; g.fillRect(x0, -800, w, 800);
    g.fillStyle = '#F9D9A8'; g.beginPath(); g.arc(W / 2 - 64, -146, 24, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#E3E4CC'; g.beginPath(); g.ellipse(-W * 0.3, 14, W * 0.36, 52, 0, Math.PI, 0); g.fill();
    g.fillStyle = '#D5DCC0'; g.beginPath(); g.ellipse(W * 0.28, 16, W * 0.34, 40, 0, Math.PI, 0); g.fill();
    g.fillStyle = 'rgba(255,255,255,.75)';
    for (let i = 0; i < 3; i++) {
      const x = ((t * 5 + i * (W / 3)) % (W + 120)) - W / 2 - 60, y = -128 - i * 12;
      g.beginPath(); g.arc(x, y, 9, 0, 7); g.arc(x + 11, y + 2, 7, 0, 7); g.arc(x - 11, y + 3, 6, 0, 7); g.fill();
    }
  };
  KIT.tag = function (g, x, name, what, ink, a) {
    a = a === undefined ? 1 : a;
    if (a < 0.02) return;
    const w = Math.max(name.length * 6, what.length * 4.7) + 18;
    x = Math.max(-KIT.W / 2 + w / 2 + 4, Math.min(KIT.W / 2 - w / 2 - 4, x));
    g.save(); g.globalAlpha = a;
    rr(g, x - w / 2, -186, w, 28, 9); inkFill(g, '#FFFDF9', 1.4);
    text(g, name, x, -177, 10, ink || C.umber);
    text(g, what, x, -166, 8, C.umber);
    g.restore();
  };
  KIT.house = function (g, cx, label, lit) {
    rr(g, cx - 34, -68, 68, 68, 4); inkFill(g, lit ? C.butterSoft : C.paper, 1.8);
    g.beginPath(); g.moveTo(cx - 42, -68); g.lineTo(cx, -102); g.lineTo(cx + 42, -68); g.closePath(); inkFill(g, C.butter, 1.8);
    rr(g, cx - 8, -32, 16, 32, 3); inkFill(g, C.paper, 1.6);
    rr(g, cx + 14, -56, 13, 13, 2); inkFill(g, lit ? C.butter : C.paper, 1.4);
    rr(g, cx - 27, -56, 13, 13, 2); inkFill(g, lit ? C.butter : C.paper, 1.4);
    text(g, label, cx, 16, 9.5, C.umber);
  };
})();
