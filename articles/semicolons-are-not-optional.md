title: Semicolons are *NOT* optional
date: 2012-03-23

I recently read a small article about how [Semicolons in JavaScript are optional](http://mislav.uniqpath.com/2010/05/semicolons/). Hoo boy here we go.

*Optional* semicolons is something that are on the list of "Stuff that makes javascript look bad" and there are a lot of things on that list. Yes JavaScript is well known for having a lot of "bad stuff" in there and yes haha it's funny because the O'Reilly book for JavaScript is a lot bigger than JavaScript The Good Parts. We get it. JavaScript has flaws (not as if any other languages doesn't have blemishes).

Also I know that the point of the article is not to point out "don't put semicolons ever" and more "Don't follow a programming style blindly" but there's good reasons for these programming styles. Python has [PEP-8](http://www.python.org/dev/peps/pep-0008/) telling you how your code should look. You don't have to follow it but *it's a good idea* to do so.

So yeah; semicolons in JavaScript are optional, but so is washing (think about it).

## "All JavaScript interpreters I've used understood what I meant so why should I use them?"

Fair point. Lets ignore JavaScript for a little bit and lets make a simple "Hello world" application in C:

    main () {
    	puts("Hello world!");
    }

You can compile this and you'll get a "Hello world!" application in C. You could run this and it will go "Hello world!". This is the simplest program you can make with C. It works, why should I care if I have an implicit decleration of "puts". Who cares if I didn't state the return type (therefore defaulting to int), and why should I give a crap about my function not returning anything? It works. It compiled. Who gives a shit?

## "Minification of JavaScript doesn't give any benefits. This three line example shows that semicolons are the same as newlines"

I guess the example could be minified further:

    var a=1, b=2, c=3;

Hey I could even ommit the semicolon on the end and remove the spaces between each comma and end up with 15 chars. However that's not the point this guy was trying to make. The point is that semicolons are just as useful as newlines. Also supposedly adding braces around an if or a for loop is stupid because if there's only one line after it then what's the point?

    for (var i; i < x; i++)
        for (var j; j < y; y++)
        	if (grid[i] && grid[i][j]) {
        		// Insert code that goes on for a few lines here
        	}

I think I get it now. It's to make the loop more readable... no wait no it's the opposite of that. This is hard to follow. Who the hell would code like this? Who the hell thinks that line endings are "just the same" as having a secolon on the end therefore they are needless?

Rubyists are probably the likely suspect. When rails went out it came with at thing called "RJS" which apparently made all the AJAX stuff you can add to you rails app just in one line of syntactic sugar or something. RJS seems to be gone from rails these days and replaced with something which is just as bad (CoffeeScript). I really worry about the people who use these tools without knowing how to actually work with JavaScript. These are the people who don't care about how to actually write properly in the language. Just fart out something made with CoffeeScript and then stick it on the rails. Who cares if it's all needless faff? It's JavaScript written "right" (i.e. with ruby-like syntax). Ruby (or rather rails), has let a generation of people with very little programming knowledge in to pick it up and fuck about with it. Rails programmers today are kinda like the PHP programmers of yesteryear.

So yeah JavaScript isn't ruby and because you're used to ruby you feel like you don't have to put semicolons cause, you know, "that's one extra character". Who cares if a language should be written in a certain way? It's lenient about it and I want it to look like rails. Fuck the police.

## "Dougie Crockface told you to do it? laughing_girls.jpg"

Ok there's a few things about JSLint that a few people can disagree with. I bet that no sane person would agree with the ++/-- thing or will add "use strict" on the top of their script. A lot of the stuff won't even apply to the style you're using and if you are using a style you should keep it as consitent as possible. The way that Crockford tells you to use is just one style. Four spaces sounds reasonable for me coming from a python background. If you want to use 2 spaces then fine.

Hey here's a crazy thought. What if there was a way to tell JSLint that you want to ignore some options if you're strange and likes 2 spaces instead of 4. Oh wait:

![There were customisable options here all along!](http://gyazo.com/a895cb1facbfabbe8435d0289790fec4.png)

Saying that you don't need JSLint as a tool to help is kinda like saying "You know what? I don't need lint or valgrind to check if this C program I just wrote has memory leaks. It works on my computer so why would it break on others?". To give a non-technical analogy "Why do I need a helmet for cycling? Helmets are for people who fall off and I have never fallen off my bike."

Oh yeah, saying "This minified and unreadable code has semicolons therefore semicolons are bad" is the same as saying "Star Wars Episode I had JarJar and it ruined the film therefore the Star Wars series is terrible and should not be watched".

## "Who does a new line for return seriously?"

Ok the example there was a bit flawed. No one would code like that. So here's an actual example of why you'd like a return on a new line:

    function foo ()
    {
    	return
    	{
    		foo: 'bar'
    	}
    }

Note the lack of semicolons. This is a less silly example to the one in the original article. I shouldn't have to say what happens to this when automatic semicolon adding happens:

    function foo ()
    {
    	return;
    	{
    		foo: 'bar'
    	};
    }

Yeah. This is why it's advised that a starting bracket to a block or an object is on the same line rather than on a new line.

Yes, we know semicolons don't actually stop this mistake. However, no one should have to put the return on a new line anyway. Saying "semicolons didn't help to fix the bug therefore they're bad" is like saying "This hammer didn't help me paint the wall. Hammers are rubbish tools (and I now have holes in my walls)"

## "Whoops it breaks in this example but if I put a semicolon at the start it works fine. Semicolons are still bad by the way"

Who the fuck codes like this? Seriously. So far this guy has been saying that you can write javascript without semicolons and whilst it's not advised he still tries to deny that they are needed even when he's **adding them at the start of the line for no reason**. Who codes like that? That's the most stupid way to code EVER what the fuck who would even do that.

If you're placing a semicolon on the start of a line to prove that semicolons are optional then you're doing it wrong because you're still using a semicolon you dufus. What's wrong with adding that semicolon at the end of the line like every other REAL programming language? If you're actually using a semicolon doesn't that prove that semicolons are actually needed? That they aren't actually optional it's just that the JavaScript interpreters are just lenient as to wether they're used or not?

---

Fuck it. I don't care. It's not as if I write [Idiomatic Javascript](https://gist.github.com/793649) anyway. Everyone has their style and if this guy wants to write semicolonless(!) JavaScript then let him at it. We'll just let everyone else carry on with their own programming styles. However the fact that semicolons are "optional" is not the point. Denying that there are *good* reasons for these styles IS however.
