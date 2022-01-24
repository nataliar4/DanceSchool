const coursesContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const courseResponse = await fetch("http://localhost:3000/instructor/course", {
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
      const newDiv = addDiv(coursesContainer);
      const name = jsonCourseResponse[response];
      addParagraph(newDiv, name);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "courseName", "text", name);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement","http://localhost:3000/instructor/course", {name});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


