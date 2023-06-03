import React, { useEffect, useState } from "react";
import styles from "../Styles/Shipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addAddress, getAddress } from "../Redux/actions/shipment.action";
import { AddressCard } from "../Components/AddressCard";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { NavigationBar } from "../Components/NavigationBar";
import { Footer } from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let initialFormData = {
  name: "",
  number: "",
  flat: "",
  area: "",
  landmark: "",
  pincode: "",
  city: "",
  state: "",
};

function Shipment() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const token = localStorage.getItem("token") || [];
  const { addresses, loading } = useSelector((state) => state.shipment);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount") || 0;
  const items = searchParams.get("items") || 0;
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const toggleSection = () => {
    setExpanded(!expanded);
  };

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(e.target);
  }

  useEffect(() => {
    dispatch(getAddress(token));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(addAddress(formData, token, toast));
    dispatch(getAddress(token));
  }
  function handleProceedToPay() {
    navigate(`/payment?amount=${amount}&items=${items}`);
  }

  function handlePromo() {
    let discountAmt = 0;
    if (promoCode === "GET30") {
      discountAmt = amount * (30 / 100);
      setDiscount(discountAmt);
      toast.success(`Offer applied discounted RS: ${discountAmt}`);
    } else if (promoCode === "GET50") {
      discountAmt = amount * (50 / 100);
      setDiscount(discountAmt);
      toast.success(`Offer applied discounted RS: ${discountAmt}`);
    } else {
      setDiscount(0);
      toast.error("Invalid promo code");
    }
  }
  console.log(searchParams);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <NavigationBar />
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.container}>
        <div className={styles.shipment_container}>
          <Toaster />
          <div className={styles.select_address}>
            <h2>Select a delivery address: </h2>
          </div>
          <div className={styles.address_card_container}>
            {addresses?.data?.map((address, index) => (
              <AddressCard Address={address} key={address._id} />
            ))}
          </div>
          {/* <h1>or add new one</h1> */}
          <div className={styles.form_container}>
            <div onClick={toggleSection} className={styles.add_address}>
              Add a new address
              {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {expanded ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Flat, House no., Building, Company, Apartment</label>
                  <input
                    type="text"
                    name="flat"
                    value={formData.flat}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Area, Street, Sector, Village</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Pincode</label>
                  <input
                    type="number"
                    name="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Town/City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                </div>
                <button>Add address</button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={styles.price}>
          <div className={styles.total_qty}>
            <h2>Total {items} items</h2>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Total price:</span>
            <span className={styles.priceValue}>&#x20B9; {amount}</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Shipping:</span>
            <span className={styles.priceValue}>&#x20B9; 50</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Discount:</span>
            <span className={styles.priceValue}>&#x20B9; {discount}</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalLabel}>Subtotal:</span>
            <span className={styles.totalValue}>
              &#x20B9; {+amount + 50 - discount}
            </span>
          </div>
          <div className={styles.promo_code}>
            <input
              type="text"
              placeholder="Apply Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromo}>Apply</button>
          </div>
          <div className={styles.proceed_btn}>
            <button onClick={handleProceedToPay}>Proceed to buy</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Shipment };
