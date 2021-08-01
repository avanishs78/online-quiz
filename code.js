
function result(){
    var c = 0;
    var q1 = document.Quizarea.Q1.value;
    if(q1=='correct1'){c++}
    var q2 = document.Quizarea.Q2.value;
    if(q2=='correct2'){c++}
    var q3 = document.Quizarea.Q3.value;
    if(q3=='correct3'){c++}
    var q4 = document.Quizarea.Q4.value;
    if(q4=='correct4'){c++}
    var q5 = document.Quizarea.Q5.value;
    if(q5=='correct5'){c++}
    
    document.write("Your score is " + c + " out of 5.");
    if(c>=3){
        document.write(" You did a great job.")
    }
    if(c<3){
        document.write(" You really need more practice.");
    }
    
}