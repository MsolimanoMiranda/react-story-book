import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from './textarea/Textarea';

export default {
  title: 'Atoms/TextArea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const EmpyTextArea = Template.bind({});
EmpyTextArea.args= {
  placeholder: 'Country speed seat newfound ah stained Gundabad stinking runt.',
  rows:3
};