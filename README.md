# Mock Interview Portfolio

A Next.js-based interactive mock interview platform that uses AI to generate real-time questions, collect responses, and provide instant feedback.

## 🚀 Features

* **Role Selection** : Choose from predefined job roles or add custom roles.
* **AI-Driven Interviews** : Get dynamically generated questions based on the selected role.
* **Real-Time Responses** : Answer via speech or text.
* **Instant Feedback** : AI-powered evaluation and scoring system.
* **Modern UI** : Responsive design with Tailwind CSS and ShadCN components.

## 🛠 Tech Stack

* **Frontend** : Next.js, React, Tailwind CSS, ShadCN UI
* **Backend** : Node.js, Express, MongoDB (optional)
* **Auth** : NextAuth.js / JWT
* **State Management** : Redux
* **AI Integration** : OpenAI API (for generating interview questions and feedback)

## 📚 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/vipindagar7/ai-powered-interview-platform.git
   cd ai-powered-interview-platform
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   Create a `.env.local` file in the root directory and add:
   ```sh
   MONGODB_URI=<db url>
   EMAIL_USER=<email>
   EMAIL_PASS=<app password>
   URL=<url>

   ADMIN_EMAIL=<admin_mail>
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🛠 Configuring External Images

To use external images (e.g., Unsplash) in `next/image`, update your `next.config.js`:

```js
module.exports = {
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
};
```

Then restart the development server:

```sh
npm run dev
```

## 🚀 Deployment

To deploy the project on Vercel:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

## 🐝 License

This project is open-source and available under the [MIT License](https://chatgpt.com/c/LICENSE).
