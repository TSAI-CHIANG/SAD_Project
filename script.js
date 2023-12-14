const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX, lastY;

function getEventPosition(event) {
    let x, y;
    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX - canvas.offsetLeft;
        y = event.touches[0].clientY - canvas.offsetTop;
    } else {
        x = event.offsetX;
        y = event.offsetY;
    }
    return { x, y };
}

function startDrawing(event) {
    isDrawing = true;
    const { x, y } = getEventPosition(event);
    lastX = x;
    lastY = y;
}

function draw(event) {
    if (!isDrawing) return;

    const { x, y } = getEventPosition(event);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function stopDrawing() {
    isDrawing = false;
}



function login() {
                // 檢查帳號和密碼是否為空
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                if (username.trim() === '' || password.trim() === '') {
                    alert('請輸入帳號密碼');
                    return;
                }
                  if (username.trim() != '10001' || password.trim() != '10001') {
                    alert('帳密錯誤，無權登入');
                    return;
                }


                // 模擬登入成功
                document.getElementById('login-block').style.display = 'none';
                document.getElementById('success-block').style.display = 'block';
            }

 function showProductIdBlock() {
      const vercode=document.getElementById('verification-code').value;
      if (vercode.trim() === '') {
                    alert('請輸入1~4');
                    return;
                }
                   document.getElementById('success-block').style.display = 'none';
            document.getElementById('product-id-block').style.display = 'block';
        }

function submitProductId() {
                // 
              const productId = document.getElementById('product-id').value;
                const pid = document.getElementById('product-id').value;

                if (pid.trim() === '' ) {
                    alert('請輸入product id');
                    return;
                }

                // 模擬
                document.getElementById('product-id-block').style.display = 'none';
                document.getElementById('inspection-block').style.display = 'block';
        }

          function submitInspectionResults() {
        // 在這裡處理提交驗貨結果的邏輯
        alert('驗貨結果提交成功，進行相應的處理。');
    }
    function handleResultSelection(result) {
        var identificationFeaturesSection = document.getElementById('identificationFeaturesSection');

        if (result === 'No') {
            // 顯示識別特徵欄位
            identificationFeaturesSection.style.display = 'block';
        } else {
            // 隱藏識別特徵欄位
            identificationFeaturesSection.style.display = 'none';
        }
    }
 
    function goBack() {
        document.getElementById('product-id-block').style.display = 'none';
        document.getElementById('success-block').style.display = 'block';
    }
      
    function goBackToProductId() {
        document.getElementById('inspection-block').style.display = 'none';
       document.getElementById('product-id-block').style.display = 'block';
}

    function submitInspectionResults() {
            // 在這裡處理提交驗貨結果的邏輯
         // alert('驗貨結果提交成功，進行相應的處理。');

            // 切換頁面顯示資料上傳成功
         document.getElementById('inspection-block').style.display = 'none';
         document.getElementById('upload-success-block').style.display = 'block';
        }
    
     function showLogoutPage() {
             const vercode= document.getElementById('upload-action').value;
      if (vercode.trim() === '') {
                    alert('請輸入1~4');
                    return;
                }
        document.getElementById('upload-success-block').style.display = 'none';
        document.getElementById('logout-success-block').style.display = 'block';
    }





canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});