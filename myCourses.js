const coursesContainer = document.querySelector(".someContainer")


function addContainer(container, className) {
  var newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add(...className.split(" "));
  return newDiv;
}
function addName(container, txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  container.appendChild(newParagraph);
  newParagraph.classList.add("courseName");
}

function addDetails(container,txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  container.appendChild(newParagraph);
  newParagraph.classList.add("coursesDetails");
}
function displayElement(nazwa, moreDiv, recordingDiv) {
  moreDiv.classList.add("inactive");
  recordingDiv.classList.add("inactive");
  if (nazwa == "More") {
    moreDiv.classList.remove("inactive");
  } else if (nazwa == "Recording") {
    recordingDiv.classList.remove("inactive");
  }
}
function addButton(element, txt, className, moreDiv, recordingDiv) {
  var newButton = document.createElement("button");
  var text = document.createTextNode(txt);
  newButton.appendChild(text);
  element.appendChild(newButton);
  newButton.classList.add(className);

  newButton.addEventListener("click", () => {
    displayElement(txt, moreDiv, recordingDiv);
  })
}

async function loadList() {
  try {
    const courseResponse = await fetch("http://localhost:3000/participant/course", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonCourseResponse = await courseResponse.json();
    // console.log(jsonCourseResponse);
    for (const response in jsonCourseResponse) {
// nazwa kursu i przyciski
      const newDiv = addContainer(coursesContainer, "oneElement");
      const byName = jsonCourseResponse[response];
      addName(newDiv, byName);

// fetch /course/one
        const moreResponse = await fetch("http://localhost:3000/participant/course/one", {
          method:"POST",
          mode:"cors",
          credentials:"include",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({byName})
        });
        const jsonMoreResponse = await moreResponse.json();
        // console.log(jsonMoreResponse);
// fetch /recording
        const recordingResponse = await fetch("http://localhost:3000/participant/course/recording", {
          method:"POST",
          mode:"cors",
          credentials:"include",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({byName})
        });
        const jsonRecordingResponse = await recordingResponse.json();
        // console.log(jsonRecordingResponse);

// more details container
        const moreDiv = addContainer(newDiv, "details inactive");
        addName(moreDiv, "Details: ")
        for (const detail in jsonMoreResponse) {
          // console.log(jsonMoreResponse[detail]);
          addDetails(moreDiv, jsonMoreResponse[detail]);
        }
// recordings container
        const recordingDiv = addContainer(newDiv, "recordings inactive");
        addName(recordingDiv, "Recordings: ");
        for (const record in jsonRecordingResponse) {
          console.log(jsonRecordingResponse[record]);
          addDetails(recordingDiv, "Name: "+jsonRecordingResponse[record].name);
          addSource(recordingDiv, jsonRecordingResponse[record]);
        }

        addButton(newDiv, "More", "more", moreDiv, recordingDiv);
        addButton(newDiv, "Recording", "recording", moreDiv, recordingDiv);
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


