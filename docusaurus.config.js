const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Open Policy Registry',
  tagline: 'A free registry for Open Policy Containers',
  url: 'https://openpolicyregistry.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aserto-dev',
  projectName: 'opr-website',

  plugins: [
    ['docusaurus2-dotenv',
      {
          path: "./.env", // The path to your environment variables.
          safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
          systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
          silent: false, //  If true, all warnings will be suppressed
          expand: false, // Allows your variables to be "expanded" for reusability within your .env file
          defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/opcr-io/opcr-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/opcr-io/opcr-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: process.env.REACT_APP_GA_TRACKING_ID || '_',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },    
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: 'dark',
        logo: {
          alt: 'OPR Logo',
          src: 'img/Lottie-200.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.openpolicycontainers.com/docs/cli/download',
            label: 'Get the CLI',
            position: 'left'
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/openpolicyreg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opcr-io',
              },
            ],
          },
        ],
        logo: {
          alt: 'Aserto Logo',
          src: 'Aserto-logo-color-120px.png',
          href: 'https://aserto.com',
        },    
        copyright: `Copyright © ${new Date().getFullYear()} - built with ❤️ by Aserto.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rego'],
      },
      googleAnalytics: {
        trackingID: process.env.REACT_APP_GA_TRACKING_ID || '_',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    }),
});
