module.exports = {
  posts: [
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: idGen(), title, description });
  },
  deletePost(id) {
    const index = this.posts.findIndex(obj => {
      return obj.id == id
    })
    this.posts.splice(index, 1)
  },
  editPost(title, id){
    const index = this.posts.findIndex(obj => {
      return obj.id == id
    })
    this.posts[index].title = title
    // this.posts[index].description = description
  }
};

function idGen() {
  return Math.random().toString(36).substring(2, 9);
}
