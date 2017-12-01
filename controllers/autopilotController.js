(function(autopilotController){

 var autonomy = require('ardrone-autonomy');
 var mission  = autonomy.createMission();

mission.takeoff()
       .zero()       // Sets the current state as the reference
       .altitude(5)  // Climb to altitude = 3 meter
       .forward(2)   
       .right(2)     
       .backward(2) 
       .left(2)
       .hover(1000)  // Hover in place for 1 second
       .land();

autopilotController.init = function(app){

    app.get("/api/autopilot/runmission", function (req, res){
        
        res.set("Content-Type", "application/json");

             mission.run(function (err, result) {
                    if (err) {
                         res.send({ message: "Oops, something bad happened: " + err.message });
                        mission.client().stop();
                        mission.client().land();
                    } else {
                        res.send({ message: "Mission success!" });
                        process.exit(0);
                    }
             });
    });

};


})(module.exports);