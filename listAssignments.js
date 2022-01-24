const assignmentsContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const assignmentResponse = await fetch("http://localhost:3000/instructor/assignment", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonAssignmentResponse = await assignmentResponse.json();
    for (const response in jsonAssignmentResponse) {
      const newDiv = addDiv(assignmentsContainer);
      const instructorEmail = jsonAssignmentResponse[response].instructor;
      const courseName = jsonAssignmentResponse[response].course;
      addParagraph(newDiv, courseName);
      addParagraph(newDiv, "instructor: "+instructorEmail);
      addLabel(newDiv, "Instructor: ");
      addInput(newDiv, "instructorEmail", "email", instructorEmail, response);
      addLabel(newDiv,"Course: ");
      addInput(newDiv, "courseName", "text", courseName, response);
      
      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const instructorInput = document.querySelector(`#instructorEmail-input-${response}`);
        const courseInput = document.querySelector(`#courseName-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/instructor/assignment/form/edit", {
              method:"POST",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({instructorEmail: instructorInput.value, courseName: courseInput.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            console.log(jsonAssignmentResponse);
          } catch (err) {
            console.log(err);
          }
        
      });

      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/instructor/assignment", {instructorEmail, courseName});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  







