import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { describe, expect, it, vi } from 'vitest';

describe('ErrorBoundary component', () => {
  it('should render children when no error occurs', () => {
    render(
      <ErrorBoundary fallback={() => null}>
        <div>Child component content</div>
      </ErrorBoundary>
    );

    const childComponent = screen.getByText('Child component content');
    expect(childComponent).toBeDefined();
  });

  it('should render fallback UI when an error occurs', () => {
    const mockFallback = vi.fn();
    const MockErrorComponent = () => {
      throw new Error('Test error');
      return null;
    };
    render(
      <ErrorBoundary fallback={mockFallback}>
        <MockErrorComponent />
      </ErrorBoundary>
    );

    console.error = vi.fn();

    expect(mockFallback).toHaveBeenCalled();
  });
});
