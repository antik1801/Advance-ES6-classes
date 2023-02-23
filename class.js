// syntactic sugar
// class first letter size bigger
class Instructor {
    name; 
    designation = 'Web Course Instructor';
    team = 'web developer';
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create the quiz for module ${module}`)
    }
}

const aamir = new Instructor();
console.log(aamir);