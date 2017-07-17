const $tabLink = $('.tab-link')
const $tabContent = $('.tab-content')

$tabLink.on('click',function(e){
   if($(this).siblings('.tab-content').hasClass('content-show')){
     e.preventDefault()
     $('.content-show').removeClass('content-show')
     $(this).removeClass('tab-active')
   }else{
     $tabLink.removeClass('tab-active')
     $('.content-show').removeClass('content-show')
     $(this).siblings('.tab-content').addClass("content-show")
     $(this).addClass('tab-active')
   }
})
