
function run(){
    console.log('function Called')
    $('.content').imagesLoaded({ background: true }, function() {
        console.log('images loaded')
        setTimeout(removeLoader, 2000);
      });
 }

 function removeLoader(){
    
    let loader = document.querySelector(".loader");
    let content = document.querySelector(".content");
    console.log("Removing Loader");
    loader.style.display = 'none'
    content.style.display = 'block';
    
    }

    
const mediaQuery = window.matchMedia('(min-width: 768px)')

if(mediaQuery.matches){
  
  
  let heroImage = document.querySelector('.heroImage');
  
  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth  - e.pageX) / 50;
    let yAxis = (window.innerHeight  - e.pageY) / 50;
    heroImage.style.transform = `translateY(${yAxis}px)  translateX(${xAxis}px)`;
    
  });
  
}
