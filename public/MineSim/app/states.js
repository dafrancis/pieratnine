(function () {
    var y = 500;
    var States = {
        start: function () {
            this.canvas.style.background = "url(images/youtube.png)";
            MineSim.makeButton(400, 50, "Sign up!!!", "signup", function () {
                MineSim.name = prompt("What username would you like", "xXxMinecraftNoobLord420xXx");
                Juicy.collections.achievement.emit("newaccount");
            });
            this.drawText("Welcome to Minecraft Lets Play Youtube Channel\nSimulator 2012 Alpha! Click Sign up to start!", 30, 150, "black", "bold 12px Comic Sans MS", 30);
        },
        signup: function () {
            this.canvas.style.background = "url(images/youtube.png)";
            this.drawText("Hello "+MineSim.name+"!\nGo ahead and make a video to start your lets play career!", 30, 150, "black", "bold 12px Comic Sans MS", 30);
            MineSim.makeButton(100, 300, "Make a video", "video");
            MineSim.time = 0;
        },
        video: function () {
            this.canvas.style.background = "url(images/minecraft.png)";
            this.drawText("You've played minecraft for\n"+MineSim.time+"\nSeconds (time sped up because time flies when\nyou're having fun!!!)", 100, 150, "black", "bold 18px Comic Sans MS", 40);
            MineSim.makeButton(220, 300, "Post video", "post", MineSim.scorer);
            MineSim.time += 1;
            if (MineSim.Upgrades.thumbnail.got) {
                this.ctx.drawImage(Juicy.images.boobies, 420, 300, 182, 139);
            }
            if (MineSim.Upgrades.memes.got) {
                this.ctx.drawImage(Juicy.images.meme, 10, 320, 190, 155);
            }
            if (MineSim.Upgrades.account.got) {
                this.ctx.drawImage(Juicy.images.behind, 450, 100, 128, 94);
            }
            if (MineSim.Upgrades.dubstep.got) {
                dubStep();
            }
        },
        post: function () {
            this.canvas.style.background = "url(images/youtube.png)";
            this.drawText(MineSim.exit_text, 30, 150, "black", "bold 12px Comic Sans MS", 30);
            this.drawText("Videos: " + MineSim.videos + "\nYoutube Dollars: $" + MineSim.cash, 400, 50, "black", "bold 12px Comic Sans MS", 25);
            MineSim.makeButton(100, 310, "Make a video", "video");
            MineSim.makeButton(400, 100, "Achievements", "achievements");
            if (MineSim.Achievements.threeohone.done) {
                MineSim.makeButton(100, 250, "Upgrades", "upgrades");
            }
            MineSim.time = 0;
        },
        upgrades: function () {
            var up, upgrade;
            for (up in MineSim.Upgrades) {
                if (MineSim.Upgrades.hasOwnProperty(up) && !MineSim.Upgrades[up].got) {
                    upgrade = MineSim.Upgrades[up];
                    this.drawText(upgrade.name + "\n\n" + upgrade.text + "\n\nCost: $" + upgrade.cost, 30, 150, "black", "bold 12px Comic Sans MS", 30);
                    break;
                }
            }
            if (upgrade) {
                if (upgrade.cost <= MineSim.cash) {
                    MineSim.makeButton(100, 310, "Upgrade", "upgrades", function () {
                        MineSim.cash -= upgrade.cost;
                        if (upgrade.sideeffect) {
                            upgrade.sideeffect();
                        }
                        MineSim.Upgrades[up].got = true;
                    });
                } else {
                    this.drawText("Can't buy this upgrade :(", 100, 310, "black", "bold 12px Comic Sans MS");
                }
            } else {
                Juicy.collections.achievement.emit("upgrades");
                this.drawText("There are no more upgrades :(", 30, 150, "black", "bold 12px Comic Sans MS", 30);
            }
            this.drawText("Videos: " + MineSim.videos + "\nYoutube Dollars: $" + MineSim.cash, 400, 50, "black", "bold 12px Comic Sans MS", 25);
            MineSim.makeButton(400, 100, "Back", "post");
        },
        achievements: function () {
            var ach, complete = [], incomplete = [], text;
            for (ach in MineSim.Achievements) {
                if (MineSim.Achievements.hasOwnProperty(ach)) {
                    if (MineSim.Achievements[ach].done) {
                        complete.push("- " + MineSim.Achievements[ach].name);
                    } else {
                        incomplete.push("- " + MineSim.Achievements[ach].name);
                    }
                }
            }
            text = ["Completed Achievements:"].concat(complete).concat(['', "Incomplete Achivements"]).concat(incomplete);
            this.drawText(text, 30, 150, "black", "bold 12px Comic Sans MS", 30);
            this.drawText("Videos: " + MineSim.videos + "\nYoutube Dollars: $" + MineSim.cash, 400, 50, "black", "bold 12px Comic Sans MS", 25);
            MineSim.makeButton(400, 100, "Back", "post");
        },
        end: function () {
            Juicy.sounds.main.pause();
            Juicy.sounds.dubstep.pause();
            MineSim.music = "credits";
            this.canvas.style.background = "url(images/kaboom.png)";
            MineSim.makeButton(400, 400, "Next", "end1");
        },
        end1: function () {
            this.drawText([
                "A surge of viewers came to your video.",
                "It was good. It was better than good.",
                "It was probably the best youtube video the world has seen.",
                "But that came at a price. Youtube were",
                "so overwhelmed with requests their servers.",
                "got hotter. Their servers exploded. You destroyed youtube..."
            ], 100, 200, "black", "bold 16px Helvetica", 25);
            MineSim.makeButton(400, 400, "Next", "end2");
        },
        end2: function () {
            this.drawText([
                "All the people at youtube hq were dead.",
                "With no money coming in all the youtube celebrities went",
                "homeless. Some even died!!!",
                "But not you. You were still there.",
                "You still had minecraft. Minecraft was all you needed.",
                "Even the padded cell they put you in reminded you of Minecraft.",
                "\"This is it\" you thought \"I am finally home...\""
            ], 100, 200, "black", "bold 16px Helvetica", 25);
            MineSim.makeButton(400, 400, "Next", "credits");
        },
        credits: function () {
            Juicy.collections.achievement.emit("kaboom");
            this.canvas.style.background = "black";
            this.drawText([
                "\"When you don't create things, you become defined",
                " by your tastes rather than ability. Your tastes only",
                " narrow & exclude people. So create.\" -- Why The Lucky Stiff",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Minecraft Lets Play Youtube Channel Simulator 2013 Alpha",
                "By Dafydd \"Afal\" Francis",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Made for \"Fuck This Jam\" 2012",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Written by - Dafydd \"Afal\" Francis",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Art - Dafydd \"Afal\" Francis",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Various images (minecraft, atomic explosion, boobies, rage face)",
                "found on the internet (Oh god I hope I don't get in trouble for this D:)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Yes I am aware that isn't slenderman",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Made using: Juicy Canvas Toolkit",
                "https://github.com/dafrancis/Juicy",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Coder - Dafydd \"Afal\" Francis",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Music (found on http://freemusicarchive.org/):",
                "“Star” (by Decktonic)",
                "“SmurfPulser” (by Illocanblo)",
                "“Maus” (by Haemon)",
                "(All are licensed under Attribution, Non Commerical, Share Alike)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "With thanks to:",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Everyone at #fuckthisjam",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Animated Diversions Forums being offline so I could work on this",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Skrillex",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "but most importantly...",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "RayWi.. nah just kidding it's you ;)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "The End",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "No seriously that's it",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "I couldn't think of anything else to add to this game",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "I'm not sure it even qualifies to be a game",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "I mean it was all pushing buttons and stuff",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "How can it be a Minecraft simulator if there wasn't",
                "any mining?",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Also I'm sorry the art is bad. This is partly intentional",
                "(honest >_>)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Maybe I'll improve this game. Better graphics and gameplay",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "and call it:",
                "",
                "Minecraft Lets Play Youtube Channel Simulator 2013 Alpha:",
                "Directors Cut Game Of The Year Special Edition",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Rolls off the tounge doesn't it?",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Anyway this is it. I hope you enjoyed :)",
                "There's nothing left in the credits now",
                "Refresh the page if you want to play again!"
            ], 100, y, "white", "bold 16px Helvetica", 25);
            y -= 1;
        }
    };

    if (!this.MineSim) {
        this.MineSim = {};
    }
    this.MineSim.States = States;

    var randomColor = function () {
        var r, g, b;
        r = ~~(Math.random() * 255);
        g = ~~(Math.random() * 255);
        b = ~~(Math.random() * 255);
        MineSim.dub_color = "rgba(" + r + "," + g + "," + b + ", 0.4)";
    };

    setInterval(randomColor, 1000);

    var dubStep = function () {
        Juicy.ctx.fillStyle = MineSim.dub_color;
        Juicy.ctx.fill();
        Juicy.ctx.fillRect(0, 0, Juicy.canvas.width, Juicy.canvas.height);
    };
}).call(this);