const assignmentsContainer = document.querySelector(".someContainer")

async function loadAssignments() {
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
      addParagraph(newDiv, jsonAssignmentResponse[response]["course"]);
      addParagraph(newDiv, "instructor: "+jsonAssignmentResponse[response]["instructor"]);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement");
    }
  } catch (err) {
    console.log(err);
  }
}
loadAssignments();  

const deleteButton = document.querySelector(".deleteElement");
deleteButton.addEventListener("click", async () => {
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
  } catch (err) {
    console.log(err);
  }
})




