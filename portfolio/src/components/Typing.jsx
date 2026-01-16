import React, { useEffect, useState } from 'react';

const words = ['— Developer', '— Learner', '— ML Enthusiast'];

export default function Typing() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
        }
        const timeout = setTimeout(() => {
            setSubIndex(s => s + 1);
            if (subIndex + 1 > words[index].length) {
                // hold then switch
                setTimeout(() => {
                    setSubIndex(0);
                    setIndex(i => (i + 1) % words.length);
                }, 600);
            }
        }, 120);
        return () => clearTimeout(timeout);
    }, [subIndex, index]);

    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink(b => !b), 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <span>
            {words[index].substring(0, subIndex)}<span style={{ opacity: blink ? 1 : 0 }}>|</span>
        </span>
    );
}
