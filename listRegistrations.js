const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/instructor/registration", {
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
      const particip = jsonSomeResponse[response]["participant"];
      const course = jsonSomeResponse[response]["course"];
      const attendance = jsonSomeResponse[response]["attendance"];
      const registId = jsonSomeResponse[response]["registrationId"];
      addParagraph(newDiv, particip);
      addParagraph(newDiv, course);
      // addParagraph(newDiv, "Attendance: "+attendance);
      addLabel(newDiv, "Attendance: ");
      addInput(newDiv, "attend", "number", attendance, response);
      addLabel(newDiv, "Participant email: ");
      addInput(newDiv, "participName", "email", particip, response);
      addLabel(newDiv, "Course name: ");
      addInput(newDiv, "course", "text", course, response);

      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const partName = document.querySelector(`#participName-input-${response}`);
        const attendIn = document.querySelector(`#attend-input-${response}`);
        const courseIn = document.querySelector(`#course-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/instructor/registration/", {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({registrationId: registId, attendance: attendIn.value, 
                participantEmail: partName.value, courseName: courseIn.value})
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





