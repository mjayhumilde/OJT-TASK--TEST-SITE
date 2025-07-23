document.addEventListener("DOMContentLoaded", function () {
  let clients = [
    { image: `<img class="w-25" src="./images/homepage/logo1.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo2.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo3.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo4.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo5.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo6.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo7.png" alt="" />` },
    { image: `<img class="w-25" src="./images/homepage/logo8.png" alt="" />` },
  ];

  let ourTeam = [
    {
      image: ``,
      name: "Kier Nino",
      status: "NOOB",
    },
    {
      image: ``,
      name: "John Carlo",
      status: "SILVER BOY",
    },
    {
      image: ``,
      name: "Marky Humilde",
      status: "IMMO BOY",
    },
    {
      image: ``,
      name: "Karl Magno",
      status: "REDFLAG",
    },
  ];

  let services = [
    {
      icon: `<i class="fs-5 icon-ball fa-solid fa-basketball"></i>;`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
    {
      icon: `<i class="fs-5 icon-docs fa-regular fa-file-lines"></i>`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
    {
      icon: `<i class="fs-5 icon-speed fa-solid fa-gauge-simple-high"></i>`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
    {
      icon: `<i class="fs-5 icon-layer fa-solid fa-layer-group"></i>`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
    {
      icon: `<i class="fs-5 icon-tv fa-solid fa-tv"></i>`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
    {
      icon: `<i class="fs-5 icon-bridge fa-solid fa-bridge"></i>`,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam tenetur obcaecati invedita, aperiam dolorem molestias. Corporis, accusamus ipsa?",
    },
  ];

  let servicesHTML = "";
  let clientsHTML = "";
  let ourTeamHTML = "";

  // clients section
  clients.forEach((item) => {
    clientsHTML += `
      <div class="col col-12 col-sm-6 col-md-3 border p-2">
          ${item.image}
      </div>
    `;
  });

  // our team section
  ourTeam.forEach((item) => {
    ourTeamHTML += `
      <div class="col">
          <div class="shadow-sm text-center">
              <img class="card-image w-100"
                  src="https://i.pinimg.com/236x/28/29/94/2829941260500a1cd3bdd5127876c271.jpg"
                  alt="Team Member">
              <div class="py-3">
                  <h6 class="fw-bold mb-0">${item.name}</h6>
                  <p class="fs-6 text-muted mb-0">${item.status}</p>
              </div>
          </div>
      </div>
    `;
  });

  const teamContainer = document.querySelector(".js-our-team-container");
  const clientsContainer = document.querySelector(".js-clients-card-container");

  if (teamContainer) teamContainer.innerHTML = ourTeamHTML;
  if (clientsContainer) clientsContainer.innerHTML = clientsHTML;

  console.log("Connected");

  // service section
  services.forEach((item) => {
    servicesHTML += `
            <div class="col col-12 col-md-6 col-lg-4 p-5 shadow-sm bg-white">
                ${item.icon}
                <h5>${item.title}</h5>
                <p class="text-muted">${item.description}</p>
            </div>
          `;
  });
  document.querySelector(".js-sevices-container").innerHTML = servicesHTML;
});
