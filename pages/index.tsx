import { useState } from 'react';

export default function Home() {
    const initialTextA = 'The quick brown fox jumps over the lazy dog.';
    const initialTextC = initialTextA.replace(/ /g, '\u2004');
    const [textA, setTextA] = useState(initialTextA);
    const [textC, setTextC] = useState(initialTextC);
    const [textE, setTextE] = useState('');
    const [result, setResult] = useState('');

    const handleButtonBClick = () => {
        setTextC(textA.replace(/ /g, '\u2004'));
    };

    const handleButtonDClick = () => {
        setResult(textE.includes('\u2004') ? 'Detected' : 'No Watermark');
    };

    return (
        <div className="flex flex-col items-center p-8">
            <textarea
                className="w-1/2 p-2 border rounded"
                rows={4}
                value={textA}
                onChange={(e) => setTextA(e.target.value)}
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 my-4 rounded" onClick={handleButtonBClick}>
                Add Watermark
            </button>

            <textarea
                className="w-1/2 p-2 border rounded"
                rows={4}
                value={textC}
                onChange={(e) => setTextC(e.target.value)}
            ></textarea>

            <div style={{ marginTop: '40px', marginBottom: '30px' }} className="border-t w-1/2"></div>

            <textarea
                className="w-1/2 p-2 border rounded"
                rows={4}
                value={textE}
                placeholder='Paste either text above here.'
                onChange={(e) => setTextE(e.target.value)}
            ></textarea>

            <button className="bg-blue-500 text-white px-4 py-2 my-4 rounded" onClick={handleButtonDClick}>
                Detect Watermark
            </button>

            <div className="w-full text-center py-4">{result}</div>
        </div>
    );
}
