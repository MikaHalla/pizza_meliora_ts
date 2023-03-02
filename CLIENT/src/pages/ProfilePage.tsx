import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import OrderHistoryItem from '../components/OrderHistoryItem';

const ProfilePage = () => {
  const [orderHistory, setOrderHistory] = useState<any[]>([]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('sk-sk', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  const fetchOrders = async () => {
    const user = localStorage.getItem('currentUser');

    if (!user) {
      return;
    } else {
      const currentUser = JSON.parse(user);

      const res = await fetch(
        'https://pizza-meliora.cyclic.app/api/orders',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer: ${currentUser.token}`,
          },
        }
      );

      const data = await res.json();

      //format date
      data.map(
        (element: { niceDate: string; updatedAt: string }) =>
          (element.niceDate = formatDate(element.updatedAt))
      );

      setOrderHistory([...data]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <MobileMenu />
      <section className="profile-container">
        <h2>História objednávok</h2>
        <div className="order-history">
          {orderHistory.map((i) => (
            <OrderHistoryItem key={i.createdAt} {...i} />
          ))}
        </div>
        <Link className="back-to-main-page" to="/">
          Späť na hlavnú stránku.
        </Link>
      </section>
    </>
  );
};
export default ProfilePage;
