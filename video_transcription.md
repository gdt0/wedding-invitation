# Video Transcription: The Cloud Code Leak Explained

**Source:** https://youtu.be/Wvj1mTqyzsQ  
**Video Title:** The Cloud Code Leak Explained  
**Transcribed:** April 1, 2026  
**Duration:** ~39 minutes

---

## [00:00 - 00:30] Introduction - Not an April Fool's Joke

Before we start, I want to make sure y'all know this is not an April Fool's Day joke. I know the timing's a bit absurd, but like this isn't. What this is, is the craziest birthday gift I've ever received. Yes, it is actually my birthday when I'm filming this, and right before going to bed the night before, I saw the craziest leak happen. One of the biggest labs just had all of their code leak for their agentic harness for coding with AI. Yes, the codex source is wait, oh yeah, codex by Open AI was already open source

## [00:30 - 01:00] The Anthropic Cloud Code Situation

Not great about how they've handled the source code for cloud code. They've been very strict trying to keep it private, even though there is a GitHub repo for cloud code, it does not include cloud code itself. It just includes plugins and skills and a few other random things. They've been protecting cloud code for a while, referring to it as their secret sauce, but they've also been using cloud code to build cloud code, which means dumb mistakes happen a lot. And one of those dumb mistakes is including the source maps. If you're not familiar, we'll

## [01:00 - 02:00] What's Coming in This Video

A lot more to dive into here. From the thousands of DMCA requests Anthropic has sent to the conspiracies I already see people spreading, to all the cool things we can learn from this source, to most importantly, how Anthropic can handle this going forward. This is one of the biggest leaks in the AI world's history. It's actually absurd that this happened. I'm going to do my best to cover it and hopefully not get sued in the process. But if I'm going to need lawyers, I'm going to need to pay them, so we'll take a quick break for today's sponsor.

## [02:00 - 03:00] Sponsor: Greptile

stuff that's coming in through all the other people trying to contribute to my projects. 
Getting through it all is not easy, and I wish I had a bit more confidence when I looked at those PRs. 
Oh, I could have just been using Greptile. 
These guys get code review. 
Not only is their agent incredible at giving feedback in really quick, simple, digestible ways, they've also given us a ton of tools to integrate it in other places and to easily use that feedback in the tools we already like. 
There's a ton of tools that have an open and cursor button,

pass information to them. Well, they didn't, until now. 
Cryptile just released fix in X. 
That doesn't mean that they're going to use Twitter to fix your code, believe me, that does not work great. 
It means that you can use whatever tool you want. 
But how does that work with cloud code or codex? 
It works because you set up their NPM package locally as a bridge on your machine, and that allows it to trigger, pass, and do whatever is needed to get the context to your agent. 
I just installed the CLI, it took literally under half a second.

## [03:00 - 04:00] Greptile Demo

That is kind of nuts. 
It already submitted, it's already running in literally one click. 
That was real time, no editing there. 
I haven't actually seen one of these fix in whatever tools that fast ever before. 
Yep. 
I'm blown away. 
This is my real reaction. 
I did not know it was that useful. 
That is something I'm actually going to go set up and use after this. 
Stop reading slop and get back to work at so I did have that link/grab tile. 
As I was saying before, there's a lot to dive into on this one.

## [04:00 - 05:00] Understanding Source Maps

What a source map is, feel free to skip along a bit, but I think this part will be useful regardless and I'm going to have a little bit of history as to how this happened here as well. I'm going to start with a statement that sounds obvious, but will help you understand all of this. Your browser can't run TypeScript. Browsers run JavaScript, not TypeScript. Same with things like Node, same with things like Bun, same with most things that run JavaScript code. There are some that are able to parse out the TypeScript parts, but you're supposed to turn the Type

## [05:00 - 06:00] TypeScript vs JavaScript

And I say const value 1 equals 1, that works. But I would do const value value 2 colon number equals 2, uncaught syntax error, because this syntax that we use for TypeScript is not syntax that the browser is compatible with. This is one of the many reasons that we have build steps in our JavaScript pipelines. The code you write is not the same as the code users run the majority of the time. Other languages are traditionally compiled where the code you write becomes a binary that is running native processes. That is not the case here.

## [06:00 - 07:00] JavaScript Build Process

Not the case in JavaScript. Is it interpreted language? What that means is that there is code being sent to the user and you could just write JavaScript, that's vanilla JS and send it with no additional build steps. But for many reasons we build our JavaScript code, whether it's trying to turn the typescript into JavaScript, whether it's bringing in additional modules, whether it's trying to add additional features that aren't in JS yet and then compile them in, whether it's minification, obfuscation, all of these things that we do. There's a lot of reasons that we

## [07:00 - 08:00] Code Obfuscation Example

applied code that isn't the original code. So just as a really simple dumb example of obfuscation, minification, uglification, all the different things you can do in the JavaScript world, here's just one demo of some very simple example code. Value one, hello, value two world, console log. When you obfuscate this, no one can read that. Obviously, not everyone is trying to intentionally obfuscate their code. They're just using uglification and minification to make the code that they ship smaller, but if you're really trying to protect it, you're probably doing things like this.

## [08:00 - 09:00] The Problem with Obfuscated Code

though, in particular when you want to debug. If this is the code you're shipping to your users, hell, if anything other than this is the code you're shipping to your users and they hit a bug, trying to trace back to where that bug came from is really hard. If you turn hundreds of thousands of lines of code into three lines of code, error messages no longer really mean anything. So it's very common to do some type of process in order to get back the original source when an error happens. But in order to do that, you need to be able to map a given thing

## [09:00 - 10:00] How Source Maps Work

something in the office gated code and more importantly, vice versa. I need to be able to know that this code here, that like these first characters there, are actually directly mapped to this and that this part is directly mapped to that. And you need to have that mapping in order to get usable error messages, in order to get better logs, in order to get all the things you need to solve bugs. Source maps are the method of doing that linking, of linking the code you are sending back to the original source. It is the mapping between that original code and the sou

## [10:00 - 11:00] Cloud Code's JavaScript Bundle

If you were to install cloud code now and go inspect the binaries, it is JavaScript, but that JavaScript is not really readable JavaScript. So if we look at the actual official cloud code package that you can download on NPM today, it includes a lot of things, but the actual core JavaScript here, the CLIJS file, you'll notice none of this is particularly readable. For things that need to have formatting like new lines in strings, there will be a lot of new lines, but if you were to get rid of those, this would effectively just be one.

## [11:00 - 12:00] The Source Map File

one or two lines of code. Very, very, very long lines, but just a couple nonetheless. This CLI.js file that is pure text is 13 megabytes of just JavaScript, and that's this obfuscated JavaScript that nobody can actually read. One of the common solutions for trying to get good errors out of stuff like this is to host the source map on a hidden cloud. Products like Century that are used for logging and managing your errors have the ability to upload your source map to them, so your users can't see the source map, but once it is reported to

---

*[Note: The transcription continues with technical details about how the source maps leaked and the implications for Anthropic...]*

## [37:00 - 39:26] Conclusion & Call to Action

They understand it more. 
And next, don't do some big press release about this that pretends it's not a big deal or that it didn't happen, that is cringy as fuck. 
Let the team come out and talk about it. 
Let the

Share the things that are interesting. It's silly, but just an example of one of the things that would be a good post from somebody on the team right now. Let's just read how they have an employee named Barik. And imagine Barik is posting on Twitter. And Barik says, wow, kind of cool that people can now see all the work I did on some feature. I'm really proud of it. Here's some fun insights from when I built it. This is the type of shit they need to do. It's not that fun.

fucking hard. 
Every engineer working on Claude Code has something cool they built that they want to talk about that they haven't talked about because they can't. 
This is closed fucking source. 
It's not closed source anymore. 
It's source available with a bunch of asterisks. 
Fix that by making it open source and instead of trying to press release this bullshit, instead of trying to suppress it with lawyers, just lean into it. 
Let your engineers be excited because excitement will always, always, always, always beat hype. 
Real excited energy is what you need right now.

And you can't get that from your fucking lawyers. And if your lawyers have to compete with the energy on Twitter right now, you will lose. This will be the biggest hit anthropics ever taken to their sentiment if y'all start going after everybody just for being excited about this shit. So if you do things like DMCA me for this video, go after West Boss for sharing all of the strings in the code base, those types of things, which I know you're considering doing right now. I'm surprised I haven't gotten an email just from filming this live. Get over your shit

lab in the fucking industry, if you don't let your devs do the right thing here. Manufacture more excitement, let your team be hyped that they can finally talk about these things. Lean into that and you can turn this PR fail into one of the biggest PR wins in history. What a wild week. I hope this was helpful and I hope it was worth going live on my birthday to film all of this. I'm gonna go eat some cake and enjoy my day. Hopefully y'all enjoyed this as well and until next time, peace.

---

## Summary

This video discusses a major leak of Anthropic's Cloud Code source code through accidentally included source maps. The speaker explains:

1. **What happened:** Source maps were included in the production build, allowing decompilation of the obfuscated JavaScript back to readable TypeScript
2. **Technical explanation:** How source maps work and why they're needed for debugging
3. **The implications:** This is one of the biggest leaks in AI history, exposing the "secret sauce" of Claude Code
4. **Advice to Anthropic:** Instead of using lawyers and DMCA takedowns, they should embrace the leak and open source the project, letting their engineers share their work openly

The speaker recorded this on their birthday after seeing the leak happen the night before.
