import { Container } from '../components/ui/Container';

export const TermsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <p className="text-gray-600 text-lg">
                Welcome to Shubh Milan. By accessing or using our mobile application and services, you agree to 
                be bound by these Terms and Conditions. Please read them carefully.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    By creating an account or using Shubh Milan, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. If you 
                    do not agree, please do not use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                <div className="text-gray-600 space-y-4">
                  <p>To use Shubh Milan, you must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Be legally eligible to marry under the laws of your jurisdiction</li>
                    <li>Not be currently married (unless seeking second marriage with legal approval)</li>
                    <li>Provide accurate and truthful information</li>
                    <li>Not have been previously banned from the platform</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                <div className="text-gray-600 space-y-4">
                  <p>When creating an account, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information to keep it accurate</li>
                    <li>Keep your login credentials secure and confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
                <div className="text-gray-600 space-y-4">
                  <p>You agree NOT to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide false, misleading, or fraudulent information</li>
                    <li>Use the service for commercial or promotional purposes</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Share inappropriate, offensive, or illegal content</li>
                    <li>Violate any laws or regulations</li>
                    <li>Create multiple accounts or share your account</li>
                    <li>Use automated systems to access the platform</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and Intellectual Property</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    You retain ownership of the content you post, but grant Shubh Milan a license to use, display, 
                    and distribute it for the purpose of operating and promoting our services.
                  </p>
                  <p>
                    All platform content, including but not limited to text, graphics, logos, software, and design, 
                    is the property of Shubh Milan and protected by intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Payments</h2>
                <div className="text-gray-600 space-y-4">
                  <p>Premium features require a paid subscription:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscriptions renew automatically unless cancelled</li>
                    <li>Prices are subject to change with notice</li>
                    <li>Refunds are provided as per our refund policy</li>
                    <li>Payment is processed through secure third-party providers</li>
                    <li>You are responsible for all charges incurred</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Your use of Shubh Milan is also governed by our Privacy Policy. We collect, use, and protect 
                    your personal information as described in our Privacy Policy. By using our services, you 
                    consent to such processing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Safety and Verification</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    While we verify profiles and maintain safety measures, we cannot guarantee the accuracy of 
                    user information or the conduct of users. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verifying the identity and information of other users</li>
                    <li>Taking precautions when meeting in person</li>
                    <li>Reporting suspicious or inappropriate behavior</li>
                    <li>Following safety guidelines provided by us</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We reserve the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Suspend or terminate your account for violating these terms</li>
                    <li>Remove any content that violates our policies</li>
                    <li>Refuse service to anyone at any time</li>
                    <li>Modify or discontinue the service with or without notice</li>
                  </ul>
                  <p>You may delete your account at any time from your account settings.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Limitations</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Shubh Milan is provided "as is" without warranties of any kind. We do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>That you will find a suitable match</li>
                    <li>The accuracy or reliability of user content</li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Security of data transmission</li>
                  </ul>
                  <p>
                    We are not liable for any indirect, incidental, special, or consequential damages arising 
                    from your use of our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    You agree to indemnify and hold Shubh Milan harmless from any claims, damages, or expenses 
                    arising from your use of the service, violation of these terms, or infringement of any 
                    third-party rights.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    These Terms and Conditions are governed by the laws of India. Any disputes shall be subject 
                    to the exclusive jurisdiction of courts in Mumbai, India.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    We may modify these Terms and Conditions at any time. Continued use of the service after 
                    changes constitutes acceptance of the new terms. We will notify you of significant changes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <div className="text-gray-600">
                  <p>
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>Email:</strong> legal@shubhmilan.com</li>
                    <li><strong>Phone:</strong> +91 1234567890</li>
                    <li><strong>Address:</strong> Shubh Milan, Mumbai, India</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-12 p-6 bg-primary-50 rounded-xl">
              <p className="text-gray-700">
                <strong>By using Shubh Milan, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms and Conditions.</strong>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our legal team is here to help clarify any questions about our terms.
            </p>
            <a 
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};
