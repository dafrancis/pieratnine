(function () {
    var Upgrades = {
        dolla: {
            name: "Youtube Money",
            text: "Get money for your views! More views mean more cash!",
            cost: 50
        },
        thumbnail: {
            name: "Misleading Thumbnail",
            text: "Now you can be the next sxephil!",
            cost: 100
        },
        longervid: {
            name: "Longer videos",
            text: "Now you can make videos up to 3 times longer!",
            cost: 250,
            sideeffect: function () {
                MineSim.maxtime *= 3;
            }
        },
        memes: {
            name: "Le Me-mes",
            text: "Kids love the me-mes (pronounced may mays). Using these are\nguaranteed hits!",
            cost: 1000
        },
        account: {
            name: "Another Account",
            text: "Make another account for your \"Behind the scenes\" or\nvideo blog or whatever we don't care",
            cost: 5000
        },
        dubstep: {
            name: "Dubstep",
            text: "What's skrillex? Some kind of new Anime? Whatever; you can\nnow add it to your videos!",
            cost: 10000,
            sideeffect: function () {
                Juicy.sounds.main.pause();
                MineSim.music = "dubstep";
            }
        }
    };

    if (!this.MineSim) {
        this.MineSim = {};
    }
    this.MineSim.Upgrades = Upgrades;
}).call(this);
