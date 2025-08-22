let rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem) {
   elem.addEventListener("mouseenter",function() {
      gsap.to(elem.childNodes[3],{
         opacity:1,
         scale:1
      })
   })

   elem.addEventListener("mouseleave",function() {
         gsap.to(elem.childNodes[3],{
         opacity:0,
      })
   })

   elem.addEventListener("mousemove",function(dets) {
      gsap.to(elem.childNodes[3],{
         x:dets.x -elem.getBoundingClientRect().x-50,
         y:dets.y -elem.getBoundingClientRect().y-60
      })
   })
})