/* =========================================
   PASTEL GALAXY PORTFOLIO JAVASCRIPT
   ========================================= */


/* =========================================
   LOADER
   ========================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1300);

});


/* =========================================
   GENERATE STARS
   ========================================= */

const starsContainer =
    document.getElementById("stars");


const starCount = 180;


for (let i = 0; i < starCount; i++) {

    const star =
        document.createElement("span");

    star.classList.add("star");

    const size =
        Math.random() * 2.5 + 0.5;

    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;

    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;

    star.style.animationDelay =
        `${Math.random() * 5}s`;

    star.style.animationDuration =
        `${2 + Math.random() * 4}s`;

    starsContainer.appendChild(star);

}


/* =========================================
   SHOOTING STARS
   ========================================= */

const shootingContainer =
    document.getElementById("shootingStars");


function createShootingStar() {

    const star =
        document.createElement("div");

    star.classList.add("shooting-star");

    star.style.left =
        `${Math.random() * 100 + 20}%`;

    star.style.top =
        `${Math.random() * 60}%`;

    star.style.animationDuration =
        `${2.5 + Math.random() * 3}s`;

    shootingContainer.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 6000);

}


setInterval(
    createShootingStar,
    3500
);


/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   MOBILE MENU
   ========================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".navbar ul");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".navbar ul a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


/* =========================================
   CURSOR GALAXY EFFECT
   ========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================
   PARALLAX GALAXY EFFECT
   ========================================= */

const planets =
    document.querySelectorAll(".planet");


window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    planets.forEach(
        (planet, index) => {

            const speed =
                (index + 1) * .035;

            planet.style.transform =
                `translateY(${scroll * speed}px)`;

        }
    );

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".navbar ul a"
    );


const navObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });

                    const activeLink =
                        document.querySelector(
                            `.navbar ul a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            threshold: .4
        }

    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* =========================================
   3D TILT EFFECT
   ========================================= */

const cards =
    document.querySelectorAll(
        ".achievement-card, .skill-card, .education-card, .career-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 15;

            const rotateY =
                (centerX - x) / 15;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================
   RANDOM SPARKLES
   ========================================= */

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.innerHTML =
        Math.random() > .5
            ? "✦"
            : "✧";

    sparkle.style.position =
        "fixed";

    sparkle.style.left =
        `${Math.random() * 100}%`;

    sparkle.style.top =
        `${Math.random() * 100}%`;

    sparkle.style.color =
        "rgba(210, 177, 201, .6)";

    sparkle.style.fontSize =
        `${8 + Math.random() * 10}px`;

    sparkle.style.pointerEvents =
        "none";

    sparkle.style.zIndex =
        "-1";

    sparkle.style.animation =
        "twinkle 2s ease-in-out";

    document.body.appendChild(
        sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    }, 2200);

}


setInterval(
    createSparkle,
    1200
);


/* =========================================
   MUSIC
   ========================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");


let isPlaying = false;


musicBtn.addEventListener(
    "click",
    () => {

        if (!isPlaying) {

            music.play()
                .then(() => {

                    isPlaying = true;

                    musicBtn.classList.add(
                        "playing"
                    );

                    musicBtn.innerHTML =
                        "❚❚";

                })
                .catch(() => {

                    alert(
                        "Please interact with the page first to play music."
                    );

                });

        } else {

            music.pause();

            isPlaying = false;

            musicBtn.classList.remove(
                "playing"
            );

            musicBtn.innerHTML =
                "♫";

        }

    }
);


/* =========================================
   HERO PHOTO PARALLAX
   ========================================= */

const heroVisual =
    document.querySelector(".hero-visual");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!heroVisual) return;

        const x =
            (window.innerWidth / 2 - event.clientX)
            / 70;

        const y =
            (window.innerHeight / 2 - event.clientY)
            / 70;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================================
   SMOOTH SCROLL
   ========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================
   RANDOM SHOOTING STAR ON LOAD
   ========================================= */

setTimeout(() => {

    createShootingStar();

}, 1500);


setTimeout(() => {

    createShootingStar();

}, 3000);