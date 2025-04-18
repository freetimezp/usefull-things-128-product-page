
document.addEventListener("DOMContentLoaded", function () {
    const productCopy = document.querySelector(".product-copy");
    const productImg = document.querySelector(".product-img img");
    const segmentHeight = (productCopy.scrollHeight - window.innerHeight) / 8;

    window.addEventListener("scroll", function () {
        let currentSegment = Math.floor(window.scrollY / segmentHeight) + 1;
        currentSegment = Math.min(9, Math.max(1, currentSegment));

        productImg.src = "./assets/images/" + currentSegment + ".png";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function randomCharacter() {
        const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM01234567890";

        return chars[Math.floor(Math.random() * chars.length)];
    }

    function setInitialDataTextAttribute() {
        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach((p) => {
            const textContent = p.textContent.trim();

            if (!p.getAttribute("data-text") && textContent) {
                p.setAttribute("data-text", textContent);
                p.textContent = "";
            }
        });
    }

    function revealText(element) {
        const originalText = element.getAttribute("data-text");
        let revealedText = "";
        let index = 0;

        function revealNextLetter() {
            if (index < originalText.length) {
                revealedText += originalText[index];
                let tempText = revealedText;

                for (let i = index + 1; i < originalText.length; i++) {
                    tempText += randomCharacter();
                }

                element.textContent = tempText;
                index++;

                setTimeout(revealNextLetter, 60);
            } else {
                element.textContent = originalText;
            }
        }

        revealNextLetter();
    }

    setInitialDataTextAttribute();


    const paragraphs = document.querySelectorAll("p[data-text]");
    paragraphs.forEach((p) => {
        revealText(p);
    });
});


gsap.from(".nav", {
    duration: 0.5,
    y: -50,
    delay: 0
});

gsap.from(".product-img", {
    duration: 0.5,
    x: -300,
    opacity: 0,
    delay: 0.5
});

gsap.from(".product-vars img", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.75
});

gsap.from(".sizes .size", {
    duration: 1.5,
    scale: 0,
    opacity: 0.1,
    stagger: 0.125,
    delay: 1
});

gsap.from(".size-btn", {
    duration: 0.4,
    scale: 0,
    delay: 1.25
});

gsap.from(".product", {
    duation: 0.5,
    y: 100,
    opacity: 0,
    stagger: 0.25,
    delay: 1.5
});





















