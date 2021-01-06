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

        <title>Ricardo For 204</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto&display=swap" rel="stylesheet"/>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script src="/scripts/index.js"></script>

      </Head>

      <nav>

        <ul>

          <li><a href="#about">About Me</a></li>
          <li><a href="#issues">Why I'm Running</a></li>
          <li><a href="#how-to-help">How To Help</a></li>

        </ul>

      </nav>

      <header id="intro">

        <div id="intro-content">

          <IntroContent />

          <a id="scroller" href="#about"><span></span></a>

        </div>

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
