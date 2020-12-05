import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';

const AdminOrderDiscover = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="주문관리" subTitle="전체 주문 조회" />
    </AdminContentArea>
  );
};

export default AdminOrderDiscover;
