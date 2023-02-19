const qrcode = document.querySelector('#qrcode');
const inputField = document.querySelector('#inputField');
// const values = ['1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')',
//             'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//             'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


const generateQrCode = ()=>{
    if(inputField.value){

        const text = String(inputField.value);
        qrcode.innerHTML = text;

        setTimeout(()=>{
            new QRCode('qrcode',{
                text: text,
                width: 256,
                height: 256,
                colorDark : "darkgreen",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
        })
            },2000);
    }   
}


setInterval(()=>{
    qrcode.innerHTML = '';
    inputField.value = '';
},120000);   





