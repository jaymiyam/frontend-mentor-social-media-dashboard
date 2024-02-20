const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('change', () => {
  const currentTheme = document
    .querySelector('html')
    .getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.querySelector('html').setAttribute('data-theme', newTheme);
});
