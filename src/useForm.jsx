import React, { useState } from 'react'
import validateFrom from './validateFrom';


export function useForm(initialValue, validation,onsubmit) {
    const [value, setValue] = useState(initialValue);
    const [errors, setError] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValue((prev)=> ({...prev, [name]: value}))
         if (validation){
         const validationError = validation({...value, [name]: value})
         setError(validationError)
    }
    }

   

    const handlesubmit = (e)=>{
        e.preventDefault();
        const validationError = validation(value);
        setError(validationError)

        if(Object.keys(validationError).length === 0){
            onsubmit(value)
        }
    }
  return {
    value,
    errors,
    handleInputChange,
    handlesubmit
}
}

