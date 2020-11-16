
document.getElementById("s1").addEventListener("click", function(){
    var audio = document.getElementById("m1");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
    
        });

document.getElementById("s2").addEventListener("click", function(){
    var audio = document.getElementById("m2");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
    
        });

document.getElementById("s3").addEventListener("click", function(){
    var audio = document.getElementById("m3");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
        });

document.getElementById("s4").addEventListener("click", function(){
    var audio = document.getElementById("m4");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
        });