class Father {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.wife = null;
        this.sons = [];
        this.daughters = [];
    }
}

class Mother {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
}

class Son {
    constructor(name, last_name) {
        this.name = name;
        this.last_name = last_name;
    }
}

class Daughter {
    constructor(name, last_name) {
        this.name = name;
        this.last_name = last_name;
    }
}


window.onload = function() {
    var father = null;
    var mother = null;

    document.getElementById("create_father_button").addEventListener("click", function() {
        var father_name = document.getElementById("father_name").value;
        var father_last_name = document.getElementById("father_last_name").value;
        var father_age = document.getElementById("father_age").value;

        if (father_name == "" || father_last_name == "" || father_age == "") {
            alert("Something about the father is missing");
            return;
        } 
        father = new Father(father_name, father_last_name, father_age);
        if (mother != null) {
            father.wife = mother;
        }
        document.getElementById("create_father_button").disabled = true;
        print_json();
    });

    document.getElementById("create_mother_button").addEventListener("click", function() {
        var mother_name = document.getElementById("mother_name").value;
        var mother_last_name = document.getElementById("mother_last_name").value;
        var mother_age = document.getElementById("mother_age").value;

        if (mother_name == "" || mother_last_name == "" || mother_age == "") {
            alert("Something about the mother is missing");
            return;
        } 

        mother = new Mother(mother_name, mother_last_name, mother_age);
        if (father != null) {
            father.wife = mother;
        }
        document.getElementById("create_mother_button").disabled = true;
        print_json();
    });

    document.getElementById("create_son_button").addEventListener("click", function() {
        if (father == null || mother == null) {
            alert("We don't want parentless children do we?");
            return;
        }
        var son_name = document.getElementById("son_name").value;
        var son_age = document.getElementById("son_age").value;

        if (son_age == "" || son_name == "") {
            alert("Something is missing");
            return;
        }
        father.sons.push(new Son(son_name, father.last_name));
        document.getElementById("son_name").value = "";
        document.getElementById("son_age").value = "";
        print_json();
    });

    document.getElementById("create_daughter_button").addEventListener("click", function() {
        if (father == null || mother == null) {
            alert("We don't want parentless children do we?");
            return;
        }
        var daughter_name = document.getElementById("daughter_name").value;
        var daughter_age = document.getElementById("daughter_age").value;

        if (daughter_age == "" || daughter_name == "") {
            alert("Something is missing");
            return;
        }

        father.daughters.push(new Daughter(son_name, father.last_name));
        document.getElementById("daughter_name").value = "";
        document.getElementById("daughter_age").value = "";
        print_json();
    });

    function print_json() {
        if (father != null) {
        var father_string = JSON.stringify(father, undefined, 2);
        document.getElementById("json_format_string").innerHTML = father_string;

        var father_object = JSON.parse(father_string);
        document.getElementById("object_name").innerHTML = "father.name = " + father_object.name;
        
        if (father_object.wife != null) {
            document.getElementById("object_wife").innerHTML = "father.wife.name = " + father_object.wife.name;
        } else {
            document.getElementById("object_wife").innerHTML = "father.wife.name = null";
        }
        document.getElementById("object_sons").innerHTML = "father.sons.count = " + father_object.sons.length;
        document.getElementById("object_daughters").innerHTML = "father.daughters.count = " + father_object.daughters.length;
        };
    }
}