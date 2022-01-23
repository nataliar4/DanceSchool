function addDiv(container) {
  var newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add("oneElement");
  return newDiv;
}

function addParagraph(element, txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  element.appendChild(newParagraph);
  newParagraph.classList.add("someDetails");
}
function clearDiv() {
  const container = document.querySelector(".someContainer")
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function addLink(element, txt, className, endpoint, reqData) {
  var newLink = document.createElement("button");
  var text = document.createTextNode(txt);
  newLink.appendChild(text);
  element.appendChild(newLink);
  newLink.classList.add(className);



  
  newLink.addEventListener("click", async () => {
    console.log(newLink.innerHTML);
    if (newLink.innerHTML == "Delete") {
      console.log(reqData);
      try {
        const assignmentResponse = await fetch(endpoint, {
          method:"DELETE",
          mode:"cors",
          credentials:"include",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify(reqData)
        });
        const jsonAssignmentResponse = await assignmentResponse.json();
        console.log(jsonAssignmentResponse);
        clearDiv();
        loadList();
      } catch (err) {
        console.log(err);
      }
    }
  })
}

