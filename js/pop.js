const container = document.getElementById('modal');
const workContainer = document.querySelector('.work-container');
const objs = [
  {
    topic: 'Movies API',
    description: 'This is a movie and TV show listing project that retrieves all data from an API, and allows you to like and comment on them.',
    img: 'image-resources/2.PNG',
    languages: ['html', 'css', 'javascript', 'Webpack', 'API'],
    tags: [' CANOPY • BACK END DEV • 2015'],
    src: 'https://abbassarwar.github.io/Shows/dist/',
    srcCode: 'https://github.com/AbbasSarwar/Shows'
  },
  {
    topic: 'To-Do Listing',
    description: 'A To-do listing app where you can add, remove and edit items as well helps in dailylife.',
    img: 'image-resources/1.PNG',
    languages: ['html', 'css', 'javascript','Webpack'],
    tags: [' UBER • LEADER BOARD 2015 '],
    src:'https://abbassarwar.github.io/ToDo/dist/',
    srcCode:'https://github.com/AbbasSarwar/ToDo'
  },
  {
    topic: 'xGen Conference',
    description: "This is a simple web application that provides updates and details about a particular community's news. It also has the potential to attach programs in the future.",
    img: 'image-resources/3.png',
    languages: ['html', 'css', 'javascript'],
    tags: [' FACEBOOK •Full STACK DEV • 2015'],
    src:'https://abbassarwar.github.io/XGen-Conference/',
    srcCode:'https://github.com/AbbasSarwar/XGen-Conference'
  },
  {
    topic: 'Uber Navigation',
    description: 'It can update score to the board by name fetching from API.',
    img: 'image-resources/4.png',
    languages: ['html', 'css', 'javascript'],
    tags: ['CANOPY • UBER LEADER BOARD • 2015'],
    src:'https://abbassarwar.github.io/Leaderboard/src/',
    srcCode:'https://github.com/AbbasSarwar/Leaderboard'
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
                      <a href="${objs[i].src}" class="btn btn-outline-primary text-decoration-none">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <a href="${objs[i].srcCode}" class="btn btn-outline-primary text-decoration-none">See Source <i class="fa-brands fa-github"></i></a>
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