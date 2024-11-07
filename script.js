const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".box")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".box")[1].classList.add("fadeInLeft");
            document.querySelectorAll(".box")[6].classList.add("fadeInLeft");
            document.querySelectorAll(".box")[2].classList.add("fadeInTop");
            document.querySelectorAll(".box")[3].classList.add("fadeInTop");
            document.querySelectorAll(".box")[4].classList.add("fadeInRight"); 
            document.querySelectorAll(".box")[5].classList.add("fadeInRight"); 
            document.querySelectorAll(".box")[9].classList.add("fadeInRight"); 
            document.querySelectorAll(".box")[7].classList.add("fadeInDown"); 
            document.querySelectorAll(".box")[8].classList.add("fadeInDown"); 
        }
    })
})

observer.observe(document.querySelector(".container"));


document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const body = document.querySelectorAll("body");

    boxes.forEach((box, index) => {
        box.addEventListener("mouseover", function() {
            for (let i = 0; i < boxes.length; i++) {
                if (i !== index) {
                    boxes[i].style.filter = "blur(2px)";
                    boxes[i].style.width = "189px";
                    boxes[i].style.height = "85px";
                    boxes[i].style.transform = "scale(0.9)";
                }
                
                else {
                    boxes[i].style.marginTop = "-4px";
                    boxes[i].style.width = "280px";
                    boxes[i].style.height = "180px";
                    boxes[i].style.fontFamily = "sans-serif";
                    boxes[i].style.font = "900";
                    boxes[i].style.zIndex = "1000";
                    // boxes[i].style.transform = "translateY(-22px) scale(1.3)"
                }

            }
        });

        box.addEventListener("mouseout", function() {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.filter = "none";
                boxes[i].style.transform = "none";
                boxes[i].style.marginTop = "22px";
                boxes[i].style.width = "200px";
                boxes[i].style.height = "90px";
                boxes[i].innerHTML = "";
                // if (i !== index) {
                //     boxes[i].style.width = "";
                //     boxes[i].style.height = "";
                // }
        }
        });
    });
});
