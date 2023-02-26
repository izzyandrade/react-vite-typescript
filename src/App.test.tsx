import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render with Hello World text', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Hello World/i);
  });
});
