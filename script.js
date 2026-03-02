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
    let tips = "";

    if(total <= 12){
        resultText = "Low Stress";
        tips = "Great Job! You seem to be managing well. Keep maintaining your work-life balance and stay active.";
    } else if(total <= 20){
        resultText = "Moderate Stress";
        tips = "You're feeling some pressure. Try to prioritize your tasks, take short breaks every hour, and ensure you're getting enough sleep.";
    } else {
        resultText = "High Stress";
        tips = "It sounds like you're overwhelmed. Consider talking to a mentor, practicing deep breathing exercises, or breaking your big projects into tiny, managable steps.";
    }

    document.getElementById("result").innerText = "Your Score:" + total + "->" + resultText;

    document.getElementById("tips-box").innerText = tips;

    localStorage.setItem("Last Score", total);
}