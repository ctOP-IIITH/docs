import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Update these SVG imports with relevant illustrations for your guide
const VindhyaSvg = require('@site/static/img/undraw_docusaurus_mountain.svg').default;
const AdvisorSvg = require('@site/static/img/undraw_docusaurus_tree.svg').default;
const ResearchSvg = require('@site/static/img/undraw_docusaurus_react.svg').default;

const FeatureList = [
  {
    title: 'oneM2M Standards',
    Svg: VindhyaSvg,
    description: (
      <>
        Based on the oneM2M standards, our platform provides a set of tools to help you manage your IOT devices and data in a secure and scalable way.
      </>
    ),
  },
  {
    title: 'For Smart Cities',
    Svg: AdvisorSvg,
    description: (
      <>
        Our platform is designed to provide a oneM2M compliant interoperable platform for smart cities. It is a one-stop solution for all your IOT needs.
      </>
    ),
  },
  {
    title: 'Research and Development',
    Svg: ResearchSvg,
    description: (
      <>
        Our platform is the result of years of research and development in the field of IOT and smart cities. It is designed to be scalable, secure, and easy to use.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

