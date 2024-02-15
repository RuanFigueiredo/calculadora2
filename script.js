function calcular(){
    let valor1 = Number(document.getElementById("primeiroValor").value)
    let valor2 = Number(document.getElementById("segundoValor").value)
    const option = document.querySelector("input[name='option']:checked").value

    if((valor1 >=0 && valor1 <= 100) && (valor2 >=0 && valor2 <=100)){
        switch(option){
            case "+":
                document.getElementById("resultado").innerHTML = valor1 + valor2;
                break;
            case "-":
                document.getElementById("resultado").innerHTML = valor1 - valor2;
                break
            case "*":
                document.getElementById("resultado").innerHTML = valor1 * valor2;
                break
            case "/":
                document.getElementById("resultado").innerHTML = (valor1 / valor2).toFixed(2);
                break;
        }
    }else {
        alert("digite valores válidos");
    }
    
}