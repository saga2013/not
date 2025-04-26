const Success = document.getElementById('Success')
const fail = document.getElementById('Fail')
const worning = document.getElementById('worning')

Success.addEventListener('click', ()=>{
    Toastify({
        text: "Well done!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "20px"
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

worning.addEventListener('click', ()=>{
    Toastify({
        text: "Warning!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #ffb347, #ffcc33)",   
            borderRadius: "20px"       
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

fail.addEventListener('click', ()=>{
    Toastify({
        text: "Oh snap!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #e53935, #e35d5b)",
          borderRadius: "20px"
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

