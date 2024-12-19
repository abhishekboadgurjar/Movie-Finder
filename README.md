#  Movie Finder Website

### Introduction

 we will walk through the process of building a Movie Finder website using React and the OMDB API. The website allows users to browse movies by categories like Avengers, Star Wars, and Series, and search for movies using specific queries. Each movie has its detail page, making it easy to explore more about your favorite films.

### Project Overview

**Movie Finder Website** enables users to:
- Browse categories like Avengers and Star Wars.
- Search for movies by keywords.
- View detailed movie information (poster, genre, director, actors, and more).
- Navigate easily through the website with a clean, modern design.

### Features

- Fetch data dynamically using the OMDB API.
- Responsive design for a better user experience.
- Search functionality that provides instant results.
- Loading indicators while data is being fetched.
- View details of individual movies on a separate page.

### Technologies Used

- **React**: Frontend library for building UI components.
- **React Router**: For navigation and routing.
- **Axios**: For making HTTP requests to the OMDB API.
- **OMDB API**: To fetch movie details.
- **CSS**: For styling the application.

### Project Structure

Here is the directory structure for the project:

```
movie-finder/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   └── Home.js
│   │   └── Movies.js
│   │   └── Series.js
│   │   └── SearchResults.js
│   │   └── MovieDetail.js
│   └── App.js
│   └── App.css
└── package.json
```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abhishekboadgurjar/movie-finder.git
    cd movie-finder
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Get your API key from [OMDB API](http://www.omdbapi.com/apikey.aspx).

4. Create a `.env` file in the project root and add your API key:
    ```
    REACT_APP_OMDB_API_KEY=yourapikey
    ```

5. Run the project:
    ```bash
    npm start
    ```


### Live Demo

You can check out the live demo of the Movie Finder website [here](https://movie-finder-in.netlify.app).

### Screenshots
![Screenshot 2024-09-13 083447](https://github.com/user-attachments/assets/33a111e8-f586-40c4-985a-c8af8f7af532)


### Conclusion

In this blog, we learned how to create a Movie Finder website using React, React Router, and Axios. This project demonstrates how to interact with a public API, manage state in React, and create a simple yet functional movie browsing experience.

Feel free to customize the design and add more features, like user reviews or movie ratings, to make it more dynamic!

---

### Credits

- [OMDB API](http://www.omdbapi.com/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

### Author
**Abhishek Gurjar** is a dedicated web developer passionate about creating practical and functional web applications. Check out more of his projects on [GitHub](https://github.com/abhishekboadgurjar).
