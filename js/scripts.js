function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("can not be blank!");
    } else {
        $('#list').append(li);
    }
     //2. Crossing out an item from the list of items:
   
    
     //3(i). Adding the delete button "X": 
    
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     
     // 4. Reordering the items:
}