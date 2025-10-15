import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>404</div>
            <p style={styles.message}>
                Oops! The page you're looking for does not exist.
            </p>
            <Link to='/' style={styles.link}>
                ← Go Back To Home
            </Link>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        color: '#fff'
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px'
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px'
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }
}

export default NotFoundPage;