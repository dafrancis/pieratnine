(function () {
    var Achievements = {
        newaccount: {
            name: "Who am I? 24601",
            text: "Achievement for creating a new account! Congrats!"
        },
        threeohone: {
            name: "301",
            text: "You managed to break the 301 youtube barrier! Good Job!"
        },
        dolla: {
            name: "Holla Holla get $",
            text: "You've got $1,000,000 total youtube dollars"
        },
        videos: {
            name: "It's over one hundred!!!",
            text: "You got over a hundred videos! Oh my!"
        },
        upgrades: {
            name: "A Double Dosage of Pimping",
            text: "You've got all the upgrades!"
        },
        kaboom: {
            name: "Kaboom!",
            text: "Your views blew up youtube! Oh no!"
        }
    };

    var Achievement = Juicy.Base.extend({
        img: "achievement",
        width: 461,
        height: 132,
        x: 100,
        y: 350,
        alive: true,
        init: function (ach) {
            var self = this;
            this.ach = ach;
            setTimeout(function () {
                self.alive = false;
            }, 3000);
        },
        draw: function () {
            Juicy.drawText("ACHIEVEMENT UNLOCKED\n" + Achievements[this.ach].text, this.x + 130, this.y + 50, "black", "bold 12px Comic Sans MS", 30);
        }
    });

    var AchievementController = Juicy.Collection.extend({
        model: Achievement,
        filter: function (ach) {
            return ach.alive;
        },
        emit: function (ach) {
            var achievement = Achievements[ach];
            if (!achievement.done) {
                this.collection.push(new Achievement(ach));
                achievement.done = true;
            }
        }
    });

    Juicy.setupCollections({
        achievement: AchievementController
    });

    if (!this.MineSim) {
        this.MineSim = {};
    }
    this.MineSim.Achievements = Achievements;
}).call(this);
