import { Container } from '../components/ui/Container';

export const FeaturesPage = () => {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful features that make Shubh Milan the best choice for finding your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Search Filters</h3>
            <p className="text-gray-600">
              Find exactly who you're looking for with customizable filters including age, location, 
              education, profession, and more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Video Calls</h3>
            <p className="text-gray-600">
              Connect face-to-face with integrated video calling feature for a more personal interaction 
              before meeting in person.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Messaging</h3>
            <p className="text-gray-600">
              Communicate safely with end-to-end encrypted messaging that keeps your conversations private 
              and secure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Profile Verification</h3>
            <p className="text-gray-600">
              All profiles go through a thorough verification process to ensure authenticity and build trust 
              in our community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interest Matching</h3>
            <p className="text-gray-600">
              Our smart algorithm considers your interests, hobbies, and lifestyle preferences to suggest 
              compatible matches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to help you with any questions or 
              concerns.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
