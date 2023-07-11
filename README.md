# hospitalapi
In a time where a major pandemic has covered all the world we need a system which can track patients data and generate reports for them. This is a very basic API which exactly do this.
# BASIC FEATURES
# Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date
# Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
- Decide the fields and schemas on your own, smartly
- Decide which routes need to be protected by authentication
# How to install and run?
   Clone this project
   Start by installing npm and mongoDB if you don't have them already.
   Run the Mongo Server.
   Navigate to Project Directory by :
   cd Hospital-API
   run following commands :
     npm install 
     npm start or node index.js
##GUI
