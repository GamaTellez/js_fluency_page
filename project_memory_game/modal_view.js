var current_user = null;

/******************************************
 * modal view 
 ******************************************/
function present_start_game_modal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    //when user clicks outside the modal box
    window.onclick = function(event) {
        if (event.target == modal) {
            // modal.style.display = "none";
            alert("Pick a player or start as a new one and click \"Start playing\"");
        }
    }

    //when user selects a player
    document.getElementById("select_user_select").addEventListener("input", function() {
        if (this.value != "select_player") {
            current_user = this.value;
            hide_unneeded_div("create_player_div", "select_player_div");
        }
        return;
    });

    //when user enters a player name 
    document.getElementById("new_player_input").addEventListener("blur", function() {
        if (this.value != "select_player") {
            current_user = new Player(this.value);
            load_user_info();
            hide_unneeded_div("select_player_div", "create_player_div");
        }
        return;
    });

    //when user clicks start playing button
    document.getElementById("intro_button").addEventListener('click', function() {
        if (current_user == null) {
            alert("You need to select a player or create a new one to play");
            return;
        }  
        modal.style.display = "none";
    });
}

function hide_unneeded_div(div_id_1, div_id_2) {
    let div_to_hide_1 = document.getElementById(div_id_1);
    div_to_hide_1.classList.toggle("fade");

    let div_to_hide_2 = document.getElementById(div_id_2);
    div_to_hide_2.classList.toggle("fade");

    insert_game_rules_elements();
} 

function insert_game_rules_elements() {
    var select_them_div = document.createElement("DIV");
    select_them_div.setAttribute("id", "select_theme_div");

    var welcome_paragraph = document.createElement("P");
    welcome_paragraph.appendChild(document.createTextNode("Welcome " + current_user.name + ". This game uses pixabay.com API to search for images, please enter a theme to find images for the game."));

    var images_theme = document.createElement("INPUT");
    images_theme.setAttribute("type", "text");
    images_theme.setAttribute("placeholder", "Theme");

    select_them_div.appendChild(welcome_paragraph);
    select_them_div.appendChild(images_theme);
    
    var modal_body = document.getElementsByClassName("modal_body")[0];
    modal_body.prepend(select_them_div);
}

function load_user_info() {
    document.getElementById("player_info").innerHTML = current_user.name;
}
/******************************************
 * start playing 
 ******************************************/
function search_for_images(theme) {
    
}