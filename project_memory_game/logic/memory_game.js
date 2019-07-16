var cards = [];

function set_memory_table(images_urls) {
    var memory_table = document.getElementById("memory_table");
    //to do is make copies of the array and randomize them.
    var row_count = 0;
    var cell_count = 0;

    //duplicate image urls
    var total_cards = images_urls.length * 2;
    var index = 0;

    for (count = 0; count < total_cards; count++) {
        var new_card = new Card(images_urls[index], index);
        cards.push(new_card);
        if (index == images_urls.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }

    //shuffle images in array
    card = shuffle_array(cards);

    //create table with images from cards array
    for (i = 0; i < images_urls.length;) {
        while (row_count < 4) {
            var tr = document.createElement('tr');
            
            while (cell_count < 4) {
                var card_at_index = cards[i];

                var td = document.createElement('td');
                td.className = "card_cell";
                
                var image = document.createElement("IMG");
                image.src = card_at_index.front_image_url;
                image.className = "card_front";
                td.appendChild(image);
                
                tr.appendChild(td);
                td.onclick = function() {
                    card_clicked(this)
                };
                cell_count++;
                i++;        
            }

            memory_table.appendChild(tr);
            row_count++;
            cell_count = 0;
        }    
    }
}

function shuffle_array(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function card_clicked(element) {
    var cell_index = element.cellIndex;
    var row_index = element.parentElement.rowIndex;
    //console.log("row: " + row_index + "cell: " + cell_index);
    
    var index_of_card = 0;
    switch (row_index) {
        case 0:
            index_of_card = cell_index;
        break;
        case 1:
            index_of_card = cell_index + 4;
        break;
        case 2:
            index_of_card = cell_index + 8;
        break;
        case 3:
            index_of_card = cell_index + 12;
        break;
        default:
            break;
    }

    var card_clicked = cards[index_of_card];
    var cell_clicked = document.getElementById('memory_table').rows[row_index].cells[cell_index].childNodes[0];
    cell_clicked.src = card_clicked.back_image_url;
  }