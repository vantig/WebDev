 burger=document.querySelector(".header_burger")
 list=document.querySelector(".burger_list");
main=document.querySelector(".main");
nav=document.querySelector("nav");
burger.addEventListener("click",function (){
    burger.classList.toggle('active');
   list.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
});