const btns = document.querySelectorAll('.btnx');
const close = document.querySelector('.closeit');
const container = document.querySelector('.work-main-container');
//
const topic = document.querySelector('.topic-here');
const description = document.querySelector('.paragh');
const img = document.querySelector('.img-fluid');
//
const objs = [
  {
    topic: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/Snapshoot Portfolio3.jpg',
  },
  {
    topic: 'Multi Posting',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    img: 'image-resources/Snapshoot Portfolio2.jpg',
  },
  {
    topic: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    img: 'image-resources/Portfolio.png',
  },
  {
    topic: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'image-resources/Snapshoot Portfolio3.jpg',
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
