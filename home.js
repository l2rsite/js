var App=webpackJsonpApp([34],{Ey7U:function(e,i){$(document).ready(function(){for(var e=(new Swiper("#slide-features",{slidesPerView:"auto",loop:!0,autoplay:{enabled:!0,delay:8e3},navigation:{nextEl:"#slide-features .swiper-button-next",prevEl:"#slide-features .swiper-button-prev"}}),["trending","drama","movie","animation"]),i=0;i<e.length;i++){new Swiper("#slide-"+e[i],{slidesPerView:4,spaceBetween:24,slidesPerGroup:4,navigation:{nextEl:"#slide-"+e[i]+" .swiper-button-next",prevEl:"#slide-"+e[i]+" .swiper-button-prev"},breakpoints:{500:{slidesPerView:2,slidesPerGroup:2,navigation:{nextEl:null,prevEl:null}}}})}})}},["Ey7U"]);$(document).ready(function(){function calcHeight(posterClass){posterClass.forEach(element=>{if($(element)){const width=$(element).eq(0).width();$(element).height(width*1.4)}});}
calcHeight(['.poster','.big-poster','.small-poster','.top-poster'])
$('#scrollToComment').on('click',function(){$('#comment').get(0).scrollIntoView({block:"start",behavior:"smooth"});});$('#btn-filter').on('click',function(){$('#filter').get(0).scrollIntoView({block:"start",behavior:"smooth"});});$("#lightOff").click(function(){const $this=$(this);const $overlay='<div id="background_lamp"></div>';if($this.hasClass('off')){$(".app-header.navbar-xs.black.box-shadow").css("z-index",99999)
$this.removeClass('off');$this.children("span").text('Táº¯t Ä‘Ă¨n');$("#background_lamp").remove();}else{$(".app-header.navbar-xs.black.box-shadow").css("z-index",999)
$("#phe-player-container").css("z-index",1001)
$this.addClass('off');$this.children("span").text('Báº­t Ä‘Ă¨n');$('body').append($overlay);}});if($("iframe")){const iframe_w=$("iframe").eq(0).width();$("iframe").height(iframe_w*(9/16));}
$('.list-server').on('click',(e)=>{const $this=$(e.currentTarget);if($this.hasClass('active')){}else{$('.list-server.active').children().first().remove()
$('.list-server.active').removeClass('active')
$this.addClass('active')
$this.prepend('<i class="fal fa-compact-disc fa-spin"></i>')}})
function hoverFadeOut(e){var cursorFollower=this.querySelector('.cursor-shadow');cursorFollower.style.opacity=0;};function hoverReveal(e){var cursorFollower=this.querySelector('.cursor-shadow');var offset=$('.grid-top-airing').offset()
cursorFollower.style.opacity=1;cursorFollower.style.top=e.pageY-offset.top+'px';cursorFollower.style.left=e.pageX-offset.left+'px';};var btnGroups=document.querySelectorAll('.grid-top-airing');[].forEach.call(btnGroups,function(group){group.appendChild(document.createElement('span')).classList.add('cursor-shadow');group.addEventListener('mousemove',hoverReveal);group.addEventListener('mouseleave',hoverFadeOut);});function epiScroll(wraps){wraps.forEach(wrap=>{const wrapper=wrap
if(wrapper.length>0){n=wrapper.find('.list-epi').length
p=wrapper.find('.list-epi .active').parent()
l=Math.floor(p.position().top/p.height());wrap.animate({scrollTop:p.height()*l},1000)}})}
epiScroll([$('.pre-scrollable.tab-pane')])})
