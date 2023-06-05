document.getElementById("ITQuizForm").addEventListener("submit",getQuizResults);

function getQuizResults(event) {
    event.preventDefault();
    console.log("Got it");

    let answer1 = document.getElementsByName("answers1");
    let answer2 = document.getElementsByName("answers2");
    let answer3 = document.getElementsByName("answers3");

    let selected = "";
    let points = 0;

    const answerMap = new Map();

    for(var i = 0; i < answer1.length; i++)
    {
        if(answer1[i].checked)
        {
            selected = answer1[i].value;
        }
    }

    answerMap.set("Question 1", selected);

    if(selected === "C")
    {
        points++;
    }

    for(var i = 0; i < answer2.length; i++)
    {
        if(answer2[i].checked)
        {
            selected = answer2[i].value;
        }
    }

    answerMap.set("Question 2", selected);

    if(selected === "True")
    {
        points++;
    }

    for(var i = 0; i < answer3.length; i++)
    {
        if(answer3[i].checked)
        {
            selected = answer3[i].value;
        }
    }

    answerMap.set("Question 3", selected);

    if(selected === "D")
    {
        points++;
    }

    percentage = (points/3) * 100;

    document.getElementById("results").textContent = "You got " + percentage + "% on the quiz!";

    document.getElementById("userAnswers").textContent = "Your Answers: ";
    document.getElementById("userAnswer1").textContent = answerMap.get("Question 1") + " | Correct Answer: C";
    document.getElementById("userAnswer2").textContent = answerMap.get("Question 2") + " | Correct Answer: True";
    document.getElementById("userAnswer3").textContent = answerMap.get("Question 3") + " | Correct Answer: D";
}