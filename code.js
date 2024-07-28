let intervalId
const images=["volley.jpg","spin.jpg","book.jpg","adams.jpg","cannon.jpg","print.jpg","red.jpg","bg.jpg","cook.jpg"]


function init(){
    intervalId = window.setInterval(function(){
        changeImage({target:tag("hero")})
      }, 10000);    
}


function changeImage(evt){
  console.log("I'm changing!",evt.target)
  let index=parseInt(evt.target.dataset.index)+1
  if(index>=images.length){index=0}
  evt.target.style.background=`url(images/${images[index]}) no-repeat center center fixed`
  evt.target.dataset.index=index


}

function tag(id){
    return document.getElementById(id)
}