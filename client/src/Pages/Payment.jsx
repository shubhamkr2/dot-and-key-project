import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../Styles/Payment.module.css";
import { getAddressById } from "../Redux/actions/shipment.action";
import { useDispatch, useSelector } from "react-redux";
import { OtpModal } from "../Components/OtpModal";
import toast, { Toaster } from "react-hot-toast";
import { getSingleProduct } from "../Redux/actions/product.action";
import { deleteAllFromCart, getCartItems } from "../Redux/actions/cart.action";
import { addOrders } from "../Redux/actions/order.action";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../Components/NavigationBar";
import { Footer } from "../Components/Footer";

function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const amount = searchParams.get("amount");
  const address = searchParams.get("address");
  const [otpSubmitLoading, setOtpSubmitLoading] = useState(false);
  const [cardName, setCardName] = useState("Name");
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [exMonth, setExMonth] = useState("MM");
  const [exYear, setExYear] = useState("YY");
  const [cvv, setCvv] = useState("___");
  const { addresses } = useSelector((state) => state.shipment);
  const { name, area, city, flat, landmark, number, pincode, state } =
    addresses.data || {};
  const [modal, setModal] = useState(false);
  const { single_product_data } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const token = localStorage.getItem("token") || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAddressById(token, address)); // Fetch the selected address using the address ID
    if (id !== "null" && id !== null) {
      dispatch(getSingleProduct(id)); // Fetch the single product if an ID is provided
    } else {
      dispatch(getCartItems(token)); // Fetch the cart items if no ID is provided
    }
  }, []);

  function handleModal() {
    setModal(!modal); // Toggle the modal state
  }

  function handlePay(e) {
    e.preventDefault();
    setModal(!modal); // Toggle the modal state when the form is submitted
  }

  async function finalSubmit() {
    if (id !== "null" && id !== null) {
      // If a single product ID is provided
      let order = {
        products: [single_product_data.data],
        address: { ...addresses.data } || {},
        totalamt: amount,
      };
      await dispatch(addOrders(order, token)); // Add the order to the user's orders
      console.log(order);
      setTimeout(() => {
        setOtpSubmitLoading(false);
        setModal(!modal);
        navigate("/"); // Redirect to the homepage
      }, 2500);
      return;
    }
    // If cart items are present
    let order = {
      products: [...cartItems.data],
      address: { ...addresses.data } || {},
      totalamt: amount,
    };
    await dispatch(addOrders(order, token)); // Add the order to the user's orders
    dispatch(deleteAllFromCart(token)); // Delete all items from the cart
    setTimeout(() => {
      setOtpSubmitLoading(false);
      setModal(!modal);
      navigate("/"); // Redirect to the homepage
    }, 2500);
  }

  return (
    <div className={styles.container}>
      <NavigationBar />
      <Toaster />
      <div className={styles.default_address}>
        <h3>Selected Address</h3>
        {addresses && addresses.data ? (
          <div>
            <strong>Name: {addresses.data[0].name}</strong>
            <span>
              <strong>Address: </strong> {addresses.data[0].flat},{" "}
              {addresses.data[0].area}, {addresses.data[0].landmark},{" "}
              {addresses.data[0].city} {addresses.data[0].state},{" "}
              {addresses.data[0].pincode}
            </span>
            <strong> Mob: +91 {addresses.data[0].number}</strong>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.payment_container}>
        <div className={styles.address_and_card}>
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
                  <div className={styles.layout_name}>{cardName}</div>
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

        {/* Input form for payment details */}
        <div className={styles.form_container}>
          <h3>Payment Details</h3>
          <br />
          <form className={styles.form} onSubmit={(e) => handlePay(e)}>
            <label>CARDHOLDER NAME</label>
            <input
              className={styles.name}
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setCardName(e.target.value)}
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
      {modal ? (
        <OtpModal
          handleModal={handleModal}
          toast={toast}
          finalSubmit={finalSubmit}
          otpSubmitLoading={otpSubmitLoading}
          setOtpSubmitLoading={setOtpSubmitLoading}
        />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
export { Payment };