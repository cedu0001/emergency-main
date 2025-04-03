// have fat i slideren
const slider = document.querySelector("#patience");
/* const patienceValue = document.querySelector("#"); //her vil 0% være??
 */
//sæt en eventlistener på den som opdaterer, når jeg laver ændringer 
slider.addEventListener("change", updateValue);

//min span skal opdaterer sin value (test content)
function updateValue(){
    console.log("updatevaluee");
    
    /*  patienceValue.textContent = slider.value; */
    if(slider.value > 49 && slider.value <85){
        console.log(`teskt er ${slider.value}`);
        slider.parentNode.style.accentColor = "var(--warning-color)"
    } else if(slider.value >= 85){
        slider.parentNode.style.accentColor = "var(--danger-color)"
    }
    else{
        slider.parentNode.style.accentColor = "var(--info-color)"
    }
}

//____________________________
function visAndetInput() {
    var select = document.getElementById("hvor-er-du");
    var andetInput = document.getElementById("andetInput");

    if (select.value === "andet") {
        andetInput.style.display = "block"; // Vis inputfelt
    } else {
        andetInput.style.display = "none"; // Skjul inputfelt
    }
}

//____________________________
function visAndetInput2() {
    var select = document.getElementById("problem-dropdown");
    var andetInput2 = document.getElementById("andetInput2");

    if (select.value === "andet2") {
        andetInput2.style.display = "block"; // Vis inputfelt
    } else {
        andetInput2.style.display = "none"; // Skjul inputfelt
    }
}



