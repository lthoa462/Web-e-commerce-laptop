import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import freeshipping_4px from "../../../Images/freeshipping_4px.png";
import freeshippingcs_24px from "../../../Images/freeshippingcs_24px.png";
import shield_24px from "../../../Images/shield_24px.png";
import replace_24px from "../../../Images/replace_24px.png";
import checked_32px from "../../../Images/checked_32px.png";
import settings_24px from "../../../Images/settings_24px.png";
import monitor_24px from "../../../Images/monitor_24px.png";
import SanPhamKhac from "../ProductsKeyboard/SanPhamKhac";
import bnphmc from "../../../Images/bnphmc.png";
import bnphmc1 from "../../../Images/bnphmc1.png";
import bnphmc2 from "../../../Images/bnphmc2.png";
import bnphmc3 from "../../../Images/bnphmc3.png";
import prev_50px from "../../../Images/prev_50px.png";
import next_50px from "../../../Images/next_50px.png";
import promotion_32px from "../../../Images/promotion_32px.png";
import insurance_24px from "../../../Images/insurance_24px.png";
import whatsapp_32px from "../../../Images/whatsapp_32px.png";
import edit_property_32px from "../../../Images/edit_property_32px.png";
import settings_32px from "../../../Images/settings_32px.png";
import { NavLink } from "react-router-dom";
import PostsKeyboard from "./PostsKeyboard";

// function renderGoiypro() {
//   useEffect(() => {
//     axios
//       .get("https://localhost:44343/data/Product/type=laptop", null)
//       .then((res) => {
//         console.log(res);
//         setDetail(res.data);
//       })
//       .catch((err) => console.log(err + "Khong goi san pham"));
//   }, []);
// };

export default function DetailProductsKeyboard({ match }) {
  const solver = new Solver();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://localhost:44343/data/product/type=keyboard/${match.match.params.id}`
      )
      .then((res) => {
        // console.log(res);
        setDetail(res.data);
      })
      .catch((err) => console.log(err + "Khong goi san pham"));
  }, []);

  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const slidePro = document.querySelector(".slide-pro");
  const slideItems = document.querySelector(".slide-item");
  const slideItemsW = document.querySelector(".col_2");
  // const slideItemWidth = slideItemsW.offsetWidth;
  // const slideProLength = slidePro.length;
  // console.log("mnmnmn", slideProLength);
  let positionX = 0;
  let index = 0;
  btnNext &&
    btnNext.addEventListener("click", function () {
      changeSlide(1);
    });
  btnPrev &&
    btnPrev.addEventListener("click", function () {
      changeSlide(-1);
    });

  function changeSlide(direction) {
    if (direction === 1) {
      if (index >= 9) {
        index = 9;
        btnNext.style = "visibility: hidden;";
        return;
      }
      positionX = positionX - 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index++;
    } else if (direction === -1) {
      btnNext.style = "visibility: none;";

      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index--;
    }
  }
  return (
    <div className="single-product">
      <div className="container">
        <div className="row">
          {/* {isEmptyObj === false && (
              <> */}
          <div className="ttchung">
            <div className="col-md-15 colors tops">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>{detail.ten}</h1>
              </div>
            </div>
            <div className=" row imagesPro">
              <div className="col-md-6 product-slider imgsl">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                  </ul>
                </div>
                <div id="carousel" className="flexslider bdbt">
                  <ul className="slides ">
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col detail-pro">
                  <p>
                    - ????n: {detail.keyboardDetail && detail.keyboardDetail.den}
                  </p>

                  <p>
                    - M?? t??? ????n:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.motaden}
                  </p>
                  <p>
                    - Ki???u switch:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.typeswitch}
                  </p>
                  <p>
                    - Switch:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.motaswitch}
                  </p>
                  <p>
                    - Layout:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.layout}
                  </p>
                  <p>
                    - K???t n???i:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.ketnoi}
                  </p>

                  <p>
                    - Size:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.size}
                  </p>
                </div>
              </div>
              <div className="col-md-6 colors ttdetail">
                <div className="right-content ">
                  <h4>
                    {detail.ten} {detail.id}
                  </h4>
                  <div className="tt">
                    <div className="thuonghieuL">
                      Th????ng hi???u <a href="#">{detail.thuonghieu}</a>
                      &nbsp;&nbsp; |&nbsp;&nbsp;N??m s???n xu???t: {detail.namsx}
                    </div>
                  </div>
                  <div className="tt-price">
                    {solver.formatCurrency(
                      "vi-VN",
                      "currency",
                      "VND",
                      detail.gia
                    )}{" "}
                  </div>
                  <div className="tt-sales">Qu?? t???ng k??m khi mua h??ng</div>
                  <div className="gift">
                    <div className="">
                      <img src="https://lh3.googleusercontent.com/8TYtx-F0wLPEsufDd-N2y4txkDy3dxxjipjA6k5DjccQhwtdK_6Mx0YPuSUZF3bOEGG5-hP8-MFNReb4X0k=rw"></img>
                      <p>x1 T??i ?????ng laptop</p>
                    </div>
                  </div>
                  <div className="button-gr">
                    <button type="button" className="btn btn-primary btn-buy">
                      MUA NGAY
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-cart"
                    >
                      TH??M V??O GI??? H??NG
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 colors details-rights">
              {/* <div className="ship">
                <img src={freeshipping_4px} />
                <div className="shipfree">S???n ph???m ???????c giao h??ng mi???n ph??</div>
              </div> */}
              <div className="chinhsachbh cskb">
                <p className="font-cs">Ch??nh s??ch b??n h??ng</p>
                {/* <div className="fm">
                  <img src={freeshippingcs_24px} />
                  <div className="detailright-t">
                    Mi???n ph?? giao h??ng cho ????n h??ng t??? 900K
                  </div>
                </div> */}
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">
                    Cam k???t h??ng ch??nh h??ng 100%
                  </div>
                </div>
                <div className="fm">
                  <img src={replace_24px} />
                  <div className="detailright-t">?????i tr??? trong v??ng 7 ng??y</div>
                </div>
              </div>
              <div className="chinhsachbh">
                <p className="font-cs">D???ch v??? kh??c</p>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">B???o h??nh t???i nh??.</div>
                </div>
                <div className="fms">
                  <img src={insurance_24px} />
                  <div className="detailright-t bh12t">
                    B???o h??nh 12 th??ng ch??nh h??ng {detail.thuonghieu}
                  </div>
                </div>
                <a href="#">Xem chi ti???t</a>
              </div>
              <div class="promotion">
                <p>
                  <img src={promotion_32px} />
                  Khuy???n m??i, ??u ????i kh??c
                </p>
                <div class="promotion-tt">
                  <span>
                    <a>Gi???m 15%</a> khi mua th??m ph??? ki???n (tr??? ph??? ki???n Apple)
                  </span>
                  <span>
                    <br />
                    <br />
                    Mua ph???n m???m Microsoft Office 365 Personal ch???{" "}
                    <a>990.000??</a> (Gi?? mua l??? 1.290.000??)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bt-if colors">
            <div className="col-sm-8 info-detail thongso-mt">
              <div className="line-if">
                <img src={edit_property_32px} />
              </div>
              <p>M?? t??? s???n ph???m</p>
              <div className="mt-pro">
                <span>??ang c???p nh???t</span>
                {/* <img
                  src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                /> */}
              </div>
            </div>

            <div className="col-sm-4 tb-ifdetail">
              <div className=" thongso-mt">
                <div className="line-if ">
                  <img src={settings_32px} />
                </div>
                <p>Th??ng s??? k??? thu???t</p>
              </div>
              <table class="table table-striped tb-if">
                <tbody className="fn-ttif">
                  <tr>
                    <th className="row tt-if">Th????ng hi???u</th>
                    <td>{detail.thuonghieu}</td>
                  </tr>
                  <tr>
                    <th className="row">B???o h??nh</th>
                    <td>{detail.baohanh}&nbsp;n??m</td>
                  </tr>
                  <tr>
                    <th className="row">Th??ng tin chung</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">M??u s???c</th>
                    <td>{detail.mau}</td>
                  </tr>
                  <tr>
                    <th className="row">M?? s???n ph???m</th>
                    <td>{detail.id}</td>
                  </tr>
                  <tr>
                    <th className="row">C???u h??nh chi ti???t</th>
                  </tr>
                  <tr>
                    <th className="row">k???t n???i</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.ketnoi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">????n</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.den}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Lo???i ????n</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.motaden}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.typeswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Nh??n hi???u Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.brandswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">M?? t??? Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.motaswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Layout</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.layout}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">K??ch th?????c</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.size}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-spkhac">
            <div className="xemthem">S???n ph???m kh??c</div>
            <div className="prev-next">
              <span
                className="btn-prev btnnp"
                id="btn-prevs"
                // onClick={changeSlide(-1)}
              >
                <img src={prev_50px} />
              </span>
              <span
                className="btn-next btnnp"
                id="btn-nexts"
                // onClick={changeSlide(1)}
              >
                <img src={next_50px} />
              </span>
            </div>
            <div className="row_10">
              <div className="slide-pro" id="pro-s">
                <SanPhamKhac />
              </div>
            </div>
            <PostsKeyboard />
          </div>
          <div className="info-bottom row">
            <div className="col-md-6 supports">
              <div className="info-title">
                <img src={whatsapp_32px} />
                <p>H??? tr???</p>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>G???i t?? v???n m??y - ph??? ki???n</p>
                      <span>(08:30 ??? 21:30)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>Khi???u n???i - G??p ??</p>
                      <span>(08:30 ??? 21:30)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>B???o h??nh - H??? tr??? k??? thu???t</p>
                      <span>(09:00 ??? 21:00)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>G???i mua h??ng t??? xa</p>
                      <span>(09:00 ??? 21:00)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 addressm">
              <iframe
                className="bando"
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3918.2315764536306!2d106.5962233!3d10.8699833!3m2!1i1024!2i768!4f13.1!2m1!1zMTUvMSDhuqRwIENow6FuaCAyLCB4w6MgVMOibiBYdcOibiwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1636881359200!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
