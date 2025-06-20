import { Review } from '@/types';
import DOMPurify from 'isomorphic-dompurify';

export async function GET() {
  try {
    const response = await fetch('http://o-complex.com:1337/reviews');
    if (!response.ok) {
      return new Response(response.statusText, { status: response.status });
    }

    const data: Review[] = await response.json();
    const clearData = data.map(({ id, text }) => ({
      id,
      text: DOMPurify.sanitize(text),
    }));
    const payload = JSON.stringify(clearData);

    return new Response(payload, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception';

    return new Response(message, { status: 500 });
  }
}
