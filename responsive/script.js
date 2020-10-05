const quote = "";


const menyBtn = document.getElementById('hamburger-btn');
console.log(menyBtn)

  menyBtn.addEventListener("click", function() {
      
    const btn = document.getElementById('desk-menu');
    console.log(btn)
    btn.classList.toggle("show");
  });
