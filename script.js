var currentId = "";

 $(window).on('load', function(e){
    pageNavigation();
});

$(window).on( 'hashchange', function(e){
    pageNavigation();
});

function pageNavigation(){
    var newId = window.location.hash;
    if(newId === '') newId = "#home";
    else
    {
        $(currentId).toggleClass('to-show');
        $(currentId).css('display', 'none');
    }
    $(newId).toggleClass('to-show');
    $(newId).css('display', 'block');
    currentId = newId;
}

$('#technical-skills a').on('click', function (e) {
    $("#technical-skills a").removeClass('active');
    $(e.target).addClass('active');
    console.log(e.target);
  })