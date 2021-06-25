import React from 'react';
import './main-styles/Page.css';
const Page: React.FC = ({ children }) => {
  return <section className="page">{children}</section>;
};

export default Page;
