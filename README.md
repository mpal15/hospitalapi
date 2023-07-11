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
## GUI
# register the doctor
![Screenshot (49)](https://github.com/mpal15/hospitalapi/assets/62149463/a9a3886c-bb0a-49a7-89f3-edc4fb5d67c1)
# login the doctor
 ![Screenshot (52)](https://github.com/mpal15/hospitalapi/assets/62149463/8d0b8a56-e5a5-44ef-818b-f181dca83aaf)
# authorised the token in header
![Screenshot (53)](https://github.com/mpal15/hospitalapi/assets/62149463/d0347f1b-911b-4e2f-8844-7f0b32532516)
# create the patient registeration

![Screenshot (55)](https://github.com/mpal15/hospitalapi/assets/62149463/4a342c5d-2612-4840-a5dc-d7d8c9551399)

![Screenshot (57)](https://github.com/mpal15/hospitalapi/assets/62149463/979d9075-45a3-4742-84d8-c57ea8fb49c9)
# create the patient report
![Screenshot (58)](https://github.com/mpal15/hospitalapi/assets/62149463/1ee54db3-d1d0-4471-bba1-48622c2479d1)

![Screenshot (60)](https://github.com/mpal15/hospitalapi/assets/62149463/10d4608e-9bc8-49f7-8d25-1d05fa46da7b)

![Screenshot (61)](https://github.com/mpal15/hospitalapi/assets/62149463/ac0c75e4-a53d-4856-a029-ec8f815c4d40)
# all report
![Screenshot (63)](https://github.com/mpal15/hospitalapi/assets/62149463/f16dcdff-f7a2-4630-9e8b-38f515a831b0)
# specific report of patient on status
![Screenshot (66)](https://github.com/mpal15/hospitalapi/assets/62149463/0a29a163-141d-4b12-b574-d792bed1c118)
