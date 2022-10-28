/*Version 2*/ 

function blogs(){
  swal(
    'Coming Soon',
    'We are still working on blogs check back again later !',
  ).then(function() {
   
});
}
function run(){
    console.log('function Called')
    $('.content').imagesLoaded({ background: true }, function() {
        console.log('images loaded')
        setTimeout(removeLoader, 1500);
      });
    $('.sub').imagesLoaded({ background: true }, function() {   
      console.log('images loaded')
      setTimeout(removeLoader, 1500);
  });
 }

 function removeLoader(){
    
    let loader = document.querySelector(".loader");
    let content = document.querySelector(".content");
    console.log("Removing Loader");
    loader.style.display = 'none' 
    content.style.display = 'block';
    
    }

$.get("../navigation.html", function(data){
      $(".navigation").replaceWith(data);
  });

  $.get("../footer.html", function(data){
    $(".footer").replaceWith(data);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    const slideMeUp = entry.target.querySelector('.slideMeUp');
    

    if (entry.isIntersecting) {
      slideMeUp.classList.add('slideupAnimation');
      
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    slideMeUp.classList.remove('slideupAnimation');
    
  });
});
observer.observe(document.querySelector('.slideMeUp-Wrapper'));

const testimonailObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    const slideMeUp = entry.target.querySelector('.testimonials');

    if (entry.isIntersecting) {
      slideMeUp.classList.add('slideupAnimation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    slideMeUp.classList.remove('slideupAnimation');
  });
});
testimonailObserver.observe(document.querySelector('.testimonialContainer'));

// const herotext = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
    
//     const slideMeUp = entry.target.querySelector('.titleContainer');

//     if (entry.isIntersecting) {
//       slideMeUp.classList.add('zoomImage');
// 	  return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     slideMeUp.classList.remove('zoomImage');
//   });
// });
// heroImage.observe(document.querySelector('.heroImageContainer'));

function setStellars(){
  
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Stellars School Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setNeofantasy(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/NeoFanTasy Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setFootrax(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Footrax Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setAstro(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Astro Energy Guru.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setFestinger(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Festinger Vault.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function set21by72(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/21 BY 72 Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setParkingBae(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Parking Bae Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setInforida(){
  
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/Inforida Case Study.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setSphere(){
  document.querySelector('.productLarge').setAttribute('src','../assets/caseStudies/.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}


/* Illustration Below Starts*/ 


function setTapsee(){
  
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/taapse.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setINC(){
  $('.ContainerTitle').html("Indian National Cricket Team");
  $('.ContainerSubtitle').html("World test championship");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/indianCricketTeam.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setklaudia(){
  $('.ContainerTitle').html("Klaudia Nicole");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/klaudia.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setklaudia2(){
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/klaudia2.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setRohit(){
  $('.ContainerTitle').html("Rohit Sharma");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/rohit.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setPollard(){
  $('.ContainerTitle').html("Kieron Pollard");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/pollard.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setKrunalPandya(){
  $('.ContainerTitle').html("Krunal Pandya");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/krunalPandya.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setBarbara(){
  $('.ContainerTitle').html("Barbara");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/barbara.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setMichelle(){
  $('.ContainerTitle').html("Michelle Dalton");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/michelle.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAngelina(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/angelina.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAngelina2(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/angelina2.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setLouann(){
  $('.ContainerTitle').html("Louann");
  $('.ContainerSubtitle').html("Gamer");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/louann.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setMarta(){
  $('.ContainerTitle').html("Marta Ratia");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/marta.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setDishaPatani(){
  $('.ContainerTitle').html("Disha Patani");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/dishaPatani.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setPaulina(){
  $('.ContainerTitle').html("Paulina Karpenko");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/paulina.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setNikita(){
  $('.ContainerTitle').html("Nikkita Gajjar");
  $('.ContainerSubtitle').html("Wedding Album");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/nikitaGajjar.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAdriana(){
  $('.ContainerTitle').html("Adriana");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/adriana.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setGabbyThomasPhoto(){
  $('.ContainerTitle').html("Gabby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/editing/GabbyThomas.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
/* Editing Below Starts*/ 
function setBhumi1(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/bhumi1.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setBhumi2(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/bhumi2.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function LisaMishra(){
  $('.ContainerTitle').html("Lisa Mishra");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/lisaMishra.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function JuhiBhatt(){
  $('.ContainerTitle').html("Juhi Bhatt");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/JuhiBhatt.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function manon(){
  $('.ContainerTitle').html("Manon");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/Manon.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function GabyThomas(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/GabbyThomas1.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function GabyThomas_2(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/GabbyThomas2.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function SaharSaiyed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("Fan Art");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/SaharSaiyed.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function SaharSaiyedRed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("Fan Art");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/SaharSaiyedRed.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function AnushkaSen(){
  $('.ContainerTitle').html("Anushka Sen");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/AnushkaSen.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
  
  });
}
function ShipraKhanna(){
  $('.ContainerTitle').html("Shipra Khanna");
  $('.ContainerSubtitle').html("Masterchef India Winner");
  
  document.querySelector('.imageLarge').setAttribute('src','../assets/illustrations/ShipraKhanna.webp') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
  
  });
}

function setBdesigner(){
  document.querySelector('.productLarge').setAttribute('src','../assets/branding/BdesignerBranding.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}

function setMeraki(){
  document.querySelector('.productLarge').setAttribute('src','../assets/branding/MerakiBranding.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}
function setMS(){
  document.querySelector('.productLarge').setAttribute('src','../assets/branding/MSBRANDING.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}

function setLohana(){
  document.querySelector('.productLarge').setAttribute('src','../assets/branding/LohanaBranding.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });

}

function setlfa16(){
  document.querySelector('.productLarge').setAttribute('src','../assets/magazine/lfa16Detail.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}

function setlfa17(){
  document.querySelector('.productLarge').setAttribute('src','../assets/magazine/lfa17Detail.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setlfa(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/lfacontent.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setAarchik(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/aarchik.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setMindra(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/mindra.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setDesigntalks(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/designtalks.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setNeofantasySocial(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/neofantasycontent.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
function setletsbiz(){
  document.querySelector('.productLarge').setAttribute('src','../assets/social/letsbiz.webp') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}
