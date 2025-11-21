import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { APP_LINKS } from '@/constants';

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Find Your Perfect <span className="text-primary-600">जीवनसाथी</span>
            </h1>
            <p className="text-xl md:text-2xl font-hindi text-primary-700 mb-6">
              शुभ मिलन
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              India's most trusted matrimonial platform connecting hearts and building lasting relationships.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href={APP_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.538-.586-.824-1.347-.824-2.19 0-.843.286-1.604.824-2.19.538-.586 1.259-.903 2.082-.903.824 0 1.544.317 2.082.903.538.586.824 1.347.824 2.19 0 .843-.286 1.604-.824 2.19-.538.586-1.258.903-2.082.903-.823 0-1.544-.317-2.082-.903zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
              <a 
                href={APP_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
            </div>

            <Link 
              to="/features"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
            >
              Learn more about our features
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Shubh Milan?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience a secure, authentic, and efficient matchmaking journey with our innovative platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Profiles</h3>
              <p className="text-gray-600">
                Every profile is thoroughly verified to ensure authenticity and safety for all our users.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your data is secure with industry-leading encryption and comprehensive privacy controls.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Matching</h3>
              <p className="text-gray-600">
                Advanced AI algorithms find your perfect match based on compatibility and preferences.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Messaging</h3>
              <p className="text-gray-600">
                Connect instantly with potential matches through our secure messaging platform.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Calling</h3>
              <p className="text-gray-600">
                Meet face-to-face virtually before taking the next step in your relationship journey.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always available to help you on your matchmaking journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-primary-100">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Cities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Satisfaction</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Download the Shubh Milan app today and start your journey towards finding your life partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={APP_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.538-.586-.824-1.347-.824-2.19 0-.843.286-1.604.824-2.19.538-.586 1.259-.903 2.082-.903.824 0 1.544.317 2.082.903.538.586.824 1.347.824 2.19 0 .843-.286 1.604-.824 2.19-.538.586-1.258.903-2.082.903-.823 0-1.544-.317-2.082-.903zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
              <a 
                href={APP_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
