# Quest-Game
Answer riddles to win


Project 1 game idea

USE CSS RESET!!! Otherwise background might not fit entire screen.

Game:
- find the background image to use as the 'board'. OR create a simple one on your own.
- background image
  - backgroundMap.jpg credit: https://steamcommunity.com/sharedfiles/filedetails/?id=135544186
  - forest image credit: https://s-media-cache-ak0.pinimg.com/736x/e1/6d/61/e16d61fd95852c9bf642e9047ef74909.jpg

- character images:
  - character1.png + character2.png
  - credit: http://hugohugo.deviantart.com/gallery/12535858/Dungeon-Hunter

- CSS font-style credit:
  - https://modernweb.com/2013/04/29/zelda-a-link-to-the-css/
  - <link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' type='text/css'>

- Pop-up boxes formatting:
  - http://inspirationalpixels.com/tutorials/custom-popup-modal

- Riddles:
  - Credit: https://www.reddit.com/r/rpg/comments/1lxxup/i_need_some_good_riddles_for_dd_any_subject_any/
    - √ Riddle 1: I have a tail, and I have a head, but i have no body. I am NOT a snake. What am I?
      - A Coin
    - √ What has four wheels and flies?
      - A garbage truck
    - √ What crosses the river but doesn't move?
      - A bridge
    - What pine has the longest and sharpest needles?
      - A porqupine

  - Credit: http://www.doriddles.com/riddle-197#show
    - √ Wednesday, Tom and Joe went to a restaurant and ate dinner. When they were done they paid for the food and left. But Tom and Joe didn't pay for the food. Who did?
      - Wednesday
    - √ What begins with T, ends with T and has T in it?
      - a teapot
    - √ Mr. Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr. Smith have?
      - 5, all of the daughters have the same brother
    - √ Mary's father has 4 children; three are named Nana, Nene, and Nini. So what is the 4th child's name?
      - Mary

  - Credit: my sister
    - √ What begins with F and ends in -uck?
      - firetruck
    - What beez produce milk?
      - boobies

theme ideas (have to have a theme + questions that everyone will know)
  √- OR, have it be a forest-style background with questions like:
    - "You are in the woods and it's becoming dark out. You need a fire, what material would you use?"
    - Answer: "wood"


- 2 players
- starting point left bottom
- 100 dots between start and finish
- move from point A to B
- each dot on the board will be a different ID
  - this will allow for you to send your player to every dot on the board

- Involve a math.random between 1-6 to act as dice
  - this will allow your player to land on a random dot (ID)
  - each dot will have either:
    - a puzzle to solve
    - a short-cut (ladder)
    - a hole (return to dot 1)


- if player lands on dot X
  - start over
- else
  - keep playing

- if player lands on ladder
  - skip to point X ahead in game (short cut)
- else
  - keep playing


- for each square create an ID or ARRAY that will allow your players to move there


or instead of dice make them prompts with questions that need to be answered to go to the next spot.
- if you get the question wrong then you go back to the start
- each spot has a question that will need to be answered
- but math random may let you skip that spot
