const loginUsername = document.querySelector(".loginUsername")
const loginPassword = document.querySelector(".loginPassword")
const loginSubmit = document.querySelector(".loginSubmit")
const logoutButton = document.querySelector(".logoutButton")
const loginForm = document.querySelector(".LogIn")
const logoutForm = document.querySelector(".LogOut")

function parseCookies() {
  const result = {};
  document.cookie.split("; ").forEach(cookie => {
    const [name,value] = cookie.split("=");
    result[name] = value;
  })
  return result;
}

function displayLogin() {
  loginForm.classList.add("inactive");
  logoutForm.classList.add("inactive");
  if(parseCookies().userId) {
    logoutForm.classList.remove("inactive");
  } else {
    loginForm.classList.remove("inactive");
  }
}

loginSubmit.addEventListener("click", async (e)=>{
  try{
    e.preventDefault()
    // console.log(loginUsername.value)
    // console.log(loginPassword.value)
    console.log(document.cookie);
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
    console.log(parseCookies());
    displayLogin();
    const jsonLoginResponse = await loginResponse.json();
    console.log(jsonLoginResponse);
  } catch(err) {
    console.log(err);
  }

})
logoutButton.addEventListener("click", async e => {
  e.preventDefault();
  const logoutResponse = await fetch("http://localhost:3000/login/out", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(parseCookies());
  displayLogin();
  const jsonLogoutResponse = await logoutResponse.json();
  console.log(jsonLogoutResponse);
})