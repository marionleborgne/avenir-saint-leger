import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const linkElement = container.firstChild;
  expect(linkElement).toBeInTheDocument();
});
