import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "../Styles/Payment.module.css";
import { getAddressById } from "../Redux/actions/shipment.action";
import { useDispatch, useSelector } from "react-redux";

function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount");
  const address = searchParams.get("address");
  // const { id } = useParams();
  const [name, setName] = useState("Name");
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [exMonth, setExMonth] = useState("MM");
  const [exYear, setExYear] = useState("YY");
  const [cvv, setCvv] = useState("___");
  const token = localStorage.getItem("token") || [];
  const { addresses, loading } = useSelector((state) => state.shipment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddressById(token, address));
  }, []);

  console.log(addresses?.data)
  return (
    <div className={styles.payment_container}>
      <div className={styles.address_and_card}>
        <div className={styles.default_address}>
          <h3>Selected Address</h3>
          {addresses && addresses.data ? (
            <div>
              <strong>Name: {addresses.data[0].name}</strong>
              <span>
                <strong>Address: </strong> {addresses.data[0].flat}, {addresses.data[0].area}, {addresses.data[0].landmark}, {addresses.data[0].city} {addresses.data[0].state}, {addresses.data[0].pincode}
              </span>
              <strong> Mob: +91 {addresses.data[0].number}</strong>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_layout}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
              alt="visa logo"
            />
            <img
              className={styles.chip}
              src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
            />
            <span className={styles.layout_number}>{cardNumber}</span>
            <div className={styles.layout_validity_cvc_box}>
              <div>
                <div>CARD HOLDER</div>
                <div className={styles.layout_name}>{name}</div>
              </div>
              <div>
                <div>EXPIRES</div>
                <div className={styles.layout_expires}>
                  <div className={styles.month}>{exMonth} </div>/
                  <div className="year"> {exYear}</div>
                </div>
              </div>
              <div>
                <div>CVC</div>
                <div className={styles.layout_cvc}>{cvv}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--input form --> */}
      <div className={styles.form_container}>
        <h3>Payment Details</h3>
        <br />
        <form className={styles.form}>
          <label>CARDHOLDER NAME</label>
          <input
            className={styles.name}
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>CARD NUMBER</label>
          <input
            className={styles.number}
            type="text"
            placeholder="Card Number"
            maxlength="16"
            required
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <br />
          <br />
          <div className={styles.validity_cvc_box}>
            <div>
              <label>EXPIRY MONTH</label>
              <input
                className={styles.expiry_month}
                type="text"
                placeholder="mm"
                maxlength="2"
                required
                onChange={(e) => setExMonth(e.target.value)}
              />
            </div>
            <div>
              <label>EXPIRY YEAR</label>
              <input
                className={styles.expiry_year}
                type="text"
                placeholder="yyyy"
                maxlength="4"
                required
                onChange={(e) => setExYear(e.target.value)}
              />
            </div>
            <div>
              <label>CVC</label>
              <input
                className={styles.cvc}
                type="text"
                placeholder="CVC"
                maxlength="3"
                required
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.payment_amt}>
            <span>Payment amount: </span>
            <span className={styles.amt}>Rs: {amount}</span>
          </div>
          <div className={styles.pay_btn}>
            <button>Pay {amount}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Payment };
