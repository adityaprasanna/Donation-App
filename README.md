# Donation App 1.0
- Uses Angular 8.0 and Bootstrap 4
- Uses Typescript (default)

## Features

- Accepts a donation (checks for invalid input or null field)
- If total donation amount has exceeded $1000, the donation button is disabled
- Working Progress bar which shows the progress of total donation amount collected
- Responsiveness implemented using bootstrap 4 and tested using chrome inspect tool.
- Tested using VPN for different countries.

## Instructions to Run
- Install Angular cli with 'npm install -g @angular/cli'
- Navigate to directory with package.json and run 'npm i'
- Now, run 'ng serve -o'
- You should now see the project in your browser window running on port 4200
- Enter donation amount and click 'donate'
- Currently must refresh to see updated progress bar and redirect to base URL to make another donation (could be improved).

## Link to google sheets

- https://docs.google.com/spreadsheets/d/1eS-SAB8p90IXBR82sx1yppj72Ny93TyXbeSmZ3lNzws/edit?usp=sharing

## Project Structure

- API calls made are stored in auth.service.ts.
- Components folder contains only one component named 'Home'.
- SCSS preprocessor for index.html and home.component.html have been used.
