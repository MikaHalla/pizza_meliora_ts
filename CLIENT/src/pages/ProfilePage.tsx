import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [orderHistory, setOrderHistory] = useState<any[]>([]);

  const fetchOrders = async () => {
    const user = localStorage.getItem('currentUser');

    if (!user) {
      return;
    } else {
      const currentUser = JSON.parse(user);

      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'GET',
        headers: {
          Authorization: `Bearer: ${currentUser.token}`,
        },
      });

      const data = await res.json();

      setOrderHistory([...data]);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <section>
        {orderHistory.map((i) => (
          <div key={i.createdAt}>
            <h1>{i.createdAt}</h1>
          </div>
        ))}
        <Link to="/">Späť na hlavnú stránku.</Link>
      </section>
    </>
  );
};
export default ProfilePage;
