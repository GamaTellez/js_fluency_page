window.onload = function() {
    var total_items_in_table = 5;

    document.getElementById("create_element_button").addEventListener("click", function() {
        var text_content = document.getElementById('new_content').value;
        if (text_content == "") {
             alert("We really need some content"); 
             return; 
            }
        var element_selected = document.getElementById('element_select').value;
        var new_element = document.createElement(element_selected);
        var new_content = document.createTextNode(text_content);
        new_element.appendChild(new_content);

        var current_div = document.getElementById('div_content_1');
        var last_div_fill = document.getElementById('filling_div_1');
        current_div.insertBefore(new_element, last_div_fill); 
        document.getElementById('new_content').value = "";
    });


    document.getElementById("remove_row").addEventListener("click", function() {
        var index_to_delete = document.getElementById('index_selected').value;
        if (index_to_delete == "") {
            alert("We need to know the index");
            return;
        }
        
        if (total_items_in_table != 0) {
            document.getElementById("names_table").deleteRow(index_to_delete);
            total_items_in_table--;
            document.getElementById('index_selected').max = total_items_in_table;
            document.getElementById('index_selected').value = "";
        } else {
            alert("Oops! There is no row in that index");
        }
    });
}