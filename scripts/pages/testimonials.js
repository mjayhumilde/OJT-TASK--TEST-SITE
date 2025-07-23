let testemonials = [
  {
    name: "Marky Humilde",
    profile: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nstASo8BdadWs3X-ji8e1O0hd5AMByZdGQ&s`,
    jobPosition: "Web Developer",
    review:
      "ifiLorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur facere molestiae earum, totam deleniti, asperiores laudantium iure possimus aspernatur quaerat dignissimos delectus. Suscipit ipsam unde pariatur aperiam vel possimus.s",
  },
  {
    name: "Jame Harden",
    profile: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s`,
    jobPosition: "Anbilibabol Basketball",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur facere molestiae earum, totam deleniti, asperiores laudantium iure possimus aspernatur quaerat dignissimos delectus. Suscipit ipsam unde pariatur aperiam vel possimus.",
  },
  {
    name: "John Carlo",
    profile: `https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=`,
    jobPosition: "Pido",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur facere molestiae earum, totam deleniti, asperiores laudantium iure possimus aspernatur quaerat dignissimos delectus. Suscipit ipsam unde pariatur aperiam vel possimus.",
  },
  {
    name: "Kier Nino",
    profile: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s`,
    jobPosition: "Noob Boi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur facere molestiae earum, totam deleniti, asperiores laudantium iure possimus aspernatur quaerat dignissimos delectus. Suscipit ipsam unde pariatur aperiam vel possimus.",
  },
  {
    name: "Karl Abnoy",
    profile: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdtuk4n5eHPxS9XB4BGI0yvQVqRsvakAOmg&s`,
    jobPosition: "Red Flag",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur facere molestiae earum, totam deleniti, asperiores laudantium iure possimus aspernatur quaerat dignissimos delectus. Suscipit ipsam unde pariatur aperiam vel possimus.",
  },
];

let testemonialHTML = "";

testemonials.forEach((item) => {
  testemonialHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="p-5 bg-white shadow rounded">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <img src="${item.profile}"
                        class="w-25 rounded-circle" alt="Mjay Humilde profile">
                    <div>
                        <h6 class="fw-bold mb-0">${item.name}</h6>
                        <span class="d-block fw-normal text-muted">${item.jobPosition}</span>
                    </div>
                </div>
                <p class="mb-0 text-muted fst-italic">
                    <i class="fa-solid fa-quote-left me-2"></i>
                   ${item.review}
                    <i class="fa-solid fa-quote-right ms-2"></i>
                </p>
            </div>
        </div>
    `;
});

document.querySelector(".js-testimonial-container").innerHTML = testemonialHTML;
