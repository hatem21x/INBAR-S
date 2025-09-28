document.addEventListener('click', (e) => {
  const dd = e.target.closest('.dropdown');
  document.querySelectorAll('.dropdown').forEach(d => {
    if (d !== dd) d.classList.remove('open');
  });
  if (dd && e.target.tagName.toLowerCase() === 'button') {
    dd.classList.toggle('open');
  }
});
