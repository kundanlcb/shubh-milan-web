import { Container } from '../components/ui/Container';

export const AboutPage = () => {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Shubh Milan</h1>
          <p className="text-lg text-gray-600 mb-8">
            Shubh Milan is more than just a matchmaking platform – it's a community dedicated to helping 
            people find meaningful connections and build lasting relationships.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We believe that everyone deserves to find their perfect match. Our mission is to create a 
                safe, secure, and user-friendly platform that brings people together based on shared values, 
                interests, and compatibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Trust:</strong> We prioritize user safety and verify all profiles.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Privacy:</strong> Your personal information is protected with industry-leading security.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Authenticity:</strong> We encourage genuine connections and honest communication.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded with the vision of modernizing traditional matchmaking, Shubh Milan combines 
                cultural values with cutting-edge technology to create meaningful matches that last a lifetime.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};
