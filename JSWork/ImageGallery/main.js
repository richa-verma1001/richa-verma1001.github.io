console.log('Fetch images');

document.addEventListener('DOMContentLoaded', init);

function init() {

  let users;

  function addListeners(event) {
    console.log('Event listeners being added');
    let btn = document.getElementById('_getImages');
    btn.addEventListener('click', getImages );

    let sortBtn = document.getElementById('_sortUsers');
    sortBtn.addEventListener('click', sortUsers );

    let clearBtn = document.getElementById('_clearUsers');
    clearBtn.addEventListener('click', clearUsers);
    console.trace('All listeners added');

  }

  function getImages() {
    // send fetch request
    console.log('Get images here');
    let url = "https://api.github.com/users";
    console.log(`Fetch url ${url}`);
    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(json){
        users = json;
        parseUsers(json);
      }).catch(function(error){
        console.log(error);
      });
  }

  function parseUsers(users) {
    clearError();
    users.forEach(function(user){
      createUserNode(user);
    });
  }

  function createUserNode(user){
    console.log(user);
    let {avatar_url, login} = user;
    let content = `<div class="card">
        <img class="card-img-top" src="${avatar_url}" alt="Card image cap">
        <div class="card-block"> ${login} </div>
      </div>`;
    let node = document.createElement('li');
    node.innerHTML = content;
    node.className = "list-group-item";
    document.getElementById('userlist').appendChild(node);

  }

  function clearError() {
    let messageNode = document.getElementById('message');
    messageNode.style.cssText = "display:none";
  }

  function clearUsers() {
    console.log('clear existing user list');
    document.getElementById('userlist').innerHTML = "";
  }

  function sortUsers() {
    console.log('sortUsers');
    if(!users || document.getElementById('userlist').children.length == 0 )
      handleError();
    else {
      users.sort(function(first, second){
        if(first.login.charAt[0] > second.login.charAt[0])
          return 1;
        else
          return -1;
      })
      console.log(users);
      clearUsers();
      users.forEach((user)=>createUserNode(user));
    }
  }

  function handleError() {
    console.log('Going to handle error');
    let messageNode = document.getElementById('message');
    messageNode.innerHTML = 'Warning! There are no users loaded';
    messageNode.style.cssText = "";
  }

  addListeners();

}
