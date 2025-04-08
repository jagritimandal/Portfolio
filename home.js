/*document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});*/
function navigateToPortfolio() {
    alert('Welcome to My Portfolio');
    window.location.href = '#About';
  }
  function navigateToContact() {
    alert('Welcome to My Portfolio');
    window.location.href = '#contact';
  }
// Scroll Animation: Add "show" class when section comes into view
document.addEventListener("scroll", function() {
    document.querySelectorAll(".fade-in").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
            section.classList.add("show");
        }
    });
});

