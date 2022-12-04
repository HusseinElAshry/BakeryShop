
$(window).scroll(()=>{
    if($(window).scrollTop()>= $("#about").offset().top )
    {
        $(".navbar").addClass("bg-dark");  
        $(".navbar").removeClass("bg-transparent"); 
        $(".upDown").addClass('d-flex');
        $(".upDown").removeClass('d-none');
    }
    else{
        $(".navbar").addClass("bg-transparent"); 
        $(".navbar").removeClass("bg-dark"); 
        $(".upDown").addClass('d-none');
        $(".upDown").removeClass('d-flex');
    }
});
$('.navbar-nav a').click((e)=>{
    let sectionPosition = $(`${e.target.getAttribute("href")}`).offset().top;
    $('html,body').animate({scrollTop : sectionPosition},1000)

});
$(`.upDown`).click(()=>{
    $('html,body').animate({scrollTop : 0},1000)
})