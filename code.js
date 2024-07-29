let intervalId
const images=["bg.jpg","volley.jpg","book.jpg","adams.jpg","cannon.jpg","print.jpg","red.jpg","cook.jpg"]


function init(){
    intervalId = window.setInterval(function(){
        changeImage({target:tag("hero")})
      }, 10000);    
}


function changeImage(evt){
  let index=parseInt(evt.target.dataset.index)+1
  if(index>=images.length){index=0}
  formatHero(evt.target, images[index])
  evt.target.dataset.index=index


}

function tag(id){
    return document.getElementById(id)
}

function formatHero(div,imgName){
    div.style.background=`url(images/${imgName}) no-repeat center center fixed`
    div.style.WebkitBackgroundSize="cover"
    div.style.MozBackgroundSize="cover"
    div.style.OBackgroundSize="cover"
    div.style.backgroundSize="cover"
    div.style.height="90%"
    div.style.width="100%"
}