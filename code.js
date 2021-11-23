function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;
    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - You Lose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("winRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - You Win!";
        wins = wins + 1;
    }
    else {
        tie = tie + 1;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again.";
    }

}

function blastOff() {
    var currTime = 50;
    function startTimer() {
        document.getElementById("countdownTimer").innerHTML = currTime;
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 5000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 10000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 15000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 20000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 25000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 30000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 35000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 40000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 45000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 46000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 47000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 48000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 49000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = "Blastoff!";
        }, 50000);
    }
}

function btrBlastoff() {
    console.log("brtBlastoff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            if (currTime >= 25) {
                //if conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else if (currTime == 0) {
                //if else if conditions are true 
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            } else {
                //if conditons are not true
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
}

function start() {
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data . . .";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

 //function to udate the display
 function updateDisplay() {
    theTime = new Date();
    console.log("The Time is: " + theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    var timeRead = data[index].time_seconds;

    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("GPS Altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML =
            dataRow("BMP Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML =
            dataRow("BMP Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML =
            dataRow("BMP Temperature", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML =
            dataRow("Dig Temperature", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML =
            dataRow("CSS Temperature", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML =
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML =
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("Accel X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("Accel Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("Accel Z", data[index].accelZ, " ");
        document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("Magnetic X", data[index].magneticX, " ");
        document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("Magnetic Y", data[index].magneticY, " ");
        document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("Magnetic Z", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("Gyro Z", data[index].gyroZ, " ");
        document.getElementById("timeClock").innerHTML = "The Time is: " + theTime.getHours() + ":" 
        + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" 
        + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

        if (index, 500) {
            index++;
        } else {
            index = 0
        }
    }
}

function playStation() {
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function playBowie() {
    console.log("playBowie() started");
    mySound = new sound("Space_Oddity.mp3");
    mySound.play();
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds =  time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}