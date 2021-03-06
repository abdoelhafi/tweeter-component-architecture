import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './follow.reducer';
import { IFollow } from 'app/shared/model/socialGraph/follow.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const Follow = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const followList = useAppSelector(state => state.follow.entities);
  const loading = useAppSelector(state => state.follow.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="follow-heading" data-cy="FollowHeading">
        Follows
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Follow
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {followList && followList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>User</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {followList.map((follow, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${follow.id}`} color="link" size="sm">
                      {follow.id}
                    </Button>
                  </td>
                  <td>{follow.status}</td>
                  <td>{follow.follow ? follow.follow.login : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                    
                      <Button tag={Link} to={`${match.url}/${follow.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Change Status</span>
                      </Button>
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Follows found</div>
        )}
      </div>
    </div>
  );
};

export default Follow;
