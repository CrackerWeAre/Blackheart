import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';


const AdminOrderDelivery = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="주문관리" subTitle="배송 관리" />
    </AdminContentArea>
  );
};

export default AdminOrderDelivery;
