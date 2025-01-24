import React from 'react';
import doctorimage from '../../assets/Images/DoctorImage2.png'
const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to <span style={styles.subtitle}>Care Memmo</span>
      </h1>
      <div style={styles.imageContainer}>
        <img
          src={doctorimage} // Replace with the correct path to the uploaded image
          alt="Care Memmo Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #912d5e, #e5a5c2)',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#b3003b',
    fontSize: '2.5rem',
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    width: '400px', // Adjust as needed
    borderRadius: '8px',
  },
};

export default LandingPage;