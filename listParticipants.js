const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/instructor/participant", {
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
      const email = jsonSomeResponse[response]["email"];
      addParagraph(newDiv, jsonSomeResponse[response]["name"]+" "+jsonSomeResponse[response]["surname"]);
      addParagraph(newDiv, email);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/instructor/participant", {email});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


