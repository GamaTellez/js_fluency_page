var all_players = [];
let player_key = "players";

function save_player_in_local_storage(new_player) {
    all_players.push(new_player);
    localStorage.setItem(player_key, JSON.stringify(all_players));
    console.log(new_player + " saved to local storage");
}

function get_saved_players() {
    all_players = localStorage.getItem(player_key) ? JSON.parse(localStorage.getItem(player_key)) : [];
    //localStorage.removeItem(player_key);
}