# PresentationBuddy

## Inspiration
Presentation is an important component of the professional world. Creating and presenting a presentation that effectively communicates your purpose is critical in order to share your ideas. We created presentation buddy to help people improve their presentation skills and share their ideas in a professional manner.

## What it does
Presentation Buddy is designed to give real-time feedbacks to presentations. Users can receive feedback about their facial expression and speech volume, as well as useful presentation tips.

## How we built it
Presentation Buddy is created using flask. A smile meter is created in the video stream with OpenCV. Whenever the user smiles, the smile meter increase and when the user does not the meter decreases.\
The tips and timer are made through javascript. The tips are synced with the timer and changed every 5 seconds.

## Challenges we ran into
A few of the major challenges we ran into included:\
- Using Flask to create an interface between Python and JavaScript
- Building and implementing the web application with limited processing power
- Connecting the backend Python code to work in sync with Flask for the Smile Meter
- No Red Bull

## Accomplishments that we're proud of
- Got the Smile Meter working after hours of troubleshooting
- Building a timer to keep track of the duration of the presentation
- Interfacing Python and JavaScript through Flask in a more than satisfactory manner
- Doing all of that without Red Bull

## What's next for PresentationBuddy
- Convert Presentation Buddy to a desktop app
- Add other types of feedbacks (such as volume, gesture, etc.)
