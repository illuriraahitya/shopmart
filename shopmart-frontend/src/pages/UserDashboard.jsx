import React from 'react';

const UserDashboard = ({ user }) => {
  return (
    <div style={styles.page}>
      <h2>Welcome {user.name}</h2>
      <p>Start shopping and manage your orders!</p>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px', textAlign: 'center'
  }
};

export default UserDashboard;
