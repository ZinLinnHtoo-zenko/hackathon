function calculateStress() {
    let total = 0;

    for(let i=1;i<=5;i++){
        let answer = document.querySelector('input[name="q' + i + '"]:checked');

        if(!answer) {
            alert("Please answer all questions");
            return;
        }

        total += parselnt(answer.value);
    }
}