
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

    $(document).ready(function() {
      $('.about').click(function() {
        location.replace('about.html')
      });
  });
  $(document).ready(function() {
    $('.home').click(function() {
      location.replace('index.html')
    });
});


$(document).ready(function() {
  $('.navBarLogo').click(function() {
    location.replace('index.html')
  });
});

function uiux(){
  location.replace('product.html')
}
function illustrations(){
  location.replace('illustrations.html')
}
function photoediting(){
  location.replace('photoediting.html')
}
function magazine(){
  location.replace('magazine.html')
}
function motion(){
  location.replace('motion.html')
}
function pitch(){
  location.replace('pitch.html')
}
function branding(){
  location.replace('branding.html')
}

function setStellars(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Stellars School Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setNeofantasy(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/NeoFanTasy Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setFootrax(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Footrax Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setAstro(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Astro Energy Guru.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setFestinger(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Festinger Vault.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function set21by72(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/21 BY 72 Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setParkingBae(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Parking Bae Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setInforida(){
  
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Inforida Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setSphere(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
       
  });
}


/* Illustration Below Starts*/ 


function setTapsee(){
  
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/taapse.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setINC(){
  $('.ContainerTitle').html("Indian National Cricket Team");
  $('.ContainerSubtitle').html("World test championship");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/indianCricketTeam.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setklaudia(){
  $('.ContainerTitle').html("Klaudia Nicole");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/klaudia.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setklaudia2(){
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/klaudia2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setRohit(){
  $('.ContainerTitle').html("Rohit Sharma");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/rohit.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setPollard(){
  $('.ContainerTitle').html("Kieron Pollard");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/pollard.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setKrunalPandya(){
  $('.ContainerTitle').html("Krunal Pandya");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/krunalPandya.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setBarbara(){
  $('.ContainerTitle').html("Barbara");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/barbara.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setMichelle(){
  $('.ContainerTitle').html("Michelle Dalton");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/michelle.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAngelina(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/angelina.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAngelina2(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/angelina2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setLouann(){
  $('.ContainerTitle').html("Louann");
  $('.ContainerSubtitle').html("Gamer");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/louann.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setMarta(){
  $('.ContainerTitle').html("Marta Ratia");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/marta.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setDishaPatani(){
  $('.ContainerTitle').html("Disha Patani");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/dishaPatani.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setPaulina(){
  $('.ContainerTitle').html("Paulina Karpenko");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/paulina.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setNikita(){
  $('.ContainerTitle').html("Nikkita Gajjar");
  $('.ContainerSubtitle').html("Wedding Album");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/nikitaGajjar.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}

function setAdriana(){
  $('.ContainerTitle').html("Adriana");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/adriana.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setGabbyThomasPhoto(){
  $('.ContainerTitle').html("Gabby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/GabbyThomas.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
/* Editing Below Starts*/ 
function setBhumi1(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/bhumi1.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function setBhumi2(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/bhumi2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function LisaMishra(){
  $('.ContainerTitle').html("Lisa Mishra");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/lisaMishra.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function JuhiBhatt(){
  $('.ContainerTitle').html("Juhi Bhatt");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/JuhiBhatt.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function manon(){
  $('.ContainerTitle').html("Manon");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/Manon.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function GabyThomas(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/GabbyThomas_1.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function GabyThomas_2(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/GabbyThomas_2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function SaharSaiyed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("Fan Art");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/SaharSaiyed.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function SaharSaiyedRed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("Fan Art");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/SaharSaiyedRed.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
       
  });
}
function AnushkaSen(){
  $('.ContainerTitle').html("Anushka Sen");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/AnushkaSen.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
  
  });
}
function ShipraKhanna(){
  $('.ContainerTitle').html("Shipra Khanna");
  $('.ContainerSubtitle').html("Masterchef India Winner");
  
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/ShipraKhanna.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
  
  });
}

function setBdesigner(){
  document.querySelector('.productLarge').setAttribute('src','assets/branding/BdesignerBranding.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}

function setMeraki(){
  document.querySelector('.productLarge').setAttribute('src','assets/branding/MerakiBranding.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}
function setMS(){
  document.querySelector('.productLarge').setAttribute('src','assets/branding/MSBranding.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });
}

function setLohana(){
  document.querySelector('.productLarge').setAttribute('src','assets/branding/LohanaBranding.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      
  });

}

function setlfa16(){
  document.querySelector('.productLarge').setAttribute('src','assets/magazine/lfa16Detail.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}

function setlfa17(){
  document.querySelector('.productLarge').setAttribute('src','assets/magazine/lfa17Detail.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
  });
}

