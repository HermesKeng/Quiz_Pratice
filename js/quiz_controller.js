/*Quiz class :
    score-> record each answer choose how many times
    questions->each quiz owns its question set (question array)
    questionIndex->record which question I am answering 
    getQuestionIndex(function)->return questionIndex
    is_end(function)->return value if it is the end of quiz
    quess(function)->record which answer which i chose ,and record to respondable scroe box
    
*/  
function Quiz(questions){
    this.score= new Array();
    this.score[0]=0;
    this.score[1]=0;
    this.score[2]=0;
    this.score[3]=0;
    this.questions=questions;
    this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnd=function(){
    return this.questions.length===this.questionIndex;
}
Quiz.prototype.guess=function(selection){
    
    switch (selection){
        case 0:
            this.score[0]++;
            break;
        case 1:
            this.score[1]++;
            break;
        case 2:
            this.score[2]++;
            break;
        case 3:
            this.score[3]++;
            break;
        default:
            break;
    }
    this.questionIndex++;
}