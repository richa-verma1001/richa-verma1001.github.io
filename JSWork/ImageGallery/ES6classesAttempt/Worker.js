class Worker {

  constructor() {
    console.log('Event listeners being added');
    let btn = document.getElementById('_getImages');
    btn.addEventListener('click', this.getImages );
  }

  getImages() {
    console.log('Get images here');
    let url = "https://api.github.com/users";
    console.log(`Fetch url ${url}`);
    fetch(url)
      .then(function(response){
        return response.json();
      }).then((json)=>{Worker.parseUsers(json)})
        .catch(function(error){
        console.log(error);
      });
  }

  parseUsers(users) {
    users.forEach(function(user){
      this.createUserNode(user);
    });
  }

  createUserNode(user){
    let {avatar_url, login} = user;
    console.log(avatar_url);
    console.log(login);
    let content = `<div class="card">
        <img class="card-img-top" src="${avatar_url}" alt="Card image cap">
        <div class="card-block"> ${login} </div>
      </div>`;
    let node = document.createElement('li');
    node.innerHTML = content;
    node.className = "list-group-item";
    document.getElementById('userlist').appendChild(node);
  }

}

export {Worker};
