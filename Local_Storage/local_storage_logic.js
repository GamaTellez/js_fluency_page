var items_to_remember = []

function load_items() {
    let items_array = localStorage.getItem('items_list') ? JSON.parse(localStorage.getItem('items_list')) : []
    if (items_array == null || items_array.length == 0) {
        alert("Oops! Nothing to show. Add some items and save the list first");
        return
    } 
    
    var items_list = document.getElementById('items_to_remember_list');
    
    items_array.forEach(element => {
        var new_li = document.createElement('li');
        new_li.appendChild(document.createTextNode(element));
        items_list.append(new_li);           
    });
    items_to_remember = Array.from(items_array);
}

function add_item() {
    var new_item = document.getElementById('item_to_save').value;
    document.getElementById('item_to_save').value = "";
    var items_list = document.getElementById('items_to_remember_list');
    items_to_remember.push(new_item)
    var new_li = document.createElement('li');
    new_li.appendChild(document.createTextNode(new_item));
    items_list.append(new_li);       
}

function forget_all() {
    items_to_remember = [];
    var ul = document.getElementById("items_to_remember_list");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    localStorage.removeItem("items_list");
    alert("Your items are permanently deleted, the reload button will do nothin for you! (evil laugh here)");
}

function save_list() {
    localStorage.setItem('items_list', JSON.stringify(items_to_remember));
    alert("Since your list was saved to the local storage feel free to reload the page and then hit load items");
}