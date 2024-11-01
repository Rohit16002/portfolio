import React from 'react';
import './Home.css'; // Ensure you remove any conflicting CSS from this file

const Home = () => {
    const imageURL = '../src/assets/user.png';
    return (
        <section className="h-screen flex flex-col items-center justify-center md:flex-row bg-gradient-to-r from-black via-blue-950 via-blue-800 to-blue-900 p-4">
            {/* Text Section */}
            <div className='flex flex-col justify-center text-center w-full md:w-1/2 md:text-left md:mx-32'>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Hello, I’m Rohit Jadhav</h1>
                <p className="text-lg mt-4 text-gray-200">Software Developer | Tech Enthusiast</p>
                <button className="mt-8 px-3 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300">
                    Contact Me
                </button>
            </div>
            {/* Image Section */}
            <div className='flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0 hidden md:flex'>
                <img src={imageURL} alt="user" className='w-3/4 md:w-full h-auto max-w-xs md:max-w-md bg-blend-lighten img-glow' />
            </div>
        </section>
    );
};

export default Home;
