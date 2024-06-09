# PropertyPal Project

PropertyPal is a free full-stack property rental application designed to facilitate seamless rental management for small communities and apartment complexes. This innovative platform empowers users to effortlessly list, browse, and manage rental properties, enhancing the rental experience for both landlords and tenants.

## Tech Stack:

- **Backend:**
  - Express.js
  - MySQL
  - Node.js

- **Frontend:**
  - React.js
  - Tailwind CSS

- **Database:**
  - MySQL

- **Dependencies:**
  - mysql2
  - cors

---

PropertyPal combines modern web technologies to deliver a robust and user-friendly application, streamlining property rentals and bringing communities closer together.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- MySQL Database

### Clone the Repository
```
git clone https://github.com/michaelm6453/PropertyPal.git
cd PropertyPal
```
## Installing Back-End dependencies

```
cd PropertyPal
npm install
npm install express mysql2 cors
//configure server.js to match your database requirements such as
//username, password, hostname, database name
npm run migrate


```

## Installing Front-End dependencies

```
cd PropertyPal/property-app
npm install

```
### To run the project

Go to the main folder and run the express server
```
cd PropertyPal
npm start
```
then, in another terminal tab, go to react app and start it
```
cd PropertyPal/property-app
npm start
```


Problem your project will address:
--
PropertyPal is a web-based platform designed to streamline property rentals. It enables property owners to list their spaces and manage bookings while offering travelers a user-friendly interface to search, book, and review rental properties. PropertyPal will simplify the rental process by solely focusing on rental properties and not allowing extra amenities. The property rental industry is often characterized by inefficiencies, lack of centralized platforms, and user experiences that can be enhanced. Property owners often struggle to reach a wider audience, and travelers face difficulties in finding and booking suitable accommodations. This project aims to address these issues by creating a user-friendly and efficient property rental platform called PropertyPal.

Goals and Motivations: 
--
Goals:
Make a functional and user-friendly website that allows users to list, view, and rent properties.
Offer travelers an intuitive and customizable search and booking experience.
Promote user interaction through reviews and ratings.
Create a DBMS for storing, accessing, and manipulating property listings, user profiles, booking records, availability data, and reviews. 	
Motivations:
The project will address the expensive housing dilemma that travelers face while on their journeys. PropertyPal will be a platform that enables the community to provide a variety of rentals which would be cheaper than the other housing alternatives (such as hotels). PropertyPal will give back to the community by enabling more rental businesses, as well as tourism to their cities. 

Related Work: 
--
Our website will be similar to Zillow or Airbnb. Zillow allows you to purchase, sell, and rent properties, whereas our company will only allow you to rent. Following, PropertyPal will differ from Airbnb in that we won’t include experiences (in-person or online) as we would solely like to focus on renting properties. The major difference between PropertyPal and the rest of the online property rental websites is that our company will focus solely on rental properties and our user-interface will be more intuitive with less prompts and more efficiency than the competitors. 
