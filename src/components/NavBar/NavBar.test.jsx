import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import NavBar from './index';

describe('NavBar Component', () => {
  test('should render the brand title SERIE-JOURNAL', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    
    const brandElement = screen.getByText(/SERIE-JOURNAL/i);
    expect(brandElement).toBeInTheDocument();
  });
});
