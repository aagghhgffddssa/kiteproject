(() => {
  const canUseKiteCursor = window.matchMedia(
    '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  );

  if (!canUseKiteCursor.matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'kite-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML =
    '<span class="kite-cursor__body"></span><span class="kite-cursor__tail"></span>';
  document.body.append(cursor);
  document.documentElement.classList.add('kite-cursor-enabled');

  let lastX = 0;
  let lastY = 0;

  window.addEventListener('pointermove', (event) => {
    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;
    const turn = Math.max(-14, Math.min(14, deltaX * 0.45));

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.style.setProperty('--kite-turn', `${turn}deg`);
    cursor.classList.add('is-visible');
    cursor.classList.toggle('is-over-link', Boolean(event.target.closest('a, button')));

    lastX = event.clientX;
    lastY = event.clientY;
  });

  window.addEventListener('pointerdown', () => cursor.classList.add('is-pressed'));
  window.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
  document.documentElement.addEventListener('mouseleave', () =>
    cursor.classList.remove('is-visible')
  );
  window.addEventListener('blur', () => cursor.classList.remove('is-visible'));
})();

(() => {
  const canAnimateWind = window.matchMedia(
    '(min-width: 701px) and (prefers-reduced-motion: no-preference)'
  );

  if (!canAnimateWind.matches) return;

  const heroCopy = document.querySelector('.hero-copy');
  if (!heroCopy) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'hero-wind';
  canvas.setAttribute('aria-hidden', 'true');
  heroCopy.prepend(canvas);

  const context = canvas.getContext('2d');
  if (!context) {
    canvas.remove();
    return;
  }

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let pointerX = 0.5;
  let pointerY = 0.5;

  const resize = () => {
    const bounds = heroCopy.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
  };

  const draw = (time) => {
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;

    for (let line = 0; line < 6; line += 1) {
      const baseY = height * (0.12 + line * 0.155);
      const amplitude = 7 + line * 1.8;
      const pointerLift = (pointerY - 0.5) * 14 * (line / 5);
      const phase = time * (0.00022 + line * 0.000012) + pointerX * 1.6;

      context.beginPath();
      for (let x = -20; x <= width + 20; x += 12) {
        const wave = Math.sin(x * 0.012 + phase + line * 0.7) * amplitude;
        const detail = Math.sin(x * 0.027 - phase * 0.65) * 2.2;
        const y = baseY + wave + detail + pointerLift;
        if (x === -20) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = `rgba(38, 78, 64, ${0.055 + line * 0.009})`;
      context.stroke();
    }

    animationFrame = window.requestAnimationFrame(draw);
  };

  heroCopy.addEventListener('pointermove', (event) => {
    const bounds = heroCopy.getBoundingClientRect();
    pointerX = (event.clientX - bounds.left) / bounds.width;
    pointerY = (event.clientY - bounds.top) / bounds.height;
  });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(heroCopy);
  resize();
  animationFrame = window.requestAnimationFrame(draw);

  document.addEventListener('visibilitychange', () => {
    window.cancelAnimationFrame(animationFrame);
    if (!document.hidden) animationFrame = window.requestAnimationFrame(draw);
  });
})();
