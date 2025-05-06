'use client';

export default function GoogleSignInPage() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#1f2736] rounded-xl shadow-xl p-8 text-white">
        <h1 className="text-3xl font-semibold text-center mb-8">Sign in with Google</h1>

        <div id="google-signin-btn" className="flex justify-center"></div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p className="font-medium">By signing in, you agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  );
}
