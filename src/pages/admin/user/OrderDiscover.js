import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';

const AdminUserOrderDiscover = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="회원관리" subTitle="주문회원 조회" />
    </AdminContentArea>
  );
};

export default AdminUserOrderDiscover;
