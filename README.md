# p5.js multi sketch template

## HW04A

I started off by making a normal grid of white squares against a black background, based on the code that we started off with in class. I randomized the sizes of each square and I liked the way `noFill();` made the thin white strokes look against the black background.

I wanted to play with `mouseClicked()` but instead of generating random shapes upon loading the page and having the page reset with every mouse click, I wanted each click to randomly generate either stars, circles, or squares exclusively. 

![fun grid sketch](./20241003_122405.jpg)
###### My brainstorming sketch.

I couldn't think of a way to do this with the `for()` loops still existing in `setup()`, so instead basically everything is happening within `mouseClicked()`. Instead of having one `for()` loop randomly generating all three shapes together, like we had in class, the best way I could think of to have each click generate just one group of shapes was to separate the code into three `for()` loops, one for each shape.

By having each click generate a random number, and then creating an `if()` argument where each shape's `for()` loop has an equal chance of being generated, I could make it so both the shape that's being generated is random each time, and the shapes themselves are random in size, color, and location. 

After I set up the three `for()` loops and made sure those worked, I made it so the size of shapes was randomized upon each generation. This worked, but once I tried to set up random colors I ran into some issues. 

I wanted each shape to have its own color zone (yellow for stars, blue for circles, red for squares), and then each shape would be a random shade within those color zones. I managed to get the stars to generate yellow every time, but when I tried to apply the same code to squares and circles, it wouldn't work and still only the stars were colored. After a lot of frustration and moving code around I reached out to a friend who pointed out to me that I had forgotten hash signs on the hex colors for squares and circles! Which was a useful lesson on getting fresh eyes on code issues. 

I then randomized the shapes' locations onscreen, changed the `let rn = random()` range from `(0, 8)` to `(0, 9)`, and changed the `if()` ranges to make a more equal shape distribution.

Then I realized the screen was getting quite crowded after a few clicks so I added another `if()` argument so that the screen would randomly reset every so often, which meant I had to change the `let rn = random()` range again from `(0, 9)` to `(0, 10)`, where anything between 9 and 10 meant the screen would reset.
 
## HW04B