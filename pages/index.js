import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { react as IntroContent } from '../content/intro.md';
import { react as AboutContent } from '../content/about.md';
import { react as IssuesContent } from '../content/issues.md';
import { react as HowToHelpContent } from '../content/how-to-help.md';
import { react as FooterContent } from '../content/footer.md';

export default function Home() {

  return (

    <>

      <Head>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BDRRKBR1R7"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-BDRRKBR1R7');
              `,
          }}
        />

        <title>Ricardo Martinez For District 204</title>

        <meta name="description" content="I'm running for District 204 School Board because I want to be a strong voice for equity in achievement and advocate for access to opportunity."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/> 
        <meta property="og:title" content="Ricardo Martinez For District 204"/>
        <meta property="og:description" content="I'm running for District 204 School Board because I want to be a strong voice for equity in achievement and advocate for access to opportunity."/>
        <meta property="og:url" content="https://ricardofor204.com/"/>
        <meta property="og:image" content="https://ricardofor204.com/img/endorsement.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:site_name" content="Ricardo Martinez For District 204"/>
        <meta name="twitter:image:alt" content="I'm running for District 204 School Board because I want to be a strong voice for equity in achievement and advocate for access to opportunity."/>
        <meta property="fb:app_id" content="app id goes here"/>
        <meta name="twitter:site" content="@board_LT"/>

        <link rel="icon" href="/img/favicon/favicon-32.png" sizes="32x32"/>
        <link rel="icon" href="/img/favicon/favicon-57.png" sizes="57x57"/>
        <link rel="icon" href="/img/favicon/favicon-76.png" sizes="76x76"/>
        <link rel="icon" href="/img/favicon/favicon-96.png" sizes="96x96"/>
        <link rel="icon" href="/img/favicon/favicon-128.png" sizes="128x128"/>
        <link rel="icon" href="/img/favicon/favicon-192.png" sizes="192x192"/>
        <link rel="icon" href="/img/favicon/favicon-228.png" sizes="228x228"/>
        <link rel="shortcut icon" href="/img/favicon/favicon-196.png" sizes="196x196"/>
        <link rel="apple-touch-icon" href="/img/favicon/favicon-120.png" sizes="120x120"/>
        <link rel="apple-touch-icon" href="/img/favicon/favicon-152.png" sizes="152x152"/>
        <link rel="apple-touch-icon" href="/img/favicon/favicon-180.png" sizes="180x180"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto&display=swap" rel="stylesheet"/>

        <script src="/scripts/index.js"></script>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

      <nav id="navigation" className="top">

        <a id="navigation-logo" href="#"><img src="/img/logo/RM-logo-icon-main-square.svg" alt="Ricardo Martinez" height="48" width="48"/></a>
        <input className="hamburger-button" type="checkbox" id="hamburger-button" />
        <label className="hamburger" htmlFor="hamburger-button"><span className="hamburger-icon"></span></label>

        <ul className="menu">

          <li><a href="#about">About Me</a></li>
          <li><a href="#issues">Why I'm Running</a></li>
          <li><a href="#how-to-help">How To Help</a></li>

        </ul>

      </nav>

      <header id="intro">

        <div id="intro-content">

          <IntroContent />

        </div>

        <a id="scroller" href="#about"><span></span></a>

      </header>

      <main>

        <section id="about">

          <div className="container">

            <AboutContent />

          </div>

        </section>

        <section id="issues">

           <IssuesContent />

        </section>

        <section id="how-to-help">

            <HowToHelpContent />

        </section>

      </main>

      <footer id="footer">

        <FooterContent />

      </footer>

      {/*<Footer />*/}

    </>

  )
}
