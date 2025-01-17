
let value1 = 0;
let threshold = 20;
let permissionGranted = false;
// let cx,cy;
// let shared;

function preload() {
  // connect to the party server
  partyConnect("wss://helloworld-project3.herokuapp.com", "device-picked", "main");

  // begin loading shared object
  // setup() won't be called until the shared object is loaded
  shared = partyLoadShared("shared");
}


function setup() {
   createCanvas(windowWidth,windowHeight);
   // cx = width/2;
   // cy = height/2;
//   shared.x = shared.x || 0;
//   shared.y = shared.y || 0;
  
   // partyToggleInfo(true);
  
  //DevideOrientationEvent, DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !=='undefined' && typeof(DeviceOrientationEvent.requestPermission) == 'function') {
    //ios 1 device
    
    DeviceOrientationEvent.requestPermission()
    .catch(() => {
      // show permission dialog only the frist time
      let button = createButton ("click to allow access to sensors");
      button.style("font-size", "24px");
      button.center();
      button.mousePressed(requestAccess);
      throw error;
    })
    .then(() => {
      // on any subsequent visits
      permissionGranted = true;
    })
  } else {
    //non ios 13 device
    textSize (48);
    text ("non ios device",100,100);
  }

  // setMoveThreshold(threshold);
}

function requestAccess () {
  DeviceOrientationEvent.requestPermission()
  .then (response => {
    if (response == 'granted') {
      permissonGranted = true;
    }
  })
  .catch(console.error);
  
  this.remove();
}

function draw() {
background(value1,0,0);
  // ellipse(200, 300,155,155);
}



function deviceTurned() {
 
  if(turnAxis === 'X') {
   if (value1 === 0) {
    value1 = 255; 
   } 
    else if (value1 === 255) {
    value1 = 0;
   }
  }
  


// function deviceMoved() {
//   value = value + 5;
//   threshold = threshold + 0.1;
//   if (value > 255) {
//     value = 0;
//     threshold = 300;
//      }
//    }
  
//   setMoveThreshold(threshold);
}
