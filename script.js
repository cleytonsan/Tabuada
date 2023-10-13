function tabuada() {

    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    var operadores = document.getElementsByName('radcalc')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else if(operadores[0].checked){
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    } else if(operadores[1].checked){
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    } else if(operadores[2].checked){
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    } else if(operadores[3].checked){
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    } else if(operadores[4].checked){
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} % ${c} = ${n%c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
};


// function tabuada() {
//     const num = document.getElementById('txtn');
//     const tab = document.getElementById('seltab');
//     const operadores = document.getElementsByName('radcalc');

//     if (num.value.length == 0) {
//         window.alert('Por favor, digite um número!');
//         return;
//     }

//     const n = Number(num.value);
//     tab.innerHTML = '';

//     for (let c = 1; c <= 10; c++) {
//         const item = document.createElement('option');
//         let resultado;
//         switch (true) {
//             case operadores[0].checked:
//                 resultado = n + c;
//                 item.text = `${n} + ${c} = ${resultado}`;
//                 break;
//             case operadores[1].checked:
//                 resultado = n - c;
//                 item.text = `${n} - ${c} = ${resultado}`;
//                 break;
//             case operadores[2].checked:
//                 resultado = n * c;
//                 item.text = `${n} x ${c} = ${resultado}`;
//                 break;
//             case operadores[3].checked:
//                 resultado = n / c;
//                 item.text = `${n} / ${c} = ${resultado}`;
//                 break;
//             case operadores[4].checked:
//                 resultado = n % c;
//                 item.text = `${n} % ${c} = ${resultado}`;
//                 break;
//             default:
//                 break;
//         }

//         item.value = `tab${c}`;
//         tab.appendChild(item);
//     }
// }
