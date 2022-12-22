import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
const Svg = require('../../static/img/Lottie-200.svg').default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Svg className={styles.heroSvg} alt={siteConfig.title} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="/docs/opcr/create-account">
            Create account
          </Link>
        </div>
        <br/>
        <br/>
        <center>
        <p className={clsx('hero__subtitle', styles.bodyText)}>
          Push and pull policy images created using the&nbsp;
          <Link to="https://github.com/opcr-io/policy"><code>policy</code></Link>&nbsp;
          CLI&nbsp;
          from the&nbsp;
          <Link to="https://www.openpolicycontainers.com">Open Policy Containers</Link>&nbsp;
          project.
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
      <Layout
        title={`Welcome to ${siteConfig.title}`}
        description="A free registry for Open Policy Containers">
        <HomepageHeader />
      </Layout>
    </>
  );
}
