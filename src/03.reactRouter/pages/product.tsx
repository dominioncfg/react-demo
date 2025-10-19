import { useNavigate, useParams } from 'react-router';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const throwError = () => {
    throw new Error('This is a test error!');
  };

  return (
    <div>
      <div>
        <h2>Product Overview</h2>
        <p>Welcome to the dashboard overview page.</p>
        <p>Product ID: {productId}</p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/')}>Go Home</button>
          <button onClick={() => navigate('/dashboard/reports')}>
            Go To Reports
          </button>
          <button onClick={throwError}>Throw Error!</button>
        </div>
      </div>
    </div>
  );
};
