## Heartbeat Web App
Overview

Heartbeat is a web application designed to provide quick access to essential emergency information based on your current location. Upon opening the app, it rapidly displays the name of the street you are on, along with three crucial emergency contact numbers (police, fire department, and ambulance) specific to the country you are in. Additionally, Heartbeat identifies and displays the nearest three Automated External Defibrillators (AEDs) in your vicinity.
Features

    Location Identification: Heartbeat quickly identifies your current location and displays the street name.

    Emergency Numbers: Provides the emergency contact numbers for police, fire department, and ambulance services tailored to your current country.

    AED Locator: Locates and displays information on the nearest three Automated External Defibrillators (AEDs) in your area.

Technologies Used

    Node.js: Heartbeat is built on the Node.js runtime for server-side JavaScript.

    Express.js: The web application utilizes the Express.js framework for building robust and scalable web applications.

Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/heartbeat.git

Navigate to the project directory:

bash

cd heartbeat

Install dependencies:

bash

npm install

Start the application:

bash

    npm start

    The application will be accessible at http://localhost:3000 by default.

Configuration

Heartbeat requires the OpenCage Geocoding API for location information. Obtain an API key and set it in the configuration file.

    Create a .env file in the project root.

    Add the following line to the .env file:

    env

    OPENCAGE_API_KEY=your_opencage_api_key

Contributing

If you'd like to contribute to Heartbeat, please follow our contribution guidelines.
License

This project is licensed under the MIT License.
