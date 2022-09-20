import Dashboard from './Dashboard';

const PrivateOutlet = () => {
  const user = true;
  return user ? <Dashboard /> : <div>Access Denied</div>;
};

export default PrivateOutlet;
