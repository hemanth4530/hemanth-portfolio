document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.animate([{opacity:0, transform:"translateY(18px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:550, easing:"cubic-bezier(.2,.8,.2,1)", fill:"both"});
      observer.unobserve(e.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll(".project-card,.skill-card,.timeline article,.edu").forEach(el => observer.observe(el));
