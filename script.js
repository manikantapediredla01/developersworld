
const modal = document.getElementById("searchModal");

    function openModal() {
      modal.style.display = "flex";
    }

    function closeModal() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    };
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
    const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
menuBtn.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  menuBtn.innerHTML = navMenu.classList.contains('active') ? '&times;' : '&#9776;';
});
window.addEventListener('DOMContentLoaded', function() {
  const searchBtnMobile = document.querySelector('.search-btn-mobile');
  if (window.innerWidth <= 430) {
    searchBtnMobile.style.display = 'block';
  } else {
    searchBtnMobile.style.display = 'none';
  }
});
window.addEventListener('resize', function() {
  const searchBtnMobile = document.querySelector('.search-btn-mobile');
  if (window.innerWidth <= 430) {
    searchBtnMobile.style.display = 'block';
  } else {
    searchBtnMobile.style.display = 'none';
  }
});