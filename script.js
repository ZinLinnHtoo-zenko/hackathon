function calculateStress() {
    let total = 0;

    for(let i=1;i<=5;i++){
        let answer = document.querySelector('input[name="q' + i + '"]:checked');

        if(!answer) {
            alert("Please answer all questions");
            return;
        }

        total += parseInt(answer.value);
    }

    let resultText = "";

    if(total <= 12){
        resultText = "Low Stress";
    } else if(total <= 20){
        resultText = "Moderate Stress";
    } else {
        resultText = "High Stress";
    }

    document.getElementById("result").innerText = "Your Score:" + total + "->" + resultText;

    localStorage.setItem("Last Score", total);
}