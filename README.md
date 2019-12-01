# INTRODUCTION

## Project Title - Entry Management Software

This project has been created to log data entries of the visitors that visit the employees within the office space as well as outside. 
this will help companies and employees on individual level to keep a record of their activities. 

## Motivation 

Motivation for this project came from an internhsip programm by Innovacer, which required to build an application for managing entry of the visitors

## Screenshots

![frontend](https://cdn1.imggmi.com/uploads/2019/12/1/8731ee1e966b0c76630ad892e9e48b1e-full.png)

**This is the home page of the Application**

![visitor](https://cdn1.imggmi.com/uploads/2019/12/1/aeaaabd1eb4f3893fbc26a9e31b9dcc2-full.png)

**This is the email host receives on checking in of the visitor**

![sms](https://cdn1.imggmi.com/uploads/2019/12/1/cbb4c51854d771ee70ef63913449816b-full.jpg?__cf_chl_jschl_tk__=457389240b43adf91287d6a2cbf3a4506ee76076-1575229781-0-AddQSoanNV6L-Bpj0iUXnOm-4YKs0Zbrc0kXOqBeCx5dLCMTP5dDWZonJ1H7BXqBfNctloCDNlxo1q0f5a2ACv4F-_K_FFlxZl4SRdnURZsCQNK35Tj1Xl0OP967_sJv6YtE-ocrekoi73XZsf0woQ0KlHRrB56EBT800RTGnxP4HkkPaKjgusdKIKXUl5_a22yaCofXaV2tbJ1EAcwMhdPgnqjX2wz2HkT-vDamk0jZcj1T5lrrH8EcnLiFfNVGquF159ZXMmFE7Uf8D_cybkHD5Ai9bp4XYrAlUQunHpI_N82a0rtwnou9Sah9tsPWL547SECuCaFhIDvKqci9Ssw)

**This is the SMS host receives on checking in of the visitor**

![otp](https://cdn1.imggmi.com/uploads/2019/12/1/14b8463271e6cb78fea3754cd358a2cf-full.jpg)

**This is the otp visitor receives on checking out**

![email]( https://cdn1.imggmi.com/uploads/2019/12/1/4dfeffac1cc2a3f707410e5570b8228a-full.png)

**This is the email visitor receives on checking out**

**View [logbook](https://cdn1.imggmi.com/uploads/2019/12/1/78bb0f5884c27243352d41dd1d017929-full.png) to see the database**

Visit this link [Entry Management Software](https://entrymanagements.herokuapp.com/) to view the working of the project.

## Technologies and Framework Used 

 ### Front End 
 1. HTML
 2. CSS
 3. BOOTSTRAP

### Back End

 1. NODE.JS
 2. EXPRESS JS

### Database
 1. MongoDB
 2. MongoDB Atlas
 
 ### API used 
  1. Nodemailer API fro sending e-mails
  2. Here API for location recording
  3. Nexmo API for sendind SMS
  
  ##  Working

A visitor will be required to add his information and the information of his host This information will be stored in json format in the database.

After the visitor clicks on submit button. His date and time of entry is recorded and the host is notified of the visitor via email and text message.

After the visitor clicks on the checkout button, it prompts the visitor to enter his phone number, if the phone number matches the phone number in database, an otp is generated so that we know a person is checking out himself of the database  and no is doing it for someone else. 

A logbook is provided so that visitors data can be viewed. 

After successful entering of otp, visitor is sent an email in which his name phone number his --checkin checkout time host name and the address visited-- is mentioned. 

## Cases Handled

This project records Visitor's and Hosts's Name,Email ,Phone Number. Checkout time , Checkin time , Location of the meeting. 
**All of these test cases are handled due to security reasons**

1. If a visitor has already entered his details in the software and has not checked out yet will not be allowed to check in      again until he checks out on the day. 

2. If a visitor wants to check out , then he will be required to enter his phone number , authentication of the user will be      done by sending a OTP to the entered number. If number is not found in the database , checkout cant be done. This si done      so that nobody can checout on behalf of someone else. 

3. OTP is validated at the end , after which the visitor receives the information of visit.

## Future Improvements

1. Improvement of UI  
2. OTP timer 
3. Before viewing of the logbook, a user authentication can be done so that admin can know who viewed the logbook and no          outsider can view it without permission . 
4. Visitor/Client will be allowed to rate his meeting with his host. On basis of this an employee's customer relations or        efficiency can be derived. 
5. You think there is more ? Please feel fre to contact me via mail on goelabhishek694@ieee.org. 

## NOTE

1. Nexmo is a free API which allows 100 free SMS and we can send otp to registered numbers in their database. Please feel free    to contact me so that i can add a number before you test out the aplpication. 
2. This is not the representation of my front end skills. Please visit these links for front end projects 
    1. https://goelabhishek694.github.io/FyloDarkTheme/
    2. https://goelabhishek694.github.io/ECI-frontend/
    3. https://goelabhishek694.github.io/AGRknowledgeServices/
    4. https://goelabhishek694.github.io/ClipboardLandingPage/
    5. http://ieee-mait.herokuapp.com/
    
  and many more working projects which are yet to be hosted. 
  
  





  
  
