import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import ResponsiveVoice from 'responsive-voice';

function Avatar() {
    const [text, setText] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const { transform } = useSpring({
        transform: `rotate(${isSpeaking ? 10 : 0}deg)`,
    });

    function speakText() {
        setIsSpeaking(true);
        // ResponsiveVoice.speak(text);
        setTimeout(() => {

            setIsSpeaking(false);
        }, 3000);
    }

    return (
        <div className='mt-[20px]'>
            <animated.img
                src={'/images/avatar.png'}
                alt="Avatar"
                style={{
                    width: '100px',
                    height: '100px',
                    transform,
                }}
            />
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={speakText}>Speak</button>
        </div>
    );
}

export default Avatar