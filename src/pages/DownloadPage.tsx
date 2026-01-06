import { Container } from '../components/ui/Container';

export const DownloadPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Dilkor</span> App
            </h1>
            <p className="text-xl font-hindi text-primary mb-6">
              अपना जीवनसाथी खोजें
            </p>

            {/* Coming Soon Banner */}
            <div className="bg-gradient-to-r from-primary to-pink-500 text-white py-4 px-8 rounded-2xl mb-8 inline-block">
              <p className="text-2xl font-bold">🚀 Coming Soon!</p>
              <p className="text-sm mt-1">Our mobile apps are under development</p>
            </div>

            <p className="text-lg text-gray-600 mb-12">
              We're working hard to bring you the best matchmaking experience on mobile. Stay tuned for the launch!
            </p>

            {/* Coming Soon Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="inline-flex items-center justify-center bg-gray-300 text-gray-600 px-10 py-5 rounded-2xl font-semibold cursor-not-allowed">
                <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.538-.586-.824-1.347-.824-2.19 0-.843.286-1.604.824-2.19.538-.586 1.259-.903 2.082-.903.824 0 1.544.317 2.082.903.538.586.824 1.347.824 2.19 0 .843-.286 1.604-.824 2.19-.538.586-1.258.903-2.082.903-.823 0-1.544-.317-2.082-.903zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm">COMING SOON</div>
                  <div className="text-2xl font-bold">Google Play</div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center bg-gray-300 text-gray-600 px-10 py-5 rounded-2xl font-semibold cursor-not-allowed">
                <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm">COMING SOON</div>
                  <div className="text-2xl font-bold">App Store</div>
                </div>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="inline-block bg-gray-50 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-4 font-semibold">Get notified when we launch!</p>
              <p className="text-sm text-gray-600 mb-4">Contact us to stay updated on the app release.</p>
              <a
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Preview */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The Dilkor app comes packed with features to make your matchmaking journey smooth and enjoyable
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Profiles</h3>
                <p className="text-gray-600 text-sm">Connect with genuine people verified by our team</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
                <p className="text-gray-600 text-sm">AI-powered algorithms for better compatibility</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Messaging</h3>
                <p className="text-gray-600 text-sm">Chat securely with your matches in real-time</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Posts & Stories</h3>
                <p className="text-gray-600 text-sm">Share moments and connect through social features</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Controls</h3>
                <p className="text-gray-600 text-sm">Complete control over who sees your profile</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always here to help you on your journey</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* System Requirements */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              System Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-primary mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.341c-.538-.586-.824-1.347-.824-2.19 0-.843.286-1.604.824-2.19.538-.586 1.259-.903 2.082-.903.824 0 1.544.317 2.082.903.538.586.824 1.347.824 2.19 0 .843-.286 1.604-.824 2.19-.538.586-1.258.903-2.082.903-.823 0-1.544-.317-2.082-.903zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Android</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Android 6.0 or higher
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Minimum 2GB RAM
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100MB free storage space
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Active internet connection
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-primary mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">iOS</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    iOS 12.0 or later
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compatible with iPhone, iPad, iPod touch
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100MB free storage space
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Active internet connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated!</h2>
            <p className="text-xl text-white mb-8">
              Be the first to know when the Dilkor app launches. Contact us to get notified!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a 
                href="/features"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Features
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
