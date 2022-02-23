import React from 'react';

function Title() {
    console.log('Rendring Title');
    return <div>
        Title Component
    </div>;
}

export default React.memo(Title);
