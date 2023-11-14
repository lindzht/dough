# Dough
Monthly Budgeting Web Application

## Description
Dough is a budgeting app that helps you keep track of your expenses month to month. It is based off of the 50/30/20 budgeting Model. That being 50 for mandatory expenses like bills and insurance, the 30 for entertainment, travel and fun and the 20 for paying down debts and saving money.  

React and Ruby on Rails Single-Page Web Application designed by Aaron David, Keila Lopez and Lindsay Taylor.

## Features
- Create an account, log in/out, and update or delete account
- Add, update and delete expenses and categories
- Associate expenses with specific categories
- Monitor current expenses compared to monthly income 
- Quick view of recent expenses by way of the dashboard

## Demo
https://www.youtube.com/watch?v=vK7i5B4Q0hw 

## Tech
Front End
- React Framework
- Semantic UI styled components
- Client-side routing via React Router/BrowserRouter

Back End
- Ruby on Rails Framework
- Model-View-Controller Architectural Development Pattern
- RESTful API utilizing Active Record and Active Model Serializers
- User authentication and authorization
- PostgreSQL relational database
- User password encryption with BCrypt Gem

## Installing Dependencies
From within root directory: 

- npm install semantic-ui --prefix client
- npm install --save react-browser-router

## Set up

After cloning repo, run front end and server to test functionality.

- rails s (runs the backend on http://localhost:3000)
- npm start --prefix client (runs the frontend on http://localhost:4000)


## Wireframe
A diagram showing React component tree.

![Screen Shot 2023-03-14 at 12 14 05 PM](https://user-images.githubusercontent.com/112502342/225085152-3f08c579-cebc-4450-af0e-709b4ee4feb2.png)


## Screenshots

```
Homepage
```
<img width="1282" alt="Screen Shot 2023-02-28 at 2 57 49 PM" src="https://user-images.githubusercontent.com/86385601/225090859-2d539217-604f-445e-91ed-7e9f3d50aeed.png">

 
 ```
Dashboard
```
<img width="1259" alt="Screen Shot 2023-02-28 at 3 03 59 PM" src="https://user-images.githubusercontent.com/86385601/225090958-ab7c9563-087d-4bd2-a2d4-34186a174c8c.png">

```
Signup Form
```
<img width="1186" alt="Screen Shot 2023-02-28 at 2 59 18 PM" src="https://user-images.githubusercontent.com/86385601/225091011-706fb1ab-7e0d-4626-a16d-999992a142d2.png">

```
Create a new category form
```
<img width="1258" alt="Screen Shot 2023-02-28 at 3 00 51 PM" src="https://user-images.githubusercontent.com/86385601/225091035-7da61f36-4a63-411e-b4b6-c0bf0f7b745a.png">

```
Category management (ie. updating and deleting)
```
<img width="1258" alt="Screen Shot 2023-02-28 at 3 01 02 PM" src="https://user-images.githubusercontent.com/86385601/225091145-791bee00-0ee6-4a94-9a15-9b1f6601f7e8.png">

```
User expenses
```
<img width="1262" alt="Screen Shot 2023-02-28 at 3 03 36 PM" src="https://user-images.githubusercontent.com/86385601/225091174-190f9161-d151-4642-a474-86f8e6250835.png">

