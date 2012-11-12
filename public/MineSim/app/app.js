(function () {
    MineSim.current_state = "start";
    MineSim.timer = "start";
    MineSim.maxtime = 600;
    MineSim.cash = 0;
    MineSim.videos = 0;
    MineSim.music = "main";

    Juicy.imageLoad({
        achievement: "images/achievement.png",
        behind: "images/behindthescenes.png",
        boobies: "images/boobies.jpg",
        meme: "images/rage-classic.png"
    });

    Juicy.audioLoad({
        main: "sounds/Decktonic_Stars.ogg",
        dubstep: "sounds/Illocanblo_SmurfPulser.ogg",
        credits: "sounds/Haemon_Maus.ogg",
        explosion: "sounds/explosion.wav"
    });

    Juicy.run(function () {
        this.sounds[MineSim.music].play();
        var state = MineSim.current_state;
        MineSim.States[state].call(this);
    });
}());
