# iReporter

[![Build Status](https://travis-ci.org/meetKazuki/iReporter.svg?branch=develop)](https://travis-ci.org/meetKazuki/iReporter)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/iReporter/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/iReporter?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/664223fdb47bca64404d/maintainability)](https://codeclimate.com/github/meetKazuki/iReporter/maintainability)


## Project Description
iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the
general public. Users can also report on things that needs government intervention.

### Features
1. Users can create an account and log in.
2. Users can create a red-flag record (An incident linked to corruption).
3. Users can create intervention record (a call for a government agency to intervene e.g repair bad road sections, collapsed bridges, flooding e.t.c).
4. Users can edit their red-flag or intervention records.
5. Users can delete their red-flag or intervention records.
6. Users can add geolocation (Lat Long Coordinates) to their red-flag or intervention records.
7. Users can change the geolocation (Lat Long Coordinates) attached to their red-flag or intervention records.
8. Admin can change the status of a record to either under investigation, rejected (in the event of a false claim) or resolved (in the event that the claim has been investigated and resolved).

### Hopeful features 🔥 🔥
1. Users can add images to their red-flag or intervention records, to support their claims.
2. Users can add videos to their red-flag or intervention records, to support their claims.
3. The application should display a Google Map with Marker showing the red-flag or intervention location.
4. The user gets real-time email notification when Admin changes the status of their record.
5. The user gets real-time sms notification when Admin changes the status of their record.

## How to Use
1. Clone this repository to your local machine
> git clone https://github.com/meetKazuki/iReporter
2. Install dependencies
> npm install
3. Run `npm run dev-start` to start the application

### Testing
#### Manual testing
1. Install Postman to test the endpoints manually.
2. GET /api/v1/red-flags
3. GET /api/v1/red-flags/:id
4. POST /api/v1/red-flags
6. PATCH /api/v1/red-flags/:id
7. DELETE /api/v1/red-flags/:id

#### Automated test
> Run `npm test` to test all the endpoints.

## About this project
You can track the project's progress on [Github](https://github.com/meetKazuki/iReporter) and [PivotalTracker](https://www.pivotaltracker.com/n/projects/2226873). The UI templates are hosted on [GH-Pages](https://meetkazuki.github.io/iReporter/). You can also follow me on [Twitter](https://twitter.com/meetKazuki)😉.
