import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Spanotic',
  description: 'Meet the engineering core at Spanotic - a decentralized team of system architects and full-stack engineers.',
  alternates: {
    canonical: 'https://spanotic.com/team',
  },
};

const teamMembers = [
  {
    name: "Afnan Ahmed",
    role: "Founder & Lead Engineer",
    bio: "Specializing in full-stack architecture, Python data pipelines, and scalable cloud systems.",
    skills: ["Next.js", "Python", "AWS"],
    avatar: "/team/afnan.jpg", // e.g. "/team/afnan.jpg" once you add the file
    social: {
      linkedin: "https://www.linkedin.com/in/afnan-ahmed1614114?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#"
    }
  },
  {
    name: "Abu Bakkar Siddique",
    role: "Lead Frontend Developer",
    bio: "Creating immersive, high-performance user interfaces and bridging the gap between design and engineering.",
    skills: ["React", "Tailwind CSS", "WebGL"],
    avatar: "/team/abubakkar.jpg", // e.g. "/team/abubakkar.jpg" once you add the file
    social: {
      linkedin: "https://www.linkedin.com/in/abu-bakkar-siddique-69b569211?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#"
    }
  },
  {
    name: "Muhammad Shahmeer",
    role: "Backend Architect",
    bio: "Designing resilient APIs, microservices, and high-availability database architectures for scale.",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    avatar: "/team/shahmeer.jpg", // e.g. "/team/shahmeer.jpg" once you add the file
    social: {
      linkedin: "https://www.linkedin.com/in/muhammad-shahmeer-ds?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#"
    }
  }
];

// Simple SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A1A1AA]">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function TeamPage() {
  return (
    <main className="relative overflow-hidden min-h-screen pt-12 px-6 pb-24">
      {/* Ambient Lights */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#00F0FF] blur-[120px] rounded-full opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#8A2BE2] blur-[120px] rounded-full opacity-20 pointer-events-none z-0" />

      {/* Header */}
      <h1 className="text-4xl text-white font-bold text-center relative z-10">
        The Engineering Core
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-2xl mx-auto mt-4 mb-16 relative z-10">
        A decentralized team of system architects and full-stack engineers.
      </p>

      {/* The Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto relative z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 flex flex-col items-center hover:border-[#8A2BE2]/50 transition-all">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00F0FF]/20 to-[#8A2BE2]/20 border border-[#2A2A38] mb-6 flex items-center justify-center overflow-hidden relative">
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <UserIcon />
              )}
            </div>

            {/* Name & Role */}
            <h2 className="text-xl text-white font-bold mb-1">{member.name}</h2>
            <p className="text-sm text-[#00F0FF] mb-4">{member.role}</p>

            {/* Bio */}
            <p className="text-sm text-[#A1A1AA] text-center mb-6">
              {member.bio}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {member.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-auto">
              <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                <LinkedinIcon />
              </Link>
              <Link href={member.social.github} className="text-[#A1A1AA] hover:text-white transition-colors">
                <GithubIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}