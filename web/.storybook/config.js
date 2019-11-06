import React from 'react'
import StoryRouter from 'storybook-react-router'
import { configure, addDecorator } from '@storybook/react'

// add a little margin around stories
const MarginDecorator = (storyFn) => <div className="m-2">{storyFn()}</div>
addDecorator(MarginDecorator)
// enable <Link> tag
addDecorator(StoryRouter())

configure(require.context('../src', true, /\.stories\.js$/), module)
