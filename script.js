
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


    