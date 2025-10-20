/* eslint-disable */
import './index.css';

// Код для переключения тем
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Проверяем сохраненную тему или устанавливаем светлую по умолчанию
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (savedTheme === 'dark') {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
    if (themeToggle) themeToggle.checked = true;
  } else {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
    if (themeToggle) themeToggle.checked = false;
  }

  // Обработчик переключения
  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
