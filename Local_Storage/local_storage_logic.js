var items_to_remember = [];
var students = {};

class Student {
    constructor(name, last_name, major) {
        this.name = name;
        this.last_name = last_name;
        this.major = major;
    }
}


function load_items() {
    //LIST
    let items_array = localStorage.getItem('items_list') ? JSON.parse(localStorage.getItem('items_list')) : null
    let students_array = localStorage.getItem('students_list') ? JSON.parse(localStorage.getItem('students_list')) : null
    
    if (items_array == null || students_array == null) {
        alert("Oops! Nothing to show. Add some items and save the list first");
        return
    } 

    items_to_remember = [];
    var ul = document.getElementById("items_to_remember_list");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    
    var items_list = document.getElementById('items_to_remember_list');
    
    items_array.forEach(element => {
        var new_li = document.createElement('li');
        new_li.appendChild(document.createTextNode(element));
        items_list.append(new_li);           
    });
    items_to_remember = Array.from(items_array);

    //Students
    students_list = {};
    var students_ul = document.getElementById("students_list");
    while(students_ul.firstChild) students_ul.removeChild(students_ul.firstChild);
    
    var students_list = document.getElementById('students_list');
    
    for (var key in students_array) {
        var new_li = document.createElement('li');
        new_li.appendChild(document.createTextNode(key + ": " + JSON.stringify(students_array[key])));
        students_list.append(new_li);           
    }

    for (var key in students_array) {
        students_list[key] = students_array[key];
    }

}

function add_item() {
    var new_item = document.getElementById('item_to_save').value;
    document.getElementById('item_to_save').value = "";
    var items_list = document.getElementById('items_to_remember_list');
    items_to_remember.push(new_item)
    var new_li = document.createElement('li');
    new_li.appendChild(document.createTextNode(new_item));
    items_list.append(new_li);       
}


function create_student() {
    var name = document.getElementById('student_name').value;
    var last_name = document.getElementById('student_last_name').value;
    var major = document.getElementById('student_major').value;
    var nickname = document.getElementById('student_nickname').value;

    document.getElementById('student_name').value = "";
    document.getElementById('student_last_name').value = "";
    document.getElementById('student_major').value = "";
    document.getElementById('student_nickname').value = "";
    if (name == "" || last_name == "" || major == "") {
        alert("There is something missing");
        return
    }

    var new_student = new Student(name, last_name, major);
    students[nickname] = new_student;

    var students_list = document.getElementById('students_list');
    var new_li = document.createElement('li');
    new_li.appendChild(document.createTextNode(nickname + ": " + JSON.stringify(new_student)));
    students_list.append(new_li);       
}




function forget() {

    items_to_remember = [];
    var ul = document.getElementById("items_to_remember_list");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    localStorage.removeItem("items_list");
    
    students_list = {};
    var students_ul = document.getElementById("students_list");
    while(students_ul.firstChild) students_ul.removeChild(students_ul.firstChild);
    localStorage.removeItem("students_list");

    alert("Your items are permanently deleted, the reload button will do nothin for you! (evil laugh here)");
}

function save() {
    if (items_to_remember.length == 0 || items_to_remember == null || students.length == 0 || students == null) {
        alert("There needs to be an item in each list before saving");
        return;
    }

    localStorage.setItem('items_list', JSON.stringify(items_to_remember));
    localStorage.setItem('students_list', JSON.stringify(students));
    alert("Since your lists were saved to the local storage feel free to reload the page and then hit load items");
}


//Saving Objects