import React from 'react';

import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';


export default () =>  (
      <div>
        <PrivateHeader title= 'Short Lnk'/>

        <div className="page-content">
          <LinksListFilters/>
          <AddLink/>
          <LinksList/>
        </div>

      </div>
    );


