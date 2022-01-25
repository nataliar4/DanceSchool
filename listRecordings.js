const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/instructor/recording", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonSomeResponse = await someResponse.json();
    console.log(jsonSomeResponse);
    for (const response in jsonSomeResponse) {
      const newDiv = addDiv(someContainer);
      const recId = jsonSomeResponse.recordingId;
      const name = jsonSomeResponse[response]["name"];
      const source = jsonSomeResponse[response]["source"];
      const course = jsonSomeResponse[response]["course"];

      // const rResponse = await fetch("http://localhost:3000/instructor/recording/form/edit", {
      //   method:"POST",
      //   mode:"cors",
      //   credentials:"include",
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify({byName: name, courseName: course})
      // });

      addParagraph(newDiv, name);
      addSource(newDiv, source);
      addParagraph(newDiv, course);
      addLabel(newDiv, "Recording name: ");
      addInput(newDiv, "recName", "text", name, response);
      addLabel(newDiv, "Source: ");
      addInput(newDiv, "source", "text", source, response);
      addLabel(newDiv, "Course name: ");
      addInput(newDiv, "course", "text", course, response);

      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const recName = document.querySelector(`#recName-input-${response}`);
        const sourceIn = document.querySelector(`#source-input-${response}`);
        const courseIn = document.querySelector(`#course-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/instructor/recording/", {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({recordingId: recId, name: recName.value, 
                source: sourceIn.value, courseName: courseIn.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            console.log(jsonAssignmentResponse);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement");
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


