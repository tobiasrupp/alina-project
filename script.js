$(document).ready(function()
{
    $('.flower1').draggable();
});

$(document).ready(function()
{
    $(".flower2").draggable();
});

$(document).ready(function()
{
    $('.flower3').draggable();
});

$(document).ready(function()
{
    $('.flower4').draggable();
});

$(document).ready(function()
{
    $('.flower5').draggable();
});

$(document).ready(function()
{
    $('.flower6').draggable();
});

$(document).ready(function()
{
    $('.flower7').draggable();
});

$(document).ready(function()
{
    $('.flower8').draggable();
});

$(document).ready(function()
{
    $('.flower9').draggable();
});

$(document).ready(function()
{
    $('.leaf').draggable();
});

$(document).ready(function()
{
    $('.leaf2').draggable();
});

$(document).ready(function() {
   $('.leaf2').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.leaf2').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.leaf2').click(function() {
       $(this).toggle(1000);
   }); 
});


$(document).ready(function()
{
    $(".content").hover(function()
    {
        $(".flowers").fadeOut('slow', function ()
        {
            $(".flowers").fadeIn('slow');
        });
    });
});