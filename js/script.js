// owl corusel 
// $('.projects-carousel').owlCarousel({
//   dots: true,
//   nav: false,
//   loop: true,
//   autoplay:true,
//   smartSpeed: 700,
//   responsive: {
//       0: {
//           items: 1,
//           stagePadding: 35,
//           margin: 20
//       },

//       700: {
//           items: 2,
//           margin: 30,
//       },
//   }
// })


// $('.projects .arrow-left').click(() => {
//   $('.projects-carousel').trigger('prev.owl.carousel', [700]);

// })

// $('.projects .arrow-right').click(() => {
//   $('.projects-carousel').trigger('next.owl.carousel', [700]);
// })

// review corusel

$('.reviews-carousel').owlCarousel({
  dots: true,
  nav: false,
  loop: true,
  autoplay:true,
  smartSpeed: 700,
  margin: 30,
  items: 1,
})


$('.reviews .arrow-left').click(() => {
  $('.reviews-carousel').trigger('prev.owl.carousel', [700]);

})

$('.reviews .arrow-right').click(() => {
  $('.reviews-carousel').trigger('next.owl.carousel', [700]);
})


///variables 

const footerScrollTop = document.querySelector('.footer-top')
const feedBackOpenBtns = document.querySelectorAll('.feedback-open')
const feedbackCloseBtn = document.querySelector('.feedback-close')
const feedbackBg  = document.querySelector('.feedback')
const feedbackForm = document.querySelector('.feedback-form')


// scrool top  btn 
footerScrollTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})


// feedback open
feedBackOpenBtns.forEach(item => {

  item.addEventListener('click', (e) => {
    e.preventDefault()

    const feedbackModal = document.querySelector('.feedback')
    
      feedbackModal.style.display = "block";
    
  })
})


// feedback close 

feedbackCloseBtn.addEventListener('click', (e) => {
  const feedbackModal = document.querySelector('.feedback')
    feedbackModal.style.display = "none";

  
})

feedbackBg.addEventListener('click', (e) => {
  const feedbackModal = document.querySelector('.feedback')

  if (e.target.className === 'feedback') {
    feedbackModal.style.display = "none";
  }
})

// zooom showing
$('.projects-content_item__header-zoom').click(function() {
  let src = $(this).parents('.projects-content_item').find('.projects-content_item__img img').attr('src')

  $('.zoom-popup img').attr('src', src)
  $('.zoom-popup').fadeIn(500)
})

$('.zoom-popup__close').click(() => {
  $('.zoom-popup').fadeOut(500)
})

$('.zoom-popup').click(e => {
  let div = $(".zoom-popup img");
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      $('.zoom-popup').fadeOut(600); 
  }
})


// button showing 

$('.tel-btn').click(e => {
  e.preventDefault()
  $('.buttons').fadeIn(600); 
})


$('.buttons-close').click(() => {
  $('.buttons').fadeOut(600); 
})

$('.buttons').click(e => {
  let div = $(".buttons-content");
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      $('.buttons').fadeOut(600); 
  }
})




// input tel pattern 

$('.form__tel').inputmask("+\\9\\98 99 999 99 99")









// notefication
const noteficationsBg = document.querySelector('.notefications')
const message = document.querySelector('.notefications-message')
const successMessageIco  = document.querySelector('.success-message')
const errorMessageIco = document.querySelector('.error-message')
const messageText = document.querySelector('.message-text')
const colorStatus = document.querySelector('.notefications-message-color')

function shoeSuccessMsg () {

  noteficationsBg.classList.remove('hidden')
  successMessageIco.classList.remove('hidden')

  colorStatus.style.background = '#0abf30'
  messageText.textContent = 'yahwi'
  setTimeout(() => {
    message.classList.add('toast-hide')
    setTimeout(() => {
      noteficationsBg.classList.add('hidden')
    }, 3000);
  }, 2500)
}


function showErrorMsg () {
  noteficationsBg.classList.remove('hidden')
  errorMessageIco.classList.remove('hidden')

  colorStatus.style.background = '#e24d4c'
  messageText.textContent = 'yommon'

  setTimeout(() => {
    message.classList.add('toast-hide')
    setTimeout(() => {
      noteficationsBg.classList.add('hidden')
    }, 3000);
  }, 2500)
}


// sendFeedback
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hello world');

  const feddbackModalInputs = document.querySelector('.feedback-wrap')
  const feedbackDone = document.querySelector('.feedback-done')


})




// rooots 

const projects = document.querySelector('.projects-content_inner')
const products = document.querySelector('.products-content')
const reviews = document.querySelector('.reviews')
const partners = document.querySelector('.partners')
const chosess = document.querySelector('.choose_content')

// rendering dynamic items 



let ProductsItem = `
<div class="products-content_item products-content_item-big">
            <div class="products-content_item__img">
              <img src="./assets/img/product1.jpg" alt="product" />
            </div>
            <div class="products-content_item__name">Столешницы для кухни</div>
            <a href="#" class="products-content_item__btn feedback-open">
              Узнать цену
            </a>
</div>
`

let reviewsItem = `

<div class="reviews-content_item">
                
                <div class="reviews-content_item-left">
                  <div class="reviews-content_item-left__head">
                    <div class="reviews-content_item-left__wrap">

                      <div class="reviews-content_item-left__photo">
                        <img src="./assets/img/user.png" alt="user">
                      </div>
                      <div class="reviews-content_item-left__user">
                        <div class="reviews-content_item-left__name">
                          Наргиза Халилова
                        </div>
                        <div class="reviews-content_item-left__from">
                          Написал(а) через Instagram
                        </div>
                      </div>
                    </div>
                    <div class="reviews-content_item-left__mark">
                      <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7363 6.89649L12.7773 6.17579L10.5605 1.68165C10.4999 1.5586 10.4003 1.45899 10.2773 1.39844C9.9687 1.2461 9.5937 1.37305 9.4394 1.68165L7.2226 6.17579L2.26362 6.89649C2.1269 6.91602 2.0019 6.98048 1.9062 7.07813C1.7905 7.19705 1.72674 7.35704 1.72894 7.52294C1.73113 7.68884 1.7991 7.84709 1.91791 7.9629L5.5058 11.4609L4.65815 16.4004C4.63827 16.5153 4.65099 16.6335 4.69485 16.7415C4.73872 16.8496 4.81198 16.9432 4.90633 17.0117C5.00068 17.0802 5.11234 17.1209 5.22866 17.1292C5.34497 17.1375 5.46128 17.113 5.5644 17.0586L9.99995 14.7266L14.4355 17.0586C14.5566 17.1231 14.6972 17.1445 14.832 17.1211C15.1718 17.0625 15.4003 16.7402 15.3417 16.4004L14.4941 11.4609L18.082 7.9629C18.1796 7.8672 18.2441 7.74219 18.2636 7.60548C18.3164 7.26368 18.0781 6.94727 17.7363 6.89649Z" fill="#FFB800"/>
                        <path d="M42.7363 6.89649L37.7773 6.17579L35.5605 1.68165C35.4999 1.5586 35.4003 1.45899 35.2773 1.39844C34.9687 1.2461 34.5937 1.37305 34.4394 1.68165L32.2226 6.17579L27.2636 6.89649C27.1269 6.91602 27.0019 6.98048 26.9062 7.07813C26.7905 7.19705 26.7267 7.35704 26.7289 7.52294C26.7311 7.68884 26.7991 7.84709 26.9179 7.9629L30.5058 11.4609L29.6581 16.4004C29.6383 16.5153 29.651 16.6335 29.6949 16.7415C29.7387 16.8496 29.812 16.9432 29.9063 17.0117C30.0007 17.0802 30.1123 17.1209 30.2287 17.1292C30.345 17.1375 30.4613 17.113 30.5644 17.0586L34.9999 14.7266L39.4355 17.0586C39.5566 17.1231 39.6972 17.1445 39.832 17.1211C40.1718 17.0625 40.4003 16.7402 40.3417 16.4004L39.4941 11.4609L43.082 7.9629C43.1796 7.8672 43.2441 7.74219 43.2636 7.60548C43.3164 7.26368 43.0781 6.94727 42.7363 6.89649Z" fill="#FFB800"/>
                        <path d="M67.7363 6.89649L62.7773 6.17579L60.5605 1.68165C60.4999 1.5586 60.4003 1.45899 60.2773 1.39844C59.9687 1.2461 59.5937 1.37305 59.4394 1.68165L57.2226 6.17579L52.2636 6.89649C52.1269 6.91602 52.0019 6.98048 51.9062 7.07813C51.7905 7.19705 51.7267 7.35704 51.7289 7.52294C51.7311 7.68884 51.7991 7.84709 51.9179 7.9629L55.5058 11.4609L54.6581 16.4004C54.6383 16.5153 54.651 16.6335 54.6949 16.7415C54.7387 16.8496 54.812 16.9432 54.9063 17.0117C55.0007 17.0802 55.1123 17.1209 55.2287 17.1292C55.345 17.1375 55.4613 17.113 55.5644 17.0586L59.9999 14.7266L64.4355 17.0586C64.5566 17.1231 64.6972 17.1445 64.832 17.1211C65.1718 17.0625 65.4003 16.7402 65.3417 16.4004L64.4941 11.4609L68.082 7.9629C68.1796 7.8672 68.2441 7.74219 68.2636 7.60548C68.3164 7.26368 68.0781 6.94727 67.7363 6.89649Z" fill="#FFB800"/>
                        <path d="M92.7363 6.89649L87.7773 6.17579L85.5605 1.68165C85.4999 1.5586 85.4003 1.45899 85.2773 1.39844C84.9687 1.2461 84.5937 1.37305 84.4394 1.68165L82.2226 6.17579L77.2636 6.89649C77.1269 6.91602 77.0019 6.98048 76.9062 7.07813C76.7905 7.19705 76.7267 7.35704 76.7289 7.52294C76.7311 7.68884 76.7991 7.84709 76.9179 7.9629L80.5058 11.4609L79.6581 16.4004C79.6383 16.5153 79.651 16.6335 79.6949 16.7415C79.7387 16.8496 79.812 16.9432 79.9063 17.0117C80.0007 17.0802 80.1123 17.1209 80.2287 17.1292C80.345 17.1375 80.4613 17.113 80.5644 17.0586L84.9999 14.7266L89.4355 17.0586C89.5566 17.1231 89.6972 17.1445 89.832 17.1211C90.1718 17.0625 90.4003 16.7402 90.3417 16.4004L89.4941 11.4609L93.082 7.9629C93.1796 7.8672 93.2441 7.74219 93.2636 7.60548C93.3164 7.26368 93.0781 6.94727 92.7363 6.89649Z" fill="#FFB800"/>
                        <path d="M117.736 6.89649L112.777 6.17579L110.56 1.68165C110.5 1.5586 110.4 1.45899 110.277 1.39844C109.969 1.2461 109.594 1.37305 109.439 1.68165L107.223 6.17579L102.264 6.89649C102.127 6.91602 102.002 6.98048 101.906 7.07813C101.79 7.19705 101.727 7.35704 101.729 7.52294C101.731 7.68884 101.799 7.84709 101.918 7.9629L105.506 11.4609L104.658 16.4004C104.638 16.5153 104.651 16.6335 104.695 16.7415C104.739 16.8496 104.812 16.9432 104.906 17.0117C105.001 17.0802 105.112 17.1209 105.229 17.1292C105.345 17.1375 105.461 17.113 105.564 17.0586L110 14.7266L114.435 17.0586C114.557 17.1231 114.697 17.1445 114.832 17.1211C115.172 17.0625 115.4 16.7402 115.342 16.4004L114.494 11.4609L118.082 7.9629C118.18 7.8672 118.244 7.74219 118.264 7.60548C118.316 7.26368 118.078 6.94727 117.736 6.89649Z" fill="#FFB800"/>
                      </svg>									
                    </div>
                  </div>

                  <div class="reviews-content_item-left__text">
                    Купили мраморную столешницу на кухню в Старстоун.  Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)
                  </div>
                </div>

                <div class="reviews-content_item-right">
                  <img src="./assets/img/reviews.jpg" alt="reviews">
                </div>

            </div>
`

let partnerItem = `
<div class="partners-item">
<img src="./assets/img/partners1.png" alt="partners">
</div>
`


//choose rendiring

function renderChosess  (data)  {
    // 

  data.forEach(item => {
    chosess.innerHTML += `
           <div class="choose_content-item">
              <div class="choose_content-item__title">
                ${item?.attributes?.title}
              </div>
              <p class="choose_content-item__text">
                ${item?.attributes?.description}
              </p>
              <div class="choose_content-item_icon">
                <img src="http://localhost:1337${item?.attributes?.icon?.data?.attributes?.url}}" alt="ico">
              </div>
            </div>
    `

  })
}

const getchooses = async (url) =>  {
    const request = await fetch(`http://localhost:1337/api${url}`)
    const data =  await request.json()
    renderChosess(data?.data);
}
getchooses('/chooses?populate=*')


// products renering 
function renderProducts  (data)  {


    data.forEach(item => {
    if (item?.id === 1 || item.id === 6 || item.id === 7) {
    products.innerHTML += `
    <div class="products-content_item products-content_item-big">
    <div class="products-content_item__img">
    <img src="http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}" alt="product" />
    </div>
    <div class="products-content_item__name">${item?.attributes?.title}</div>
    <a href="#" class="products-content_item__btn feedback-open">
      Узнать цену
    </a>
</div>`
    } else {
      products.innerHTML += `
    <div class="products-content_item">
    <div class="products-content_item__img">
      <img src="http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}" alt="product" />
    </div>
    <div class="products-content_item__name">${item?.attributes?.title}</div>
    <a href="#" class="products-content_item__btn feedback-open">
      Узнать цену
    </a>
</div>`
    }

})


}
const getProducts = async (url) =>  {
  const request = await fetch(`http://localhost:1337/api${url}`)
  const data =  await request.json()
  renderProducts(data?.data);
}
getProducts('/products?populate=*')


// render projects 

// function renderProjects (data)  {
//   data.forEach(item => {
//     projects.innerHTML += `
//                    <div class="projects-content_item">
    
//                         <div class="projects-content_item__img">
//                           <img src="http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}" alt="ico">
//                         </div>
                        
//                         <div class="projects-content_item__header">
    
//                           <div class="projects-content_item__header-location">
//                             ${item?.attributes?.address}
//                           </div>
    
//                           <div class="projects-content_item__header-zoom">
//                             <img src="./assets/img/zoom.svg" alt="zoom-image">
//                           </div>
    
//                         </div>
    
//                         <h3 class="projects-content_item__name">
//                         ${item?.attributes?.title}
//                         </h3>
    
//                         <ul class="projects-content_item__list">
//                           <li>
//                             <span>Материал:</span>
//                             <span>${item?.attributes?.material}</span>
//                           </li>
//                           <li>
//                             <span>Цвет камня:</span>
//                             <span>${item?.attributes?.color}</span>
//                           </li>
//                           <li>
//                             <span>Площадь:</span>
//                             <span>${item?.attributes?.size}</span>
//                           </li>
//                           <li>
//                             <span>Год:</span>
//                             <span>${item?.attributes?.year}</span>
//                           </li>
//                         </ul>
    
//                         <a href="#" class="projects-content_item__btn feedback-open">
//                           Хочу также
//                         </a>
//                       </div>
//     `

   
// }

// )
// }
// const getProjects = async (url) =>  {
//   const request = await fetch(`http://localhost:1337/api${url}`)
//   const data =  await request.json()
//     renderProjects(data?.data);
// }
// getProjects('/projects?populate=*')



// hero rendering
const getHero = async () => {

  const request = await fetch(`http://localhost:1337/api/hero?populate=*`)

  const heroData = await request.json()


  const heroBg = document.querySelector('.hero')
  const heroServices = document.querySelector('.hero_content-list')
  const heroTitle = document.querySelector('.hero_content h1')

  heroTitle.innerHTML = `${heroData.data.attributes?.title.slice(0, 23)} <br/>  ${heroData.data.attributes?.title.slice(23, 25)}
  <strong>${heroData.data.attributes?.title.slice(25, 33)}</strong>
  ${heroData.data.attributes?.title.slice(33, 35)}
  <strong>${heroData.data.attributes?.title.slice(35, 42)}</strong>
  ${heroData.data.attributes?.title.slice(42)}
  `

  heroBg.style.backgroundImage = `url(http://localhost:1337${heroData?.data?.attributes?.background?.data?.attributes?.url})`
  heroData.data.attributes?.hero_advantages?.hero_advantages.forEach((item) => {
    heroServices.innerHTML += `
    <li>${item}</li>
    `
  })



}
getHero()


// sections titles rendering
const getSectionTitles = async() =>  {

  const request = await fetch(`http://localhost:1337/api/section-title`)

  const heroData = await request.json()


  const chooseTitle = document.querySelector('.choose-title')
  const projectsTitle = document.querySelector('.projects-title')
  const partnerTitle = document.querySelector('.partners-title')
  const productTitle = document.querySelector('.products-title')
  const reviewTitle = document.querySelector('.reviews-title')


  chooseTitle.innerHTML = `${heroData?.data?.attributes?.chooseTitle.slice(0, 10)}
    <strong>${heroData?.data?.attributes?.chooseTitle.slice(10)}</strong>`

  productTitle.innerHTML = `
  ${heroData?.data?.attributes?.productsTitle.slice(0,5)}
    <strong>${heroData?.data?.attributes?.productsTitle.slice(5, 24)} <br/>
    ${heroData?.data?.attributes?.productsTitle.slice(24)} </strong>`

  partnerTitle.innerHTML = `${heroData?.data?.attributes?.partnersTitle.slice(0, 4)} 
  <strong>${heroData?.data?.attributes?.partnersTitle.slice(4, 14)}</strong>
  <span>${heroData?.data?.attributes?.partnersTitle.slice(14)}</span>
  `

  reviewTitle.innerHTML = `${heroData?.data?.attributes?.reviewsTitle.slice(0, 13)} 
  <strong>
  ${heroData?.data?.attributes?.reviewsTitle.slice(13)}
  </strong>
  `

  projectsTitle.innerHTML = `${heroData?.data?.attributes?.projectsTitle.slice(0, 5)}
    <strong>
    ${heroData?.data?.attributes?.projectsTitle.slice(5)}
    </strong>
  `

}
getSectionTitles()



// /slider 
    let offset = 0;
    let slideIndex = 1;

const slidesItem = document.querySelectorAll('.projects-content_item'),
      nextBtn = document.querySelector('.projects .arrow-right'),
      prevBtn = document.querySelector('.projects .arrow-left'),
      sliderWrapper = document.querySelector('.projects-content'),
      width = window.getComputedStyle(sliderWrapper).width,
      slidesField = document.querySelector('.projects-content_inner')

console.log(slidesItem);



      
    
    slidesField.style.width = 100 * slidesItem.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.flexWrap = 'wrap'
    slidesField.style.transition = '0.5s all';

    sliderWrapper.style.overflow = 'hidden';

    sliderWrapper.style.position = 'relative'

    let indicator = document.createElement('ol'),
        dots = []

    indicator.style.cssText = `
    position:absalute;
    right:0;
    bottom:0;
    left:0;
    z-index:15;
    display:flex;
    justify-content:center;
    margin-right:15%;
    margin-left:15%;
    margin-top:3%;
    list-style:none;

    `
    sliderWrapper.append(indicator)

    sliderWrapper.append(indicator)

    for (let i = 0; i < slidesItem.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to',i + 1);
        
        dot.style.cssText = `
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin: 0 0.25rem;
        cursor:pointer;
        background: #D9D9D9 !important;
        transition:opacity .6s ease;
        `

      if (i == 0) {
        dot.style.background  = '#B7875B'
        dot.style.width  = '1.8rem'
        dot.style.borderRadius = '.5rem'
      }

      indicator.append(dot)
      dots.push(dot)
    }

    slidesItem.forEach(slide => {
      slide.style.width = width
    
    })

    nextBtn.addEventListener('click', () => {
      if (offset == (+width.slice(0, width.length - 2) * (slidesItem.length - 1))) {
        offset = 0
      } else{
        offset += +width.slice(0,width.length - 2)
      }
      
      if (slideIndex == slidesItem.length) {
        slideIndex =1
      } else{
        slideIndex++
      }
      

      
        slidesField.style.transform = `translateX(-${offset}px)`

        dots.forEach((item, index) => {
          if (index == slideIndex - 1) {
          item.style.background  = '#B7875B'
          item.style.width  = '1.8rem'
          item.style.borderRadius = '.5rem'
          } else {
            item.style.cssText = `
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin: 0 0.25rem;
            cursor:pointer;
            background: #D9D9D9 !important;
            transition:opacity .6s ease;
            `
          }
          
        })
       
    })
      
      
    prevBtn.addEventListener('click', () => {
      if (offset == 0) {
        offset = (+width.slice(0, width.length - 2) * (slidesItem.length - 1))
      } else{
        offset -= +width.slice(0,width.length - 2)
      }
      
      if (slideIndex = 1) {
        slideIndex = slidesItem.length
      } else{
        slideIndex--
      }
      
      
      
      
        slidesField.style.transform = `translateX(-${offset}px)`
    })

    dots.forEach((item, index) => {
     
      item.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slidesItem.length - 1))) {
          offset = 0
        } else{
          offset += +width.slice(0,width.length - 2)
        }
        
        if (slideIndex == slidesItem.length) {
          slideIndex =1
        } else{
          slideIndex++
        }
        
  
        
          slidesField.style.transform = `translateX(-${offset}px)`
  
          dots.forEach((item, index) => {
            if (index == slideIndex - 1) {
            item.style.background  = '#B7875B'
            item.style.width  = '1.8rem'
            item.style.borderRadius = '.5rem'
            } else {
              item.style.cssText = `
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              margin: 0 0.25rem;
              cursor:pointer;
              background: #D9D9D9 !important;
              transition:opacity .6s ease;
              `
            }
            
          })
         
      })
      
    })

    function autoplaySlide(sec, isWork) {
      if (isWork) {
        
      setInterval(() => {
        if (offset == (+width.slice(0, width.length - 2) * (slidesItem.length - 1))) {
          offset = 0
        } else{
          offset += +width.slice(0,width.length - 2)
        }
        
        if (slideIndex == slidesItem.length) {
          slideIndex =1
        } else{
          slideIndex++
        }
        
  
        
          slidesField.style.transform = `translateX(-${offset}px)`
  
          dots.forEach((item, index) => {
            if (index == slideIndex - 1) {
            item.style.background  = '#B7875B'
            item.style.width  = '1.8rem'
            item.style.borderRadius = '.5rem'
            } else {
              item.style.cssText = `
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              margin: 0 0.25rem;
              cursor:pointer;
              background: #D9D9D9 !important;
              transition:opacity .6s ease;
              `
            }
            
          })
       
      }, sec);
    }

    }
    
    autoplaySlide(2500, true)