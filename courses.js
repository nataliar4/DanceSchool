const courseButton = document.querySelector(".coursesList")
const courseName = document.querySelector(".courseName")

function addNode(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  document.getElementById("first").appendChild(newParagraph);
  newParagraph.className += "courseNames";
}

courseButton.addEventListener("click", async e => {
  try {
    e.preventDefault()
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
    for (var each in jsonCourseResponse) {
      console.log(jsonCourseResponse[each]["name"]);
      addNode(jsonCourseResponse[each]["name"]);
    }
  } catch (err) {
    console.log(err);
  }
})

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
