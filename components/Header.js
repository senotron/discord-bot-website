export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Bot Logo" className="logo-image" />
        Word Games
      </div>
      <div className="buttons">
        <a href="https://discord.gg/gSRKxKFEk7" className="btn">
          Discord Server
        </a>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1335476856077680670"
          className="btn"
        >
          Invite
        </a>
      </div>
    </header>
  );
}
