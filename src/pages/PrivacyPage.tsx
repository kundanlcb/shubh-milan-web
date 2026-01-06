import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const PrivacyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('privacy.lastUpdated')}
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
                {t('privacy.intro')}
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section1Title')}</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900">{t('privacy.personalInfo')}</h3>
                  <p>{t('privacy.personalInfoDesc')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.personalInfoItem1')}</li>
                    <li>{t('privacy.personalInfoItem2')}</li>
                    <li>{t('privacy.personalInfoItem3')}</li>
                    <li>{t('privacy.personalInfoItem4')}</li>
                    <li>{t('privacy.personalInfoItem5')}</li>
                    <li>{t('privacy.personalInfoItem6')}</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">{t('privacy.autoCollected')}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.autoCollectedItem1')}</li>
                    <li>{t('privacy.autoCollectedItem2')}</li>
                    <li>{t('privacy.autoCollectedItem3')}</li>
                    <li>{t('privacy.autoCollectedItem4')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section2Title')}</h2>
                <div className="text-gray-600 space-y-2">
                  <p>{t('privacy.section2Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.section2Item1')}</li>
                    <li>{t('privacy.section2Item2')}</li>
                    <li>{t('privacy.section2Item3')}</li>
                    <li>{t('privacy.section2Item4')}</li>
                    <li>{t('privacy.section2Item5')}</li>
                    <li>{t('privacy.section2Item6')}</li>
                    <li>{t('privacy.section2Item7')}</li>
                    <li>{t('privacy.section2Item8')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section3Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('privacy.section3Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>{t('privacy.section3Item1Label')}</strong> {t('privacy.section3Item1Desc')}</li>
                    <li><strong>{t('privacy.section3Item2Label')}</strong> {t('privacy.section3Item2Desc')}</li>
                    <li><strong>{t('privacy.section3Item3Label')}</strong> {t('privacy.section3Item3Desc')}</li>
                    <li><strong>{t('privacy.section3Item4Label')}</strong> {t('privacy.section3Item4Desc')}</li>
                    <li><strong>{t('privacy.section3Item5Label')}</strong> {t('privacy.section3Item5Desc')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section4Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('privacy.section4Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.section4Item1')}</li>
                    <li>{t('privacy.section4Item2')}</li>
                    <li>{t('privacy.section4Item3')}</li>
                    <li>{t('privacy.section4Item4')}</li>
                    <li>{t('privacy.section4Item5')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section5Title')}</h2>
                <div className="text-gray-600 space-y-4">
                  <p>{t('privacy.section5Intro')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.section5Item1')}</li>
                    <li>{t('privacy.section5Item2')}</li>
                    <li>{t('privacy.section5Item3')}</li>
                    <li>{t('privacy.section5Item4')}</li>
                    <li>{t('privacy.section5Item5')}</li>
                    <li>{t('privacy.section5Item6')}</li>
                    <li>{t('privacy.section5Item7')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section6Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('privacy.section6Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section7Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('privacy.section7Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section8Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('privacy.section8Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section9Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('privacy.section9Desc')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.section10Title')}</h2>
                <div className="text-gray-600">
                  <p>{t('privacy.section10Intro')}</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>{t('common.email')}:</strong> privacy@dilkor.com</li>
                    <li><strong>{t('common.phone')}:</strong> +91 1234567890</li>
                    <li><strong>{t('common.address')}:</strong> Dilkor, Mumbai, India</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('privacy.questionsAboutPrivacy')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('privacy.questionsDesc')}
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
