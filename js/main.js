'use strict';

//console.log('halo');

$( document ).ready( function() {

    var slider = $('#slider');
    console.log(slider);

    var slideShow = $('.slide-show');
    console.log(slideShow);

    var slideCount = $('.slide-show').find('.single-slide').length;
    console.log(slideCount);

    var slideWidth = 100 / slideCount;
    console.log(slideWidth);

    var slideIndex = 0;

    $('.slide-show').css('width', slideCount * 100+'%');
    
    function slide() {
        $('.slide-show').find('.single-slide').each(function (){
            $('.sigle-slide').css({
                'margin-left': slideWidth * slideIndex,
                'width': 100 / slideCount + '%',
            })
        })        
    }
    
    $('slider-arrows').click('next-slide')
} );

//jQuery
//
//1. Stwórz zmienne
//a. slider = cały kontener z #slider
//b. slideshow = kontener z klasą .slide-show
//c. slideCount = policz dzieci elementu .slide-show
//d. slideWidth = podziel 100 przez ilość slidów (slideCount)
//e. slideIndex = wyjściowy index slidu równy 0
//
//2. Kontenerowi .slide-show przypisz dynamicznie wielkość w procentach (%) za pomocą .css()
//równą ilości slidów razy 100 (np. 5 slidów = 500%)
//
//3.
//
//4. W obiekcie slideShow za pomocą metody find() slide(.single-slide) i dla każdego (metoda
//each() - https://api.jquery.com/each/) wykonaj funkcję, która przypisze elementowi .single-
//slide lewy margines w procentach (szerokość slidu razy indeks) oraz szerokość w procentach
//(dla 5 slidów to 100%/5 czyli 20%)
//
//5. Dla przycisków prev i next wywołaj funkcję onclick – funkcja slide() przyjmuje parametr
//slideIndex – 1 dla prev i slideIndex + 1 dla next
//
//6. Zdefiniuj funkcję slide() z parametrem newSlideIndex, która odpowiada za przewijanie
//slidów:
//a. Sprawdź, czy jest to pierwszy lub ostatni slide – jeśli tak, to przerwij działanie funkcji
//b. Zdefiniuj zmienną slideCaption = przypisz do niej napis napis slidzie, który ma się
//pokazać po wywołaniu funkcji
//c. Ukryj napis – hide()
//d. Stwórz zmienną marginLeft, która przyjmie wartość procentową (%) aktualnego
//indexu slidu pomnożoną przez -100
//e. Na elemencie .slide-show wykonaj animacje – margin-left: marginLeft, nadaj jej czas
//trwania w milisekundach i wywołaj funkcję callback
//f. Funkcja callback ma do zmiennej slideIndex przypisać nowy index slidu oraz
//wyświetlić napis na slidzie za pomocą .fadeIn()