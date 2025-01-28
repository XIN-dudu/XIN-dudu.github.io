var posts=["2025/01/22/hello-world/","2025/01/28/博客搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };