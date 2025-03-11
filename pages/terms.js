import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main">
        <h1>Terms of Service & Privacy</h1>
        <p>
          Please read our Terms of Service and Privacy Policy carefully before
          using the bot.
        </p>

        <section>
          <h2>Terms of Service</h2>
          <p>
            <strong>Last Updated: February 13, 2025</strong>
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By using this bot, you agree to comply with these Terms of Service
            and our Privacy Policy. If you do not agree, please do not use the
            bot.
          </p>

          <h3>2. Purpose</h3>
          <p>
            This bot provides various interactive features and entertainment
            functionalities for Discord servers.
          </p>

          <h3>3. User Conduct</h3>
          <ul>
            <li>
              Not use the bot for any harmful, abusive, or disruptive behavior.
            </li>
            <li>Not spam or misuse the bot’s features.</li>
            <li>
              Not attempt to exploit, hack, or modify the bot’s functionality.
            </li>
          </ul>

          <h3>4. Account Security</h3>
          <p>
            We take reasonable measures to secure user data. However, you are
            responsible for keeping your account credentials safe.
          </p>

          <h3>5. Modifications</h3>
          <p>
            The bot's features, terms, and services may be updated from time to
            time. Users will be notified of significant changes.
          </p>

          <h3>6. Disclaimer of Liability</h3>
          <p>
            The bot is provided "as is" without any warranties. The use of the
            bot is at your own risk.
          </p>

          <h3>7. Legal Compliance</h3>
          <p>
            These Terms of Service are governed by applicable laws and
            regulations.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
