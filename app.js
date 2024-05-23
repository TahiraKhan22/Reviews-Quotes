const reviews = [
    {
        id:1,
        name:"Sana Javed ",
        job:"Pakistani actress",
        img: "https://www.siddysays.com/wp-content/uploads/2021/03/b74a265536767b7e0505c55fb6e6c580.jpg",
        text:
        "Sana Javed is a Pakistani actress who appears on Urdu television. She made her debut in 2012 with Shehr-e-Zaat and later on appeared in several serials. She received recognition after portraying the titular role in the romantic drama Khaani for which she received a nomination at the Lux Style Awards",

    },
    {
        id:2,
        name:"Dace Yob",
        job:"Former Jr Mobile App Developer2y",
        img: "https://www.alterbrewing.com/wp-content/uploads/2019/09/500x500-headshots-DavidYob.jpg",
        text:
        "Forget about project complexity and hire an expert web developer to help you accomplish your business projects today. No matter if you are searching for a custom web developer or want to hire a web developer to build a website from scratch.",


    },
    {
        id:3,
        name:"Anjali Tewari",
        job:"Software engineers",
        img: "https://media.licdn.com/dms/image/C4D03AQESQfbtvpcRsQ/profile-displayphoto-shrink_800_800/0/1654081017798?e=2147483647&v=beta&t=CrTIrGJhaMPkW74MPAPZMJzDWJOojlSh76feSOVE--g",
        text:
        "Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users. Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware—to name just a few of the many career paths available.",

    },
    {
        id:4,
        name:"Vijay",
        job:" Indian actor and playback singer",
        img: "https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg",
        text:
        "Joseph Vijay Chandrasekhar, known professionally as Vijay, is an Indian actor and playback singer who works in Tamil cinema",

    },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click",function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length-1;
    }
    showPerson();
});
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson();
});
