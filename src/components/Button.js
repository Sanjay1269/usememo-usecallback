import React from 'react';
function Button({handelClick,children}) {
    console.log(`Rendring ${children}`);
  return <div>
      <button onClick={handelClick}>{children}</button>
  </div>;
}

export default React.memo(Button);
