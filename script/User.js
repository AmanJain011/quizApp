export class User{
    constructor(name, email, password){
        this.id = "user-" + (new Date()).getTime()
        this.name = name
        this.email = email
        this.password = password
    }
}