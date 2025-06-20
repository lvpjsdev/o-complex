import { ApiResponse, ComplexResponse, Product } from '@/types';
import DOMPurify from 'isomorphic-dompurify';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const nextUrl = request.nextUrl;
    const pageNumber = nextUrl.searchParams.get('page') || '1';
    const pageSize = nextUrl.searchParams.get('page_size') || '20';

    const searchParams = new URLSearchParams();

    searchParams.append('page', pageNumber);
    searchParams.append('page_size', pageSize);

    const response = await fetch(
      `http://o-complex.com:1337/products?${searchParams.toString()}`
    );

    if (!response.ok) {
      return new Response(response.statusText, { status: response.status });
    }

    const data: ComplexResponse<Product> = await response.json();

    console.log(data);

    const { page, amount, total } = data;

    const responseData: ApiResponse<Product[]> = {
      hasNextPage: (page - 1) * Number(pageSize) + amount < total,
      data: data.items.map((item) => ({
        id: item.id,
        image_url: item.image_url,
        title: DOMPurify.sanitize(item.title),
        description: DOMPurify.sanitize(item.description),
        price: item.price,
      })),
    };

    const payload = JSON.stringify(responseData);

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
