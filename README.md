# Scoreboard app

This is a front-facing app for a scoreboard that would live update from a REST API server.  The app is set up to be able to update
names, player avatars and their scores.  Right now it just has dummy values in order to prototype it for the Hackathon it was built for,
but these ideally would be made available by a server request.  The permanent storage of wins and losses could then be associated with a
playerID for long term record keeping.

### Leaderboard function

Since it is a very minimal app, a leaderboard is stored in the app.js file that would ideally serve values that were provided by the server, which can simply be toggled at the top.

### Made at AngelHack SF 2017

This is a bare bones app due to being a one-off project during a 24-hour hackathon.  It was used as a prototype to demo how an Alexa may
be able to be interacted with, update a server, and then this server would then update the React web app.
