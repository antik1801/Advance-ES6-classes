// syntactic sugar
class Instructor{
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    name;
    designation = 'instructor';
    team = 'web';
    location;
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`create quiz at module no ${module}`);
    }
}
const aamir = new Instructor('aamir', 'mumbai');
aamir.startSupportSession(10.30);
aamir.createQuiz(60);
const solayman = new Instructor('solaiman', 'dhaka');
console.log(solayman);
