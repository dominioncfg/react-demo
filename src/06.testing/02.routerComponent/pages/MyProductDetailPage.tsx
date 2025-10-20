import { useNavigate, useParams } from 'react-router';

export const MyProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Product Overview</h2>
        <p>Welcome to the product overview page.</p>
        <p>Product ID: {productId}</p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      </div>
    </div>
  );
};
