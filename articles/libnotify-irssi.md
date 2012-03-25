title: Using libnotify with irssi
date: 2011-11-22
summary: In which I make a Linux version of a irc plugin made for people who irc on a Mac

Remember last time when I mentioned IRC and that I use it a lot? Well I actually do use it a lot. In fact on the list of things that I do on the internet irc is a huge part of that. The other part of that is trying to word a bug you just found in terms which are not too generic that google ignores it, for example "libnotify bug when body contains < or >".

Whilst looking about on the internet on reddit and interweb forums I came accros [this blogpost](http://matthewhutchinson.net/2010/8/21/irssi-screen-fnotify-and-growl-on-osx) which more or less tells you how to get growl notifications for OSX. To be fair this is quite useful if you had OSX but I use linux mainly so I tried to hack this to get it to work.

From the instructions given let me tell you that the Fnotify stuff is fine. Just download that script and load it into irssi. However instead of using Growl, linux uses libnotify. You can find many different wrappers for libnotify which lets you easily make notifications in your favourite language. For example, this is how you could do it in ruby with the libnotify gem:

    require 'libnotify'
    Libnotify.show(:body => ARGV[0], :summary => ARGV[1], :timeout => 2.5)

Some of you might notice that I put the heading in the body and the message in the summary. There's a reason for this which I'll mention later
The next step is the connection script which isn't too much of a problem just change the bits in the while loop:

    #!/bin/sh

    (ssh ssh_username@your_server.com -o PermitLocalCommand=no  \
      ": > .irssi/fnotify ; tail -f .irssi/fnotify " |  \
    while read heading message; do                      \
      ruby /path/to/your/script/libnotify.rb "${heading}" "${message}";      \
    done)&

Now you're done! you've now got notifications when you get pinged on irc

![A sample notification](http://gyazo.com/40fbd18e663c0f6bbd5630e8a941ee68.png)

You can now blog about this and go to sleep

Actually no I didn't explain why is the message in the summary and the heading in the body. Well funnily enough I found a strange little bug that I can't seem to understand. If the body text contained "<" or ">" it wouldn't show the message. I did think of stripping them out and just have the user show up as "@some_guy: Afal: here's a cool url http://leekspin.com/" but then I realised what if someone had their message as "< herpson> Afal: <3 your blog post about the cornettos" I could strip them out but then that would get rid of the "<" in the "<3".

I could probably have reported this bug and even tried to do a bug fix but as it was nearing midnight I decided there's probably not much difference with having the message first. And now I'm writing this past midnight instead of going to sleep after getting like an hours use of it and 2 people pinging me legitimately and not in the "TEST IS THIS WORKING TEST" way. Ug, I need some sleep.

Edit: I'm pretty sure I posted an update to this saying that the reason it was bugging out on < and > was because the message needs to be html encoded. I guess the bug is more of a "poor documentation" thing than an actual bug. If you're reading this: Make sure that you HTML encode your messages when sending them in libnotify.
