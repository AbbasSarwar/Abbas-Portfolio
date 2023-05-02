const container = document.getElementById('modal');
const workContainer = document.querySelector('.work-container');
const objs = [
  {
    topic: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/1k.png',
    languages: ['html', 'css', 'javascript'],
    tags: [' CANOPY • BACK END DEV • 2015'],
  },
  {
    topic: 'Multi Posting',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    img: 'image-resources/Snapshoot Portfolio2.jpg',
    languages: ['html', 'css', 'javascript'],
    tags: [' UBER • LEADER BOARD 2015 '],
  },
  {
    topic: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR.",
    img: 'image-resources/Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    tags: [' FACEBOOK •Full STACK DEV • 2015'],
  },
  {
    topic: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/Snapshoot Portfolio3.jpg',
    languages: ['html', 'css', 'javascript'],
    tags: ['CANOPY • UBER LEADER BOARD • 2015'],
  },
];

for (let i = 0; i < objs.length; i += 1) {
  workContainer.innerHTML += `<section class="work-section">
<div class="work-section1">
    <img src="${objs[i].img}" alt="Snapshoot image">
</div>
<div class="work-section2">

    <div class="work-topic">
        <h2>${objs[i].topic}</h2>
    </div>
    <div class="work-details">
        <ul>
            <li>${objs[i].tags}</li>
        </ul>
    </div>
    <div class="work-paragraph">
        <p>${objs[i].description}</div>
    <div class="work-langs">
         <ul>${objs[i].languages.map((m) => `<li><a href="#">${m}</a></li>`).join('')}
         </ul>
    </div>
    <div class="work-button">
        <button id="btn-${[i]}"  value="See Project">See Project</button>
    </div>
</div>
</section>`;
}

for (let i = 0; i < objs.length; i += 1) {
  const btnx = document.querySelectorAll(`[id=btn-${[i]}]`);
  btnx.forEach((btx) => {
    btx.addEventListener('click', () => {
      container.style.display = 'flex';
      container.innerHTML = `
      <div class="work-main-container pop container-fluid p-5">
      <div class="row bg-light work-remain">
      <span class="closeit"><i class="fa-solid fa-xmark"></i></span>
      <div class="col-12">
          <div class="work-main-heading px-2 py-2">
              <h1 class="topic-here">${objs[i].topic}</h1>
              <ul class="list-inline flex">
              ${objs[i].tags}
              </ul>
              <img src="${objs[i].img}" class="img-fluid w-100 " alt="Logo">
          </div>
      </div>
      <div class="col-12">
          <div class="row d-flex flex-row">
              <div class="col-md-8">
                  <p class="paragh pb-2">
                  ${objs[i].description}
                  </p>
              </div>
              <div class=" col-md-4 d-flex flex-column">
                  <ul class="list-inline ul-work ">
                  ${
  objs[i].languages.map((m) => `<li class="list-inline-item badge bg-info text-primary"><a class= "text-decoration-none text-dark" href="">${m}</a></li>`).join('')
}
                      </ul>
                  <div class="d-flex flex-row col-md-10 gap-2 pb-2">
                      <a href="https://abbassarwar.github.io/Abbas-Portfolio/" class="btn btn-outline-primary text-decoration-none">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <a href="https://github.com/AbbasSarwar/Abbas-Portfolio" class="btn btn-outline-primary text-decoration-none">See Source <i class="fa-brands fa-github"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>`;
      const closeBtn = document.querySelector('.closeit');
      closeBtn.addEventListener('click', () => {
        const container1 = document.querySelector('.work-modal');
        container1.style.display = 'none';
      });
    });
  });
}
const closeBtn = document.querySelector('.closeit');
closeBtn.addEventListener('click', () => {
  const container1 = document.querySelector('.work-modal');
  container1.style.display = 'none';
});