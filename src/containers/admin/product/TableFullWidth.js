import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { productDiscoverAPI } from 'lib/api/admin/Product';
import { Image, Table, Checkbox } from 'semantic-ui-react';
import { StyledPagination } from 'components/common/StyledPagination';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px !important;
  font-size: 11px;

  table {
    text-align: center !important;
  }

  img {
    max-width: 100% !important;
  }
`;

const TableFullWidth = () => {
  const [page, setPage] = useState(1);
  const [maxResult, setMaxResult] = useState(15);
  const [totalPage, setTotalPage] = useState(5);

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePaginationChange = (page) => {
    setPage(page);
  };

  const PaginationShorthand = () => (
    <StyledPagination
      activePage={page}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={totalPage}
      onPageChange={(e) =>
        handlePaginationChange(e.target.getAttribute('value'))
      }
    />
  );

  const fetchProducts = async () => {
    try {
      setError(null);
      setProducts(null);
      setLoading(true);
      const response = await productDiscoverAPI({ page, maxResult });
      setTotalPage(response.data.lastPage);
      setProducts(response.data.result);
      console.log(products);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!products) return null;

  return (
    <Wrapper>
      <Table className="table" celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>pID</Table.HeaderCell>
            <Table.HeaderCell>상품이미지</Table.HeaderCell>
            <Table.HeaderCell>상품명</Table.HeaderCell>
            <Table.HeaderCell>카테고리</Table.HeaderCell>
            <Table.HeaderCell>재고</Table.HeaderCell>
            <Table.HeaderCell>가격</Table.HeaderCell>
            <Table.HeaderCell>진열여부</Table.HeaderCell>
            <Table.HeaderCell>품절여부</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {products.map((product) => (
          <Table.Body key={product.pID}>
            <Table.Row>
              <Table.Cell>
                <Checkbox></Checkbox>
              </Table.Cell>
              <Table.Cell>{product.pID}</Table.Cell>
              <Table.Cell>
                <Image
                  src={product.pMainImage}
                  as="a"
                  size="mini"
                  href=""
                  target="_blank"
                  onClick={() => {
                    window.open(
                      product.pMainImage,
                      'Popup',
                      'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=500, height=500, top=200, left=600',
                    );
                  }}
                />
              </Table.Cell>
              <Table.Cell>{product.pName}</Table.Cell>
              <Table.Cell>
                {product.pCategory1} &gt; {product.pCategory2}
              </Table.Cell>
              <Table.Cell>{product.pStock}</Table.Cell>
              <Table.Cell>
                {product.pDiscount
                  ? (1 - product.pDiscount / 100) * product.pPrice
                  : product.pPrice}
              </Table.Cell>
              <Table.Cell>
                <Checkbox
                  checked={product.pDisplay === 1 ? true : false}
                ></Checkbox>
              </Table.Cell>
              <Table.Cell>
                <Checkbox
                  checked={product.pSoldout === 1 ? true : false}
                ></Checkbox>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>

      <PaginationShorthand />
    </Wrapper>
  );
};

export default TableFullWidth;
