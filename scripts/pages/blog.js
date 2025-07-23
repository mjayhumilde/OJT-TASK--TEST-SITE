document.addEventListener("DOMContentLoaded", function () {
  let blogs = [
    {
      image: `https://plus.unsplash.com/premium_photo-1682432982609-578969ff8b75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fHww`,
      name: "Marky",
      date: "July, 1, 22025",
      comments: 12,
    },
    {
      image: `https://images.unsplash.com/photo-1749740616597-90f471c24580?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Kallo",
      date: "July, 15, 22025",
      comments: 32,
    },
    {
      image: `https://images.unsplash.com/photo-1752743092036-1bc260931bd5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Nubee",
      date: "July, 13, 22025",
      comments: 5,
    },
    {
      image: `https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Kekeyra",
      date: "July, 23, 22025",
      comments: 53,
    },
  ];

  let blogHTML = "";

  blogs.forEach((item) => {
    blogHTML += `
         <div class="row">
            <div class="card border-0 shadow rounded-0 p-0">
            <img
                src="${item.image}"
                alt="" class="card-img-top rounded-0" />
            <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <div class="d-flex gap-3 text-muted" style="font-size: 12px">
                <div>
                    <i class="fa-solid fa-user"></i> <span>${item.name}</span>
                </div>
                <div>
                    <i class="fa-regular fa-clock"></i>
                    <span>${item.date}</span>
                </div>
                <div>
                    <i class="fa-solid fa-comment-dots"></i>
                    <span>${item.comments} comments</span>
                </div>
                </div>

                <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem itaque, magni quidem et ipsam quae fugiat
                expedita assumenda. Officia temporibus pariatur dolores
                dolorem minus explicabo molestiae aut. Ex, distinctio
                blanditiis!
                </p>
                <div class="d-flex justify-content-end">
                <a href="single-blog.html">
                    <button class="py-2 px-4 bg-success border-0 rounded text-white">
                    Read More
                    </button>
                </a>
                </div>
            </div>
            </div>
        </div>
    `;
  });

  document.querySelector(".js-blog-card-container").innerHTML = blogHTML;

  console.log("connected");
});
