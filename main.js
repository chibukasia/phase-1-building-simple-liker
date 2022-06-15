// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const getLike = document.querySelectorAll('.like-glyph');
const span = document.querySelectorAll('span');
for (let singleLike of getLike){
  singleLike.addEventListener('click', () => {
    fetch("http://mimicServer.example.com", {
      method : 'POST',
      headers : {
        'Content-Type':'application'
      },
      body:JSON.stringify({})
    })
    .then(function changeHeart(){
      for (let singleSpan of span){
        singleSpan.textContent = FULL_HEART;
      }
    })
    .catch(function error(error){
      document.body.innerHTML =`<p>Errror Occured</p>`
    })
  } )
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
