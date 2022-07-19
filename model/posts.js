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
  }
};

function idGen() {
  return Math.random().toString(36).substring(2, 9);
}
