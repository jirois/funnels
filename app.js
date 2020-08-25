// ************ set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// *********** close link *************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  
  const lineHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
 
  if (containerHeight == 0) {
    linksContainer.style.height = `${lineHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }

})

// ************** smooth scroll *******************
const navbar = document.getElementById('nav');
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();

    // scroll to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    

    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position
    })
    
    linksContainer.style.height = 0;

  })
})

// *********** toplink **************

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll',  function() {
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight)

  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// *********** accordion ************
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  
  btn.addEventListener('click', function(){
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text")
      }
    })

    question.classList.toggle('show-text')
  })

})