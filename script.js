const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 250,
        amount: 0,
        get summ() {
            return this.price * this.amount
        },
        get allKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 350,
        amount: 0,
        get summ() {
            return this.price * this.amount
        },
        get allKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 650,
        amount: 0,
        get summ() {
            return this.price * this.amount
        },
        get allKcall() {
            return this.kcall * this.amount
        }
    },
}
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out'),
    receiptWindowBtn = document.querySelector('.receipt__window-btn'),
    addCart = document.querySelector('.addCart');


btnPlusOrMinus.forEach(function (el) {
    el.addEventListener('click', function (e) {
        plusOrMinus(this)
    })
})

function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elemData = element.getAttribute('data-symbol');
    if (elemData == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (elemData == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].summ
    kcall.innerHTML = products[parentId].allKcall
}
let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;


addCart.addEventListener('click', function () {
    for (const key in products) {
        const po = products[key]
        if (po.amount > 0) {
            arrayProduct.push(po)
        }
        po.price = po.summ
        po.kcall = po.allKcall
    }

    arrayProduct.forEach(el => {
        totalPrice += el.price
        totalKcall += el.kcall
        totalName += `${el.name} \n`
    });
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '30%'
    }, 100);
    receiptWindowOut.innerHTML = `Buyurtmangiz:\n${totalName}\nUmumiy kaloriya:${totalKcall}\nUmumiy summa: ${totalPrice}`

    const outNum = document.querySelectorAll('.main__product-num');
    outNum.forEach(el => {
        el.innerHTML = 0
    });
    const outPrice = document.querySelectorAll('.main__product-price span');
    outPrice.forEach(el => {
        el.innerHTML = 0
    });
    const outKcall = document.querySelectorAll('.main__product-kcall span');
    outKcall.forEach(el => {
        el.innerHTML = 0
    });

})
receiptWindowBtn.addEventListener('click', function (e) {
    e.preventDefault()
    location.reload()
})

let windowBtn = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    viewImg = document.querySelector('.img'),
    viewClose = document.querySelector('.view__close');

windowBtn.forEach(el => {
    el.addEventListener('dblclick', function () {
        let windowImg = this.querySelector('.main__product-img');
        let imgSrc = windowImg.getAttribute('src');
        viewImg.setAttribute('src', imgSrc)
        view.classList.add('active')
        // Closing View Block
        viewClose.addEventListener('click', function () {
            view.classList.remove('active')
        })
    })
});
    
let lvlNum = document.querySelector('.header__timer-extra');

function lvl() {
    if (lvlNum.innerHTML <= 30) {
        lvlNum.innerHTML++;
        setTimeout(lvl, 30);
    } else if(lvlNum.innerHTML <= 50) {
        lvlNum.innerHTML++;
        setTimeout(lvl, 50);
    }else if(lvlNum.innerHTML <= 70) {
        lvlNum.innerHTML++;
        setTimeout(lvl, 60);
    }else if(lvlNum.innerHTML < 100) {
        lvlNum.innerHTML++;
        setTimeout(lvl, 100);
    }
}

lvl()