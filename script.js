const text = document.getElementById('quote');
const author = document.getElementById('author');
const bg = document.getElementById('bg');
const meteor = document.getElementById('meteor');
const layer = document.getElementById('layer_3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const navBtn  = document.getElementById('navBtn');
const header = document.querySelector('header');
const navIcon = document.getElementById('navIcon');
const navItem = document.querySelectorAll('header nav li')
const form = document.getElementById('contactForm');
const animeTerget = document.querySelectorAll('.animate');
const copyRightYear = document.getElementById("current_year");

const setCurrentYear = ()=>{
  const d = new Date();
  copyRightYear.innerText = d.getFullYear();
}

setCurrentYear();

const func = async()=>{
 const res = await fetch("https://dummyjson.com/quotes/random");
 const data = await res.json();

console.log(data)

text.innerText = data.quote;
author.innerText = `-${data.author}`;
}
func()

function cheakbox(){
   let trigger = window.innerHeight / 5 * 4;
   
   animeTerget.forEach(box => {
     const boxtop = box.getBoundingClientRect().top;
   
     if(boxtop < trigger){
       box.classList.add('show','animate__fadeInLeft');
       box.classList.remove('animate__fadeOutRight');
     }
     else{
       box.classList.remove('show','animate__fadeInLeft');
       box.classList.add('animate__fadeOutRight');
     }

   })
   };

   cheakbox()
    

window.addEventListener("scroll",()=>{ 
const Y = window.scrollY;
/* 
bg.style.bottom = -Y/1.5+'px';
meteor.style.bottom = -Y/1.2+'px';
meteor.style.right = Y/4+'px'
layer.style.top = Y/1.3+'px';
img4.style.bottom = -Y/2+'px'
img5.style.bottom = -Y/3+'px' */

bg.style.transform = `translateY( ${Y/1.5}px)`;
//meteor.style.transform =`translateY(${Y/1.2}px)`;
meteor.style.transform = `translate(-${Y/4}px,${Y/1.2}px)`;
layer.style.transform = `translateY(${Y/1.3}px)`;
img4.style.transform = `translateY(${Y/2}px)`;
img5.style.transform = `translateY(${Y/3}px)`;

cheakbox()
})

const  sendMail = async (e)=>{
    e.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 console.log(name, email, message)
}


form.addEventListener('submit',async (e)=>{
    e.preventDefault();
 const from_name = document.getElementById('name').value;
 const email_id = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 try {
    const serviceID = 'service_uqyywng';
    const templateID = 'template_7eou49d';
    const params = {from_name,email_id,message}
    
     const res = await emailjs.send(serviceID, templateID,params);
   //  emailjs.send(serviceID, templateID, params,private_key);
    
     if(res.status == 200){
     alert('Your message has been sent successfully.');
     console.log(res)
     }else{
     alert('Something went wrong,Please try again later.')
     }

     console.log(res);
     } catch (error) {
        console.log(error)
     }

});

navBtn.addEventListener('click',()=>{
 header.classList.toggle('active');
 if(header.classList.length == 1){
   navIcon.src = "./images/icons/close-outline.svg";
 }else{
   navIcon.src = "./images/icons/menu-outline.svg";
 };
});

navItem.forEach(element => {
   element.addEventListener('click',()=>{
   header.classList.remove('active');

   if(header.classList.length == 1){
      navIcon.src = "./images/icons/close-outline.svg";
    }else{
      navIcon.src = "./images/icons/menu-outline.svg";
    };
})
});