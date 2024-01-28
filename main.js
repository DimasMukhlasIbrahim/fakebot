const pertanyaan = document.getElementById ('pertanyaan')
const jawaban  = document.getElementById ('jawaban')
const send = document.getElementById ('btn-submit')
const loaders = document.getElementById ('loaders')
const container = document.getElementById ('container')

    pertanyaan.textContent =    `halo, perkenalkan saya dms bot, siapa nama kamu?`


let init = 0

const botsay = (data) => {
    return [
   `halo, perkenalkan saya dms bot, siapa nama kamu?`,
    `halo ${data.nama}, klo boleh tau, berapa sih usia kamu?`,
    `ohh ternyata usia kamu ${data.usia}, kalo hobi kamu apa?`,
    `wah sama dong, hobi ku juga ${data.hobi}, btw kamu udah punya pacar belum? (pilih udah/blm)`,
    `wah ternyata kamu ${data.pacar} pacar`,
    `oh iya makasih ya sudah meluangkan waktu kamu untuk bot ini, sampai jumpa lagi  `
    ]
}

pertanyaan.innerHTML = botsay()

function botstart () {
    init ++
     if (init == 1) {
        setTimeout(botdelay({nama :jawaban.value}),botsay, 2500)
       

    } else if (init == 2) {
        setTimeout(botdelay({usia :jawaban.value}), 3500)
        // pertanyaan.innerHTML =`ohh ternyata usia kamu ${usia}, kalo hobi kamu apa?`

    }else if (init == 3) {
        setTimeout(botdelay({hobi :jawaban.value}), 5500)
        // pertanyaan.innerHTML= `wah sama dong, hobi ku juga ${hobi}, btw kamu udah punya pacar belum?`
    } else if (init == 4) {
        setTimeout(botdelay({pacar :jawaban.value}), 6500)
    //    pertanyaan.innerHTML = `wah ternyata kamu ${pacar}`
    } else if (init == 5){
        setTimeout(botdelay({nama :jawaban.value}), 7500)
    } else if (init == 6) {
        console.log ('bot end')
    }
}



function botdelay(jawabanuser) {
    loaders.style.display = 'block'
    setTimeout (() => {
        container.style.filter= 'blur(6px)';
    },200)

    setTimeout(() => {
        pertanyaan.innerHTML = botsay(jawabanuser)[init]
        // setTimeout (() => {
        //     container.style.filter= 'blur(6px)';
        //     setTimeout (() => {
        //         container.style.filter= 'none';
        //     },1500)
        // },1500)
        setTimeout (() => {
            container.style.filter= 'none';
        },100)
        loaders.style.display = 'none'
    }, 3000);
    jawaban.value =''
}