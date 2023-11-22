
function getMadlib()
{
    const element = document.getElementById("madlib");
    const show = document.getElementById("story");
    const adjective1 = document.querySelector("#adjective1").value;
    const adjective2 = document.querySelector("#adjective2").value;
    const food = document.querySelector("#food").value;
    const room = document.querySelector("#room").value;
    const pastVerb = document.querySelector("#pastVerb").value;
    const verb = document.querySelector("#verb").value;
    const name = document.querySelector("#name").value;
    const noun1 = document.querySelector("#noun1").value;
    const noun2 = document.querySelector("#noun2").value;
    const ing_verb1 = document.querySelector("#ing_verb1").value;
    const body = document.querySelector("#body").value;
    const noun3 = document.querySelector("#noun3").value;
    const ing_verb2 = document.querySelector("#ing_verb2").value;
    const noun4 = document.querySelector("#noun4").value;
    const disp = document.getElementById("text");

    
    element.style.display = "none";
    show.style.display = "block";  

    disp.innerHTML = "It was a " + adjective1 + ", cold November day. I woke up to the " + adjective2 + " smell of " + food  
    + " roasting in the " + room + " downstairs. I " + pastVerb + " down the stairs to see if I could help " + verb 
    + " the dinner. My mom said to see if " + name + " needs a fresh " + noun1 + ". So I carried a tray of glasses full of " + noun2 
    + " into the " + ing_verb1 + " room. When I got there, I couldn't believe my " + body + "! There were " 
    + noun3 + " " + ing_verb2 + " on the " + noun4 + "!"
}

function reset()
{
    const goAgain = document.getElementById("story");
    const element = document.getElementById("madlib");
    goAgain.style.display = "none";
    element.style.display = "grid";
    document.getElementById("adjective1").value = "";
    document.getElementById("adjective2").value = "";
    document.getElementById("food").value = "";
    document.getElementById("room").value = "";
    document.getElementById("pastVerb").value = "";
    document.getElementById("verb").value = "";
    document.getElementById("name").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("ing_verb1").value = "";
    document.getElementById("body").value = "";
    document.getElementById("noun3").value = "";
    document.getElementById("ing_verb2").value = "";
    document.getElementById("noun4").value = "";
}