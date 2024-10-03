import React from 'react';
import educationData from './../data/educationData.js';
import EducationCard from './EducationCard.js';

function Education() {
    return (
        <div className="bg">
        <div className="dark:text-white pb-6">
            <div className='sm:pl-[8rem] p-8 mx-7 mt-4 sm:mt-0 sm:pt-16 pb-20 sm:px-4 sm:py-0'>
                <h1 className='w-72 mb-8 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl text-left'>
                    Education
                </h1>

                {educationData.map((edu) => (
                    <EducationCard
                        key={edu.id}
                        {...edu}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

export default Education;
