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
    console.log(jsonAssignmentResponse);
    for (const response in jsonAssignmentResponse) {
      const newDiv = addDiv(assignmentsContainer);
      const instructorEmail = jsonAssignmentResponse[response].instructor;
      const courseName = jsonAssignmentResponse[response].course;
      addParagraph(newDiv, courseName);
      addParagraph(newDiv, "instructor: "+instructorEmail);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/instructor/assignment", {instructorEmail, courseName});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  






