# Chill Gamer: A Game Review Application

## Live Site URL
[Your Live Site Link Here](https://chill-gamer-3528e.web.app/)

## Overview
Chill Gamer is a user-friendly game review application where users can explore and share game reviews. The platform provides an intuitive UI with features like user authentication, review management, and a personalized watchlist. Designed with simplicity and functionality in mind, Chill Gamer ensures a smooth experience for all users.

## Features
- 🔒 **User Authentication** - Secure login and registration system with email/password authentication.
- 🏆 **Highest Rated Games Section** - Displays top-rated games fetched from the database.
- ✍️ **Game Reviews** - Users can add, update, and delete their game reviews.
- 🎮 **Game Watchlist** - Users can save reviews to a personal watchlist.
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices.
- 🎨 **Dark/Light Theme Toggle** - Allows users to switch between dark and light modes.
- 🔍 **Sorting & Filtering** - Users can sort and filter reviews by rating and genre.
- ❌ **404 Page** - Custom error page for invalid routes.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Material UI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **Deployment:** Netlify (Client), Vercel (Server)

## Project Structure
```
📂 ChillGamer
├── 📂 client (React App)
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── utils
│   │   ├── styles
│   ├── public
├── 📂 server (Node.js + Express API)
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── config
```

## Installation & Setup

### Clone Repository
```sh
git clone https://github.com/your-username/chill-gamer.git
cd chill-gamer
```

### Client Setup
```sh
cd client
npm install
npm start
```

### Server Setup
```sh
cd server
npm install
npm start
```

## Environment Variables
Create a `.env` file in both `client` and `server` directories and add your Firebase config keys and MongoDB credentials.

## Deployment
- **Client:** Deploy on Netlify using `netlify deploy`
- **Server:** Deploy on Vercel using `vercel`

## Contributions
Feel free to contribute by submitting a pull request or reporting issues.

## License
This project is licensed under the MIT License.

---
**Developed by Imran & Team 🚀**
