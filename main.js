
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => renderUsers(data))
.catch(error => console.error('Ошибка:', error));


function renderUsers(users) {
const container = document.getElementById('user-container');
container.innerHTML = '';

users.forEach(user => {
 
  const userDiv = document.createElement('div');
  userDiv.classList.add('user-card');

 
  userDiv.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
  `;

  
  container.appendChild(userDiv);
});
}