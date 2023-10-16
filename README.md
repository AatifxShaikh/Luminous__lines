# Luminous Lines - Illuminate Your Thoughts

Luminous Lines is a powerful blogging platform that lets your thoughts shine brightly. Craft compelling stories, share your wisdom, and connect with readers worldwide. With a sleek interface, secure user authentication, and seamless cloud storage powered by Firebase, Luminous Lines is where your words find their home.

## Features

- **Seamless Writing**: Create captivating blog posts effortlessly with our user-friendly editor.
- **Vibrant Media**: Enrich your posts with images and multimedia elements to engage your audience.
- **Secure Cloud Storage**: Safely store your media files on Firebase, ensuring reliability and accessibility.
- **Dynamic Categories**: Organize your content into categories, making it easy for readers to explore specific topics.
- **Interactive Comments**: Foster discussions with readers through comments, creating a sense of community.
- **Dark Mode**: Toggle between light and dark mode to enhance readability and reduce eye strain.

## Technologies Used

- **Frontend**: Next.js, React, CSS Modules
- **Backend**: Node.js, Firebase (Storage)
- **Authentication**: OAuth (Google, Facebook, etc.)
- **Deployment**: Vercel

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- Firebase account with storage enabled

### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/AatifxShaikh/Luminous_lines.git
   ```

2. Change into the project directory:

   ```sh
   cd next-blog
   ```

3. Install the dependencies for the frontend and backend:

   ```sh
   cd client
   npm install
  
   ```

4. Create a `.env` file in the directory and add the following variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/luminous-lines
   GOOGLE_CLIENT_ID=your_google_id
   GOOGLE_CLIENT_SECRET=your_google_secret
   FIREBASE_API_KEY=your_firebase_key
   ```



6. In a new terminal, start the development server:

   ```sh
     npm start
   ```

7. Open your browser and access the application at `http://localhost:3000`.

## Deployment

The application can be deployed using platforms like Vercel for the frontend and Heroku for the backend. Refer to the following guides for deployment instructions:

- [Deploying React Apps to Vercel](https://vercel.com/guides/deploying-react-with-vercel)
- [Heroku Node.js Deployment Guide](https://devcenter.heroku.com/articles/deploying-nodejs)

## Contributing

Contributions are welcomed! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to your forked repository: `git push origin feature-name`
5. Create a pull request to the main repository.

Let's illuminate the world with Luminous Lines! 🌟
