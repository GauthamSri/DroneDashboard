(function (controllers) {

    var flightController = require("./flightController");
    var autopilotController = require("./autopilotController");

    controllers.init = function (app) {

        flightController.init(app);
        autopilotController.init(app);

    };


})(module.exports);