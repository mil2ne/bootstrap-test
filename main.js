// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown' // npm i @popperjs/core 필요
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

// new Modal(document.getElementById('#exampleModal'), {
//   backdrop: false,
//   keyboard: false,
//   focus: false
// })