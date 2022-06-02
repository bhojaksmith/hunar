
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
      loader.style.display = 'none'
  });
}

function setNeofantasy(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/NeoFanTasy Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setFootrax(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Footrax Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setAstro(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Astro Energy Guru.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setFestinger(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Festinger Vault.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function set21by72(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/21 BY 72 Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setParkingBae(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Parking Bae Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setInforida(){
  
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/Inforida Case Study.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setSphere(){
  document.querySelector('.productLarge').setAttribute('src','assets/caseStudies/.png') ;
    $('.productLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}


/* Illustration Below Starts*/ 


function setTapsee(){
  
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/taapse.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setINC(){
  $('.ContainerTitle').html("Indian National Cricket Team");
  $('.ContainerSubtitle').html("World test championship");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/indianCricketTeam.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setklaudia(){
  $('.ContainerTitle').html("Klaudia Nicole");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/klaudia.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setklaudia2(){
  $('.ContainerTitle').html("Tapsee Pannu");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/klaudia2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setRohit(){
  $('.ContainerTitle').html("Rohit Sharma");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/rohit.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setPollard(){
  $('.ContainerTitle').html("Kieron Pollard");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/pollard.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setKrunalPandya(){
  $('.ContainerTitle').html("Krunal Pandya");
  $('.ContainerSubtitle').html("Sports Celebrity");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/krunalPandya.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setBarbara(){
  $('.ContainerTitle').html("Barbara");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/barbara.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setMichelle(){
  $('.ContainerTitle').html("Michelle Dalton");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/michelle.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setAngelina(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/angelina.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setAngelina2(){
  $('.ContainerTitle').html("Angelina");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/angelina2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setLouann(){
  $('.ContainerTitle').html("Louann");
  $('.ContainerSubtitle').html("Gamer");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/louann.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setMarta(){
  $('.ContainerTitle').html("Marta Ratia");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/marta.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setDishaPatani(){
  $('.ContainerTitle').html("Disha Patani");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/dishaPatani.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setPaulina(){
  $('.ContainerTitle').html("Paulina Karpenko");
  $('.ContainerSubtitle').html("Fashion Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/paulina.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setNikita(){
  $('.ContainerTitle').html("Nikkita Gajjar");
  $('.ContainerSubtitle').html("");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/nikitaGajjar.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}

function setAdriana(){
  $('.ContainerTitle').html("Adriana");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/adriana.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setGabbyThomasPhoto(){
  $('.ContainerTitle').html("Gabby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/editing/large/GabbyThomas.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
/* Editing Below Starts*/ 
function setBhumi1(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/bhumi1.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function setBhumi2(){
  $('.ContainerTitle').html("Bhumi Kelaiya");
  $('.ContainerSubtitle').html("Canikography");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/bhumi2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function LisaMishra(){
  $('.ContainerTitle').html("Lisa Mishra");
  $('.ContainerSubtitle').html("");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/lisaMishra.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function JuhiBhatt(){
  $('.ContainerTitle').html("Juhi Bhatt");
  $('.ContainerSubtitle').html("Actor");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/JuhiBhatt.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function manon(){
  $('.ContainerTitle').html("Manon");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/Manon.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function GabyThomas(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/GabbyThomas_1.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function GabyThomas_2(){
  $('.ContainerTitle').html("Gaby Thomas");
  $('.ContainerSubtitle').html("Model");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/GabbyThomas_2.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function SaharSaiyed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/SaharSaiyed.jpgs') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function SaharSaiyedRed(){
  $('.ContainerTitle').html("Sahar Saiyed");
  $('.ContainerSubtitle').html("");
  document.querySelector('.imageLarge').setAttribute('src','assets/illustrations/large/SaharSaiyedRed.jpg') ;
    $('.imageLarge').imagesLoaded({ background: true }, function() {
      loader.style.display = 'none'
  });
}
function AnushkaSen(){
  $('.ContainerTitle').html("Anushka Sen");
  $('.ContainerSubtitle').html("");
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