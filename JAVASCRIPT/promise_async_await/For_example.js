//Example of promise

let HalwaThere=false;

function waitInQueue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(HalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa is finished');
            }

        },1000)
    })

}

function buyHalwa(){
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Go Home');
    })
}


buyHalwa();