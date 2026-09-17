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
