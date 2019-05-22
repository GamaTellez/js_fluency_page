var rotated = false;

function random_color_generator() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function get_random_int(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
function change_border_color() {
    var div = document.getElementById("div_example");
    div.style.borderColor = random_color_generator();

}

function change_background_color() {
    var div = document.getElementById("div_example");
    div.style.backgroundColor = random_color_generator();
}

function change_width() {
    var div = document.getElementById("div_example");
    div.style.width = get_random_int(200).toString() + "px";
}

function change_height() {
    var div = document.getElementById("div_example");
    div.style.height = get_random_int(200).toString() + "px";
}

function rotate() {
    var div = document.getElementById('div_example'),
    deg = rotated ? 0 : get_random_int(360);

    div.style.webkitTransform = 'rotate(' + deg + 'deg)'; 
    div.style.mozTransform = 'rotate(' + deg + 'deg)'; 
    div.style.msTransform = 'rotate(' + deg + 'deg)'; 
    div.style.oTransform = 'rotate(' + deg + 'deg)'; 
    div.style.transform = 'rotate(' + deg +'deg)'; 
    rotated = !rotated;
}

function change_corners_radious() {
    var div = document.getElementById('div_example');
    div.style.borderRadius = get_random_int(100).toString() + "px";
}

/*****************************************************************************************
 *      Other ways to get the HTML ELEMENT in JS (more at https://www.w3schools.com/js/js_htmldom_elements.asp)
 * 
 *      - By Id <div id="the_one"></div>
 *             var the_one = document.getElementById("the_one"); equivalent to #the_one in css
 * 
 *      - By tag name <div></div>
 *              var the_one = document.getElementByTagName("DIV");  
 * 
 *      - By class name <div class="the_one"></div>
 *              var the_one = document.getElementByClassName("the_one"");  equivalent to .the_one in css
 * 
 *      
 *       The HTMLElement.style property is used to get as well as set the inline style of an element. 
 *         (more at https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style).
 * 
 * 
 * 
 *****************************************************************************************/