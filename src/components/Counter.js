import React, { useMemo, useState } from 'react';

function Counter() {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);

    const incrementCountOne = () => {
        setcounterOne(counterOne + 1)
    }

    const incrementCountTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log('isEven is executed');
        let i = 0;
        while (i < 200000000) {
            i++
        }

        return counterTwo % 2 === 0
    }, [counterTwo])
    return <div>
        <div>counter One - {counterOne}</div>
        <div>counter Two - {counterTwo}</div>
        <span>{isEven ? 'even' : 'odd'}</span>
        <button onClick={incrementCountOne}>incrementCountOne</button>
        <button onClick={incrementCountTwo}>incrementCountTwo</button>
    </div>;
}

export default Counter;





