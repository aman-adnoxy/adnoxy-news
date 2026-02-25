# Adnoxy News

Adnoxy News is a dynamic React-based news web application built using Vite, styled with Tailwind CSS, and powered by Supabase for headless content management. It renders rich Markdown articles fetched directly from a secure Supabase storage bucket, complete with a beautifully formatted typography system.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16.0 or higher recommended)
*   npm (comes bundled with Node.js) or yarn
*   A [Supabase](https://supabase.com/) project with configured storage buckets

### 🛠️ Installation

1.  **Clone the repository and jump into the directory:**
    ```bash
    git clone https://github.com/aman-adnoxy/adnoxy-news.git
    cd adnoxy-news
    ```

2.  **Install the project dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

---

## 🔐 Environment Configuration

This application securely fetches data from your Supabase endpoint. You **must** provide your API credentials for the app to function correctly.

1.  Create a file named `.env` in the root directory of the project (`adnoxy-news/.env`).
2.  Add the following environment variables, ensuring to replace the placeholder values with your actual Supabase project credentials:

```ini
# .env

# Your specific Supabase Project URL
VITE_SUPABASE_URL="https://your-project-id.supabase.co"

# Your public anonymous Supabase API Key
VITE_SUPABASE_ANON_KEY="your-anon-key-string"
```

> **Note:** The `.env` file is included in `.gitignore` to prevent sensitive keys from being committed to the repository.

---

## 🏃 Running the Application

Once your dependencies are installed and your `.env` file is configured:

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **View the App:**
    Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`). 

---

## 📦 Project Structure & Key Technologies

*   **Vite:** Blazing fast build tool and development server.
*   **React:** UI library for building the application components.
*   **Tailwind CSS:** Utility-first CSS framework (including `@tailwindcss/typography` for beautiful Markdown rendering).
*   **Supabase Storage:** Headless backend acting as the content repository.
    *   `news-markdown`: The bucket storing `.md` files containing news articles.
    *   `news-bucket-images`: The bucket holding image assets for articles.
*   **Marked & DOMPurify:** Used synergistically to parse Markdown files into secure, sanitised HTML.
