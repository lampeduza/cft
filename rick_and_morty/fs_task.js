var links = document.querySelectorAll('a');

var keyUp = function(e) {
  var div = document.querySelector('#autocomplete');
  var value = document.querySelector('#searchInput').value;
  var counter = document.querySelector('.fs-task__counter');
  div.innerHTML = '';
  if (value.length > 0) {
    var count = 0;
    links.forEach(function(elem, index) {
      var regex = new RegExp("^" + value, "i");
      if (elem.innerHTML.match(regex)) {
        var click_func = "choice_link('" + links[index].innerHTML + "')";
        div.innerHTML += '<span onclick="' + click_func + '">' + links[index].innerHTML + '</span><br />';
        count++;
        counter.textContent = count;
      }
    })
  }
}

var choice_link = function(link_item) {
  document.querySelector('#searchInput').value = link_item;
  document.querySelector('#autocomplete').innerHTML = '';
};