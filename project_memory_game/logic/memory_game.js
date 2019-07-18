var cards = [];
var cards_flipped = 0;
var card_one = null;
var image_one = null;
var card_two = null;
var image_two = null;
var moves_count = 0;
var pairs_found = 0;
/******************************************
 * sets up the memory game from modal view
 ******************************************/
function set_memory_table(images_urls) {
    var memory_table = document.getElementById("memory_table");
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
                
                var image = document.createElement("IMG");
                image.src = card_at_index.front_image_url;
                image.className = "card";
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


/******************************************
 * when user clicks on a card
 ******************************************/
  function card_clicked(element) {    
    moves_count++;
    if ((moves_count % 2) == 0) {
        document.getElementById("moves").innerHTML = moves_count / 2;
    }
    var cell_index = element.cellIndex;
    var row_index = element.parentElement.rowIndex;
    
    var card_clicked = get_card_clicked(cell_index, row_index);
    var image_clicked = document.getElementById('memory_table').rows[row_index].cells[cell_index].childNodes[0];
    switch(cards_flipped) {
        case 0:
            card_one = card_clicked;
            image_one = image_clicked;
            image_clicked.src = card_clicked.back_image_url;
            cards_flipped++;
            break;
        case 1:
            card_two = card_clicked;
            image_two = image_clicked;
            image_clicked.src = card_clicked.back_image_url;
            setTimeout(function() {
                if (card_one.tag == card_two.tag) {
                    pairs_found++;
                    current_player.games_played++;
                    document.getElementById("pairs_found").innerHTML = pairs_found;
                    if (pairs_found == 8) {
                        alert("Congratulations, you finished the game in " + moves_count / 2 + " moves");
                    }
                    cards_flipped = 0;
                    card_one = null;
                    card_two = null;
                    image_one = null;
                    image_two = null;
                    return;
                } else {
                    image_one.src = card_one.front_image_url;
                    image_two.src = card_two.front_image_url;
                    cards_flipped = 0;
                    card_one = null;
                    card_two = null;
                    image_one = null;
                    image_two = null;
                }
            }, 1000);
            break;
        default:
            reset_values();
            break;
    }

  }

  function get_card_clicked(cell_index, row_index) {
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
    return cards[index_of_card];
  }

  function reset_values() {
    card_one = null;
    card_two = null;
    cards_flipped = 0;
  }