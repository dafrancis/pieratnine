title: Riding the Meteor
date: 2012-04-14
summary: In which I make a Real Time Blog in Real Time (inception.wav)

So Meteor made quite an impression on people. While watching the video I was reminded of the "15 minute blog" video that rails had. The screencast was *really* cool and I mean *really* cool. Oh wow this has everything. Auto reload. Hot code pushing (or whatever it was). Real time sockets. Clientside API shiz. JAVASCRIPT. OH GOD THIS USES JAVASCRIPT. I AM LITERALLY GOING INTO MY TERMINAL AND TYPING DOWN THE ONE LINE INSTALL THINGY RIGHT NOW.

The problem I had was "Ok.. what now?".

Thinking of something to do with Meteor was a problem for me. There weren't any tutorials yet just example code including the classic "to do app" that every JavaScript framework seems to do (in the same way that "blogging engines" are the example thing to do with web frameworks).

I was stuck until sometime during work I had an idea. It was a stupid idea and it was completely trivial but I thought I'd give it a go. I got the idea from this video:

<iframe width="560" height="315" src="http://www.youtube.com/embed/hkDD03yeLnU" frameborder="0" allowfullscreen></iframe>

No I wasn't going to make a GUI in visual basic. My plan was to make a "Real Time Blog".

The first time I tried this was probably 2009 or something? What I did was a simple php script that wrote to a txt file (I used NoSQL before mongo was a thing... probably). On the front end I had some JavaScript that used setInterval to get the contents of the txt file and then display it every 10 seconds. There was an edit page where I could type down a message and when I click send it did an ajax request to that php script therefore the txt file got updated which then meant that the next time the setinterval loop came around it got the new contents of the txt file and then displayed that. Not complicated at all.

The idea was to write the real time blog properly. PHP replaced with JavaScript and a txt file replaced with mongo. Should be simple.

Except I had problems. Actually my main problem is that I didn't know how to use mongo. In fact I didn't have mongo installed and had to compile the latest one. Ok a bit of bother but whatever. I understand mongo NOW.

Using other JavaScript libraries. How did that work. Could I download a library to a the project folder and then include tha... fuck it I'll just use a cdn. JQuery bind didn't seem to work either and I have to use the event map thing which is a bit... clunky? Like I understood it was "[event] [element]" but it didn't want to work when I put in the element so I had to leave that out which was also no good.

I also had a bit of difficulty with handlebars but that's probably my fault for writing it in moustache the first time. I do hope that I can chose whatever templating engine I want in later releases.

Hours later I got this:

![Had to use the other profile because the other one has a mlp theme and people might complain](http://i.imgur.com/Yj1dq.png)

The code is near to bugger all [so I might as well just stick the files in a gist](https://gist.github.com/2384651). It works great in chrome although I can't guarantee that it'll work in other places.

Real time blog! I can go to the edit page and then add text to my page. and it'll update in REAL TIME!!!

Meh

This was a fun micro project but meteor isn't quite production ready yet. Meteor is great for prototypes to stuff but actually using this would be a huge WTF.

So what's wrong with it?

The quite obvious one that everyone has pointed out is *clientside database write access* I suppose you could interpret it as a "api" but I'm sure API's have some form of authentication as well.

Secondly JavaScript. I know that sounds weird for me to say this (considering I *love* JavaScript) but I'm not ready to jump on the node bandwagon yet. I might do in the future and I will be praising the JavaScript gods and singing from the tops of the mountains that node is the best thing ever; but not today. Meteor looks great for front end development but it would be nice to have a different back end.

Thirdly the ammount of javascript files included:

![This is just straight out of the box project](http://i.imgur.com/czp08.png)

Does it need all that? Really? Also plz2requirejs.

Also the serverside JavaScript can be seen on the client side. wat.

HTML is loaded by js. wat.

No 404s. wa... actually I guess the idea they had here was to have a "pushState" type routing in a future version. I used Bix for the routing and made a custom 404. Works great in chrome but in firefox it doesn't and it's not a problem with bix. Bix works in firefox but for some reason it doesn't work with meteor on firefox. Could be something to do with Firefox's handling of socket based applications, could be a problem with Meteor itself. I don't know.

So yeah. Meteor looks cool, but I don't want to use it yet. There's just too much "magic" going on there which I can't control. It's a nice proof of concept though and I'm looking forward to seeing more of it. Although I don't think that I (or anyone sane) can use this seriously at this time. Wether Meteor is going to be hot stuff or it's going to crash and burn only time can tell.