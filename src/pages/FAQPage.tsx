import { useState } from 'react';
import { Container } from '../components/ui/Container';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account on Dilkor?",
          a: "Download the Dilkor app from Google Play Store or Apple App Store. Sign up using your email or phone number, verify your account, and complete your profile with accurate information."
        },
        {
          q: "Is Dilkor free to use?",
          a: "Yes, Dilkor offers a free basic membership that allows you to create a profile, browse matches, and send limited messages. Premium features are available through subscription plans."
        },
        {
          q: "How long does profile verification take?",
          a: "Profile verification typically takes 24-48 hours. We thoroughly review each profile to ensure authenticity and safety for all our users."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "How is my personal information protected?",
          a: "We use industry-standard encryption and security measures to protect your data. Your information is never shared with third parties without your consent, and you have complete control over your privacy settings."
        },
        {
          q: "Can I hide my profile from certain people?",
          a: "Yes, you can block specific users or hide your profile from non-members. Premium users have additional privacy controls including incognito mode."
        },
        {
          q: "How do you verify profiles?",
          a: "We verify profiles through multiple methods including phone verification, email verification, document verification, and photo verification to ensure authenticity."
        }
      ]
    },
    {
      category: "Matching & Communication",
      questions: [
        {
          q: "How does the matching algorithm work?",
          a: "Our AI-powered algorithm considers your preferences, interests, values, and compatibility factors to suggest the most suitable matches. The more complete your profile, the better the matches."
        },
        {
          q: "Can I search for specific criteria?",
          a: "Yes, you can use advanced filters to search by age, location, education, profession, religion, community, and many other criteria to find your ideal match."
        },
        {
          q: "How can I contact my matches?",
          a: "You can send interests, messages, or share posts and stories with your matches. Free users have limited messaging capabilities, while premium members enjoy unlimited communication."
        }
      ]
    },
    {
      category: "Subscription & Payment",
      questions: [
        {
          q: "What are the subscription plans?",
          a: "We offer monthly, quarterly, and annual subscription plans with varying features. Premium plans include unlimited messaging, advanced search, profile visibility boost, and more."
        },
        {
          q: "How do I cancel my subscription?",
          a: "You can cancel your subscription anytime from your account settings. Your premium features will remain active until the end of your current billing period."
        },
        {
          q: "Do you offer refunds?",
          a: "Refund policies vary based on your location and the type of subscription. Please refer to our Terms & Conditions or contact support for specific refund requests."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "The app is not working properly. What should I do?",
          a: "Try updating to the latest version of the app, clearing cache, or reinstalling. If the issue persists, contact our support team with details about the problem."
        },
        {
          q: "How do I report a suspicious profile?",
          a: "You can report any profile by clicking the 'Report' option on their profile page. Our team will investigate and take appropriate action within 24 hours."
        },
        {
          q: "Can I use Dilkor on multiple devices?",
          a: "Yes, you can log in to your account on multiple devices. Your data syncs automatically across all devices."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about Dilkor
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-xl font-bold">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                          <svg
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-gray-600">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@dilkor.com"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all inline-block"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
