import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';
import { BackgroundWrapper } from 'components/common/BackgroundWrapper';
import TableFullWidth from 'containers/admin/product/TableFullWidth';


const AdminProductDiscover = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="상품관리" subTitle="상품 조회" />
      <BackgroundWrapper>
        <TableFullWidth></TableFullWidth>
      </BackgroundWrapper>
    </AdminContentArea>
  );
};

export default AdminProductDiscover;
