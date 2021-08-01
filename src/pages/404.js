import React from 'react';
import Seo from 'components/seo';
import ErrorSec from 'containers/Error';
import { ResetCSS } from 'common/assets/css/style';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <ResetCSS />
    <ErrorSec></ErrorSec>
  </>
);

export default NotFoundPage;
