title: Shut up and Jam
date: 2012-11-19
summary: In where I finally get round to talking about that game I worked on.. and then a few more

It's been a few months since June and I'm aware that I haven't really updated
this site since then. I've been... busy to say the least.

Every year [Something Awful](http://www.somethingawful.com/) have a gamejam
centered around a theme. People go into groups of whatever and make a game.
The team I joined was Team Punch The Moon, a group that came about from an old
internet forum I still frequent. It's this year they decided that they should
combine the talents within this small forum to create a game for this jam.

A game with the theme of *Balls*.

Ok it wasn't the most inspiring of themes. In fact this probably is the worst
theme idea for a gamejam ever. Nonetheless June was occupied in planing the
game. We went from an idea which I could only describe as "Lemmings meets
Sonic The Hedgehog" to various other "gimmicks" but no real "game". In the end
I decided that we should probably do a click and point adventure game because
most of the ideas presented were story based and it was better to present the
story in an interactive format such as a click and point adventure rather than
think of a new gameplay mechanic.

And so [Pachinkoman](http://www.badnix.com/pachinkoman/) was born. July was
spent working on the game. The action system which is used heavily in this game
is based on a prototype I hacked together on the first day of development. Same
goes for the dialogue system. [Blade](http://badnix.com/portfolio/) manged to
get it to work with his knowledge of JavaScript Canvas. I'm glad he did,
because when work at July started getting really stressful I was burnt out and
couldn't be bothered to do any programming outside work.

Back to when I was designing the actions system for Pachinkoman (which was how
I imagined I would do click and point adventure games of its type) I had an
idea where a certain set of things could be done that a puzzle designer could
then use these macros to design their puzzle and write dialogue easily.

The JSON syntax kinda gave the best representation of data for this. The idea
I had is that I could represent data like this:

    // Inventory
    {action: "inventory", inv_action: "add", item: "stapler"} 
    {action: "inventory", inv_action: "remove", item: "stapler"}

    // Room
    {action: "room", room_action: "add", item: "stapler"} 
    {action: "room", room_action: "remove", item: "stapler"}

    // Change Room
    {action: "change_room", room:"office"}

    // Dialogue start
    {action: "dialogue", dialogue: "8ball_convo"}

    // talking
    {action: "talk", talker: "pachinkoman", line: "is this the real life?"}

These set of actions could then be strung along with objects like so:

    var interaction_db = {
        stapler: [
                {action: "talk", talker: "pachinkoman", line: "it's my stapler now!"},
                {action: "inventory", inv_action: "add", item: "stapler"},
                {action: "room", room_action: "remove", item: "stapler"}
        ]
    }

I kind of noticed as I went along (having read a bit of [SICP](http://mitpress.mit.edu/sicp/)
and tried to [learn how to make a programming language](http://www.nathansuniversity.com/)
I noticed how [lispish](http://www.defmacro.org/ramblings/lisp.html) my
DSL was becoming. Coincidence I'm sure.

Whilst a lot of Pachinkoman was built like this, I really wanted a simple
way of editing. So I ended up trying to write the "click2pres" editor.

It was halfway through July when I thought that I've wasted too much time on
something that was never going to be used. I was stressed. What I was building
was the key part in getting the system to work. If I didn't finish it the rest
of the team won't be able to write the puzzles. Luckily Blade had been writing
the actions in this format from the begining when I proposed it. We didn't need
the editor to finish the game.

We were far from finishing the story by the end and we didn't have very many
puzzles; but we decided that we should probably wrap it up and submit what we
had anyway. from the 100 or so teams that entered only around 40 submitted
anything. Some were [individuals](http://www.virtualballsack.com/), some were
[professional game developers](http://www.freeholdentertainment.com/madball/).
We had some pretty stiff competition and there were some [fantastic entries](http://labtanner.com/gamedev/index.php?title=SA_GameDev_VII).

We came second overall. It only took about 2 months for the result to come out.
Had we added a few more puzzles in we could have gotten first place but in all
fairness 2nd place was pretty good considering we were just a small team who've
never done anything like this before and we were against professionals and
everything. Mad ball won the jam and rightly so. It's a beautiful game.

---

Now in November It's been a few months after our victory. We haven't really
progressed on the game. Partly because the artist was busy with college work
which is fair enough.

However, my gamejamming thirst was not quenched and I started looking for other
gamejams to participate. At the moment I'm currently in the middle of the
[github game off](https://github.com/blog/1303-github-game-off) (I just need to
finish off the game by next week). I've also finished my game for
[Fuck This Jam](http://fuckthisjam.com/); a gamejam centered around creating a
game in a genre you hate.

I had a fair bit of choice with this gamejam but in the end I decided to go for
an idea I had cooking up when I heard of this jam. The result:
[Minecraft Lets Play Youtube Channel Simulator 2013 Alpha](bmo.fuckthisjam.com/submissions/6-minecraft-lets-play-youtube-channel-simulator-2013-alpha).

The game is pretty pants and I'm aware of this. I won't go into detail to my
reasonings to the game's theme [since I've somewhat done this already](https://plus.google.com/105970082504334767845/posts/D5EndRaaENw).
Why make the game at all if I knew it was going to be terrible? I needed
practice with JavaScript canvas and had been already building a
[canvas library of my own](https://github.com/dafrancis/Juicy). Next time I'll
probably choose a decent canvas library and use that. I don't think my homebrew
one is doing me any good.

Even with it's rubbishness _Minecraft Lets Play Youtube Channel Simulator 2013
Alpha_ was still well recieved. It even got mentioned in a [gaming blog](http://indiegames.com/2012/11/fuck_this_jam_gets_personal_de.html).
I have no idea wether it's a popular gaming blog or something but that's an
achievement to me at least.

I enjoyed the experience of these past few jams and I doubt these will be my
last gamejams that I'll participate in. The joy of creating something is what
drives me in these things and it's what drives me to do programming in the
first place. Whilst at work I may not have that many jobs where I get to create
something; the jams give me full freedom to be able to create not only things
that I've enjoyed making but things that other people will enjoy playing with.
