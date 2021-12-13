function startVerif () {
    let sentence = document.getElementById("sentence-input").value;
    alert(sentence);
    let result = ""
    sentenceUp = sentence.toUpperCase()
    i = 0
    while (i < sentenceUp.length) {
        let verificator = sentenceUp.charCodeAt(i)
        if (verificator >=65 && verificator <=90){
            let verificatorConv = String.fromCharCode(verificator)
            result += verificatorConv
        } else if (verificator >=48 && verificator <=57) {
            let verificatorConv = String.fromCharCode(verificator)
            result += verificatorConv
        } else if (verificator == 32) {
            let verificatorConv = String.fromCharCode(verificator)
            result += verificatorConv
        }else if (verificator == 45) {
            let verificatorConv = String.fromCharCode(verificator)
            result += verificatorConv
        }
        resultLow = result.slice(1);
        resultLow = resultLow.toLowerCase()
        document.getElementById("prueba").innerHTML = result[0] + resultLow
        i += 1
    }
}