import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';

const AdminBoardDiscover = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="게시판관리" subTitle="게시판 관리" />
    </AdminContentArea>
  );
};

export default AdminBoardDiscover;
