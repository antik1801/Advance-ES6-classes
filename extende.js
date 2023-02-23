class TeamMembers{
    // name;
    // location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thankyou for your feedback!`);
    }
}
class Instructor extends TeamMembers{
    constructor(name, location){
        super(name,location);
    }
    designation = 'instructor';
    team = 'web';
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`create quiz at module no ${module}`);
    }
}

class Developer extends TeamMembers{
    constructor(name, location, tech){
        super(name,location);
        this.tech= tech;
    }
    // name;
    designation = 'Developer';
    team = 'web Team';
    // location;
    // tech;
    developFeature(feature){
        console.log(`Please develop the feature ${feature}`);
    }
    relese(version){
        console.log(`Please release the version ${version}`);
    }

}

class JobPlacement extends TeamMembers{
    constructor(name, location, region){
        super(name,location);
        this.region = region;
    }
    designation = 'Job placement commandoes';
    team = 'web Jobs';
    developFeature(feature){
        console.log(`Please develop the feature ${feature}`);
    }
    relese(version){
        console.log(`Please release the version ${version}`);
    }
    
}

const alia = new Developer("Alia Bhatt","Dhaka", `react`);
console.log("ALia",alia);
alia.developFeature('authentication');