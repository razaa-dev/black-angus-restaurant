export const metadata = {
  title: 'Offline - Black Angus Restaurant',
  description: 'Vous êtes actuellement hors ligne',
};

export default function Offline() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#ed1d23',
      }}>
        Vous êtes hors ligne
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        maxWidth: '600px',
        marginBottom: '2rem',
      }}>
        Il semble que vous n&apos;ayez pas de connexion Internet.
        Certaines fonctionnalités peuvent être limitées.
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#999',
      }}>
        Veuillez vérifier votre connexion et réessayer.
      </p>
    </div>
  );
}
