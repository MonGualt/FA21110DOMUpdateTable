class Rocket{
    //name states first
    constructor(
        fuleType,
        weight,
        power
    ){//substaniate states
        this.fuleType = fuleType;
        this.weight = weight;
        this.power = power;
    }

    lanch(){
        console.log("launch sequence started");
        alert("launch sequence started");
        return true;
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
        return true;
    }

    detatchThruster(thrusterID){
        console.log("detechThruster sequence started");
        alert("Thruster" + thrusterID + "has been deteched.");
        return true;
    }

}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts
    }
    displayMissionParameters(){
        alert("The Spacecraft " + this.spaceCraft + 
        " will launch on " + this.launchDateDay 
        + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of " + this.oxyLvl + "%");
    }

    lanch(){
        console.log("launch sequence started");
        alert("launch sequence started");
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.lanch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();

}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.displayMissionParameters();
}