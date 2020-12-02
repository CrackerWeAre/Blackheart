import styled from 'styled-components';

const HeadingArea = styled.div`
  position: relative;
  margin: 40px 0 20px;
  width: 100%;

  .mTitle {
    position: relative;
    margin: 0 25px 0;
  }

  .mBreadcrumb {
    position: absolute;
    right: 0px;
    top: -30px;
    left: 0;
  }

  h1 {
    color: #2e3039;
    position: relative;
    display: inline-block;
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
    vertical-align: middle;
  }

  li {
    position: relative;
    display: inline-block;
    margin: 0 6px 0 0;
    color: #969daa;
    font-size: 13px;
    line-height: 19px;
    list-style: none;
  }

  li:not(:first-child):before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: -2px 10px 0 0;
    vertical-align: middle;
    border: solid #a3a9b5;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export const AdminHeadingArea = ({ title, subTitle }) => {
  return (
    <HeadingArea>
      <div className="mTitle">
        <h1>{subTitle}</h1>
        <div className="mBreadcrumb">
          <ol>
            <li>홈</li>
            <li>{title}</li>
            <li>{subTitle}</li>
          </ol>
        </div>
      </div>
    </HeadingArea>
  );
};
