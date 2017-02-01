/*Question class :
    text->Question
    choice->each selection
*/
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
}
/*
Question.prototype.CorrectAnswer=function(choices){
    
    return choices===this.answer;
}
*/