
let sidebar = $('#sidebar').innerWidth()


$('#open').click(() => {

    // console.log(sidebar)
    if ($('#sideNav').css('left') == '0px') {
        $('#sideNav ').animate({ left: -sidebar }, 1000)
        $('#text').css({ marginLeft: '0px' })
    } else {
        $('#sideNav ').animate({ left: '0px' }, 1000)
        $('#text').css({ marginLeft: '200px' })
    }


})
$('#close').click(() => {
    $('#sideNav ').animate({ left: -sidebar }, 1000)
    $('#text').css({ marginLeft: '0px' })
})

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    // console.log(wScroll);
    if(wScroll > 300){
        $('#open').css({display: 'none'} )
    }else{
        $('#open').css({display: 'block'}  )
    }
});

var lastItem;
$('paragraph')
$('.singer').click(function (currentItem) {
    var currentItem = $(this);
    if ($(this).next().height() == 0) {

        $(lastItem).next().animate({ height: '0px' }, 500);

        $(this).next().animate({ height: '150px', opacity: 1 }, 500);
    } else {

        $(this).next().animate({ height: '0px', opacity: 1 }, 500);
    }
    lastItem = $(this);
});


$(".description").hide();
$(".description:first").show();
$(".toggle").click(function () {
    $(this).next(".description").slideToggle(500);
    $(this).siblings(".toggle").next(".description").slideUp(500);
});



const deadline = new Date("2023, 4, 5").getTime();


const intervalId = setInterval(() => {

    const now = new Date().getTime();


    const distance = deadline - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.querySelector('.countdown').innerHTML = ` <div class="col-3">
  <div class="days p-5 border border-1 border-white ">
      <h3>${days} D</h3>
  </div>
</div>
<div class="col-3">
  <div class="hours p-5 border border-1 border-white">
      <h3>${hours} h</h3>
  </div>
</div>
<div class="col-3 ">
  <div class="minutes p-5 border border-1 border-white">
      <h3>${minutes} m</h3>
  </div>
</div>
<div class="col-3">
  <div class="seconds p-5 border border-1 border-white">
      <h3>${seconds} s</h3>
  </div>
</div>`


    if (distance < 0) {
        clearInterval(intervalId);
        console.log("");
    }
}, 1000);



$( function () {
    var number = 100;
    $("textarea").keyup(function () {
        var letters = $(this).val().length;
        // console.log(letters);
        var Counter = number - letters;
        // console.log(Counter);
        if (Counter <= 0) {
            $("#Counter").text("your available character finished");
        } else {
            $("#Counter").text(Counter);
        }
    });
});
$('a[href^="#"]').click(function (e){
    let linkhref = $(e.target).attr('href');
    let sectionOffest = $(linkhref).offset().top;
    $('html,body').animate({scrollTop:sectionOffest})
})