function login() {
    const unameEl = document.querySelector("#uname");
    const passE1 = document.querySelector("#password");
    localStorage.setItem("userName", unameEl.value);
    localStorage.setItem("password", passE1.value);
    window.location.href = "home.html";
  }