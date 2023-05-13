// template_m7mb8me
// service_8zt6ylk
// _Y2Ge7ZZKvxZAk1ef


let contrastToggle = false
function toggleContrast() {
    
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += ' dark-theme'
    }
    else {
        document.body.classList.remove('dark-theme')
    }
    console.log('its working')
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_8zt6ylk",
      "template_m7mb8me",
      event.target,
      "_Y2Ge7ZZKvxZAk1ef"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at bmciver.m9.2000@gmail.com"
      );
    });
}

let isModalOpen = false
function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}

// toggleModal()