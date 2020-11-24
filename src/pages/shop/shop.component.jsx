import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollecionsOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollecionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;