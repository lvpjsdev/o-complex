import { OrderResponse } from '@/types';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    //TODO: здесь конечно нужно сделать валидацию запроса

    const response = await fetch('http://o-complex.com:1337/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return new Response(response.statusText, { status: response.status });
    }

    const data: OrderResponse = await response.json();

    if (data.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: data.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception';

    return new Response(message, { status: 500 });
  }
}
