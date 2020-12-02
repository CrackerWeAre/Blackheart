import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';
import { BackgroundWrapper } from 'components/common/BackgroundWrapper';
import TableFullWidth from 'containers/admin/user/TableFullWidth';

const AdminDashboardPage = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="회원관리" subTitle="회원정보 조회" />
      {/* <BackgroundWrapper>
              <AdminFilter />
            </BackgroundWrapper> */}

      <BackgroundWrapper>
        <TableFullWidth className="tableFullWidth" />
      </BackgroundWrapper>
    </AdminContentArea>
  );
};

export default AdminDashboardPage;
