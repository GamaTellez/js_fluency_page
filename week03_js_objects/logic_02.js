/**************************************
 * Person class
 **************************************/

 class Person {
     constructor(name, age, favorite_color) {
        this.name = name;
        this.age = age;
        this.favorite_color = favorite_color;
     }
     introduce() {
         return "Hello my name is " + this.name + ", I'm " + this.age + " years old, and my favorite color is " + this.favorite_color + ".";
     }
 }

 /**************************************
 * MexicanPerson class extends Person
 **************************************/
class MexicanPerson extends Person {
    introduce_in_spanish(){
        return "Hola, mi nombre is " + this.name + ", yo tengo " + this.age + " anios de edad, y mi color favorito es " + this.favorite_color + ".";
    }
}


 function create_person() {
    let name_input = document.getElementById("person_name");
    let age_input = document.getElementById("person_age");
    let color_input = document.getElementById("person_favorite_color");

    if (name_input.value == "" || age_input.value == "" || color_input.value == "") {
        alert ("Something is missing and we need all about this new person.");
        return
    }
    let new_person = new Person(name_input.value, age_input.value, color_input.value);
    document.getElementById("introduction").innerHTML = new_person.introduce();
 }

 function create_mex_person() {
    let name_input = document.getElementById("mex_person_name");
    let age_input = document.getElementById("mex_person_age");
    let color_input = document.getElementById("mex_person_favorite_color");

    if (name_input.value == "" || age_input.value == "" || color_input.value == "") {
        alert ("Something is missing and we need all about this new person.");
        return
    }
    let new_mex_person = new MexicanPerson(name_input.value, age_input.value, color_input.value);
    document.getElementById("mex_introduction").innerHTML = new_mex_person.introduce();
    document.getElementById("spanish_introduction").innerHTML = new_mex_person.introduce_in_spanish();
 }

 function create_default_person() {
     let new_default_person = new Person();
     new_default_person.name = "Tom";
     new_default_person.age = 34;
     new_default_person.favorite_color = "purple";
     document.getElementById("default_person_name").innerHTML = "Default name: " + new_default_person.name;
     document.getElementById("default_person_age").innerHTML = "Default age: " + new_default_person.age;
     document.getElementById("default_person_color").innerHTML = "Default color: " + new_default_person.favorite_color;
    }