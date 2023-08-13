// scrollTo - scrollBy

/* 

scrollTo(pageX , pageY )

scrollBy(x , y)


*/

const $ = document;
const scrollBar = $.querySelector('.scroll-bar')

let fullHeight = $.body.scrollHeight - $.body.clientHeight;

document.addEventListener('scroll',function(e){
  let currentScroll = $.body.scrollTop;
  let result = Math.floor((currentScroll * 100)/fullHeight);
  scrollBar.style.width = result + '%'
})

console.log(scrollBar.style.setProperty('width','20px'))