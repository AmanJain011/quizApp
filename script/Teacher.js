import { User } from "./User.js"

export class Teacher extends User{
    constructor(name, email, password, quizzes){
        super(name, email, password)
        this.role = "teacher"
        this.quizzes = quizzes || []
    }
    
    addQuiz(quiz){
        this.quizzes.push(quiz)
    }
}