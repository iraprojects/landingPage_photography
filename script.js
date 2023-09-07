const portfolio = document.querySelector('.wrap-services-section')
const modal = document.querySelector('#modal')
const img = document.querySelector('#img-modal')
const btnCloseModal = document.querySelector('#btn-close-modal')
const wrapModal = document.querySelector('.wrap-modal-gallery')

portfolio.addEventListener('click', (e) => {
  e.stopPropagation()
  e.target.closest('img') ? show(e) : ''
})

const show = (e) => {
  img.src = e.target.src
  modal.classList.remove('hidden-modal')
}

const closeModal = () => {
  modal.classList.add('hidden-modal')
}

btnCloseModal.addEventListener('click', closeModal)
wrapModal.addEventListener('click', closeModal)


