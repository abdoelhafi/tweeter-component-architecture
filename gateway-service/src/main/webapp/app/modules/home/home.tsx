import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad"/>
      <Col md="9">
        <h2>Welcome to Twitter!</h2>
        <p className="lead">This is your homepage</p>
      </Col>
    </Row>
  );
};

export default Home;
