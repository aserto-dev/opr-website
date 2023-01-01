import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
const Svg = require('../../static/img/Lottie-200.svg').default;
import FlexBanner from 'flex-banner';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Svg className={styles.heroSvg} alt={siteConfig.title} />
        <br/>
        <center>
        <p className={clsx('hero__subtitle', styles.bodyText)}>
          ⭐️ &nbsp;<Link to="https://www.openpolicycontainers.com">Open Policy Containers</Link>&nbsp;
          is now a CNCF sandbox project! ⭐️
          <br />
          <br />
          With many OCI registry options available, Open Policy Registry is being retired on Jan 31 2023.&nbsp;
          <Link to="/blog/goodbye-open-policy-registry-hello-open-policy-containers">Read more</Link>&nbsp;
          on how to migrate.
        </p>
        </center>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <FlexBanner
        title="Open Policy Registry is being retired on Jan 31, 2023"
        ctaLink="https://openpolicyregistry.io/blog/goodbye-open-policy-registry-hello-open-policy-containers"
        animationTime={0}
        delayToShowBanner={0}
        isCenter={true}
        crossIconSize={20}
        wrapperStyle={{ backgroundColor: '#215E60' }}
        mainStyleTitle={{ textDecoration: "underline", fontSize: "1.2rem" }}
      />
      <Layout
        title={`Welcome to ${siteConfig.title}`}
        description="A free registry for Open Policy Containers">
        <HomepageHeader />
      </Layout>
    </>
  );
}
