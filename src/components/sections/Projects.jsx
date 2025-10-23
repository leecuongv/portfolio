
import React from 'react';

export const Projects = () => {

  const getProjectSkillIcon = (tech) => {
    const size = 14;
    switch ((tech || '').toLowerCase()) {
      case 'java':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M12 2s-4 0-4 2 4 3 4 3 4-1 4-3-4-2-4-2zM8 9s-1 2 4 2 4-2 4-2-1 3-4 3-4-3-4-3z" />
          </svg>
        );
      case 'spring':
      case 'springboot':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M12 2C7 2 4 5 4 9c0 5 8 11 8 11s8-6 8-11c0-4-3-7-8-7z" />
          </svg>
        );
      case 'mongodb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M12 0s-8 3.6-8 11c0 5.3 4 11 8 13 4-2 8-7.7 8-13 0-7.4-8-11-8-11z" />
          </svg>
        );
      case 'restful api':
      case 'rest':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="inline-block mr-2">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'nodejs':
      case 'node.js':
      case 'node':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M12 .7l9 5.2v10.4l-9 5.2-9-5.2V5.9L12 .7z" />
          </svg>
        );
      case 'express':
      case 'express.js':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M2 2h20v20H2V2zm6 6v8h2V8H8zm6 0h-2v8h2V8z" />
          </svg>
        );
      case 'axios':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M3 3h18v18H3V3zm6 6h6v6H9V9z" />
          </svg>
        );
      case 'python':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M12 2C7 2 9 4 9 4v3h6V4s2-2-3-2zM6 9v6s1 2 6 2 6-2 6-2V9H6z" />
          </svg>
        );
      case 'opencv':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      case 'tensorflow':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M2 3h20v4l-8 8-4-4-8 8V3z" />
          </svg>
        );
      case 'c#':
      case 'csharp':
      case 'c':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M2 2h20v20H2V2zm6 6h8v2H8V8z" />
          </svg>
        );
      case 'window forms':
      case 'windows forms':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <rect x="3" y="4" width="18" height="16" rx="2" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };
  return (
    <section id="projects" className="flex justify-center min-h-screen items-center py-20">

      <div className="max-w-5xl mx-auto px-3">
        <h2 className="text-3xl font-bold mb-8 text-primary-d40 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 hover:border-primary-d20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Back-end Farm Management System</h3>
            <p className="text-secondary mb-4"> This project is a comprehensive back-end system for managing farm operations, including crop tracking, resource management, and data analytics.</p>
            <div className="flex flex-wrap mb-4 gap-2">
              {["Java", "Spring", "MongoDB", "Restful API"].map((tech, techkey) => {
                return <span
                  key={techkey}
                  className="bg-primary-d20 text-on-primary py-1 px-3 rounded-full text-sm hover:bg-primary-d40 hover:shadow-[0_2px_8px_rgba(11,87,208,0.1)] transition-all"
                >
                  {getProjectSkillIcon(tech)}{tech}
                </span>
              })}
            </div>
            <div className="flex items-stretch gap-4 md:gap-6">
              <a href="" className="flex-1 text-center text-primary hover:text-primary-d20 hover:bg-primary-d20 transition-all px-4 border outline-color rounded-full flex items-center justify-center h-12"><div className="flex justify-items-center gap-[4px]"><span>Live</span> <span>Demo</span></div></a>
              <a href="https://github.com/leecuongv/learning-spring" className="flex-1 text-center text-primary flex items-center justify-center gap-2 px-4 border outline-color rounded-full hover:scale-105 h-12" >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 hover:border-primary-d20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Back-end Only Examination System</h3>
            <p className="text-secondary mb-4">This project is a back-end only system for managing online examinations, including user management, exam creation, and result processing.</p>
            <div className="flex flex-wrap mb-4 gap-2">
              {["NodeJS", "Express", "MongoDB", "Restful API", "Axios"].map((tech, techkey) => {
                return <span
                  key={techkey}
                  className="bg-primary-d20 text-on-primary py-1 px-3 rounded-full text-sm hover:bg-primary-d40 hover:shadow-[0_2px_8px_rgba(11,87,208,0.1)] transition-all"
                >
                  {getProjectSkillIcon(tech)}{tech}
                </span>
              })}
            </div>
            <div className="flex items-stretch gap-4 md:gap-6">
              <a href="" className="flex-1 text-center text-primary hover:text-primary-d20 hover:bg-primary-d20 transition-all px-4 border outline-color rounded-full flex items-center justify-center h-12"><div className="flex justify-items-center gap-[4px]"><span>Live</span> <span>Demo</span></div></a>
              <a href="https://github.com/leecuongv/BE_Online_Examination_System" className="flex-1 text-center text-primary flex items-center justify-center gap-2 px-4 border outline-color rounded-full hover:scale-105 h-12" >
                Github
              </a>
            </div>
          </div>


          <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 hover:border-primary-d20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Realtime mark detection</h3>
            <p className="text-secondary mb-4">Realtime mark detection is a python project for detecting marks in real-time using computer vision techniques.</p>
            <div className="flex flex-wrap mb-4 gap-2">
              {["Python", "OpenCV", "TensorFlow"].map((tech, techkey) => {
                return <span
                  key={techkey}
                  className="bg-primary-d20 text-on-primary py-1 px-3 rounded-full text-sm hover:bg-primary-d40 hover:shadow-[0_2px_8px_rgba(11,87,208,0.1)] transition-all"
                >
                  {getProjectSkillIcon(tech)}{tech}
                </span>
              })}
            </div>
            <div className="flex items-stretch gap-4 md:gap-6">
              <a href="" className="flex-1 text-center text-primary hover:text-primary-d20 hover:bg-primary-d20 transition-all px-4 border outline-color rounded-full flex items-center justify-center h-12"><div className="flex justify-items-center gap-[4px]"><span>Live</span> <span>Demo</span></div></a>
              <a href="https://github.com/leecuongv/RealtimeMaskDetection" className="flex-1 text-center text-primary flex items-center justify-center gap-2 px-4 border outline-color rounded-full hover:scale-105 h-12" >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 hover:border-primary-d20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Hotel Management System</h3>
            <p className="text-secondary mb-4">Hotel Management System is a Windows application that allows hotel staff to manage bookings, check-ins, and check-outs efficiently.</p>
            <div className="flex flex-wrap mb-4 gap-2">
              {["Window Forms", "C#"].map((tech, techkey) => {
                return <span
                  key={techkey}
                  className="bg-primary-d20 text-on-primary py-1 px-3 rounded-full text-sm hover:bg-primary-d40 hover:shadow-[0_2px_8px_rgba(11,87,208,0.1)] transition-all"
                >
                  {getProjectSkillIcon(tech)}{tech}
                </span>
              })}
            </div>
            <div className="flex items-stretch gap-4 md:gap-6">
              <a href="" className="flex-1 text-center text-primary hover:text-primary-d20 hover:bg-primary-d20 transition-all px-4 border outline-color rounded-full flex items-center justify-center h-12"><div className="flex justify-items-center gap-[4px]"><span>Live</span> <span>Demo</span></div></a>
              <a href="https://github.com/leecuongv/Hotel-Managerment-System" className="flex-1 text-center text-primary flex items-center justify-center gap-2 px-4 border outline-color rounded-full hover:scale-105 h-12" >
                Github
              </a>
            </div>
          </div>




        </div>

      </div>

    </section>
  )
}
