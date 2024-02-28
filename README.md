## General Approach and Notes :floppy_disk:

With a reasonably small time frame as expectation I need to balance up where I could make efficiencies whilst still meeting with the brief. Example of this, is use NestJS, since I am familiar with it (I.e. can set up quicker), but use MongoDB, which I am less familiar with - thus being able to show  my ability to quickly improve my skills with a new(ish) technology but I accepted the extra time to learn in initial stages.

State Management - The front end handles state locally in the relative page as it is only used for the holding of the data before either submission into the backend (AddProperties) or render (ViewProperties), I felt no great complexity of state management was required for this task.

Testing Strategy - As unit testing comes with some time overheads with regards to set up, I have implemented the basics here - an immediate extension to this task would be to flesh out the tests to increase the coverage

CSS preprocessor - I am familiar with Material UI, hence my reason to utilise it for the the front end

Compromises - As I wanted to stick as closely to the given time frame, I have had to economise on time in a few areas. Two main areas to note with regards to this are the Front end UI, particularly the View Component section needs a good spruce up, and adding more tests to increase the coverage. 

# Run the applications :rocket:

General

- git clone https://github.com/jondhill333/p-task.git

Backend 

- mongo connection string will be sent to you directly and you enter that into the app.module, in the MongooseModule.forRoot( - there is a note to show exactly where
- cd into backend folder
- npm i
- npm run start:dev

Frontend

- cd into frontend folder
- npm i
- and type npm run dev


# Run the tests 📋:

Backend 

- cd into backend folder and type npm run test


Frontend

- cd into frontend folder and type npm test



## Next 20 Hours :muscle:

- Make each card clickable, which will take them to a page specifically for that card with all the extra data on the property they would need
- Include snippet of the description of the property within the card, which will allow the user to gain a bit more insight, without needing to click through to the actual page. This will help the user experience, helping them to know if they want to look further into a property or move onto the next, without leaving the page.
