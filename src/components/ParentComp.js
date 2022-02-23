import React, { useCallback, useState} from 'react';
import Button from './Button';
import Title from './Title';
import DataCount from './DataCount';

function ParentComp() {
    const [age, setage] = useState(10);
    const [salary, setsalary] = useState(10000)

      /* returns the memorized function */
        const incrementAge = useCallback(() => {
            setage(age + 1)
        },[age])

        const incrementSalary = useCallback(() => {
            setsalary(salary + 1000)
        },[salary])
       
  return  <div>
      <Title/>
      <DataCount count={age} text='age'/>
      <Button handelClick={incrementAge}>Increment age</Button>
      <DataCount count={salary} text='salary'/>
      <Button handelClick={incrementSalary}>Increment salary</Button>
  </div>;
}

export default ParentComp;
