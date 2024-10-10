import React, { useState, useEffect } from 'react';
import '../styles/ScrollPoints.scss';

const ScrollPoints = () => {
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
    const [currentSection, setCurrentSection] = useState(sections[0]);

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = sections.map(sectionId => {
                const section = document.getElementById(sectionId);
                return {
                    id: sectionId,
                    offset: section.getBoundingClientRect().top,
                };
            });

            const smallestPositiveOffsetSection = sectionOffsets
                .filter(section => section.offset >= 0)
                .reduce((closest, current) =>
                    closest.offset < current.offset ? closest : current
                );

            if (smallestPositiveOffsetSection) {
                setCurrentSection(smallestPositiveOffsetSection.id);
            }
        };

        const handleWheel = event => {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            const currentIndex = sections.indexOf(currentSection);
            const newIndex = currentIndex + delta;

            if (newIndex >= 0 && newIndex < sections.length) {
                const targetSection = sections[newIndex];
                const section = document.getElementById(targetSection);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setCurrentSection(targetSection);
                }
            }
        };

        const handleKeyDown = event => {
            const currentIndex = sections.indexOf(currentSection);
            let newIndex;

            switch (event.key) {
                case 'ArrowUp':
                    newIndex = currentIndex - 1;
                    break;
                case 'ArrowDown':
                    newIndex = currentIndex + 1;
                    break;
                default:
                    return;
            }

            if (newIndex >= 0 && newIndex < sections.length) {
                const targetSection = sections[newIndex];
                const section = document.getElementById(targetSection);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setCurrentSection(targetSection);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection, sections]);

    // Función para manejar el clic en los botones
    const handleButtonClick = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(sectionId);
        }
    };

    return (
        <div className="App">
            <div className="scroll-points">
                {sections.map((sectionId) => (
                    <button
                        key={sectionId}
                        type="button"
                        aria-label={`Go to ${sectionId} section`}
                        className={`nav-bullet button section${sectionId} ${currentSection === sectionId ? 'current' : ''} ${(currentSection === 'section3' || currentSection === 'section5') ? 'changed' : ''}`}
                        onClick={() => handleButtonClick(sectionId)}
                        data-target={sectionId}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ScrollPoints;
