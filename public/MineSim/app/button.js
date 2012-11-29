(function () {
    var SimButton = Juicy.Base.extend({
        width: 150,
        height: 50,
        init: function (x, y, text, link) {
            this.x = x;
            this.y = y;
            this.text = text;
            this.link = link;
        },
        draw: function () {
            if (this.isHover()) {
                Juicy.ctx.fillStyle = "#ffbf00";
            } else {
                Juicy.ctx.fillStyle = "rgb(29, 150, 28)";
            }
            Juicy.ctx.fillRect(this.x, this.y, this.width, this.height);
            Juicy.drawText(this.text, this.x + 10, this.y + 30, "black", "bold 16px Comic Sans MS");
        },
        change: function () {
            if (this.isClicked()) {
                MineSim.current_state = this.link;
                if (this.click) {
                    this.click();
                }
            }
        }
    });

    var makeButton = function (x, y, text, link, click) {
        var button = new SimButton(x, y, text, link);
        button.click = click;
        button.step();
    };

    if (!this.MineSim) {
        this.MineSim = {};
    }
    this.MineSim.makeButton = makeButton;
}).call(this);