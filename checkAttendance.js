const resultsDiv = document.querySelector(".found");
const searchValue = document.querySelector(".find");
const button = document.querySelector(".findButton");

function clearResults() {
  document.querySelectorAll(".coursesNames").forEach(e => e.remove());
  document.querySelectorAll(".coursesDetails").forEach(e => e.remove());
}

button.addEventListener("click", async () => {
  clearResults();
  console.log(searchValue.value);
  const searchResponse = await fetch("http://localhost:3000/instructor/course/filter", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: searchValue.value})
  })
  
  // console.log(parseCookies());
  const jsonSearchResponse = await searchResponse.json();
  console.log(jsonSearchResponse.message);
  console.log(jsonSearchResponse);
  
  if (jsonSearchResponse.message == undefined) {
    for (const result in jsonSearchResponse) {
      console.log(jsonSearchResponse[result]);
      if (jsonSearchResponse.lenght != 0){
        addName(resultsDiv, jsonSearchResponse[result]);
        addLinkCallback(resultsDiv, "Check", "check", async () =>{
          try {
            const checkResponse = await fetch("http://localhost:3000/instructor/execute/procedure", {
              method: "POST",
              mode: "cors",
              credentials: "include",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: jsonSearchResponse[result]})
            })
            const jsonCheckResponse = checkResponse.json();
            console.log(jsonCheckResponse);
          } catch (err) {
            console.log(err);
          }
        })


      } else {
        addDetails(resultsDiv, "Nie znaleziono kursu o wskazanej nazwie")
      }
    }
  }

})