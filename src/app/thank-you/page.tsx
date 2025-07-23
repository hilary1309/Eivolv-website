// src/app/thank-you/page.tsx

export default function ThankYouPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4] px-6 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
          <h1 className="text-3xl font-bold text-[#D35400] mb-4">🎉 Thank You!</h1>
          <p className="text-gray-700 text-lg">
            We’ve received your message. You’ll hear from us soon.
          </p>
          <a
            href="/"
            className="inline-block mt-6 bg-[#D35400] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  