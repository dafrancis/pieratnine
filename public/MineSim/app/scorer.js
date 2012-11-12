(function () {
    var scorer = function () {
        var a, ach_count = 0, text = [];
        if (MineSim.videos === 0) {
            text.push("You made your first video!");
        } else {
            text.push("You made another video!");
        }
        if (MineSim.time > MineSim.maxtime) {
            text.push("However it is over your allowed time limit :( (" + MineSim.maxtime + ")");
            text.push("Please try again!");
        } else {
            MineSim.videos += 1;
            if (MineSim.videos > 100) {
                Juicy.collections.achievement.emit("videos");
            }
            if (MineSim.videos === 1) {
                text.push("Youtube thinks you did so well they're giving you money!");
                text.push("Keep up the good work! Youtube can't get enough of");
                text.push("Minecraft lets plays!");
                MineSim.cash += 50;
            } else {
                var viewers = ~~(MineSim.time * Math.random());
                if (MineSim.Upgrades.thumbnail.got) {
                    viewers *= 2;
                }
                if (MineSim.Upgrades.memes.got) {
                    viewers *= 4;
                }
                if (MineSim.Upgrades.account.got) {
                    viewers *= 8;
                }
                if (MineSim.Upgrades.dubstep.got) {
                    viewers *= 9001;
                }
                if (viewers > 301) {
                    Juicy.collections.achievement.emit("threeohone");
                }
                text.push("A total of " + viewers + " viewers saw your video");
                if (MineSim.Upgrades.dolla.got) {
                    var cash = ~~(viewers * 0.1);
                    text.push("You earned $" + cash + " youtube dollars");
                    MineSim.cash += cash;
                    if (MineSim.cash >= 1000000) {
                        Juicy.collections.achievement.emit("dolla");
                    }
                }
            }
        }
        MineSim.exit_text = text;
        for (a in MineSim.Achievements) {
            if (MineSim.Achievements.hasOwnProperty(a)) {
                if (MineSim.Achievements[a].done) {
                    ach_count += 1;
                }
            }
        }
        if (ach_count === 5) {
            MineSim.current_state = "end";
            Juicy.sounds.explosion.play();
        }
    };

    if (!this.MineSim) {
        this.MineSim = {};
    }
    this.MineSim.scorer = scorer;
}).call(this);
