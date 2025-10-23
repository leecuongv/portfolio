
import React from 'react';

const About = () => {
    const frontendSkills = [
        "HTML", "CSS",
        "React",
        "Next",
        "Javascript",
        "TypeScript",
        "TailwindCSS",
    ];

    const backendSkills = ["Node.js", "Git", "Express.js", "MongoDB", "MySQL", "Prisma", "Github", "Docker", "Vercel"];

    // Return an inline SVG icon for a given technology name. Icons use currentColor so they follow theme tokens.
    const getSkillIcon = (tech) => {
        const size = 16;
        switch ((tech || '').toLowerCase()) {
            case 'html':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M1.5 0h21l-1.909 21.545L12 24l-8.591-2.455L1.5 0zm17.09 7.082l-.117 1.316-.112 1.259H12v-2.575h6.683l-.095  -.000zm-10.24 0H6.35l.2 2.575H12V6.83H8.35zM12 20.652l6.325-1.822.414-4.646H12v-1.726h6.987l-.174 1.94-.102 1.13H12v-2.548H9.3v2.548H6.475l.998 4.452L12 20.652z" />
                    </svg>
                );
            case 'css':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M1.5 0h21l-1.909 21.545L12 24 1.5 0zm17.892 7.24l-.155 1.727-.143 1.509H12V6.983h6.492l-.102.256zM12 20.496l6.03-1.742.363-4.01H12v1.925h4.184l-.159 1.753L12 19.52v.976z" />
                    </svg>
                );
            case 'react':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="inline-block mr-2">
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <path d="M12 2C9.243 2 6.708 3.082 5 5.09 3.292 7.098 2.308 9.873 2 12.743 2.308 15.613 3.292 18.388 5 20.396 6.708 22.404 9.243 23.486 12 23.486c2.757 0 5.292-1.082 7-3.09 1.708-2.008 2.692-4.783 3-7.653-.308-2.87-1.292-5.645-3-7.653C17.292 3.082 14.757 2 12 2z" stroke="currentColor" strokeWidth="0.8" />
                    </svg>
                );
            case 'next':
            case 'next.js':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M3 3h18v18H3V3zm5.5 5v10h2V8H8.5zm7.5 0h-4l4 6v4h2v-4l-2-6z" />
                    </svg>
                );
            case 'javascript':
            case 'js':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M1.5 0h21v21l-10.5 3-10.5-3V0zM17.1 16.9c-.26 1.57-1.5 2.91-3.86 2.91-1.3 0-2.12-.36-2.66-.79l.72-1.57c.45.3 1.02.66 1.96.66 1.25 0 1.95-.61 2.18-1.56l-3.67-1.28v-1.74h6.33v3.37zM10.14 7.11l2.53 1.77-1.54 1.07-2.53-1.77 1.54-1.07z" />
                    </svg>
                );
            case 'typescript':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M1.5 0h21v21l-10.5 3-10.5-3V0zm12.6 7.1v6.6h-1.8V7.1h1.8zM7.5 7.1h6v1.8h-4.2v6.6H7.5V7.1z" />
                    </svg>
                );
            case 'tailwindcss':
            case 'tailwind':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 6s-2.1-.9-4.2-.2C5.6 6.1 4 8.1 3 9.7c1.4-.2 3.2-.1 4.6-.9 1.7-.9 3.4-.7 4.4.1.9.7 2.5 1.9 5.1 1.2-.7-1.7-2.3-3.1-4.9-3.9C14.9 6.5 13.6 6 12 6zM12 12s-2-.9-4-.1C5.4 12.3 4 14 3 15.5c1.4-.2 3.2-.1 4.6-.9 1.7-.9 3.4-.7 4.4.1.9.7 2.5 1.9 5.1 1.2-.7-1.7-2.3-3.1-4.9-3.9C14.9 12.5 13.6 12 12 12z" />
                    </svg>
                );
            case 'node.js':
            case 'node':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 .7l9 5.2v10.4l-9 5.2-9-5.2V5.9L12 .7zm1.9 15.6c0 .9-.5 1.4-1.7 1.4-1 0-1.5-.5-1.8-1.1l1-0.6c.1.3.4.7.9.7.5 0 .8-.2.8-.6 0-.4-.2-.5-1.1-.8-1.1-.3-1.7-.7-1.7-1.6 0-.9.7-1.5 1.6-1.5 1 0 1.6.4 1.9 1l-1 0.6c-.1-.3-.3-.6-.9-.6-.4 0-.7.2-.7.5 0 .3.2.5 1 0.8 1 .3 1.6.7 1.6 1.7z" />
                    </svg>
                );
            case 'mongodb':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 0s-8 3.6-8 11c0 5.3 4 11 8 13 4-2 8-7.7 8-13 0-7.4-8-11-8-11z" />
                    </svg>
                );
            case 'mysql':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 0C6.5 0 2 4.5 2 10c0 7.3 6 12 10 14 4-2 10-6.7 10-14 0-5.5-4.5-10-10-10z" />
                    </svg>
                );
            case 'docker':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M2 13h20v3H2v-3zm2-3h4v2H4v-2zm6-4h4v2h-4V6zM4 6h2v2H4V6z" />
                    </svg>
                );
            case 'git':
            case 'github':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.1.7 2.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                );
            case 'express.js':
            case 'express':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M2 2h20v20H2V2zm6 6v8h2V8H8zm6 0h-2v8h2V8z" />
                    </svg>
                );
            case 'vercel':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                );
            case 'prisma':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                );
            default:
                // Generic circle as fallback
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                );
        }
    };

    return (
      <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
      >

          <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-primary-d40 text-center">

                  About Me
              </h2>

                <div className="rounded-xl p-8 border outline-color hover:-translate-y-1 transition-all">
                    <p className="text-secondary mb-6 text-center">
                        Seeking a Java Software Engineer position at an innovative technology company to apply knowledge and experience in backend development, while concurrently developing expertise to become a Senior Developer
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                          <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {frontendSkills.map((tech, techkey) => (
                                    <span
                                        key={techkey}
                                        className="inline-block py-2 px-5 rounded-full text-base font-medium hover:opacity-95 hover:shadow-[0_8px_28px_rgba(11,87,208,0.22)] transition-transform transform hover:-translate-y-1"
                                        style={{ backgroundColor: 'var(--skill-bg)', color: 'var(--skill-text)' }}
                                    >
                                        {getSkillIcon(tech)}{tech}
                                    </span>
                                ))}
                          </div>
                      </div>

                      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                          <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-3">
                              {backendSkills.map((tech, key) => (
                                  <span
                                      key={key}
                                      className="inline-block py-2 px-5 rounded-full text-base font-medium hover:opacity-95 hover:shadow-[0_8px_28px_rgba(11,87,224,0.22)] transition-transform transform hover:-translate-y-1"
                                      style={{ backgroundColor: 'var(--skill-bg)', color: 'var(--skill-text)' }}
                                  >
                                      {getSkillIcon(tech)}{tech}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                          <li>
                                <strong> HO CHI MINH CITY UNIVERSITY OF
                                    TECHNOLOGY AND EDUCATION </strong>
                                (2019-2023)
                            </li>
                            <li>
                                Major:<strong>Software Engineering</strong>
                            </li>
                            <li>
                                GPA:<strong> 3.2/4</strong>
                            </li>

                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border outline-color hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Soft Skills </h3>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Self-study</li>
                            <li>Independent work</li>
                            <li>Teamwork</li>
                            <li>Planning</li>
                            <li>Problem solving</li>
                        </ul>
                  </div>
              </div>
          </div>

      </section>
  );
};

export { About };