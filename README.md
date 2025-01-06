# snapURL! - URL Shortener Application  

**snapURL!** is a simple, efficient, and fast URL shortener built with **Node.js**, **Express**, and **PostgreSQL**. It allows users to shorten long URLs for easier sharing and faster access. The platform provides an intuitive user interface and a backend powered by PostgreSQL to store and manage the shortened URLs.

## 🚀 Features  

- **URL Shortening**: Convert long URLs into short, easy-to-share links.  
- **Easy Sharing**: Share shortened URLs through social media or messaging apps.    
- **Error Handling**: Custom error pages for 404 and internal server errors.  

## 🛠️ Tech Stack  

### Backend  
- **Node.js**: JavaScript runtime environment.  
- **Express.js**: Web framework for handling routing and middleware.  
- **PostgreSQL**: Relational database for storing URL data.  

### Frontend  
- **EJS**: Template engine for rendering dynamic HTML views.  
- **CSS**: For styling the application (custom CSS files).  
- **JavaScript**: For client-side interactivity.

## 📂 Project Structure  

```plaintext
snap-url-shortener-postgres/
├── config/                   # Configuration files (DB, email, etc.)
│   ├── dbConfig.js           # Database connection settings
│   ├── emailConfig.js        # Email configuration for notifications
├── controllers/              # Business logic for the app
│   ├── indexControllers.js   # Controller for handling URL-related routes
├── models/                   # Database models
│   ├── urlModel.js           # Model for managing shortened URLs
├── public/                   # Static files (CSS, JS, Images)
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript files
│   ├── 404.css               # Custom CSS for 404 page
│   ├── loader.css            # Loader CSS
│   ├── mainStyle.css         # Main styles for the application
│   ├── email.js              # JS for email interactions
│   ├── loader.js             # JS for loader animations
│   ├── result.js             # JS for handling result page
│   ├── urlForm.js            # JS for URL form validation
├── routes/                   # Application routes
│   ├── indexRoutes.js        # Routes for handling URL shortening and navigation
├── utils/                    # Utility functions
│   ├── emailUtils.js         # Helper functions for email-related tasks
│   ├── httpStatusCodes.js    # Standard HTTP status codes
│   ├── responseUtils.js      # Helper functions for crafting responses
│   ├── urlShortenerUtils.js  # Helper functions for URL shortening logic
├── views/                    # EJS templates for frontend views
│   ├── layouts/              # Layouts for rendering the app
│   ├── partials/             # Reusable components like header and footer
│   ├── errorLayout.ejs       # Layout for error pages
│   ├── mainLayout.ejs        # Main layout for the application
│   ├── footer.ejs            # Footer partial
│   ├── header.ejs            # Header partial
│   ├── 404.ejs               # 404 error page
│   ├── about.ejs             # About page
│   ├── contact.ejs           # Contact page
│   ├── index.ejs             # Home page for shortening URLs
│   ├── internalError.ejs     # Internal server error page
│   ├── result.ejs            # Page showing the shortened URL
├── .gitignore                # Git ignore file
├── README.md                 # Documentation for the project
├── app.js                    # Main entry point for the application
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Lock file for dependencies
```

## 🔧 Setup and Installation  

### Prerequisites  
- **Node.js** (v16+ recommended)  
- **PostgreSQL** (local or cloud instance)  
- **npm** (Node Package Manager)  

### Steps  
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/snap-url-shortener-postgres.git
   cd snap-url-shortener-postgres
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory with the following configuration:  
   ```plaintext
   PORT=3000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=5432
   DB_NAME=your_db_name
   SESSION_SECRET=your_session_secret
   SEND_EMAIL="your_email"
   SEND_EMAIL_PASS="your_email_password"
   ```

4. **Set up PostgreSQL**:  
   - Ensure your PostgreSQL database is running and accessible.
   - Create a database with the name specified in `.env`.

5. **Run the application**:  
   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to access the app.  

## 📜 Usage  

### For Users  
- **Shorten a URL**: Enter a long URL in the form to get a shortened version.
- **View Shortened URLs**: The shortened URL will be displayed along with a button to copy it.

## 📈 Learning Outcomes  

- Understanding **PostgreSQL** and how to interact with it using Node.js.  
- Building a **URL shortener** from scratch with a simple user interface.  
- Implementing **error handling** with custom pages for 404 and internal errors.  
- Learning **email notification** for user action.  

## 📜 License  

This project is licensed under the **MIT License**.

## 🌟 Acknowledgements  

- Thanks to the open-source community for providing essential libraries and tools.

Happy Coding! 🎉  