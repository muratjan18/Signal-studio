Fancybox.bind("[data-fancybox]", {
  // Опции (можно оставить пустыми для дефолтных настроек)
});

let currentWave = 0;
const waves = $('.wave-svg');
const labels = ['Синус', 'Меандр', 'Пила'];

// Скрываем через visibility изначально
waves.each(function(i) {
  if (i !== 0) $(this).css('visibility', 'hidden');
});

$('.wave-switch-link').on('click', function(e) {
  e.preventDefault();

  waves.eq(currentWave).css('visibility', 'hidden');
  currentWave = (currentWave + 1) % waves.length;
  waves.eq(currentWave).css('visibility', 'visible');
   // Обновляем текст
  $('.form__wave span').text('Форма волны: ' + labels[currentWave]);
});
