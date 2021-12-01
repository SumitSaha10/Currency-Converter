window.addEventListener('load',function() {

    let cur1 = document.getElementById('cur1');
    let cur2 = document.getElementById('cur2');
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let curShowInfo = document.getElementById('info');
    let swap = document.getElementById('swap');

    box1.value = 1;

    const convert = async () =>{

        let url = `https://v6.exchangerate-api.com/v6/d2bc1dda7f368e3885fd2769/latest/${cur1.value}`;
        let curInfo = await fetch(url);
        let data = await curInfo.json();
        //console.log(data)
        
        convertCur = data.conversion_rates[cur2.value];
        box2.value = box1.value * convertCur;
        
        curShowInfo.innerText  = `1 ${cur1.value} = ${convertCur} ${cur2.value}`;
        
    }
    
    cur1.addEventListener('change',convert);
    cur2.addEventListener('change',convert);
    box1.addEventListener('input',convert);
    box2.addEventListener('input',convert);

    swap.addEventListener('click',function() {
        let temp = cur1.value;
        cur1.value = cur2.value;
        cur2.value = temp;
        convert();
    })

    convert();

})