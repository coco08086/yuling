document.body.addEventListener('mousemove', (e) => {
  const rect = document.querySelector('.highlightable').getBoundingClientRect();
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
});
document.body.querySelectorAll('.highlightable > *').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    const fs = getComputedStyle(el).getPropertyValue('font-size');
    const lh = getComputedStyle(el).getPropertyValue('line-height');
    document.documentElement.style.setProperty('--cursor-height', `calc(${fs} + (${lh} / 4))`);
  });
});
