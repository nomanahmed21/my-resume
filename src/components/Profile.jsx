import React from 'react';
import './Profile.css';;

const Profile = () => {
  return (
  <>
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="/my-photo.jpg"
          className="profile-img"
          />
        <h1>Kadiwal Noman Ahmed</h1>
        <p className="qualification">Bachelor of Engineering in Artificial Intelligence and Data Science</p>
      </div>
      
      <div className='description'>
        "I am passionate about creating seamless and interactive web applications. I have experience in frontend development using HTML, CSS, JavaScript, and React, and I am actively working on building responsive websites with clean, maintainable code. With a strong foundation in backend technologies, I aim to gain practical experience in full-stack development, improve my problem-solving skills, and contribute to innovative projects. I am looking for an internship that will allow me to collaborate with experienced developers and learn from real-world challenges".
        </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:kadiwalnoman097@gmail.com">kadiwalnoman097@gmail.com</a></p>
        <p>Phone: <a href="tel:+918591513550">+91 85915-13550</a></p>
      </div>
    </div>
    </>
  );
};

export default Profile;
