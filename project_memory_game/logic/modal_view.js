var current_player = null;
var is_new_player = true;
var api_key = "12924756-cc02905ce6702f218a7cae686";
var images_urls = [];
/******************************************
 * modal view 
 ******************************************/
function present_start_game_modal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    //load all players from local storage
    get_saved_players();
    var select_player_element = document.getElementById("select_player");
    for (i = 0; i < all_players.length; i++) {
        var player_option = document.createElement("option");
        player_option.text = all_players[i].name;
        player_option.value = JSON.stringify(all_players[i]);
        select_player_element.add(player_option);
    }
    
    //when user selects a player
    document.getElementById("select_player").addEventListener("change", function() {
        document.getElementById("new_player_input").innerHTML = "";
        is_new_player = false;
        return;
    });

    //when user enters a player name 
    document.getElementById("new_player_input").addEventListener("input", function() {
        document.getElementById("select_player").value = "select_player";
        is_new_player = true;
        return;
    });

    //when user clicks next button 
    document.getElementById("intro_button").addEventListener('click', function() {
        var select_player_value = document.getElementById("select_player").value;
        var enter_player_name_value = document.getElementById("new_player_input").value;
       
        if (is_new_player) {
            if (enter_player_name_value != "") {
                var new_player = new Player(enter_player_name_value);
                save_player_in_local_storage(new_player);
                current_player = new_player;
            } else {
                alert("Select a player or enter a name to crate a new player");
                return;
            }
        } else {
            if (select_player_value != "select_player") {
                current_player = JSON.parse(select_player_value);
            } else {
                alert("Select a player or enter a name to crate a new player");
                return;
            }
        } 
        hide_unneeded_div("select_player_div", "create_player_div");
    });
}

function hide_unneeded_div(div_id_1, div_id_2) {
    let div_to_hide_1 = document.getElementById(div_id_1);
    div_to_hide_1.classList.toggle("fade");

    let div_to_hide_2 = document.getElementById(div_id_2);
    div_to_hide_2.classList.toggle("fade");


    var select_theme_div = document.createElement("DIV");
    select_theme_div.setAttribute("id", "select_theme_div");

    var welcome_paragraph = document.createElement("P");
    welcome_paragraph.appendChild(document.createTextNode("Welcome " + current_player.name +
                                                         ". This game uses pixabay.com API to search for images," +
                                                        " please enter a theme to find images for the game."));

    var images_theme = document.createElement("INPUT");
    images_theme.setAttribute("type", "text");
    images_theme.setAttribute("placeholder", "Theme");
    images_theme.setAttribute("id", "search_term");

    var start_button = document.createElement("BUTTON");
    start_button.innerHTML = "Search";
    start_button.setAttribute('onclick', 'search_for_images()');

    select_theme_div.appendChild(welcome_paragraph);
    select_theme_div.appendChild(images_theme);
    select_theme_div.appendChild(start_button);
    
    var modal_body = document.getElementsByClassName("modal_body")[0];
    modal_body.prepend(select_theme_div);
    
    //player name on main page
    document.getElementById("player_name").innerHTML = current_player.name;

    //hide next button
    document.getElementById("intro_button").hidden = "true";
} 
/******************************************
 * start playing 
 ******************************************/
function search_for_images() {
    var search_terms = document.getElementById("search_term").value;
    var images_request = new XMLHttpRequest();
    images_request.onreadystatechange = function(){
        if(images_request.readyState == 4){
            if(images_request.status == 200) {
                var response = JSON.parse(images_request.responseText);
                if (parseInt(response.totalHits) > 0) {
                    for (i = 0; i <  response.hits.length; i++) {
                        images_urls.push(response.hits[i].previewURL);
                    }
                    set_memory_table(images_urls);
                    alert("Get ready to play!");
                    document.getElementById("myModal").style.display = "none";

                } else {
                    alert("We didn't find enough images, please try again.");
                }
            }
            else{
                console.log("Status error: " + images_request.status);
            }
        }
        else{
            console.log("Ignored readyState: " + images_request.readyState);
        }
    }
    images_request.open('GET', "https://pixabay.com/api/?key="+ api_key + "&q=" + encodeURIComponent(search_terms) + "&image_type=photo&per_page=8");
    images_request.send();
}




