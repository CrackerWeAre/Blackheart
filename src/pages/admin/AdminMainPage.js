import React from 'react';
import { AdminContentArea } from 'components/common/AdminContentArea';
import { AdminHeadingArea } from 'components/common/AdminHeadingArea';
import styled from 'styled-components';

const TitleArea = styled.div`
  width: 100%;
  font-family: '맑은 고딕', 'Malgun Gothic', 'Dotum', '돋움', 'arial', 'verdana',
    sans-serif;

  strong {
    font-weight: bolder;
  }

  .mTitle2 {
    position: relative;
    margin: 0 25px 10px 20px;
  }

  .mTitle2 h2 {
    display: inline-block;
    height: 22px;
    padding: 0 5px 0 0;
    font-size: 16px;
    line-height: 18px;
    color: #2e3039;
    font-weight: normal;
    vertical-align: middle;
  }

  .mTitle2 span.desc {
    font-size: 14px;
    color: #969daa;
  }

  .mDashSales {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -ms-flex;
    display: -moz-flex;
    display: flex;
    background: #fff;
    border-radius: 2px;
    margin: 0 0 0 20px;
    -webkit-box-shadow: 0 2px 1px 0 rgba(205, 211, 222, 1);
    -moz-box-shadow: 0 2px 1px 0 rgba(205, 211, 222, 1);
    box-shadow: 0 2px 1px 0 rgba(205, 211, 222, 1);
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
  }

  .mDashSales .item {
    position: relative;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    height: 147px;
    padding: 42px 40px 45px 180px;
    color: #2e3039;
    box-sizing: border-box;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }

  .mDashSales .item .title {
    font-size: 16px;
  }

  .mDashSales .item .title .count {
    font-size: 13px;
    color: #97989b;
    font-weight: normal;
  }

  .mDashSales .item .data {
    display: block;
    margin: 10px 0 0;
    line-height: 1;
  }

  .mDashSales .item .data .value {
    font-size: 28px;
  }

  .mDashSales .item .data .unit {
    font-size: 18px;
  }

  .mDashSales .item:before {
    content: '';
    position: absolute;
    top: 37px;
    left: 70px;
    display: block;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #c9cfe0;
    background-image: url(//img.echosting.cafe24.com/ec/mode/influencer/common/sfix_dashboard_sales.png);
    background-repeat: no-repeat;
  }

  .mDashSales .item.payment:before {
    background-position: -72px 0;
  }
  
  .mDashSales .item.refund:before {
    background-position: -144px 0;
  }
  .mDashSales .item:hover:before {
    background-color:#55a0ff;

  }
  .mDashSales .item.refund:hover:before {
      background-color:#ff6158;
  }
  .mDashSales .item:hover,
  .mDashSales .item:hover .count {
    color: #55a0ff;
  }
  .mDashSales .item.refund:hover,
  .mDashSales .item.refund:hover .count {
    color: #ff6158;
  }
  .mDashSales .item:not(:last-child):after{
    content: "";
    position: absolute;
    top: 41px;
    right: 0;
    display: block;
    width: 1px;
    height: 69px;
    background: #ebf0f5;
  }
`;

const AdminDashboardPage = () => {
  return (
    <AdminContentArea>
      <AdminHeadingArea title="메인" />
      <TitleArea>
        <div className="mTitle2">
          <h2>매출 현황</h2>
          <span class="desc">(12월 03일 22:10 기준)</span>
        </div>
        <div class="mDashSales">
          <a class="item order">
            <strong class="title">
              주문{' '}
              <span id="orderCount" class="count">
                (0건)
              </span>
            </strong>
            <span class="data">
              <strong id="orderPrice" class="value">
                0
              </strong>
              <span class="unit">원</span>
            </span>
          </a>
          <a class="item payment">
            <strong class="title">
              결제{' '}
              <span id="payedCount" class="count">
                (0건)
              </span>
            </strong>
            <span class="data">
              <strong id="payedPrice" class="value">
                0
              </strong>
              <span class="unit">원</span>
            </span>
          </a>
          <a class="item refund">
            <strong class="title">
              환불{' '}
              <span id="refundCount" class="count">
                (0건)
              </span>
            </strong>
            <span class="data">
              <strong id="refundPrice" class="value">
                0
              </strong>
              <span class="unit">원</span>
            </span>
          </a>
        </div>
      </TitleArea>

      <div className="mDashSales"></div>
    </AdminContentArea>
  );
};

export default AdminDashboardPage;
