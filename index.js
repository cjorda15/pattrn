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

$('.menu').on('click',()=> {
  console.log("Q!!!")
  $('.drop-dn-menu').toggle()
})




// const check = $(this).attr('id');
// if($('.drop-dn-menu').attr('hide')){
//
//   $('.drop-dn-menu').attr('id', 'hide')
// }
// $('.drop-dn-menu').remove('id', 'hide')
