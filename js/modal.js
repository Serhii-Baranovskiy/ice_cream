(() => {
    const refs = {
      openModalHeaderBtn: document.querySelector("[data-modal-header-open]"),
      closeModalHeaderBtn: document.querySelector("[data-modal-header-close]"),
      modalHeader: document.querySelector("[data-modal-header]"),
      openHeader: document.querySelector("[open-modal-header]"),

      openModalProductBtnOne: document.querySelector("[data-modal-product-open-first]"),
      openModalProductBtnTwo: document.querySelector("[data-modal-product-open-second]"),
      openModalProductBtnThree: document.querySelector("[data-modal-product-open-third]"),
      closeModalProductBtn: document.querySelector("[data-modal-product-close]"),
      modalProduct: document.querySelector("[data-modal-product]"),
      openProduct: document.querySelector("[open-modal-product]"),

      openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
      closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
      modalAbout: document.querySelector("[data-modal-about]"),
      openAbout: document.querySelector("[open-modal-about]"),
    };
  
    refs.openModalHeaderBtn.addEventListener("click", toggleModalHeader);
    refs.closeModalHeaderBtn.addEventListener("click", toggleModalHeader);

    refs.openModalProductBtnOne.addEventListener("click", toggleModalProduct);
    refs.openModalProductBtnTwo.addEventListener("click", toggleModalProduct);
    refs.openModalProductBtnThree.addEventListener("click", toggleModalProduct);
    refs.closeModalProductBtn.addEventListener("click", toggleModalProduct);

    refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
    refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
  
    function toggleModalHeader() {
      refs.modalHeader.classList.toggle("is-hidden-modal-header");
      refs.openHeader.classList.toggle("is-open-modal-header");
    }

    function toggleModalProduct() {
      refs.modalProduct.classList.toggle("is-hidden-modal-product");
      refs.openProduct.classList.toggle("is-open-modal-product");
    }

    function toggleModalAbout() {
      refs.modalAbout.classList.toggle("is-hidden-modal-about");
      refs.openAbout.classList.toggle("is-open-modal-about");
    }
  })();