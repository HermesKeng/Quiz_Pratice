
//populate function is used to change the answer properly
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
            guess("btn"+i,i);
            
        }
    }
}
function guess(id,SelectionID){
    
    var btn=document.getElementById(id);
    //set each selection its own click event
    btn.onclick=function(){
        quiz.guess(SelectionID);
        populate();
    };
}
//we need to show the quiz result when the quiz finish
function showResult(){
    
    var gameOverHtml="<div class='result'>";
    var result=-1;
    var resultIndex;
    for(var i=0;i<4;i++){
        if(quiz.score[i]>result){
            //get the most score to be output
            result=quiz.score[i];
            resultIndex=i;
        }else if(quiz.score[i]===result){
            var is_Change=Math.floor((Math.random() * 2));
            //if answer_score is the same, we will random the output
            if(is_Change){
                 result=quiz.score[i];
                 resultIndex=i;
            }
        }
    }
    //get which position is suitable for you
    switch (resultIndex){
        case 0:
            gameOverHtml+="<h1>研究助理（RDAA）</h1><img id='image'src='img/RD.png'><div class='explain_text'><p>雲端技術邏輯思考<br>客戶專案維護與執行<br>開發軟體與測試<br>企業程式開發與模擬</p></div>";
            break;
        case 1:
            gameOverHtml+="<h1>行銷助理（MAA）</h1><img id='image'src='img/MAA.png'><div class='explain_text'><p>天馬行空創意創造力<br>培養市場客觀美感<br>市場數據分析敏銳度<br>社群行銷企劃執行</p></div>";
            break;
        case 2:
            gameOverHtml+="<h1>協銷助理（SAA）</h1><img id='image'src='img/SAA.png'><div class='explain_text'><p>培養口語表達溝通能力<br>臨機應變危機處理<br>活動規劃企劃執行<br>活動公關接待經驗</p></div>";
            break;
        case 3:
            gameOverHtml+="<h1>行政助理（AA）</h1><img id='image'src='img/AA.png'><div class='explain_text'><p>資料彙整處理分析<br>職場應對進退技巧<br>文案發想與撰寫<br>業務資訊整合管理</p></div>";
            break;
    }
    gameOverHtml+="</div>";
    var result=document.getElementById("quiz");
    result.innerHTML=gameOverHtml;
}
//RDAA,MAA,AA,SAA
var questions=[
    new Question("下列四件事情，你比較喜歡哪一項？",["愛好科技","喜好市場分析","喜好與人接觸互動","喜好規劃事情"]),
    new Question("你比較擅長什麼樣的事情？",["邏輯分析","構想活動專案","向他人解說新知","完成他人交代的事物"])
];
start_btn.onclick=function(){
    var QuizHtml="<div class='grid'><div id='quiz'><h1 id=question></h1><hr><div class='box'><div class='buttons'><button id='btn0'><span id='choice0'></span></button><br><button id='btn1'><span id='choice1'></span></button><br><button id='btn2'><span id='choice2'></span></button><br><button id='btn3'><span id='choice3'></span></button></div></div></div></div>"
    var interface=document.getElementById("app");
    interface.innerHTML=QuizHtml;
    populate();
}
var quiz=new Quiz(questions);
var start_btn=document.getElementById("start_btn");
//reference link:https://www.youtube.com/watch?v=jvk1pFNqXaw