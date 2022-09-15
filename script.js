const usd = 0.59
const eur = 0.58

const inputs = document.querySelectorAll('input')

inputs.forEach(inp => {
    inp.addEventListener('input', valueChanged)
})

function valueChanged() {
    if(this.id == 'azn') {
        for(let i=0;i<inputs.length;i++) {
            switch(inputs[i].id) {
                case 'usd':
                    inputs[i].value = (this.value * usd).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${usd} ${inputs[i].id.toUpperCase()}`
                    break
                case 'eur':
                    inputs[i].value = (this.value * eur).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${eur} ${inputs[i].id.toUpperCase()}`
                    break
                case 'azn':
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `1 ${inputs[i].id.toUpperCase()}`
            }
        }
    }
    else if(this.id == 'usd') {
        for(let i=0;i<inputs.length;i++) {
            switch(inputs[i].id) {
                case 'azn':
                    inputs[i].value = (this.value / usd).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${(1/usd).toFixed(2)} ${inputs[i].id.toUpperCase()}`
                    break
                case 'eur':
                    inputs[i].value = ((eur / usd) * this.value).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${(eur / usd).toFixed(2)} ${inputs[i].id.toUpperCase()}`
                    break
                case 'usd':
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `1 ${inputs[i].id.toUpperCase()}`
            }
        }
    }
    else if(this.id == 'eur') {
        for(let i=0;i<inputs.length;i++) {
            switch(inputs[i].id) {
                case 'azn':
                    inputs[i].value = (this.value / eur).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${(1/eur).toFixed(2)} ${inputs[i].id.toUpperCase()}`
                    break
                case 'usd':
                    inputs[i].value = ((usd/eur) * this.value).toFixed(2)
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `${(usd/eur).toFixed(2)} ${inputs[i].id.toUpperCase()}`
                    break
                case 'eur':
                    inputs[i].parentElement.nextElementSibling.children[0].children[0].innerText = this.id.toUpperCase()    
                    inputs[i].parentElement.nextElementSibling.children[0].children[1].innerHTML = `1 ${inputs[i].id.toUpperCase()}`
            }
        }
    }
}

