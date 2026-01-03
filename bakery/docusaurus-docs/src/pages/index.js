import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Disabled default features

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-manual">
            📖 View User Manual
          </Link>
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button--secondary button--lg"
            to="http://localhost:6006">
            🎨 Go to Storybook
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Technical and User Documentation for Bakery++">
      <HomepageHeader />
      <main>
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2>About the Project</h2>
          <p>
            Bakery++ is an e-commerce platform specialized in artisanal bakery products.
            This documentation covers both the user manual and the technical architecture of the system.
          </p>
        </div>
      </main>
    </Layout>
  );
}
