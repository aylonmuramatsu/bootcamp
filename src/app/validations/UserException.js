class UserNotExists extends Error{
    constructor(){
        super();
        this.message = "Usuário inexistente.";
    }
}

module.exports = UserNotExists;