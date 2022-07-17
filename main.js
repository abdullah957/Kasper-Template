/*-----------------Start Variables Declearation -----------------------*/

const menuIcon = document.querySelector("header .container i");                          
const nav = document.querySelector(".container .nav");
const rightArrrow = document.querySelector(".right-arrow");
const leftArrrow = document.querySelector(".left-arrow");
const firstSpan = document.querySelector(".first");
const secondSpan = document.querySelector(".second");
const thirdSpan = document.querySelector(".third");
const landing = document.querySelector(".landing");
const spanContainer = document.getElementById("span-container");
const text = document.getElementById("text");
const header = document.querySelector("header");
const services = document.querySelector(".services");
const addpadding = document.getElementsByClassName("addpad");
const portfolioSections = document.querySelectorAll(".portfolio-section");
const portfolioControllers = document.querySelectorAll(".portfolio-control");
const portfolioController = document.querySelector(".portfolio-control");
const docImages = document.images;
const links = document.querySelectorAll(".container .nav ul li a");
const pullets = document.querySelectorAll(".span-traversing span");
const profiles = document.querySelectorAll(".profiles .page");
const designSection = document.querySelector(".design-section");
/*-----------------End Variables Declearation -----------------------*/


/*-----------------Start JS Manupulation -------------------------------*/
//Add Alternative Attributes To Images
for (let index = 0; index < docImages.length; index++) {
    const element = docImages[index];
    element.alt = "image"    
}

//Add Active Class To Nav & MenuIcon
const closeMenu = document.getElementById("close-menu");
menuIcon.onclick = function() {
        this.classList.toggle("show")
        nav.classList.toggle("active")
        closeMenu.classList.toggle("show")
    }
closeMenu.onclick = function() {
        this.classList.toggle("show")
        nav.classList.toggle("active")
        menuIcon.classList.toggle("show")
    }
    

/*Add Active Class To closeMenu When Navbar Has Active Class
-- && Rmove It When Click On It------------------------------*/
// if(nav.classList.contains("active")){

// }
// links.forEach(link => {
//     link.onclick=function (e) {
//         e.preventDefault();
//         nav.classList.remove("active");
//         closeMenu.style.display="none";
//         menuIcon.classList.toggle("show");
//     }
// })
// closeMenu.onclick=function () { 
//     this.style.display="none";
//     menuIcon.classList.toggle("show");
//     nav.classList.toggle("active")

    
//  }
//--------------------------



/*-------Functions To Toggle Landing Background 
---------& Add Active Class To Spans-----------  
---------& Add Animation To Text Div----------*/
i = 1

rightArrrow.onclick = function() {
    i += 1
    if (i > 3) {
        i = 1
    }
    changeBackgroundImage(i)
    addActiveClassToSpan()
    animationExchange()
}
leftArrrow.onclick = function() {
    i -= 1
    if (i == 0) {
        i = 3
    }
    changeBackgroundImage(i)
    addActiveClassToSpan()
    animationExchange()
}
firstSpan.onclick = function() {
    i = 1
    changeBackgroundImage(i)
    addActiveClassToSpan()
    animationExchange()
}
secondSpan.onclick = function() {
    i = 2
    changeBackgroundImage(i)
    addActiveClassToSpan()
    animationExchange()
}
thirdSpan.onclick = function() {
    i = 3
    changeBackgroundImage(i)
    addActiveClassToSpan()
    animationExchange()
}


function changeBackgroundImage(imageId) {
    landing.style.backgroundImage = `url(../img/slider/${imageId}.jpg)`
}

function addActiveClassToSpan() {
    if (i == 1) {
        removeClassFromSpan()
        firstSpan.classList.add("active")

    } else if (i == 2) {
        removeClassFromSpan()
        secondSpan.classList.add("active")
    } else if (i == 3) {
        removeClassFromSpan()
        thirdSpan.classList.add("active")
    } else {
        removeClassFromSpan()
        firstSpan.classList.add("active")
    }
}

function removeClassFromSpan() {
    siblings = spanContainer.children
    for (let sib of siblings) {
        sib.classList.remove("active")
    }
}
//Add Animation To Text Div On Background Exchange
function animationExchange() {
    if (i == 1) {
        text.style.animationName = `top`


    } else if (i == 2) {
        text.style.animationName = `right`

    } else if (i == 3) {
        text.style.animationName = `bottom`

    } else {
        text.style.animationName = `top`

    }
}
//--------------------------------------------------------

//Add Data Scroll To Links
for (let index = 0; index < links.length; index++) {
    const element = links[index];
    element.setAttribute("data-scroll",element.getAttribute("href"))
    element.setAttribute("href","#")
}

//Change Bacground Color Of Header
window.onload = function() {
    if (landing.getBoundingClientRect().bottom <= (header.getBoundingClientRect().height + window.scrollY)) {
        header.style.background = "var(--second-color)"
    } else { header.style.background = "none" }
}
window.onscroll = function() {
    if (landing.getBoundingClientRect().bottom <= (header.getBoundingClientRect().height + window.scrollY)) {
        header.style.background = "var(--second-color)"
    } else { header.style.background = "none" }
}


//About-Us TESTIMONIALS Section

//add active class when click on pullet and remove from its siblings
pullets.forEach(a => {
    a.onclick=function(){
        pullets.forEach(c => {
            c.classList.remove("active")
        });
        a.classList.add("active")
        profiles.forEach(profile => {
            if(profile.classList.contains(a.getAttribute("data-sync"))){
                profiles.forEach(pro=>{
                    pro.classList.remove("active");
                })
                profile.classList.add("active");
            }
        })
    };
    
});

//left right arrow transaction
leftArr=document.querySelector(".left.arrow")
rightArr=document.querySelector(".right.arrow")
j = 1
rightArr.onclick = function() {
    j += 1
    if (j > 2) {
        j = 0
    }
    addActiveClassToProfile(j)
}
leftArr.onclick = function() {
    j -= 1
    if (j == -1) {
        j = 2
    }
    addActiveClassToProfile(j)

}
function addActiveClassToProfile(index){
    profiles.forEach(pro=>{
        pro.classList.remove("active")
        profiles[index].classList.add("active")
        pullets.forEach(pu=>{
            pu.classList.remove("active")
            if(pu.getAttribute("data-sync") == profiles[index].getAttribute("data-sync")){
                pu.classList.add("active")
            }
        })
    })
}

// Right Section Of About US -----Add Value Of Progress Bar
progress=document.querySelectorAll(".value");
progress.forEach(prog=>{
prog.style.width=prog.getAttribute("data-value")+"%"})

/*-----------------End JS Manupulation -----------------------*/

/*-----------------Start JQuery Manupulation -----------------------*/


$(function(){
    //Make Smooth Scroll
    $(".container .nav ul li a").click(function(e){
        e.preventDefault()
        $("html ,body").animate({
            scrollTop:$($(this).data("scroll")).offset().top + 1
        },700)

        $(this).parents(".container").find(".nav").removeClass("active")
        $(this).parents(".container").find("#open-menu").removeClass("active")
        closeMenu.classList.toggle("active")
        closeMenu.classList.toggle("show")
        menuIcon.classList.toggle("show")
    })
    

    //Make Padding For Sections
    $(".addpad").css("paddingTop",$("header").innerHeight())

    //Sync Header Links With Their Sections
    scrollToTop=$(".scroll-to-top")
    $(window).scroll(function(){
        $(".sync").each(function(){
            if($(window).scrollTop() >= $(this).offset().top ){
                linkID=$(this).attr("id");
                links.forEach(link=>{
                    link.classList.remove("active")
                })
                $('.container .nav ul li a[data-scroll="#'+linkID+'"]').addClass("active")
            }
        })
        //On Scroll Down Show ScrollToTop Button
        if($(window).scrollTop() > 1000){
            scrollToTop.fadeIn()
        }else{
            scrollToTop.fadeOut(1000)
        }
    })
    scrollToTop.click(function(e) {
        e.preventDefault();
        $("html ,body").animate({
            scrollTop:0
        },1000)
    

        
    })

    //Show The Sections Of Portfolio Section According The Divisions Of Section

    $("body .portfolio-control").each(function(){
        $(this).click(function(){
            $(this).parent().siblings().find("span.portfolio-control").removeClass("active");
            $(this).addClass("active");
            for (let index = 0; index < portfolioSections.length; index++) {
                const element = $(portfolioSections[index])
                element.animate({
                    top:"-100%",
                    left:"-100%",
                    behavior:"smooth"
                },300).css("display","none");
                if(element.hasClass($(this).data("control"))){
                    element.animate({
                        top:"0",
                        left:"0",
                        behavior:"smooth"
                    },300).css("display","block");
                };
                
            };
        });
    });
    
});

/*-----------------End JQuery Manupulation -----------------------*/






