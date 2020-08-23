import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import renderWithRouter from './service/renderWithRouter';
import { fireEvent, wait, cleanup } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom';

import { Provider } from '../context';
import Profile from '../pages/Client/Profile';
import { userMock } from './service/mock';

jest.mock('axios');

beforeEach(() => {
  cleanup();
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});


describe('Profile page', () => {
  test('page render', async () => {
    axios.get.mockResolvedValue({ data: userMock });
    axios.patch.mockResolvedValue({});
    const onSubmit = jest.fn();

    const { getByTestId } = renderWithRouter(
      <Provider>
        <Profile />
      </Provider>
    );

    await wait();
    expect(getByTestId('profile-name-input').value).toBe('Josueldo');
    expect(getByTestId('profile-email-input').value).toBe('josueldo@gmail.com');

    fireEvent.change(getByTestId("profile-name-input"), {
      target: { value: "Josueldo da Silva Bolivar" },
    });

    fireEvent.submit(getByTestId('form-submit'));
    // fireEvent.click(getByTestId('signin-btn'));
    await wait();

    expect(onSubmit).toHaveBeenCalled();

    // expect(getByTestId('message').innerHTML).toBe('User Updated');
  });
});
