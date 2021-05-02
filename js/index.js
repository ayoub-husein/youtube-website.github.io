$(document).ready(function(){
    
    $('.first-list-element').addClass('active')
    $('.nav-item').click(function(){
    $('.nav-item').removeClass('active')
    $(this).addClass('active')  
    })

    $('#toggler').click(function(event){
        $('#wrap').toggleClass('toggled')
    

        var right = $('.sidebar').css('right')
        if (right == '0px')
        {
            $('.sidebar').css({'right': '-17rem'})
            $('.layer').fadeOut()  
        }
        else
        {
            $('.sidebar').css({'right': '0'})
            $('.layer').fadeIn()

        }
    })

    $('.layer').click(function()
    {
        $('.sidebar').css({'right': '-17rem'})
        $('.layer').fadeOut()
    })

    $('.search-icon').click(function(){
        $('.search-input').slideToggle('slow')
    })
        
    //*********************************

    //         SEARCH PAGE

    //*********************************
    
        
    $('#search-filters-icon').click(function(){
        $('.filter-colum').slideToggle('slow')
    })

    $('input:checkbox').click(function(){

        var $box = $(this)

        if ($box.is(':checked')){
            
            var group = "input:checkbox[name='" + $box.attr("name") + "']"
            $(group).prop("checked", false)
            $box.prop("checked", true)
        }

    })

    //*********************************

    //         WATCH PAGE

    //*********************************

    $('#myBtn').on('click', function(){
        read()
    })

    $('.reply').click(function(){
        $(this).parents('div.row').next('div.card').toggle()
    })

    //*********************************

    //         LOG PAGE

    //*********************************

    $('.remove').click(function(){
        $(this).parents('.card').hide()
    })
        
});


//*********************************

//         WATCH PAGE

//*********************************

function read () {
    var dots = document.getElementById('dots')
    var moreText = document.getElementById('more')
    var btnText = document.getElementById('myBtn')

    if (dots.style.display === 'none') {
        dots.style.display = 'inline'
        btnText.innerHTML = 'عرض المزيد'
        moreText.style.display = 'none'

    } else {
        dots.style.display = 'none'
        btnText.innerHTML = 'عرض عناصر اقل'
        moreText.style.display = 'inline'
    }
}