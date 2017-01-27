function populate(){
    if(quiz.isEnd()){
        showResult();
    }else{
        //showQuestion();
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
        
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var selection=document.getElementById("choice"+i);
            selection.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
            
        }
    }
}

function guess(id,guess){
    
    var btn=document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        populate();
    };
}
function showResult(){
    
    var gameOverHtml="<h1>Result :</h1>";
    gameOverHtml+="<h2 id='score'>Your Score :"+quiz.score+"</h2>"
    var result=document.getElementById("quiz");
    result.innerHTML=gameOverHtml;
}
var questions=[
    new Question("下列四件事情，你比較喜歡哪一項?",["愛好科技","喜好市場分析","喜好與人接觸互動","喜好規劃事情"],"愛好科技"),
    new Question("下列四種水果，你比較喜歡哪一種?",["西瓜","蘋果","草莓","奇異果"],"草莓")
];

var quiz=new Quiz(questions);

populate();