# Roll Character
## Specification Deliverable
### Elevator Pitch
Enjoy playing Dungeons and Dragons but not the hassle trying of picking your character? Or maybe you find yourself playing the same kind of character over and over again? Roll Charater allows you to virtually roll dice that give you a randomized race, class, alignment, and background! After you've rolled for your character you then are prompted to roll for stats. Once the stats have been rolled you can name your character and save them.
### Design
There will be four main pages after logging in/creating an account.

The login page.
![Login Page](https://github.com/cammaicey/startup/blob/main/images/rc-login.jpg?raw=true)

These next three are all the home page but as you click the buttons it changes to reflect the next step.
![Base Home](https://github.com/cammaicey/startup/blob/main/images/rc-home-first.jpg?raw=true)
![Stats Home](https://github.com/cammaicey/startup/blob/main/images/rc-home-second.jpg?raw=true)
![Name Homes](https://github.com/cammaicey/startup/blob/main/images/rc-home-third.jpg?raw=true)

A way to view characters.
![Archive](https://github.com/cammaicey/startup/blob/main/images/rc-archive.jpg?raw=true)

Lists showing your friends, pending requests(might get rid of this), and recieved freind requests.
![Friends](https://github.com/cammaicey/startup/blob/main/images/rc-friends.jpg?raw=true)

An info page that will introduce my startup and help get you started.
![Info](https://github.com/cammaicey/startup/blob/main/images/rc-info.jpg?raw=true)

### Key Features
- A secure login using HTTPS
- Roll for character features (race, class, etc.)
- Roll for stats using 4d6 method discarding the lowest roll and adding the rest together. After each roll you can assign the stat value to an ability (dex, str, etc.)
- Naming your character
- Ability to store characters into an archive the user can access at anytime
- Add friends and chat with them using the chat box
### Technologies
- **Authentication**: Prompts user to register an account and login. Cannot access website without one. Displays username in top right corner.
- **Database Data**: Users can store their rolls into the database.
- **WebSocket**: You can friend people and send messages to each other through a chat box in the lower left corner.

## HTML Deliverable
- **HTML Pages**: Five HTML pages for login, home, archive, friends, and info
- **Links**: Login automatically goes to the "Home" page and each page (except for login) has links to all of the other pages
- **Text**: Each page has some sort of text that will either be there in the final stage or is currently acting as a placeholder until the action can be fully implemented
- **3rd Party Service Calls**: At the moment I do not know what 3rd party service calls would be made with my application
- **Images**: Added a picture of Rivendell on the info page, I will probably change this later
- **Login**: Input for username and password with a submit button
- **Database**: The user's choice to add their character to the archive acts as them storing data in a database
- **Websocket**: The home, archive, friends, and info page all have a chatbox that will allow friends to send messages to each other

## CSS Deliverable
- **Header, Footer, Main**: Gave everything a nice styled appearance with reddish brown header and footer and tan main
- **Nav Elements**: Dropped the underlines, made the font color white, and aligned it all at the top
- **Responsive to Window Resizing**: Resizes itself nicely
- **Application Elements**: Not quite sure what this part means but I think I've got some decent color scheme going on as well as it not being too crowded
- **Application Text Content**: Consistent font style and color
- **Application Images**: The image just kind of stays the same size

## JavaScript Deliverable
- **Login Support**: Basic login JavaScript
- **Database Data Support**: I think I am on the right track but still need to work a lot out, currently storing details, stats, and character obj in local storage this data isn't reflected in the archive though.
- **WebSocket Support**: I wasn't able to get to this because of the Database Data portion unless something else I'm doing counts for Websocket.
- **Interaction Logic**: The home page seems to be interacting well and I made sure to accomodate for any possible user errors ie accidentally not assigning stats, accidentally removing stats, etc.

[Notes](notes.md)