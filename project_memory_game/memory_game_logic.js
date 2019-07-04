window.onload = function() {
    
}

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
    //when user clicks start playing button
    document.getElementById("intro_button").addEventListener('click', function() {
        var player_selected = document.getElementById('intro_button').value;
        var new_player = document.getElementById('new_player_input_name').value;

        if (player_selected == "select_player" || new_player == "") {
            alert("You need to select a player or create a new one to play");
            return;
        }  
        modal.style.display = "none";
    });
};
