// Write a function `checkAge(age)` that throws "Underage!" if age < 18




try{
    function checkAge(age){
    if(age<18){
        throw new Error('Underage!')
    }
}

checkAge(10);
}
catch(error){
    console.log(error.message);
}