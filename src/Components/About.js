// src/About.js
import React from 'react';
import './About.css';
import CoreValuesSection from './CoreValuesSection';
import TeamMemberCard from './TeamMemberCard';
import HeaderImage from './HeaderImage';
import m1 from './images/1.jpg';
import m2 from './images/2.jpg';
import m3 from './images/3.jpg';
import m4 from './images/444.jpg';


const teamMembers = [
  {
    name: 'Tejash',
    sname: 'Rajput',
    role: 'Creative Leader',
    description: 'Very introvert person still became the leader and being a leader did a quite a good work and gain some confidence which will help in future.',
    image: m1,
  },
  {
    name: 'Tej',
    sname: 'Patel',
    role: 'Sales Manager',
    description: 'My experience at Tech Elecon has been enriching and fruitful, greatly enhancing my personal and professional growth with valuable knowledge and skills.',
    image: m2,
  },
  {
    name: 'Nikhil',
    sname: 'Prajapati',
    role: 'Web Developer',
    description: 'At Tech Elecon, I focused on developing a React.js website for house renting. The supportive environment allowed me to sharpen my skills.',
    image: m3,
  },
  {
    name: 'Tamanna',
    sname: 'Kalariya',
    role: 'Web Designer',
    description: 'I am a beginner web developer, specializing in creating user-friendly, responsive websites using both frontend and backend technologies.',
    image: m4,
  },
];

const About = () => {
  return (
    <div className="about-page">
      <HeaderImage
        imageUrl="https://terra360.in/wp-content/uploads/2023/12/about-us-title-img-1.png"
        text="About Us"
      />
      <div className="about-text flex gap-4">
        <img className=" object-cover" src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/about-us-img1.jpg" alt="About Us" />
        <div className="flex flex-col px-8">
          <h1 className="mt-6">Vision</h1>
          <p className="mt-2 font-semibold">
            Empowering renters to discover their perfect home effortlessly, our vision is to redefine the rental experience. Through intuitive technology and personalized service, we aim to connect tenants with homes that match their lifestyle and aspirations. Our commitment is to make finding a rental property a seamless and rewarding journey.
          </p>
        </div>
      </div>
      <div className="core-values-section">
        <CoreValuesSection />
      </div>

      <h1 className="about-team">Our Team Members</h1>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <TeamMemberCard
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              sname={member.sname}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
