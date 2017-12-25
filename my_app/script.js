let selectedCell;

var elements = document.querySelectorAll("div.table .cell");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(event){
    
        var target = event.target;
        console.log(target);
        // цикл двигается вверх от target к родителям до table
        while (target != elements[i]) {
          if (target.classList == 'cell') {
              console.log(target.classList);
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
  console.log(selectedCell);
  selectedCell.classList.add('active');
}

