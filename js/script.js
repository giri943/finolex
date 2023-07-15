
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        allContent.forEach(content => { content.classList.remove('active') })
        allContent[index].classList.add('active')
    })
})

allContent.forEach((content) => {
    const innerTabs = content.querySelectorAll('.inner-btn');
    const innerContentBenefit = content.querySelector('.benefits');
    const innerContentApp = content.querySelector('.application');

    innerTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            innerTabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');

            if (tab.innerText === 'Benefits') {
                innerContentBenefit.classList.add('active');
                innerContentApp.classList.remove('active');
            } else if (tab.innerText === 'Applications') {
                innerContentBenefit.classList.remove('active');
                innerContentApp.classList.add('active');
            }
        });
    });
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(item => {
  const heading = item.querySelector('.accordion-heading');
  const content = item.querySelector('.accordion-content');

  heading.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      accordions.forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-heading').classList.remove('active');
        acc.querySelector('.accordion-content').classList.remove('active');
      });

      item.classList.add('active');
      heading.classList.add('active');
      content.classList.add('active');
    } else {
      item.classList.remove('active');
      heading.classList.remove('active')
      content.classList.remove('active');
    }
  });
});

// const faqAccordions = document.querySelectorAll('.faq-accordion-item')
// faqAccordions.forEach(accordion =>{
//     const heading = accordion.querySelector('.faq-accordion-title')
//     const content = accordion.querySelector('.faq-accordion-content')
//     const faqImage = accordion.querySelector('.faq-img')
    
//     heading.addEventListener('click', ()=>{
//             faqAccordions.forEach(acc =>{
//                 acc.classList.remove('active')
//                 acc.querySelector('.faq-accordion-title').classList.remove('active')
//                 acc.querySelector('.faq-accordion-content').classList.remove('active')
//                 acc.querySelector('.faq-img').classList.remove('active')
//                 let image = acc.querySelector('.faq-img img')
//                 console.log(image);
//                 image.src = './assets/plus.svg'
//             })
//             accordion.classList.add('active')
//             heading.classList.add('active')
//             content.classList.add('active')
//             faqImage.classList.add('active')
//             let image = faqImage.querySelector('.faq-img img')
//             image.src='./assets/cross.svg' 
//     })
// })
const faqAccordions = document.querySelectorAll('.faq-accordion-item');

faqAccordions.forEach((accordion) => {
  const heading = accordion.querySelector('.faq-accordion-title');
  const content = accordion.querySelector('.faq-accordion-content');
  const faqImage = accordion.querySelector('.faq-img');

  heading.addEventListener('click', () => {
    const isActive = accordion.classList.contains('active');

    faqAccordions.forEach((acc) => {
      acc.classList.remove('active');
      acc.querySelector('.faq-accordion-title').classList.remove('active');
      acc.querySelector('.faq-accordion-content').classList.remove('active');
      acc.querySelector('.faq-img').classList.remove('active');
      const image = acc.querySelector('.faq-img img');
      image.src = './assets/plus.svg';
    });

    if (!isActive) {
      accordion.classList.add('active');
      heading.classList.add('active');
      content.classList.add('active');
      faqImage.classList.add('active');
      const image = faqImage.querySelector('.faq-img img');
      image.src = './assets/cross.svg';
    }
  });
});
