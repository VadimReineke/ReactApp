import React from "react";

export const requeired = (value) => {
    if (value) return undefined; 
    return 'Field is requered';
    
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is more then ${maxLength} symbols`; 
    return undefined;

}


