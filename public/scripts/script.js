document.addEventListener("DOMContentLoaded", () => {
  render();
});

function render() {
  fetch("http://localhost:3000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";

      let posts = JSON.parse(json);
      posts.forEach((elem) => {
        let postElement = 
        ` <div id=${elem.id} class="card mb-4">
            
            <div class="card-header">
              <h5 class="card-title">${elem.title}</h5>
              <div>
              <button onclick="deletePost(${elem.id})" class="btn btn-danger">X</button>
              <button onclick="editPost(${elem.id})" class="btn btn-primary">EDIT</button>
              </div>
            </div>
   
            <div class="card-body">
              <div class="card-text">${elem.description}</div>
            </div>
          
          </div>`;
        postElements += postElement;
      });

      document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let post = {
    title,
    description,
  };

  const options = { 
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post)
  };

  fetch("http://localhost:3000/api/new", options).then(res=>{
    render();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  });
}

function deletePost(postId){
  let cardId = postId.id
  let post = {
    id: cardId
  }
  const options = {
    method: "DELETE",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post)
  }
  fetch("http://localhost:3000/api/delete", options).then(res=>{
    render();
  })
}

function editPost(postId){
  let newTitle = window.prompt("Novo título")
  let cardId = postId.id
  
  let changes = {
    title: newTitle,
    description,
    id: cardId
  }
  
  const options = {
    method: "PATCH",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(changes)
  }
  fetch("http://localhost:3000/api/patch", options).then(res=>{
    render();
  })
}