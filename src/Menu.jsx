import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Menu() {
  return (
    <Layout>
      <h1>Menu</h1>
      <nav>
        <Link to="/group">Group</Link>
      </nav>
    </Layout>
  );
}
