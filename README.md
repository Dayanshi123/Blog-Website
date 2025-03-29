# **Real-Time Blogging Platform**  

A **full-stack blogging platform** where users can create, edit, and manage posts.  
📝 **Every post is visible to all users**, but only **logged-in users can add/edit/delete** posts.  

---

## **🚀 Features**
- ✅ **Public Blog** - Anyone can view posts without logging in.  
- 🔒 **User Authentication** - Only registered users can create, edit, or delete posts.  
- 📝 **Rich Text Editor (TinyMCE)** - Provides a feature-rich editing experience.  
- 🎨 **Dark Brown & Beige Theme** - Aesthetic and user-friendly UI.  
- 📜 **Post Management** - Users can create, update, and delete their posts.  
- 🔄 **Real-Time Content Update** - Posts update dynamically on the homepage.  
- 🌍 **Appwrite Integration** - Backend powered by **Appwrite** for authentication and database.  
- ⚡ **React & Redux Toolkit** - Manages global state efficiently.  

---

## **🛠 Tech Stack**
| Technology  | Purpose |
|-------------|---------|
| **React.js** | Frontend Framework |
| **Redux Toolkit** | State Management |
| **Appwrite** | Backend (Authentication, Database, File Storage) |
| **TinyMCE** | Rich Text Editor |
| **Tailwind CSS** | Styling |
| **React Hook Form** | Form Handling |
| **React Router** | Routing |

---

## **📂 Project Structure**
```
📦 Blogging Platform
├── 📂 appwrite             # Appwrite configurations (auth, database, storage)
│   ├── auth.js             # Authentication functions
│   ├── config.js           # Appwrite service configuration
├── 📂 components           # Reusable UI Components
│   ├── Header.jsx          # Navbar & Authentication links
│   ├── Footer.jsx          # Footer section
│   ├── RTE.jsx             # TinyMCE Rich Text Editor Component
│   ├── PostForm.jsx        # Form for Adding & Editing posts
│   ├── PostCard.jsx        # Card view for posts
│   ├── Login.jsx           # Login
│   ├── Logo.jsx            # Logo
│   ├── Signup.jsx          # Signup
│   ├── index.js            # all files
│   ├── Post.jsx            # Posts
├── 📂 pages                # Main Page Components
│   ├── Home.jsx            # Home Page - Displays all posts
│   ├── AddPost.jsx         # Page for creating a post
│   ├── EditPost.jsx        # Page for editing a post
│   ├── Post.jsx            # Individual post page
│   ├── Login.jsx           # User Login Page
│   ├── Signup.jsx          # User Signup Page
├── 📂 store                # Redux Store
│   ├── authSlice.js        # Handles user authentication state
│   ├── postSlice.js        # Manages post-related actions
│   ├── store.js            # Configures Redux store
├── 📜 App.jsx              # Main App component
├── 📜 index.js             # Entry point
└── 📜 README.md            # Project Documentation (You're here!)
```

---

## **📦 Installation & Setup**
1️⃣ **Clone the repository**  
```bash
git clone https://github.com/Dayanshi123/Blog-Website
cd BlogSphere
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Set up Appwrite**  
- Create a **new Appwrite project**  
- Configure **Authentication, Database, and Storage**  
- Update `appwrite/config.js` with your **Appwrite Project ID & Endpoint**  

4️⃣ **Start the development server**  
```bash
npm run dev
```
👉 Now, open **http://localhost:5173/** in your browser! 🎉  

---

## **🔑 Authentication Flow**
- **Sign Up**: Users create an account with Appwrite authentication.  
- **Login**: Users log in using their credentials.  
- **Logout**: Users can log out anytime.  

---

## **📝 Adding & Managing Posts**
- 📝 **Create a Post**: Logged-in users can write posts using TinyMCE.  
- ✏️ **Edit Posts**: Authors can modify their own posts.  
- 🗑 **Delete Posts**: Only authors can delete their own posts.  
- 📜 **View Posts**: Everyone (including non-logged-in users) can read all posts.  

---

## **🎨 UI Design**
🎨 **Color Theme:**  
- **Background:** Beige (`#F5F5DC`)  
- **Text Color:** Dark Brown (`#8B4513`)  

💡 **Typography & Layout:**  
- Modern **flexbox-based design** with **responsive UI**.  
- Uses **Tailwind CSS** for fast styling.  

---

## **🚀 Future Enhancements**
- ✨ **Dark Mode Toggle**  
- 🔔 **Notifications for New Posts**  
- 📧 **Email Verification**  
- 💬 **Comment System**  
- 🏷 **Categories & Tags for Posts**  

---

## **🛠 Troubleshooting**
### 🔹 **TinyMCE Editor is not working?**
✅ Ensure you have a **TinyMCE API Key** in `RTE.jsx`:  
```jsx
<Editor apiKey="your-tinymce-api-key" />
```

### 🔹 **Appwrite API not working?**
✅ Check `appwrite/config.js` and ensure your **Appwrite Project ID & Endpoint** are correct.  

### 🔹 **Redux state not updating?**
✅ Run:  
```bash
npm install @reduxjs/toolkit react-redux
```
✅ Restart your development server:  
```bash
npm run dev
```

---

## **📜 License**
📜 This project is open-source under the **MIT License**.  

---

## **📢 Contributing**
Want to contribute? Feel free to **fork** this repo, make changes, and **submit a PR**! 🚀  

---

## **👨‍💻 Author**
👤 **Dayanshi Jain**  
📧 jaindayanshi123@gmail.com  
🔗 [GitHub](https://github.com/Dayanshi123) | [LinkedIn](https://linkedin.com/in/dayanshi-jain)  

---

🔥 **Enjoy coding and happy blogging! 🚀**
