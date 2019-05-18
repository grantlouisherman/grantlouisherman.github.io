
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

window.onload = () => {
  document.body.style.visibility = 'visible'
  // document.getElementById('TechTalk').addEventListener('click', (event) => {
  //   document.getElementById('SubSection-TechTalk').style.visibility = 'visible'
  // })
}
