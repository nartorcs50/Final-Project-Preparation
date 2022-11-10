// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector('.user-list')

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
};
main();

// This is how you reroute to a new page, also to remember the 'id' you've clicked */
function showUserPosts(id) {
    // how the "localStorage.setItem" works; The first key is the 'string ("id")' and the second key is the value',id' .
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}


function userHTML(user) {
    return  `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
      <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="${user.website}" target="_blank">
        ${user.website}</a></p>
    </div>
  </div>`;
}
