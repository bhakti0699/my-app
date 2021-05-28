import React from 'react';
import {storiesOf} from "@storybook/react";
import Hello from '../components/Hello';

storiesOf("Hello Story",module).add("red",()=> <Hello label="World" color="red"/>)
storiesOf("Hello Story",module).add("blue",()=> <Hello label="World" color="blue"/>)