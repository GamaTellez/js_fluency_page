var items_array = [];
var friends_array = [];

function multiply() {
    let number_count = document.getElementById("count").value;
    let multiplier = document.getElementById("multiplier").value;
    let loop_table = document.getElementById("loop_table");
    //clear old table cells
    while (loop_table.rows.length > 1) {
        loop_table.deleteRow(1);
    }
    for (let count = 1; count <= number_count; count++) {
            let row_at_count = loop_table.insertRow(count);
            let cell_number_at_count = row_at_count.insertCell(0);
            cell_number_at_count.innerHTML = count;
            let cell_number_multiplied = row_at_count.insertCell(1);
            cell_number_multiplied.innerHTML = count * multiplier;
    }
}

function save_item_to_array() {
    let array_table = document.getElementById("array_table");
    let item_name_input = document.getElementById("item_name");
    
    if (item_name_input.value == "") {
        alert("Oops, we need to have a name for the item");
        return;
    }
    
    items_array.push(item_name_input.value);
    while (array_table.rows.length > 1) {
        array_table.deleteRow(1);
    }
    index = 0;
    for (item of items_array) {
        let row_at_index = array_table.insertRow(index + 1);
        let cell_index = row_at_index.insertCell(0);
        cell_index.innerHTML = index;
        let cell_item_name = row_at_index.insertCell(1);
        cell_item_name.innerHTML = item;
        index++;
    }   
    item_name_input.value = "";    
}

function clear_table() {
    items_array = [];
    let array_table = document.getElementById("array_table");

    while (array_table.rows.length > 1) {
        array_table.deleteRow(1);
    }
}

function save_to_associative_array() {
    let friend_name_input = document.getElementById("friend_name_input");
    let friends_money_input = document.getElementById("friend_money_input");
    let friends_table = document.getElementById("associative_array_table");
    
    if (friend_name_input.value == "" || friends_money_input.value == "") {
        alert("Oops, something is missing!");
        return;
    }

    friends_array.push({name: friend_name_input.value,
                        money: friends_money_input.value});
    while (friends_table.rows.length > 1) {
        friends_table.deleteRow(1);
    }
    let index = 0;
    for (friend of friends_array) {
        let row_at_index = friends_table.insertRow(index + 1);
        let cell_name = row_at_index.insertCell(0);
        cell_name.innerHTML = friend.name;
        let cell_money = row_at_index.insertCell(1);
        cell_money.innerHTML = friend.money;
        index++;
    }

    friends_money_input.value = "";
    friend_name_input.value = "";
}

function clear_associative_array() {
    let friends_table = document.getElementById("associative_array_table");
    friends_array = {};
    while (friends_table.rows.length > 1) {
        friends_table.deleteRow(1);
    }
}