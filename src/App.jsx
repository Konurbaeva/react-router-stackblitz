import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">invoices</Link> |{' '}
        <Link to="/expenses">expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
