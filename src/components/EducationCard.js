// src/components/EducationCard.js

import React from 'react';

function EducationCard({ course, institution, location, startingYear, graduationYear, description, gpa, type }) {
    return (
        <div className="flex md:flex-row flex-col md:items-center md:gap-2 group relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
            <div className="pointer p-4 dark:bg-gray-700 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                {type}
            </div>
            <div className="details md:max-w-sm p-5 bg-gray-100 dark:bg-gray-700 rounded-md my-3">
                <div className="course-title font-semibold">{course}</div>
                <div className="institution">{institution}</div>
                <div className="location">{location}</div>
                <div className="starting-year">{startingYear}</div>
                <div className="graduation-year">{graduationYear}</div>
                <div className="description">{description}</div>
                <div className="result">{gpa}</div>
            </div>
        </div>
    );
}

export default EducationCard;
