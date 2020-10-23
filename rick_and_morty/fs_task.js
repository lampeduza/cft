var links = document.querySelectorAll('a'); // Поиск всех ссылок и распределение их в псевдомассиве

var keyUp = function(e) {
  var div = document.querySelector('#autocomplete'); // Поиск контейнера
  var value = document.querySelector('#searchInput').value; // Поиск значения в поле поиска
  var counter = document.querySelector('.fs-task__counter'); // Поиск счетчика на странице
  div.textContent = ''; // Записываем в контейнер пустое значение

  if (value.length > 0) { // Если длина значения больше нуля, то
    var count = 0; // задаем счетчику значение по умолчанию 0, до цикла
    links.forEach(function(elem, index) {
      if (elem) {
        var regex = new RegExp(value, "i"); // регулярное выражение
        if (elem.textContent.match(regex)) { // проверяет для каждого элемента, соответствует ли этот элемент введенному в поле поиска значению
          count++; // Увлечение счетчика на единицу
          var click_func = "choice_link('" + links[index].textContent + "')";
          div.innerHTML += '<span onclick="' + click_func + '">' + links[index].textContent + '</span><br />';
        }
      }

      else {
        count = 0;
      }
    })
    div.addEventListener('click', function() {
      count = 0;
      counter.textContent = count; // Перезаписываем переменную счетчик на новое значение счетчика
    });
    counter.textContent = count; // Перезаписываем переменную счетчик на новое значение счетчика
  }
  else {
    count = 0;
    counter.textContent = count; // Перезаписываем переменную счетчик на новое значение счетчика
  }
};
// Функция выбора ссылки */
var choice_link = function(link_item) {
  document.querySelector('#searchInput').value = link_item; // по клику вписывает вариант в поле ввода из предложенных вариантов
  document.querySelector('#autocomplete').innerHTML = ''; // очистка области размещения ссылок, после нажатия на вариант
};

