window.addEventListener("scroll", animate)
window.onload = animate();
function animate() {
    let sections = document.querySelectorAll("section")
    let navlinks = document.querySelectorAll('nav ul li a')
    sections.forEach(sec => {
        const sectionActionLevel = sec.getBoundingClientRect().top
        if (sectionActionLevel < 300) {
            navlinks.forEach(lnk => {
                lnk.classList.remove("colored")
                lnk.classList.add("first-color") // Initialize all nav links' color
                if (lnk.innerHTML == sec.id) { // OR "lnk.innerText.toLowerCase() == sec.id"
                    // Color the specific link
                    lnk.classList.remove("first-color")
                    lnk.classList.add("colored")
                } 
            })
        }
    }) 
    
    let navBar = document.querySelector(".nav-container")
    const navBarActionLevel = navBar.getBoundingClientRect().top
    if (navBarActionLevel < -47) navBar.classList.add("sticky")
    if (navBarActionLevel > 0) navBar.classList.remove("sticky")
    
    let hexWrapper = document.querySelectorAll(".hex-holder")
    hexWrapper.forEach(el => {
        const hexWrapperActionLevel = el.getBoundingClientRect().top
        if (hexWrapperActionLevel < (window.innerHeight/2)) {
            el.classList.add("anim")
            el.nextElementSibling.classList.add("anim") // Anime the next Element (Description Div)
        }
    }) 
    
    let myCard = document.querySelector(".my-card")
    const myCardActionLevel = myCard.getBoundingClientRect().top
    if (myCardActionLevel < 450) {
        myCard.classList.add("anim")
    }
    
    let skills = document.querySelector(".skills")
    let barLevel = document.querySelectorAll(".bar-level")
    const skillsActionLevel = skills.getBoundingClientRect().top
    if (skillsActionLevel < 450) {
        skills.classList.add("anim")
        barLevel.forEach(el => el.classList.add("anim")) 
    }
    
    let titles = document.querySelectorAll("h2")
    titles.forEach(el => {
        const titleActionLevel = el.getBoundingClientRect().top
        if (titleActionLevel < (window.innerHeight/2)) {
                el.classList.add("anim")
        }
    }) 

    let projectsUl = document.querySelector(".projects-links")
    let project = document.querySelectorAll(".project")
    const projectsUlLevel = projectsUl.getBoundingClientRect().top
    if (projectsUlLevel < (window.innerHeight/2)) {
        projectsUl.classList.add("anim")
        project.forEach(elem => {
            elem.classList.add("anim")
        });
    }
    
    let contactQuestion = document.querySelector(".question")
    const questionActionLevel = contactQuestion.getBoundingClientRect().top
    if (questionActionLevel < 450) {
        contactQuestion.classList.add("anim")
    }
    
    let formInputs = document.querySelector(".form-inputs")
    const formActionLevel = formInputs.getBoundingClientRect().top
    if (formActionLevel < 550) {
        formInputs.classList.add("anim")
    }
}

// Anime Nav Burger Link
let navToggler = document.querySelector(".nav-toggler")
navToggler.onclick = function () {
    let nav = document.querySelector("nav")
    let spans = navToggler.querySelectorAll("SPAN")

    nav.classList.toggle("triger");
    spans.forEach(sp => sp.classList.toggle('triger'))
}

const contacForm = document.querySelector('form[name="questionsForm"]')
contacForm.onsubmit = (ev)=>{
    const contactNameInput = document.querySelector('input[name="visitorName"]').value
    const contactEmailInput = document.querySelector('input[name="visitorEmail"]').value
    const contactMsgInput = document.querySelector('textarea[name="visitorMessage"]').value

    // Name Validiation
    const nameTemplate = /^([A-Z][a-z]*(\.[a-z]+)*(-[a-z]+)*(_[a-z]+)*\s?)+$/ig
    if (!validateField(contactNameInput,"Name",nameTemplate)) return false
 
    // Email Validiation
    const emailTemplate = /^\w+([.-]?\w+)*@\w+([-_]?\w+)*(\.\w{2,})+$/ig
    if (!validateField(contactEmailInput,"Email",emailTemplate)) return false
 
    // Message Validiation
    if (!validateField(contactMsgInput,"Message")) return false

    // All tests passed
    return true
    
    function validateField(val,inputName,tamplate) {
        let test
        tamplate? test = tamplate.test(val) : test = true // If there is no template (validating Message) => test = true
        if ((val == '') || (test == false)) {
            alert("Enter a valid "+inputName+".")
            return false
        } 
        return true
    }
}