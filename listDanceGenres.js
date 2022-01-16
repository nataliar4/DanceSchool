const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/danceGenre", {
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
      addParagraph(newDiv, jsonSomeResponse[response]["name"]);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement");
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  


