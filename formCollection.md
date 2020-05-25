client ID 

153585239288-3iqqtvun8r8nqps9cqklpqs5r9h38pok.apps.googleusercontent.com









1. Go to the Google Project Dashboard:

https://console.cloud.google.com

2. Click the "Create Project" button


3. Name the project and click the "Create" button


4. Click the menu button, Select "APIs & Services", then "OAuth Consent Screen"




5. Select "External" and click the "Create" button




6. Fill out "Application Name", scroll to the bottom and click the "Save" button. No other info should be filled out in the consent screen at this time.


7. Click "Credentials" in the sidebar and then click the "Create Credentials" button


9. Select "OAuth Client ID"




10. Select Web Application and fill out the "Authorized JavaScript Origins" and "Authorized redirect URI" and click the "Create" button.

Authorized JavaScript Origins:

http://localhost:5000

Authorized redirect URI

http://localhost:5000/auth/google/callback


Note! Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field. If you follow along with the upcoming video lecture you will get this error: Invalid Redirect: cannot contain a wildcard (*)

Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later, we entered the correct redirect as shown above since this is what it will be changed to anyway.

11. Copy your Client ID and Client Secret in a safe place so you can use it in your application in a future lecture. (ID and Secret were redacted from the screenshot)




<---------------------------------------------------->


Passport Identification Token: 
- We would use the serialise user function to generate the identifiying piece of info
- Set-Cookie '    '
- On client reques passport deserializes the user and accepts the user

USE PASSPORT TO HANDLE COOKIES 
- npm install --save cookie-session
- import and initialize cookieSession in index.js file



EXPRESSCOOKIES : Stores remotely a large amount of data 
COOKIESESSION: Stores limited amount of data


DEV // PRODUCTION KEYS 
It's not save to keep our keys only in the our computer. 
We should have production and development keys.


CREATE NEW KEYS FOR PRODUCTION 
- Create google and MongoURI production keys and store in 
Heroko config vars. 


SERVER SIDE 
We do not run react and express on the same server because react already has an optimal inbuilt server. 


CREATE REACT APP and install concurrently 

ROUTING from react localhost to our server local host.
Add the route from client to google Oauth consent. 





CORS REQUEST : Cross Origin  Request (the driver assumes you are trying to do something malicious )
That's why we use the proxy for the browser to assume it's the same port. 






"engines": {
    "node": "10.16.3",
    "npm": "6.9.0"

    