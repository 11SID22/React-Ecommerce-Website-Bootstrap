import React from "react";

const CustomFooter = (props) => {
    return (
        <footer className="bg-info text-white py-4 mt-5">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Left side: The Generics */}
                <h1 className="mb-0">The Generics</h1>

                {/* Right side: Social media logos */}
                {props.showSocialIcons && <div className="social-icons d-flex">
                    {/* YouTube */}
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fab fa-youtube fa-2x" style={{ color: '#FF0000' }}></i>
                    </a>

                    {/* Spotify */}
                    <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fab fa-spotify fa-2x" style={{ color: '#1DB954' }}></i>
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fab fa-facebook fa-2x" style={{ color: '#1877F2' }}></i>
                    </a>
                </div>}
            </div>
        </footer>
    );
};

export default CustomFooter;