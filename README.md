📌 Mayondo Wood & Furniture Ltd Web System

A full-stack inventory, sales, and reporting system for Mayondo Wood & Furniture Ltd (MWF).
This project digitizes furniture sales operations — including inventory management, customer records, sales tracking, and reports — with a clean Bootstrap + FontAwesome frontend and a Node.js/Express + SQLite backend.

🚀 Features
Frontend (Bootstrap 5 + JS)

🔑 Authentication → Login, Register, Forgot Password

📦 Inventory Management → Add, edit, and view stock items

🛒 Sales Page → Capture sales (customer, product, quantity, payment)

📊 Reports → Generate Sales, Inventory, and Orders reports (CSV export)

👥 Customers Page → Register and manage clients

📑 Dashboard → Quick overview for seller/manager

🖼 Responsive UI → Works on desktop, tablet, and mobile

Backend (Express.js + SQLite3)

🗄 Authentication API → Register/login with JWT + bcrypt

📦 Products API → CRUD for inventory

🛒 Orders API → Record sales & calculate totals

📊 Reports API → Generate reports (sales, inventory, orders)

🔐 Security → JWT auth, Helmet, CORS, input validation (Joi)

📂 Project Structure
mwf-system/
│── frontend/


│   ├── index.html         # Landing page
│   ├── login.html         # Sign in page
│   ├── register.html      # Create account page
│   ├── dashboard.html     # Seller dashboard
│   ├── inventory.html     # Inventory management
│   ├── sales.html         # Sales entry page
│   ├── reports.html       # Reports center
│   ├── customers.html     # Customer records
│   ├── style.css          # Custom styling
│   └── js/                # Frontend JS scripts
│
│── backend/

│   ├── server.js          # Express server entry
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Auth & validation
│   └── database.sqlite    # SQLite database
│
│── README.md              # Project documentation
│── package.json           # Backend dependencies

⚙️ Installation & Setup
2️⃣ Install backend dependencies
cd backend
npm install

3️⃣ Run backend server
npm start


Server runs on http://localhost:5000

4️⃣ Open frontend

Open frontend/index.html in your browser

Or serve via a simple HTTP server:

cd frontend
npx serve

🔑 Default Pages
Page	File	Description
Landing	index.html	Welcome page with products
Login	login.html	User authentication
Register	register.html	Create account
Dashboard	dashboard.html	Seller/manager overview
Inventory	inventory.html	Manage stock & products
Sales	sales.html	Capture sales transactions
Reports	reports.html	Generate sales/inventory/order
Customers	customers.html	Manage customer records
🛠 Tech Stack

Frontend → HTML5, CSS3, Bootstrap 5, FontAwesome, Vanilla JS

Backend → Node.js, Express.js, SQLite3

Auth & Security → JWT, bcrypt, Helmet, Joi, CORS

📊 Future Enhancements

📱 Mobile Money / Flutterwave integration for payments

📦 Stock notifications (low stock alerts)

📄 PDF report export with company branding

👔 Role-based dashboards (Admin vs Seller vs Attendant)

👨‍💻 Author

Developed by Allan Mitanda
📧 info@mwf.com

🌐 allanmitanda.com
