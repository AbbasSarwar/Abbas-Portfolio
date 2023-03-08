const btns = document.querySelectorAll('.btnx');
const close = document.querySelector('.closeit');
const container = document.querySelector('.work-main-container');
const topic = document.querySelector('.topic-here');
const description = document.querySelector('.paragh');
const img = document.querySelector('.img-fluid');
const workContainer = document.querySelector('.work-container');
const objs = [
  {
    topic: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/Snapshoot Portfolio3.jpg',
    languages: ['html', 'css', 'javascript', 'Ruby on Rails'],
    tags: [' CANOPY • BACK END DEV • 2015'],
  },
  {
    topic: 'Multi Posting',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    img: 'image-resources/Snapshoot Portfolio2.jpg',
    languages: ['html', 'css', 'javascript', 'Ruby on Rails'],
    tags: [' UBER • LEADER BOARD 2015 '],
  },
  {
    topic: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    img: 'image-resources/Portfolio.png',
    languages: ['html', 'css', 'javascript', 'Ruby on Rails'],
    tags: [' FACEBOOK •Full STACK DEV • 2015'],
  },
  {
    topic: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/Snapshoot Portfolio3.jpg',
    languages: ['html', 'css', 'javascript', 'Ruby on Rails'],
    tags: ['CANOPY • UBER LEADER BOARD • 2015'],
  },
];

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', () => {
    container.classList.toggle('pop');
    if (`btns${i}` === true) {
      topic.innerHTML = objs[i].topic;
      description.innerHTML = objs[i].description;
      img.src = objs[i].img;
    }
  });
}
close.addEventListener('click', () => {
  container.classList.remove('pop');
});

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
         <ul>
        <li><a href="#">${objs[i].languages[i]}</a></li>
        <li><a href="#">${objs[i].languages[i]}</a></li>
        <li><a href="#">${objs[i].languages[i]}</a></li>
         </ul>
    </div>
    <div class="work-button">
        <button class="btnx btn0"  value="See Project">See Project</button>
    </div>
</div>
</section>`;
}