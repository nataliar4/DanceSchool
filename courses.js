const courseButton = document.querySelector(".coursesList")
const courseContainer = document.querySelector(".courseContainer")

function addNode(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  courseContainer.appendChild(newParagraph);
  newParagraph.classList.add("coursesNames");
}

function addDetails(txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  courseContainer.appendChild(newParagraph);
  newParagraph.classList.add("coursesDetails");
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
    console.log(jsonCourseResponse);
    for (const response in jsonCourseResponse) {
      for (const detail in jsonCourseResponse[response]) {
        if (detail == "name") {
          addNode(jsonCourseResponse[response][detail]);
        } else if (detail == "startTime"){
          var date = new Date(jsonCourseResponse[response][detail]).toLocaleString('pl-PL');
          addDetails(detail+": "+date);
        } else {
          addDetails(detail+": "+jsonCourseResponse[response][detail]);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}
loadCourses();  


