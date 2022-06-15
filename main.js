// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const getLike = document.querySelectorAll('.like-glyph');
const span = document.querySelectorAll('span');
for (let singleLike of getLike){
  singleLike.addEventListener('click', (e) => {
    const specificLike = e.target
    mimicServerCall()
    .then(function (){
      if (specificLike.innerHTML === FULL_HEART){
        specificLike.innerHTML = `${EMPTY_HEART}`
      }else{
        specificLike.innerHTML = `${FULL_HEART}`
      }
      
    })
    .catch(function error(error){
      const clearError = ()=>document.getElementById('modal').className = '';
      setTimeout(clearError, 300)
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
