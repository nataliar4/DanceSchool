const courseButton = document.querySelector(".coursesList")
const courseName = document.querySelector(".coursesNames")
const courseContainer = document.querySelector(".courseContainer")

function addNode(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  courseContainer.appendChild(newParagraph);
  newParagraph.classList.add("coursesNames");
}
async function loadCourses() {
  try {
    const courseResponse = await fetch("http://localhost:3000/course", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonCourseResponse = await courseResponse.json();
    for (const response in jsonCourseResponse) {
      console.log(jsonCourseResponse[response]["name"]);
      addNode(jsonCourseResponse[response]["name"]);
    }
  } catch (err) {
    console.log(err);
  }
}
loadCourses();  


courseName.addEventListener("click", async e => {
  try {
    e.preventDefault()
    const nameResponse = await fetch("http://localhost:3000/course", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonNameResponse = await nameResponse.json();
    console.log(jsonNameResponse);
  } catch (err) {
    console.log(err);
  }
})
