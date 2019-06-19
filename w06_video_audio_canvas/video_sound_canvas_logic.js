var canvas_context;
var drawing_canvas;
var x_points_array = [];
var y_points_array = [];
var points_count = 0;

function get_random_int(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function random_color_generator() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function prep_canvas() {
    drawing_canvas = document.getElementById("drawing_canvas");
    canvas_context = drawing_canvas.getContext("2d");//context is the built in HTML drawing object
}

function draw_circle(fill) {
    canvas_context.beginPath();
    canvas_context.arc(get_random_int(500), get_random_int(300), get_random_int(100), 0, 2 * Math.PI, true);
    if (fill) {    
        canvas_context.fill();
    } else {
        canvas_context.stroke();
    }
}

function draw() {
    let shape = document.getElementById("shape").value;
    let style = document.getElementById("fill_style").value;
    canvas_context.fillStyle = random_color_generator();
    canvas_context.strokeStyle = random_color_generator();
    switch(shape) {
        case "rect":
            style == "fill" ? canvas_context.fillRect(get_random_int(500), get_random_int(300), get_random_int(500), get_random_int(300)) : canvas_context.strokeRect(get_random_int(500), get_random_int(300), get_random_int(500), get_random_int(300));
            break;
        case "circle":
            style == "fill" ? draw_circle(true) : draw_circle(false);
            break;
        default:
            alert("something is missing");
    }
}

function draw_point_at_random_location() {
    var x_point = get_random_int(500);
    var y_point = get_random_int(300);

    canvas_context.fillRect(x_point, y_point, 10, 10);
    x_points_array.push(x_point);
    y_points_array.push(y_point);
    points_count++;
}

function connect_points() {
    if (points_count < 2 ) {
        alert("We need at least two points");
        return;
    } 
    canvas_context.beginPath();
    canvas_context.moveTo(x_points_array[0], y_points_array[0]);//starting point
    for (i = 1; i < points_count; i++) {
        canvas_context.lineTo(x_points_array[i], y_points_array[i]);
    } 
    canvas_context.closePath();
    canvas_context.stroke();
}

function clear_canvas() {
    canvas_context.clearRect(0, 0, drawing_canvas.width, drawing_canvas.height);
    points_count = 0;
    x_points_array = [];
    y_points_array = [];
}