import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated: February 13, 2025</strong>
        </p>

        <section>
          <h2>1. Data Collected</h2>
          <p>The bot may collect the following information:</p>
          <ul>
            <li>
              <strong>User Data:</strong> User ID, user game statistics
            </li>
            <li>
              <strong>Server Data:</strong> Guild ID, guild game statistics
            </li>
            <li>
              <strong>Message Data:</strong> All messages containing the bot's
              name or ID can be viewed by the development team, including
              messages sent in direct messages (DMs).
            </li>
          </ul>

          <h2>2. How We Use Data</h2>
          <p>The collected data may be used to:</p>
          <ul>
            <li>Improve user experience and bot functionality</li>
            <li>Analyze gameplay statistics and server interactions</li>
            <li>Ensure proper bot operation and security</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell, rent, or share user data with third parties, except
            when required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement security measures to protect user data from
            unauthorized access, alteration, or disclosure.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            The bot may contain links to third-party services, which have their
            own privacy policies. We are not responsible for their content or
            data practices.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            The bot is not intended for users under the age of 13. If you are
            under 13, do not use this bot.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            posted on this page.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
