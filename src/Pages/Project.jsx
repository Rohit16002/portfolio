import React from 'react';

// Import images
const project1Image = '../src/assets/pro-1.png';
const project2Image = '../src/assets/pro-2.png';
const project3Image = '../src/assets/pro-3.png';

// Sample projects data with local images
const projects = [
    {
        title: 'Movie App',
        description: 'A dynamic movie discovery application that allows users to browse and search for movies using The Movie Database (TMDb) API.',
        image: project1Image,
        githubLink: 'https://github.com/Rohit16002/movie-app', // GitHub link
    },
    {
        title: 'Number Guessing Game',
        description: 'An interactive web-based number guessing game that challenges players to guess the correct number with hints and scores.',
        image: project2Image,
        githubLink: 'https://github.com/Rohit16002/Project3', // GitHub link
    },
    {
        title: 'Login Page with Authentication',
        description: 'A secure login page that implements authentication features, ensuring user data protection and seamless access control.',
        image: project3Image,
        githubLink: 'https://github.com/Rohit16002/Login-Page-With-Authentication', // GitHub link
    },
    // Add more projects as needed
];

const Project = () => {
    return (
        <section id="projects" className="py-16 px-4 md:px-16 bg-gray-900 h-screen flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center text-white mb-8">Projects</h2>
            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-2 text-gray-400">{project.description}</p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
