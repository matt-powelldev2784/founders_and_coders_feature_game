# Junior Dev Person

## Endlessly scrolling background game

# Planning

I did a bit of research online, before deciding what type of game to make. I came across a few
tutorials for endless scrolling background games. I thought this type of game would look cool and be
relatively easy to code due to the small number of components used. The game is loosely based on the
google dinosaur game and this YouTube tutorial: https://www.youtube.com/watch?v=47eXVRJKdkU&t=1280s

# Building

I made sure I watched the tutorial from start to finish before doing any coding myself.

I then set about getting the scrolling background working as this was the key to the whole project.
I had never heard of the requestAnimationFrame JavaScript syntax, so for this part of the project I
was heavily reliant on the tutorial video.

Once the scrolling background was working, I was able to apply similar logic to the other moving
parts. I then coded one feature at a time only referring to the video occasionally if I needed
inspiration for my own implementation.

# Debugging

I was able to debug each feature as I built the game using the console and element inspector as I
usually would. The biggest issue I came across was getting all the game elements to retain their
positions after implementing a pause/resume feature. After a few failures I realised I could get the
required outcome by, leaving the requestAnimationFrame logic running at all times and only running
the logic to move the pieces when the game was not paused.

When doing some cross browser testing, I noticed the game animation runs about 50% slower on Safari
than Chrome and Firefox. I have read a few threads online regarding requestAnimationFrame and
safari. Some suggest this is the planned behaviour of Safari, I currently don’t have a solution for
this.
