var loader_is_animating = true;
 
function toggle() {
    var square = document.getElementById('square_div');
    var toggle_button = document.getElementById('toggle_button');
    var square_is_visible = square.classList.contains('slide_in');
    square.setAttribute('class', square_is_visible ? 'slide_out' : 'slide_in');
    toggle_button.innerHTML = square_is_visible ? 'Show' : 'Hide'
}

function toggle_two() {
    var loader_div = document.getElementsByClassName('loader_div')[0];
    loader_div.style.WebkitAnimationPlayState = loader_is_animating ? "paused" : "running";
    loader_is_animating = loader_is_animating ? false : true;
    document.getElementById('toggle_button_two').innerHTML = loader_is_animating ? "Pause" : "Start";
}