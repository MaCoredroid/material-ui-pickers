import * as React from 'react';
import DatePicker from '../../DatePicker/DatePicker';
import { mount, utilsToUse } from '../test-utils';

describe('DatePicker - different props', () => {
  it('Should not render toolbar if onlyCalendar = true', () => {
    const component = mount(
      <DatePicker
        open
        onlyCalendar
        onChange={jest.fn()}
        value={utilsToUse.date('2018-01-01T00:00:00.000Z')}
      />
    );

    expect(component.find('WithStyles(PickerToolbar)').length).toBe(0);
  });
});
