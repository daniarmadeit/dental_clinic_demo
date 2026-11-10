const modal=document.querySelector('#modal');const toast=document.querySelector('.toast');
document.querySelectorAll('.js-open').forEach(b=>b.addEventListener('click',()=>modal.showModal()));
document.querySelector('.close').addEventListener('click',()=>modal.close());
function done(e){e.preventDefault();modal.close();toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200);e.target.reset()}
document.querySelector('#lead').addEventListener('submit',done);document.querySelector('#modal-form').addEventListener('submit',done);

const heroSlides=[
  {title:'Ваша улыбка —<br><em>наша забота</em>',text:'Лечение без стресса, современное оборудование и внимательные врачи для всей семьи.',image:'assets/hero-dental.png',alt:'Пациентка и врач в современной стоматологии'},
  {title:'Ровная улыбка<br><em>в любом возрасте</em>',text:'Современная ортодонтия с понятным планом лечения и внимательным сопровождением.',image:'assets/hero-orthodontics.png',alt:'Пациент и стоматолог после консультации'},
  {title:'Здоровые зубы —<br><em>семейная привычка</em>',text:'Бережный подход к взрослым и маленьким пациентам в спокойной атмосфере.',image:'assets/hero-family.png',alt:'Мама с дочерью на приёме у стоматолога'}
];
const heroTitle=document.querySelector('#hero-title');
const heroText=document.querySelector('#hero-text');
const heroPhoto=document.querySelector('#hero-photo');
const heroDots=[...document.querySelectorAll('.hero-pagination button')];
let heroIndex=0;
function showHeroSlide(index){
  heroIndex=index;
  const slide=heroSlides[index];
  heroTitle.innerHTML=slide.title;
  heroText.textContent=slide.text;
  heroPhoto.src=slide.image;
  heroPhoto.alt=slide.alt;
  heroDots.forEach((dot,i)=>dot.classList.toggle('active',i===index));
}
let heroTimer=setInterval(()=>showHeroSlide((heroIndex+1)%heroSlides.length),5000);
heroDots.forEach((dot,index)=>dot.addEventListener('click',()=>{
  clearInterval(heroTimer);
  showHeroSlide(index);
  heroTimer=setInterval(()=>showHeroSlide((heroIndex+1)%heroSlides.length),5000);
}));
