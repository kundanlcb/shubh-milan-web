import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const TermsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('terms.lastUpdated')}
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
                {t('terms.intro')}
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section1Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section1Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section2Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section2Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section2Item1')}</li>
                    <li>{t('terms.section2Item2')}</li>
                    <li>{t('terms.section2Item3')}</li>
                    <li>{t('terms.section2Item4')}</li>
                    <li>{t('terms.section2Item5')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section3Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section3Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section3Item1')}</li>
                    <li>{t('terms.section3Item2')}</li>
                    <li>{t('terms.section3Item3')}</li>
                    <li>{t('terms.section3Item4')}</li>
                    <li>{t('terms.section3Item5')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section4Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section4Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section4Item1')}</li>
                    <li>{t('terms.section4Item2')}</li>
                    <li>{t('terms.section4Item3')}</li>
                    <li>{t('terms.section4Item4')}</li>
                    <li>{t('terms.section4Item5')}</li>
                    <li>{t('terms.section4Item6')}</li>
                    <li>{t('terms.section4Item7')}</li>
                    <li>{t('terms.section4Item8')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section5Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section5Para1')}</p>
                  <p>{t('terms.section5Para2')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section6Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section6Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section6Item1')}</li>
                    <li>{t('terms.section6Item2')}</li>
                    <li>{t('terms.section6Item3')}</li>
                    <li>{t('terms.section6Item4')}</li>
                    <li>{t('terms.section6Item5')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section7Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section7Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section8Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section8Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section8Item1')}</li>
                    <li>{t('terms.section8Item2')}</li>
                    <li>{t('terms.section8Item3')}</li>
                    <li>{t('terms.section8Item4')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section9Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section9Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section9Item1')}</li>
                    <li>{t('terms.section9Item2')}</li>
                    <li>{t('terms.section9Item3')}</li>
                    <li>{t('terms.section9Item4')}</li>
                  </ul>
                  <p>{t('terms.section9Para')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section10Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section10Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('terms.section10Item1')}</li>
                    <li>{t('terms.section10Item2')}</li>
                    <li>{t('terms.section10Item3')}</li>
                    <li>{t('terms.section10Item4')}</li>
                  </ul>
                  <p>{t('terms.section10Para')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section11Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section11Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section12Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section12Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section13Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('terms.section13Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section14Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('terms.section14Intro')}</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>{t('common.email')}:</strong> legal@dilkor.com</li>
                    <li><strong>{t('common.phone')}:</strong> +91 1234567890</li>
                    <li><strong>{t('common.address')}:</strong> Dilkor, Mumbai, India</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-12 p-6 bg-primary rounded-xl">
              <p className="text-gray-700">
                <strong>{t('terms.acknowledgement')}</strong>
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
              {t('terms.haveQuestions')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('terms.questionsDesc')}
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              {t('common.contactUs')}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
