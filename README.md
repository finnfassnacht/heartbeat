# Heartbeat Web App
## Overview

Heartbeat is a web application designed to provide quick access to essential emergency information based on your current location. Upon opening the app, it rapidly displays the name of the street you are on, along with three crucial emergency contact numbers (police, fire department, and ambulance) specific to the country you are in. Additionally, Heartbeat identifies and displays the nearest three Automated External Defibrillators (AEDs) in your vicinity. The application also includes a map feature that visually represents the user's location and the location of the nearest AEDs.

## Features

* Location Identification: Heartbeat quickly identifies your current location and displays the street name.

* Emergency Numbers: Provides the emergency contact numbers for police, fire department, and ambulance services tailored to your current country.

* AED Locator: Locates and displays information on the nearest three Automated External Defibrillators (AEDs) in your area.

## Resources Used
* [OpenStreetMap (OSM)](https://www.openstreetmap.org): For mapping services.
* [OpenAEDMap](https://openaedmap.org/): For locating and retrieving information about Automated External Defibrillators (AEDs).
The entire AED database (5.73MB) is downloaded locally for quick access without real-time API calls.
* [Emergency Numbers](https://github.com/finnfassnacht/heartbeat/blob/main/em-num.json): The Emergency Numbers list (28.4KB) is compiled from multiple sources and downloaded locally.
## Installation
* Clone the repository:
```
git clone https://github.com/finnfassnacht/heartbeat.git
```
* Navigate to the project directory:
```
cd heartbeat
```
* Install dependencies:
```
npm install package.js
```
* Start the application:
```
    node index.js
```
## Usage 
The application will be accessible at http://localhost:3000.

## Contributing
By all means!
