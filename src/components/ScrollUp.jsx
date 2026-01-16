import React, { useEffect, useState } from 'react';

export default function ScrollUp() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 300);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visible) return null;

    return (
        <i className="scroll-up" id="scroll-up" onClick={handleClick} role="button" aria-label="Scroll to top">
            <img src="/assets/icons/icons8-upward-arrow.gif" className="socicon up-arrow" alt="up" />
        </i>
    );
}
