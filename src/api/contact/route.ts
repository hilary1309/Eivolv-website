import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // ✅ Send data to Formspree manually
  const res = await fetch('https://formspree.io/f/xanbejna', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  });

  // ✅ Redirect user to thank you page
  return NextResponse.redirect('https://eivolv-website-one.vercel.app/thank-you', 303);
}
