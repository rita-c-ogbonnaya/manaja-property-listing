import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const path = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const backendUrl = 'https://manaja-backend.onrender.com';
  
  console.log('=== PROXY DEBUG ===');
  console.log('Request URL:', request.url);
  console.log('params.path:', params.path);
  console.log('params.path type:', typeof params.path);
  console.log('Array.isArray(params.path):', Array.isArray(params.path));
  console.log('extracted path:', path);
  console.log('===================');
  
  try {
    // Forward the path and query parameters to the backend
    const queryString = searchParams.toString();
    const url = `${backendUrl}${path ? `/${path}` : ''}${queryString ? `?${queryString}` : ''}`;
    
    console.log('Proxying GET request to:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error('Backend request failed:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Backend request failed', status: response.status },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    console.log('Backend response:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  const path = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const backendUrl = 'https://manaja-backend.onrender.com';
  
  try {
    const body = await request.json();
    const url = `${backendUrl}${path ? `/${path}` : ''}`;
    
    console.log('Proxying POST request to:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      console.error('Backend request failed:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Backend request failed', status: response.status },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}
