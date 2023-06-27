const calculateTemp= () => {
    const numberTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celtoFah = (cel) => {
        let farhenheit = Math.round((cel*9/5) + 32);
        return farhenheit;
    }

    const fahtoCel = (fah) => {
        let celsius = Math.round((fah-32)*5/9);
        return celsius;
    }
    let result;
    if(valueTemp =='cel'){
        result = celtoFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Farhenheit`;
    }else{
        result = fahtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
    }
    

}