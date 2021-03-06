import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalButton = $('#gallery img')
    this.modal = $('.modal')
    this.closeModalButton = $('.modal__close')
    this.events()
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this))
    this.closeModalButton.click(this.closeModal.bind(this))
    $(document).keyup(this.keyPressHandler.bind(this))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {  // .keyCode or .which
      this.closeModal()
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible')
    const href = this.openModalButton.attr('href')
    return false;  // to be inactive to "#" behavior
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible')
  }
}

export default Modal
