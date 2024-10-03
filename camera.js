var video = document.getElementById("video");

video.addEventListener("touchstart", capteaza);
video.addEventListener("mousedown", capteaza);

function on_cam_success(stream) {
    video.srcObject = stream;
}

function on_cam_error(err) {
    alert("Eroare: " + err.message);
}

var constraints = { audio: false, video: true };

navigator.mediaDevices.getUserMedia(constraints)
    .then(on_cam_success)
    .catch(on_cam_error);

function capteaza() {
    var c = document.getElementById("canvas");
    c.width = video.videoWidth;  
    c.height = video.videoHeight;
    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, c.width, c.height);
}
