# Junior Dev Person

## Endlessly scrolling background game

# Planning

I did a bit of research online, before deciding what type of game to make. I came across a few
tutorials for endless scrolling background games. I thought this type of game would look cool and
push the bounderies of my current skillset. The game is loosely based on the google dinosaur game
and this YouTube tutorial: https://www.youtube.com/watch?v=47eXVRJKdkU&t=1280s . I managed to get my
projects completed so I added a backend using NodeJS to store the high scores. This is hosted on
Heroku. The source code for this is available on github
https://github.com/matt-powelldev2784/founders_and_coders_feature_game_server

# Building

I made sure I watched the tutorial from start to finish before doing any coding myself.

I then set about getting the scrolling background working as this was the key part of the whole
project. I had never heard of the requestAnimationFrame JavaScript syntax, so for this part of the
project I was heavily reliant on the tutorial video. I now understand that I can use
requestAnimationFrame callback function to update the dom before the next repaint.

Once the scrolling background was working, I was able to apply similar logic to the other moving
parts. I then coded one feature at a time only referring to the video occasionally if I needed
inspiration for my own implementation.

# Debugging

I was able to debug each feature as I built the game using the console and element inspector as I
usually would. I had a bit of trouble getting all the game elements to retain their positions after
implementing a pause/resume feature. After a few failures I realised I could get the required
outcome by, leaving the requestAnimationFrame logic running at all times and only running the logic
to move the pieces when the game was not paused.

# Issues

When doing some cross browser testing, I noticed the animation wasn't as smooth in safari. I noticed
the callback function from requestAnimationFrame in Safari is taking twice as much time when
compared to Firefox and Chrome. To offset some of the issues with this, the application defines some
variables specifically for Safari browsers.

I had some issues getting the application to centre on an iPhone in landscape mode. I’ve struggled
to work out a good way to deal with the iPhone navigation bar! I’ve resorted to putting a margin-top
on body element to get a decent result for the user. I’m unable to test on Android as I don’t have
the hardware.
