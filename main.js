const username=document.getElementById('username')
const login=document.getElementById('login')

function goToRegistration() {
    location.href = "./registration.html";
  }

function register(){
    localStorage.setItem('username', String(username.value));
    location.href='./login.html';
}

function Login(){
    if(login.value===localStorage.getItem('username')){
        location.href = './home.html'
    }
    else{
        location.href='./error.html'
    }
}

function getLocalStorage() {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  };
  
  
  
function addToLocalStorage(id, username) {
    const users = { id, username };
    const items = getLocalStorage();
    items.push(users);
    localStorage.setItem('users', JSON.stringify(items));
  }