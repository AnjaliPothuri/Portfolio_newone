function para(){
    document.querySelector("#para1").style.transition="transform 1s";
    document.querySelector("#para1").style.transform="translate(-70px)"; 
}
setTimeout(para,1000);

function skill1(){
    document.querySelector("#techskill1").style.transition="transform 1s";
    document.querySelector("#techskill1").style.transform="translate(1px)"; 
}
setTimeout(skill1,2000);
function skill2(){
    document.querySelector("#techskill2").style.transition="transform 1s";
    document.querySelector("#techskill2").style.transform="translate(1px)"; 
}
setTimeout(skill2,2000);
function skill3(){
    document.querySelector("#techskill3").style.transition="transform 1s";
    document.querySelector("#techskill3").style.transform="translate(1px)"; 
}
setTimeout(skill3,2000);
function skill4(){
    document.querySelector("#techskill4").style.transition="transform 1s";
    document.querySelector("#techskill4").style.transform="translate(1px)"; 
}
setTimeout(skill4,2000);
function skill5(){
    document.querySelector("#techskill5").style.transition="transform 1s";
    document.querySelector("#techskill5").style.transform="translate(1px)"; 
}
setTimeout(skill5,2000);


function softskill1(){
    document.querySelector("#comm1").style.transition="transform 1s";
    document.querySelector("#comm1").style.transform="translate(-5px)";
}
setTimeout(softskill1,2000);
function softskill2(){
    document.querySelector("#comm2").style.transition="transform 1s";
    document.querySelector("#comm2").style.transform="translate(-5px)";
}
setTimeout(softskill2,2000);
function softskill3(){
    document.querySelector("#comm3").style.transition="transform 1s";
    document.querySelector("#comm3").style.transform="translate(-5px)";
}
setTimeout(softskill3,2000);
function softskill4(){
    document.querySelector("#comm4").style.transition="transform 1s";
    document.querySelector("#comm4").style.transform="translate(-5px)";
}
setTimeout(softskill4,2000);





document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation items and their corresponding sections
    const navItems = document.querySelectorAll("#mainlist .subli");
    const sections = {
        "Home": document.querySelector(".Home"),
        "About Me": document.querySelector("#about"),
        "Education": document.querySelector("#Education"),
        "Skills": document.querySelector("#skills"),
        "Contact Me": document.querySelector("#contactMe")
    };

    // Function to scroll smoothly to a section
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }

    // Add click event listeners to each navigation item
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const sectionName = item.textContent.trim();
            const targetSection = sections[sectionName];
            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const hireButton = document.getElementById("inp");
    const contactSection = document.getElementById("contactMe");

    hireButton.addEventListener("click", function() {
        // Smoothly scroll to the contact section
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});





