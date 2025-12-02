const MATERIopenbutton = document.querySelector("#MATERI-open-button");
const MATERIclosebutton = document.querySelector("#MATERI-close-open")

MATERIopenbutton.addEventListener("click", () => {
    //toggle mobile MATERI visibility
    document.body.classList.toggle("show-mobile-MATERI");
});

// Close MATERI when the close button is clicked
MATERIclosebutton.addEventListener("click", () => MATERIopenbutton.click ());