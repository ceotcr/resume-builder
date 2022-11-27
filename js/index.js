var fname, lname, email, phone, address, degree, college, grade, persuing, skills = [], company, position, experience, workplace;

const popup = document.getElementById("popup");
const popmsg = document.getElementById("popmsg");

window.onload = () => {
    popmsg.innerText = "Welcome Onboard";
    displaypopup();
}
function getData(i) {
    switch (i) {
        case 1: //personal details
            fname = document.getElementById("first-name").value;
            lname = document.getElementById("last-name").value;
            email = document.getElementById("email").value;
            phone = document.getElementById("phone").value;
            address = document.getElementById("address").value;
            document.getElementById("step1").classList.add("complete");
            // change page
            break;
        case 2: //educational details
            degree = document.getElementById("degree").value;
            college = document.getElementById("college").value;
            grade = document.getElementById("grade").value;
            persuing = document.getElementById("persuing").checked;
            document.getElementById("step2").classList.add("complete");
            // change page
            break;
        case 3: //skills
            if (skillCounter < 4) {
                popmsg.innerText = "Please Add 5 Skills!"
                displaypopup();
            }
            else {
                //change page
                document.getElementById("step3").classList.add("complete");
            }
            break;
        case 4:
            company = document.getElementById("employer").value;
            position = document.getElementById("jobtitle").value;
            experience = document.getElementById("exp").value;
            workplace = document.getElementById("place").value;

            document.getElementById("step4").classList.add("complete");
            // change page
            break;
        case 5:

    }
    // console.log();
}



var skillCounter = 0;
const skill = document.getElementById("skill");
function addSkills() {
    if (skillCounter < 5) {
        skills[skillCounter] = skill.value;
        skill.value = '';
        skillCounter++;
        document.getElementById("skills").innerText = skills.toString();
    }
    else {
        popmsg.innerText = "Max Skills are 5"
        displaypopup();
    }
}

function resetSkills() {
    if (skillCounter > 0) {
        skills.pop();
        document.getElementById("skills").innerText = skills.toString();
        skillCounter--;
    }
}

function displaypopup() {
    popup.style.setProperty('--show', '1');
    popup.style.setProperty('--index', '100');
    setTimeout(() => {
        popup.style.setProperty("--show", "0");
        popup.style.setProperty('--index', '-10');
    }, 3000);
}


