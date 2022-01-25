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
        window.alert(jsonAssignmentResponse.message);
        clearDiv();
        loadList();
      } catch (err) {
        console.log(err);
      }
    }
  })
}

function addSource(element, url) {
  var newLink = document.createElement("a");
  var text = document.createTextNode("Source");
  newLink.appendChild(text);
  element.appendChild(newLink);
  newLink.href = url;
  newLink.classList.add("someDetails");
}

function addLabel(container,text) {
  var newLabel = document.createElement("label");
  var text = document.createTextNode(text);
  newLabel.appendChild(text);
  container.appendChild(newLabel);
}

function addInput(container, className, inputType, holder,index, step) {
  var newInput = document.createElement("input");
  newInput.className = (className);
  newInput.type = inputType;
  newInput.value = holder;
  newInput.step = step;
  container.appendChild(newInput);
  newInput.id = `${className}-input-${index}`

  return newInput;
}
function addCheckbox(container, className, inputType, holder,index, step) {
  var newInput = document.createElement("input");
  newInput.className = (className);
  newInput.type = inputType;
  newInput.step = step;
  newInput.checked = holder;
  container.appendChild(newInput);
  newInput.id = `${className}-input-${index}`

  return newInput;
}
function addLinkCallback(element, txt, className, callback) {
  var newLink = document.createElement("button");
  var text = document.createTextNode(txt);
  newLink.appendChild(text);
  element.appendChild(newLink);
  newLink.classList.add(className);

  newLink.addEventListener("click", callback);
}