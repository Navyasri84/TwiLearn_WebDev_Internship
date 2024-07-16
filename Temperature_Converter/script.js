function convertTemperature(){
    var temperature = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;

    if(unit == "fahrenheit"){
        var result = (temperature - 32) * (5/9); //formula for fahrenheit to celcius
        result = result.toFixed(2) //to make 2 digits after decimal
        result = result + "℃"
    }

    else{
        var result = (temperature * (9/5)) + 32; //formula for celcius to fahrenheit
        result = result.toFixed(2) //to make 2 digits after decimal
        result = result + "℉"
    }

    document.getElementById("result").innerHTML = result;

}