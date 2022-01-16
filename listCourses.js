const coursesContainer = document.querySelector(".someContainer")

async function loadCourses() {
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
      addParagraph(newDiv, jsonCourseResponse[response]);
      addLink(newDiv, "Modify");
      addLink(newDiv, "Delete");
    }
  } catch (err) {
    console.log(err);
  }
}
loadCourses();  


