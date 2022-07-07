module.exports = {
  posts: [
    {
      id: "sauhdusad",
      title: "Teste de Post",
      description: "Descrição teste",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: idGen(), title, description });
  },
};

function idGen() {
  return Math.random().toString(36).substring(2, 9);
}
