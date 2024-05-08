/*const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    //BUTTON CLICK ACTIVE CLASS
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className+='active-btn';
        })
    }
    //SECTIONS ACTIVE CLASS
    allSections.addEventListener('click',(e) =>{
        //console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            //REMOVE SELECTED FROM THE OTHER BUTTONS
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //HIDE OTHER SECTIONS
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTransitions();*/
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controlls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelectorAll('.main-content');
    const header = document.querySelector('.header');

    function PageTransitions() {
        // BUTTON CLICK ACTIVE CLASS
        for (let i = 0; i < sectBtn.length; i++) {
            sectBtn[i].addEventListener('click', function () {
                // Remove active class from current active button
                document.querySelector('.active-btn').classList.remove('active-btn');
                // Add active class to clicked button
                this.classList.add('active-btn');

                // Change background color based on button clicked
                const bgColor = this.dataset.bgcolor;
                document.body.style.backgroundColor = bgColor;

                // Trigger animation for the corresponding section
                const id = this.dataset.id;
                const element = document.getElementById(id);
                activateSection(element);
            });
        }

        // Activate the section and hide others
        function activateSection(section) {
            sections.forEach((s) => {
                s.classList.remove('active');
            });
            section.classList.add('active');
        }
    }

    PageTransitions();
});