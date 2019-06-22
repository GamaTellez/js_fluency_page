function random_color_generator() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function () {
    var canvas_element = document.getElementById("drawing_canvas");
    var canvas_context = canvas_element.getContext("2d");
    canvas_context.lineWidth = 2;
    var last_x = 0;
    var last_y = 0;
    var mouse_down = false;

    var canvas_point_paragraph = document.getElementById("mouse_position");    
    var current_event_paragraph = document.getElementById("current_event");

    document.getElementById("click_example").addEventListener("click", function () {
        alert("This alert was trigger by the onClick event of the button");
    });

    //Canvas events
    document.getElementById("drawing_canvas").addEventListener("mousemove", function (event) {
        current_event_paragraph.innerHTML = "Current event: MOUSE MOVE";
        last_x = event.clientX;
        last_y = event.clientY;
    
        var x_point = event.clientX - canvas_element.offsetLeft;
        var y_point = event.clientY - canvas_element.offsetTop;    

        canvas_point_paragraph.innerHTML = "Mouse position in canvas: X: " + x_point + " Y: " + y_point;

        if (mouse_down) {
            canvas_context.beginPath();
            canvas_context.moveTo(last_x, last_y);
            canvas_context.lineTo(x_point, y_point);
            canvas_context.strokeStyle = random_color_generator();
            canvas_context.stroke();
            canvas_context.closePath();
        }    
    });

    document.getElementById("drawing_canvas").addEventListener("mousedown", function (event) {
        current_event_paragraph.innerHTML = "Current event: MOUSE DOWN";
        canvas_context.fillStyle = random_color_generator();
        canvas_context.strokeStyle = random_color_generator();
        
        last_x = x_point;
        last_y = y_point;
    
        var x_point = event.clientX - canvas_element.offsetLeft;
        var y_point = event.clientY - canvas_element.offsetTop;    
    
        canvas_context.beginPath();
        canvas_context.fillRect(x_point, y_point, 10, 10);
        canvas_context.closePath();
        mouse_down = true;
    });

    document.getElementById("drawing_canvas").addEventListener("mouseout", function () {
        current_event_paragraph.innerHTML = "Current event: MOUSE OUT";
        canvas_context.clearRect(0, 0, canvas_element.width, canvas_element.height);
        mouse_down = false;
    });

    document.getElementById("drawing_canvas").addEventListener("mouseup", function () {
        current_event_paragraph.innerHTML = "Current event: MOUSE UP";
        mouse_down = false;
    });


    //Move square
    var canvas_element_2 = document.getElementById("drawing_canvas_2");
    var canvas_context_2 = canvas_element_2.getContext("2d");
    canvas_context_2.fillStyle = random_color_generator();
    canvas_context_2.strokeStyle = random_color_generator();
    canvas_context_2.fillRect(0, 0, 50,50);
    var square_x_point = 0;

    window.onkeydown = function (event) {
        var key_pressed = event.keyCode;
        if (key_pressed === 39) {
            if (square_x_point != 450) {
                square_x_point = square_x_point + 10;
            }
        }
        if (key_pressed === 37) {
            if (square_x_point != 0 ) {
                square_x_point = square_x_point - 10;
            }
        }
        event.preventDefault();
        canvas_context_2.clearRect(0 , 0, 500, 50);
        canvas_context_2.fillRect(square_x_point, 0, 50,50);
    }
}

