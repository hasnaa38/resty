import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import Form from '../components/form/index';
import Result from '../components/results/index';

it('loads and displays the starting app', async () => {
    render(<App />);
    const URL = screen.getByTestId('URL');
    expect(URL).toHaveTextContent('URL');
});

// it('shows loading before starting', async () => {
//     render(<App />);
//     const submit_result = screen.getByTestId('submit-result');
//     expect(submit_result).toHaveTextContent('loading');
// });

// it('can send requests', async () => {

//     render(<App />);
//     const button = screen.getByTestId('goButton');
//     const input = screen.getByTestId('URLinput');
//     fireEvent.change(input, {
//         target: { value: {
//             method: 'GET',
//             url: { value: 'https://anapioficeandfire.com/api/houses/1'},
//             body: 'body'
//         }}
//     });
//     fireEvent.click(button);
//     const method = await waitFor(() => screen.getByTestId('method'));
//     const response = await waitFor(() => screen.getByTestId('result'));
//     expect(input.value).toHaveTextContent('https://anapioficeandfire.com/api/houses/1');

// });
