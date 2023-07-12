
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content')
const innerTabs = document.querySelectorAll('.inner-btn')
const innerContentBenefit = document.querySelector('.benefits');
const innerContentApp = document.querySelector('.application')
console.log(innerContentBenefit);
tabs.forEach((tab, index) =>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        allContent.forEach(content=>{content.classList.remove('active')})
        allContent[index].classList.add('active')
    })
})

innerTabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        innerTabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        console.log(tab);
        console.log("Index",index );
        if (tab.innerText === 'Benefits') {
            innerContentBenefit.classList.add('active');
            innerContentApp.classList.remove('active');
          } else if (tab.innerText === 'Applications') {
            innerContentBenefit.classList.remove('active');
            innerContentApp.classList.add('active');
          }
    })
    
})
