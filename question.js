function Question(text,choices,answer){
    
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.CorrectAnswer=function(choices){
    
    return choices===this.answer;
}