
# My Password Manager

**My Password Manager** is a simple, web-based password manager created using HTML, CSS, and JavaScript. It allows users to securely store and view account credentials after logging in as an admin. The project includes password masking/unmasking and uses Netlify Forms for storing data. The credentials are displayed in a table format after login.

![Screenshot of My Password Manager](screenshot.png)

## 🔗 Live Demo

Check out the live version: [my-password-manager.netlify.app](https://my-password-manager.netlify.app)

## 📂 Project Structure

The project is part of the "21 Days 21 Projects" series and includes the following structure:

```
21 Days 21 Projects/
└── my-password-manager/
    ├── index.html         # Main HTML file
    ├── style.css          # Styling for the project
    ├── script.js          # JavaScript functionality
    ├── netlify.toml       # Netlify configuration file
    └── functions/         # Netlify functions for serverless processing
        └── getCredentials.js  # Function to retrieve credentials
```

## ✨ Features

- **Admin Login**: Access is restricted to admins with a predefined password.
- **Password Masking/Unmasking**: Toggle visibility of passwords for easier viewing.
- **Netlify Forms**: Submissions are stored using Netlify's serverless Forms API.
- **Credentials Display**: After successful login, saved credentials are displayed in a structured table format.
- **Serverless Functions**: Uses Netlify functions to retrieve stored form submissions.

## 🚀 Getting Started

To use this project locally or make changes, follow these steps:

### Prerequisites

- **Node.js** and **NPM** (for running Netlify functions locally)
- **Netlify CLI** (if you plan to test serverless functions)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-password-manager.git
   cd my-password-manager
   ```

2. **Set up environment**:

   - Create a `netlify.toml` file in the project root, if not already present.
   - Add your form ID and personal access token for Netlify Forms in `functions/getCredentials.js`.

3. **Run locally with Netlify CLI** (optional):

   ```bash
   netlify dev
   ```

4. **Deploy to Netlify** (if desired):

   - [Sign up](https://app.netlify.com/signup) for a Netlify account if you don't have one.
   - Link this project to your Netlify account and deploy it with a few clicks!

## 📋 Usage

1. Open the live demo or your local version of the project.
2. Log in using the predefined admin password (edit `ADMIN_PASSWORD` in `script.js`).
3. After logging in, add new credentials. These will be saved through Netlify Forms.
4. Upon each login, previously saved credentials are fetched and displayed in a table.

## 🛠️ Customization

- **Change Admin Password**: Update `ADMIN_PASSWORD` in `script.js` with a secure password of your choice.
- **Styling**: Customize the look and feel by editing `style.css`.
- **Serverless Functions**: Add more functions or modify `getCredentials.js` in the `/functions` folder.

## 🤝 Contributing

Feel free to fork this project and make it your own! Contributions are welcome. Please open an issue or submit a pull request with your improvements.

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Acknowledgments

Special thanks to [Netlify](https://www.netlify.com/) for providing serverless functions and hosting for free!

---

### Happy managing! 🗝️
