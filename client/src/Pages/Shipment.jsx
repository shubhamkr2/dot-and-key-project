import React, { useEffect, useState } from "react";
import styles from "../Styles/Shipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  addAddress,
  getAddress,
  removeAddress,
} from "../Redux/actions/shipment.action";
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
  const id = searchParams.get("id");
  const amount = searchParams.get("amount") || 0;
  const items = searchParams.get("items") || 0;
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const navigate = useNavigate();

  // Toggle the visibility of the form section
  const toggleSection = () => {
    setExpanded(!expanded);
  };

  // Update the form data on input change
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Fetch addresses when the component mounts
  useEffect(() => {
    dispatch(getAddress(token));
  }, []);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(addAddress(formData, token));
    dispatch(getAddress(token));
  }

  // Handle the "Proceed to Buy" button click
  function handleProceedToPay() {
    if (defaultAddress === null) {
      return toast.error("Please select a default address");
    }
    navigate(
      `/payment?id=${id}&amount=${amount}&items=${items}&address=${defaultAddress}`
    );
  }

  // Apply the promo code and calculate the discount
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

  // Remove an address
  async function handleRemove(id) {
    try {
      await dispatch(removeAddress(token, id));
      dispatch(getAddress(token));
    } catch (err) {
      console.log(err);
    }
  }

  // Handle address selection
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    setDefaultAddress(event.target.value);
  }

  return (
    <div className={styles.body}>
      <NavigationBar />
      <div className={styles.container}>
        <h2 className={styles.header}>Checkout</h2>
        <div className={styles.addressContainer}>
          <h3>Shipping Address</h3>
          {loading ? (
            <p>Loading addresses...</p>
          ) : (
            <>
              {addresses.map((address, index) => (
                <AddressCard
                  key={index}
                  address={address}
                  handleRemove={handleRemove}
                />
              ))}
              <button
                className={styles.addAddressBtn}
                onClick={toggleSection}
              >
                {expanded ? (
                  <>
                    <MdExpandLess /> Close
                  </>
                ) : (
                  <>
                    <MdExpandMore /> Add New Address
                  </>
                )}
              </button>
              {expanded && (
                <form className={styles.addAddressForm} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {/* Other form fields */}
                  <button type="submit">Save Address</button>
                </form>
              )}
            </>
          )}
        </div>
        <div className={styles.orderSummary}>
          <h3>Order Summary</h3>
          {/* Display order summary details */}
          <div className={styles.promoContainer}>
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromo}>Apply</button>
          </div>
          {/* Display discount and total amount */}
          <button
            className={styles.proceedBtn}
            onClick={handleProceedToPay}
            disabled={!defaultAddress}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export { Shipment };
