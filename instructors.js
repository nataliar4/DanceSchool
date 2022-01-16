const instructorsNames = document.querySelector(".instructorsNames")
const instructorsContainer = document.querySelector(".instructorsContainer")

function addInstructor(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  instructorsContainer.appendChild(newParagraph);
  newParagraph.classList.add("instructorsNames");
}
function addDance(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  instructorsContainer.appendChild(newParagraph);
  newParagraph.classList.add("instructorsDances");
}

async function loadInstrutors() {
  try {
    const instructorResponse = await fetch("http://localhost:3000/instructors", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonInstructorResponse = await instructorResponse.json();
    for (const response in jsonInstructorResponse) {
      console.log(jsonInstructorResponse[response]);
      addInstructor(jsonInstructorResponse[response]["name"]+" "+jsonInstructorResponse[response]["surname"]);

      for (const dance in jsonInstructorResponse[response]["qualifications"]) {
        addDance(jsonInstructorResponse[response]["qualifications"][dance])
      }
    }
  } catch (err) {
    console.log(err);
  }
}
loadInstrutors();  