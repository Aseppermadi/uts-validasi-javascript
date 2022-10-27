const nama=document.querySelector('#nama')
const noHp=document.querySelector('#nohp')
const submit=document.querySelector('#submit')
const genderSubmit=document.querySelectorAll('.gender')
const date=document.querySelector('#date')
const form=document.querySelector('form')

submit.addEventListener('click',function(e){
    e.preventDefault()
    validation()
})


function validation(){
    if(nama.value===''){
        alert('Masukan nama pemain yang benar')
    }else if(noHp.value===''){
        alert('Masukan nomor yang benar')

    }else if(isNaN(noHp.value)){
        alert('Nomor HP harus berupa angka')

    }else{
        genderSubmit.forEach(gender => {
            if(gender.checked){  
            alert(`
              Nama pemain: ${nama.value}             
              Jenis Kelamin: ${gender.value}
              Tanggal Lahir: ${date.value}
              No HP pemain: ${noHp.value}`)
            }  
            });
            nama.value=''
            noHp.value=''
            date.value=''
        }
        
}