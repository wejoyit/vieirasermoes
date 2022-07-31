let left = document.querySelector('.lefty');
        let content = document.querySelector('.conteudo');
        let protos = document.querySelectorAll('.proto');

        left.addEventListener('mousemove', (event) => {
            let move = (event.clientX * 0.05) + 4;
            let move2 = (event.clientX * 0.003);
            content.style.transform = `translateX(-${move2}%)`;

            protos.forEach((proto) => {
                proto.style.transform = `translateX(${move}%)`;
            })
        })

        
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

   const activeSlide = slides.querySelector("[data-active]")
   let newIndex = [...slides.children].indexOf(activeSlide) + offset
   if (newIndex < 0) newIndex = slides.children.length - 1
   if (newIndex >= slides.children.length) newIndex = 0

   slides.children[newIndex].dataset.active = true
   delete activeSlide.dataset.active
    })
})




$(document).ready(function(){
  $('.carrossel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,

      }
    }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
  
        }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});