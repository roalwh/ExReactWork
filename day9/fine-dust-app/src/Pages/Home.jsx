import React, { useState } from 'react'

function Home(props) {
  const data = props.data;
  console.log(data);

  return (
    <div className="cont">
      <h1>미세먼지 데이터</h1>
      <h2>{data.totalCount}</h2>
      {
        (data) &&
          data.items.map((item, i) => {
            return (
              <div className="listbox" key={i}>
                <ul>
                  지역 : {item.districtName} {item.moveName}
                  <li>발령일 : {item.dataDate}</li>
                  <li>발령시간 : {item.issueTime}</li>
                  <li>항목명 : {item.itemCode} (PM10,PM25)</li>
                  <li>발령농도 : {item.issueVal} (단위: ㎍/m3)</li>
                  <li>경보단계 : {item.issueGbn}</li>
                </ul>
                <ul>
                  <li>발령일 : {item.dataDate}</li>
                  <li>해제일 : {item.clearDate}</li>
                  <li>해제시간 : {item.clearTime}</li>
                  <li>해제농도 : {item.clearVal} (단위: ㎍/m3)</li>
                  <li>해제일 : {item.clearDate}</li>
                </ul>
              </div>
            )
          })
      }
    </div>


  )
}
export default Home;