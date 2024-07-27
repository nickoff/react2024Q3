import { describe, expect, it, vi } from 'vitest';
import { loaderPersonDescription } from '../app/AppRouter/api';

describe('getPersonDescription', () => {
  it('should fetch person description', async () => {
    const params = { id: '1' };
    const mockResponse = { name: 'Luke Skywalker' };

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse)
    });

    const result = await loaderPersonDescription({
      params,
      request: new Request('https://example.com')
    });
    expect(result).toEqual({ personDescription: mockResponse });

    expect(global.fetch).toHaveBeenCalledWith(`https://swapi.dev/api/people/${params.id}`);
  });

  it('should fetch null', async () => {
    const params = { id: undefined };
    const mockResponse = { name: 'Luke Skywalker' };

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse)
    });

    const result = await loaderPersonDescription({ params, request: new Request('https://example.com') });
    expect(result).toEqual(undefined);
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
