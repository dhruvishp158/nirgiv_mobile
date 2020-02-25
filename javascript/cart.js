//------------------------------iphone search------------------------------



function myFunction() {
        var input, filter, divMain, divIn, look, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        divMain = document.getElementById("mobile-3");
        divIn = divMain.getElementsByTagName("div");

        for (i = 0; i < divIn.length; i++) {
                look = divIn[i].getElementsByTagName("h3")[0];
                txtValue = look.textContent || look.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {

                        divIn[i].style.display = "";
                } else {
                        divIn[i].style.display = "none";
                }
        }
}



//-----------------------samsung search-----------------



function myFunction2() {
        var input, filter, divMain, divIn, look, i, txtValue;
        input = document.getElementById("search2");
        filter = input.value.toUpperCase();
        divMain = document.getElementById("Samsung");
        divIn = divMain.getElementsByTagName("div");

        for (i = 0; i < divIn.length; i++) {
                look = divIn[i].getElementsByTagName("h3")[0];
                txtValue = look.textContent || look.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {

                        divIn[i].style.display = "";
                } else {
                        divIn[i].style.display = "none";
                }
        }
}




//---------------------------------------ADD AND REMOVE CART



var atcBtn = document.querySelectorAll('#i-btn');
let allItems = '';
var cartBtn = document.getElementById('cart-btn');
var noneDiv = document.querySelector('#noneDiv');
var checkout = document.querySelector('#checkout');
var checkbtn = document.querySelector('.ckout');
var leftbtn = checkout.querySelector('.go_back');
cartBtn.onclick = function () {

        noneDiv.classList.toggle('cartOpen');
        // checkbtn.style.display="block";

        checkbtn.onclick = function () {
                console.log('ii');

                checkout.style.display = "block";
                leftbtn.onclick = function () 
                {
                        checkout.style.display = "none";
                }
        }
}

var notification=document.querySelector('#notification');
console.log(notification);
var count=1;
atcBtn.forEach(function (btn) {
        btn.onclick = function () {

                notification.innerText=count++;
                console.log(notification.innerText);

                var name = btn.parentElement.querySelector('h3').innerText;
                var price = btn.parentElement.querySelector('h1').innerText;
                var imgSrc = btn.parentElement.querySelector('img').src;
                console.log(imgSrc);


                let temp = `
                <div class="noneTempStyle">
                <div><img style="width:70px;height:70px" src="${imgSrc}"></div>
                <div><h3>${name} </h3></div>
                <div> <h3>${price}</h3></div>
                <div> <input type="button" id="btn-remove" value="REMOVE"></div>
                </div>`

                noneDiv.innerHTML += temp;
                // var ckout=document.querySelector('.noneTempStyle');
                // var ckbtn=document.createElement('button');
                // ckbtn.className="ckout";
                // ckout.appendChild(ckbtn);       
                var btn_remove = document.querySelectorAll('#btn-remove');
                btn_remove.forEach(function (r_btn) {
                        r_btn.onclick = function () {
                                r_btn.parentElement.parentElement.remove();
                                notification.innerText= notification.innerText-1;

                        }
                })

                var show = noneDiv.querySelector('.ckout');
                show.onclick = function () 
                {
                        checkout.style.display = "block";
                        leftbtn.onclick = function () 
                        {
                                checkout.style.display = "none";
                        }

                }


        }

});








//----------------------------Rsponsive nav bar--------------------------------------------





