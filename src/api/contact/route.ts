import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const res = await fetch('https://formspree.io/f/xanbejna', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  });

  return NextResponse.redirect('https://eivolv-website-one.vercel.app/thank-you', 303);
}
