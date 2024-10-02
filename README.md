# p5.js multi sketch template

NOTES TO SELF ON TROUBLES:
Can't figure out how to make it so when squares (for example) are generated, each square can randomly be a different color rather than all the same color!! FIXED.

FORMAT LATER THIS IS JUST TEXT:

Started by making a normal grid of squares like what we started with in class. I wanted to play with mouseClicked and instead of just regenerating the entire screen with every click I wanted each click to randomly generate either stars, circles, or squares exclusively. I couldn't think of a way to do this with the for loops still in setup, so basically everything is happening in the mouseClicked function. Instead of having one for loop that randomly generated the shapes all together, I seperated it into three for loops, one for each shape, so each mouse click could either generate a random grid of squares, circles, or stars. 

I wanted to make it so the shapes were random sizes upon generation, and then random colors, then slightly more random areas of the screen. I wanted each shape to have its own color zone so they could still be distinguishable onscreen.

I managed to get random sizes upon generation, but I ran into an issue with the colors. I started with the stars, and managed to get the stars to generate yellow every time, but when I tried to apply the same code to the squares and circles for their colors, it wouldn't work and still only the stars were colored. I reached out to a friend who pointed out to me that I had forgotten hash signs on the hex colors! 

I got random areas onscreen to work, and then I changed the rn = range from (0,8) to (0,9) and changed the if/else ranges to make a more equal distribution.

Then I realized the screen was getting quite crowded after a while so I added another if/else function so that the screen would randomly reset every so often, which meant i had to change the rn range again from (0,9) to (0,10) where anything between 9 and 10 mean the screen would reset.



By putting different sketch.js and index.html files in directories we can more easily switch between multiple experiments.

---

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2024f-b.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.
