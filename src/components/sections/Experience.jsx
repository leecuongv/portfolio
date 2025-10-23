import React from 'react';

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-primary-d40 text-center">Work Experience</h2>

                <div className="flex flex-col gap-6">
                    <article className="rounded-xl p-6 border outline-color hover:-translate-y-1 transition-all bg-card">
                        <div className="flex justify-between items-start">
                            <h4 className="text-2xl font-bold text-primary-d40">Java Software Developer</h4>
                            <span className="text-secondary">10/2022 — 08/2024</span>
                        </div>

                        <div className="mt-3 mb-3 font-semibold text-primary">HPT Vietnam Corporation</div>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-secondary">
                            <li>Develop Java-based backend systems to handle business logic, data/document storage, and integration with other backend systems such as CoreBanking and IBM Integration Designer.</li>
                            <li>Integrate digital signature solutions and other platform services to support secure document workflows.</li>
                            <li>Analyze business requirements, collaborate with analysts to provide consulting and technical design, and assist with solution selection.</li>
                            <li>Participate in internal research activities to enhance technical skills and develop new products for future projects.</li>
                        </ul>
                    </article>

                    <article className="rounded-xl p-6 border outline-color hover:-translate-y-1 transition-all bg-card">
                        <div className="flex justify-between items-start">
                            <h4 className="text-2xl font-bold text-primary-d40">Internship Trainee</h4>
                            <span className="text-secondary">07/2022 — 09/2022</span>
                        </div>

                        <div className="mt-3 mb-3 font-semibold text-primary">FPT Software</div>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-secondary">
                            <li>Deepened programming skills and participated in soft-skills courses to improve problem-solving, teamwork, and presentation abilities.</li>
                            <li>Engaged in simulated projects to become familiar with real project environments and development workflows.</li>
                            <li>Collaborated with peers to deliver small proof-of-concept features and gained exposure to code reviews and version control practices.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience;
