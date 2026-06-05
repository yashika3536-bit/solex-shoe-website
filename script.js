
/* =========================
   NAVBAR SCROLL EFFECT
========================= */
window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#000";
        navbar.style.padding = "15px 8%";
    } else {
        navbar.style.background = "rgba(15,15,15,0.85)";
        navbar.style.padding = "25px 8%";
    }
});


/* =========================
   ADD TO CART SYSTEM
========================= */
let cartCount = 0;

function addToCart(product, price){
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    alert(product + " added to cart!");
}


/* =========================
   SCROLL ANIMATION (FIXED)
========================= */
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".card, .feature-box, .review, .trend-card");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});