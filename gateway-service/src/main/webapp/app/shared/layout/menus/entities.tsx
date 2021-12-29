import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Actions" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/tweet">
      Time Line
    </MenuItem>
    <MenuItem icon="asterisk" to="/message">
      Messaging
    </MenuItem>
    <MenuItem icon="asterisk" to="/follow">
      Friends
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
