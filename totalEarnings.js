const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/instructor/execute/function", { // change---------------------
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
      const instructorEmail = jsonSomeResponse[response]["email"];
      const earnings = jsonSomeResponse[response]["earnings"];
      addParagraph(newDiv, "instructor: "+instructorEmail); 
      addParagraph(newDiv, "Total earnings: "+earnings);
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


