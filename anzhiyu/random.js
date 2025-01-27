var posts=["2025/01/22/hello-world/","2025/01/27/如何搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };