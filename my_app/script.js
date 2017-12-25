var selectedCell;

var elements = document.querySelectorAll("div.table");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(event){
    
        var target = event.target;
        console.log(target);
        // цикл двигается вверх от target к родителям до table
        while (target != elements) {
          if (target.classList == 'cell') {
            // нашли элемент, который нас интересует!
            highlight(target);
            return;
          }
          target = target.parentNode;
        }
     
  };
  
} 

function highlight(node) {
  if (selectedCell) {
    selectedCell.classList.remove('active');
  }
  selectedCell = node;
  selectedCell.classList.add('active');
}

