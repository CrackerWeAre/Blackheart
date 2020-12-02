import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';

const AdminProductDiscover = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="상품관리" subTitle="상품 조회" />
    </AdminContentArea>
  );
};

export default AdminProductDiscover;
