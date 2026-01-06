import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const FAQPage = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: t('faq.gettingStarted'),
      questions: [
        {
          q: t('faq.q1'),
          a: t('faq.a1')
        },
        {
          q: t('faq.q2'),
          a: t('faq.a2')
        },
        {
          q: t('faq.q3'),
          a: t('faq.a3')
        }
      ]
    },
    {
      category: t('faq.privacySecurity'),
      questions: [
        {
          q: t('faq.q4'),
          a: t('faq.a4')
        },
        {
          q: t('faq.q5'),
          a: t('faq.a5')
        },
        {
          q: t('faq.q6'),
          a: t('faq.a6')
        }
      ]
    },
    {
      category: t('faq.matchingCommunication'),
      questions: [
        {
          q: t('faq.q7'),
          a: t('faq.a7')
        },
        {
          q: t('faq.q8'),
          a: t('faq.a8')
        },
        {
          q: t('faq.q9'),
          a: t('faq.a9')
        }
      ]
    },
    {
      category: t('faq.subscriptionPayment'),
      questions: [
        {
          q: t('faq.q10'),
          a: t('faq.a10')
        },
        {
          q: t('faq.q11'),
          a: t('faq.a11')
        },
        {
          q: t('faq.q12'),
          a: t('faq.a12')
        }
      ]
    },
    {
      category: t('faq.technicalSupport'),
      questions: [
        {
          q: t('faq.q13'),
          a: t('faq.a13')
        },
        {
          q: t('faq.q14'),
          a: t('faq.a14')
        },
        {
          q: t('faq.q15'),
          a: t('faq.a15')
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
              {t('faq.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('faq.subtitle')}
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
              {t('faq.stillHaveQuestions')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('faq.stillHaveQuestionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl inline-block"
              >
                {t('faq.contactSupport')}
              </Link>
              <a
                href="mailto:support@dilkor.com"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all inline-block"
              >
                {t('faq.emailUs')}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
