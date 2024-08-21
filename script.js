document.getElementById("cta-button").onclick = function() {
        window.location.href = "https://rspg.pbru.ac.th/index.php?ge=tree";
};
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});