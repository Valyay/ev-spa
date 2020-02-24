import * as React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../pages/HomePage';

it('renders HomePage', () => {
    const result = shallow(<HomePage />).contains(<h1>HomePage</h1>);
    expect(result).toBeTruthy();
});
