const turning = document.querySelector('#turning');
const TitlteProject= document.querySelectorAll('.titlte-Project');
const Contenedorfilter= document.querySelector('.contenedor-filter');
const cargar = (entradas , observador) => {
    entradas.forEach((entrada)=>{
        if (entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }

    });

}
const observador = new IntersectionObserver ( cargar , {
    root:null,
    rootMargin: '0px',
    threshold: 1.0

});

observador.observe(turning);
TitlteProject.forEach((tittle) => observador.observe(tittle));
observador.observe(Contenedorfilter);

// para item

const item= document.querySelectorAll('.hidden');

const cargarItem = (entries , observador) =>{
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        }
    });
}

const observerItem = new IntersectionObserver (cargarItem, {
    root: null,
    rootMargin:'0px',
    threshold: 1.0
});

item.forEach((items) => observerItem.observe(items));

// Para .Perfil-AboutMe y .skills-tools

const PerfilAboutMe = document.querySelector('.Perfil-AboutMe');
const SkillsTools = document.querySelector('.skills-tools');
const LineProject= document.querySelectorAll('.line-Project');

const galery= document.querySelector('.galery');


const cargarPerfilSkills = (entries, observador) => {

    entries.forEach((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    });
}

const observadorP = new IntersectionObserver(cargarPerfilSkills , {
    root: null,
    rootMargin: '40px',
    threshold: 0.6
});

observadorP.observe(PerfilAboutMe);
observadorP.observe(SkillsTools);
LineProject.forEach((line)=>observadorP.observe(line));
observadorP.observe(galery);


// Shine a tools

const shines= document.querySelectorAll('.shine');


const cargarShines = (entries , observador) =>{
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('opacity');
        }
    });
}

const observerShine = new IntersectionObserver (cargarShines, {
    root: null,
    rootMargin:'0px',
    threshold: 1.0
});

shines.forEach((shine) => observerShine.observe(shine));


// FADE PORCENT
const skillPorcent= document.querySelectorAll('.skill-porcent');


const cargarPorcent = (entries, observador)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-In');
        }
    });
}

const observ= new IntersectionObserver (cargarPorcent, {
root:null,
rootMargin:'0px',
threshold: 0.4
});


skillPorcent.forEach((skill)=> observ.observe(skill));


// 
const sunLittle= document.querySelector('.little');

const cargarSun = (entries, observador)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('sunDown');
        }
    });
}

const observSun= new IntersectionObserver (cargarSun, {
root:null,
rootMargin:'0px 0px',
threshold: 0.8
});


observSun.observe(sunLittle);


// PARA RESPONSIVE GALERY PROJECT

const project =  document.querySelectorAll('#project');


const cargarProject=(entries, observador) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('filter');
        }

    });

}

const observProject= new IntersectionObserver (cargarProject, {
    root:null,
    rootMargin:'0px',
    threshold: 0.4
    });

    project.forEach((proj)=> observProject.observe(proj));



    function toggleMenu(){
        const menuToggle= document.querySelector('.toggle');
        const navigation= document.querySelector('.navigation');
        navigation.classList.toggle('active');
    }