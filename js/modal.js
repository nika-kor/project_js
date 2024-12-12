

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
      closeModalBtn: document.querySelector("[data-modal-close-auto]"),
      modal: document.querySelector("[data-modal-auto]"),
  };
  
  refs.modal.classList.remove("is-hidden");
  
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    refs.modal.addEventListener("click", event => {
      if (event.currentTarget === event.target) {
        refs.modal.classList.add("is-hidden");
      }
    });
  
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        refs.modal.classList.add("is-hidden");
      }
      });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})

