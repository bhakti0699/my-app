import React from 'react';
import {Button} from '@chakra-ui/react';
export interface Hello{
    label:string,
    color:string
}
export default (props:Hello) => {
    const {label,color} = props;
    return <Button color={color}>Hello {label}</Button>
}