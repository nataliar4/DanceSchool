const loginUsername = document.querySelector(".loginUsername")
const loginPassword = document.querySelector(".loginPassword")
const loginSubmit = document.querySelector(".loginSubmit")

loginSubmit.addEventListener("click", async (e)=>{
  try{
    e.preventDefault()
    // console.log(loginUsername.value)
    // console.log(loginPassword.value)
    const loginResponse = await fetch("http://localhost:3000/login/in", {
      method:"POST",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({email:loginUsername.value, password:loginPassword.value})
    });
    
    const jsonLoginResponse = await loginResponse.json();
    console.log(jsonLoginResponse);
  } catch(err) {
    console.log(err);
  }

})