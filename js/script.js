
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
