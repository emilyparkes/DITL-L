const button = document.getElementById('clicker')
button.addEventListener('click', togglePuppy)

function togglePuppy () {
  const puppy = document.getElementById('random-puppy')

  puppy.classList.toggle('hidden')

  // if (puppy.classList.contains('hidden')) {
  //   puppy.classList.remove('hidden')
  // } else {
  //   puppy.classList.add('hidden')
  // }
}
