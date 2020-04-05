var sample = angular.module("sample", ["sdk"]);

sample.controller("sampleController", [
  "$log",
  "$rootScope",
  "rainbowSDK",
  function ($log, $rootScope, sdk) {
    "use strict";

    /*********************************************************/
    /**                INITIALIZATION STUFF                 **/
    /*********************************************************/

    var appId = "9c279c90774211ea88b46f998ddae648";
    var appSecret =
      "7CSmKjfmQ4Z7KZHbr5hruOb2CQBTbniYfALj4nWCTCDOiSpYf2o9FtxPxMmHJONI";

    var onReady = function onReady() {
      console.log("[DEMO] :: Rainbow SDK is ready!");
    };

    var onLoaded = function onLoaded() {
      console.log("[DEMO] :: Rainbow SDK has been loaded!");

      sdk
        .initialize(appId, appSecret)
        .then(function () {
          console.log("[DEMO] :: Rainbow SDK is initialized!");
        })
        .catch(function () {
          console.log("[DEMO] :: Something went wrong with the SDK...");
        });
    };

    this.initialize = function () {
      console.log("DEMO :: Rainbow Demo Application");

      document.addEventListener(sdk.RAINBOW_ONREADY, onReady);

      document.addEventListener(sdk.RAINBOW_ONLOADED, onLoaded);
    };

    this.initialize();

    return true;
  },
]);
