(function(flightController){

 var drone = require("./drone");
 var client = drone.client;


flightController.init = function(app){

    app.get("/api/flight/takeoff", function (req, res){
        client.takeoff();
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone Taking off" });
    });

    app.get("/api/flight/land", function (req, res){
        client.land();
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone Landing" });
    });

    app.get("/api/flight/front", function (req, res){
        client.front(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going front..." });
    });

    app.get("/api/flight/back", function (req, res){
        client.back(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going back..." });
    });

    app.get("/api/flight/left", function (req, res){
        client.left(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going left..." });
    });

    app.get("/api/flight/right", function (req, res){
        client.right(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going right..." });
    });

     app.get("/api/flight/up", function (req, res){
        client.up(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going up..." });
    });

     app.get("/api/flight/down", function (req, res){
        client.down(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone going down..." });
    });

     app.get("/api/flight/clockwise", function (req, res){
        client.clockwise(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone rotating clockwise..." });
    });

     app.get("/api/flight/counterClockwise", function (req, res){
        client.counterClockwise(0.2);
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone rotating Counter-Clockwise..." });
    });

     app.get("/api/flight/stop", function (req, res){
        client.stop();
        res.set("Content-Type", "application/json");
        res.send({ message: "Drone stoping..." });
    });

};


})(module.exports);