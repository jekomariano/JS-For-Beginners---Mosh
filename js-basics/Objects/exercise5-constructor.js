const blogPost = {
  title: "This is the title",
  body: "this is the body",
  author: "Author Author",
  views: 125,
  comments: [
    { author: "user1", body: "amazing!" },
    { author: "user2", body: "bravo!" },
  ],
  isLive: true,
};

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const newPost = new Post("title", "body", "author");
console.log(newPost);

// ============= ANSWER FROM TUTORIALS ============ \\

// same as my answer
