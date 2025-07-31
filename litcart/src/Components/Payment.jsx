import React, { useState, useEffect } from "react";
import OrderPlaced from "./OrderPlaced";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [netbankingEnabled, setNetbankingEnabled] = useState(false);
  const navigate = useNavigate();
  const bankOptions = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra",
  ];
const user={
  name:"Sahil Kumar",
  city:"Patna",
  state:"Bihar",
  country:"India",
  pincode:"800002"

}
  const cardLogos = [
      {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    alt: "Visa",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    alt: "Mastercard",
  },
  
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/RuPay_logo.svg",
    alt: "RuPay",
  },
  ];

  const paytmLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Paytm_Logo.svg/120px-Paytm_Logo.svg.png";

  useEffect(() => {
    setNetbankingEnabled(selectedPayment === "netbanking");
  }, [selectedPayment]);

const allright=()=>{
  if(!selectedPayment){
    alert("Please choose a payment method!")
  }
  else{
    navigate('/orderplaced')
  }
}

  return (
    <div className="flex h-screen w-full  flex-col md:flex-row justify-between  mx-auto px-4 py-6 gap-8 text-sm text-gray-900" role="main" aria-label="Payment page content">
      {/* LEFT SECTION */}
      <section className="flex-1 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200">
        {/* Delivery Info */}
        <div className="mb-8">
          <strong className="text-base font-bold block">Delivering to</strong>
          <div className="text-gray-800 text-left mt-1">
            <h2 className="font-bold">{user.name}</h2>
            <h3 >{user.city},{user.state},{user.country} </h3>
            <h3>{user.pincode}</h3>
            </div>
          
          </div>
        

        {/* Payment Method Section */}
        <section aria-labelledby="payment-method-heading">
          <h2 id="payment-method-heading" className="text-lg font-bold mb-4">Payment method</h2>

          <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
            {/* Cash on Delivery */}
            <div className="flex items-center mb-3">
              <input type="radio" id="cod" name="payment-method" value="cod" onChange={() => setSelectedPayment("cod")} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="cod" className="ml-3 font-semibold text-sm">Cash on Delivery</label>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            {/* Another Payment Method */}
            <div>
              <strong className="text-sm block mb-3">Another payment method</strong>

              {/* Cards */}
              <div className="flex items-center mb-2">
                <input type="radio" id="card" name="payment-method" value="card" onChange={() => setSelectedPayment("card")} className="w-4 h-4 accent-blue-600" />
                <label htmlFor="card" className="ml-3 font-semibold text-sm">Credit or debit card</label>
              </div>

              {/* Card Logos */}
              <div className="ml-7 flex flex-wrap gap-2 mb-3">
                {cardLogos.map((logo, idx) => (
                  <img key={idx} src={logo.src} alt={logo.alt} className="h-6 object-contain"/>
                ))}
              </div>

              {/* Netbanking */}
              <div className="flex items-center mb-2">
                <input type="radio" id="net-banking" name="payment-method" value="netbanking" onChange={() => setSelectedPayment("netbanking")} className="w-4 h-4 accent-blue-600" />
                <label htmlFor="net-banking" className="ml-3 font-semibold text-sm">Net Banking</label>
              </div>

              {/* Dropdown */}
              <div className="ml-7 mb-3">
                <select className={`border border-gray-300 rounded-md px-2 py-1 text-xs ${netbankingEnabled ? "bg-white" : "bg-gray-100 text-gray-400"}`} disabled={!netbankingEnabled}>
                  <option value="">Choose an Option</option>
                  {netbankingEnabled && bankOptions.map((bank) => <option key={bank}>{bank}</option>)}
                </select>
              </div>

              {/* Other UPI */}
              <div className="flex items-center mb-2">
                <input type="radio" id="other-upi" name="payment-method" value="otherupi" onChange={() => setSelectedPayment("otherupi")} className="w-4 h-4 accent-blue-600" />
                <label htmlFor="other-upi" className="ml-3 font-semibold text-sm">Other UPI Apps</label>
              </div>

              {/* EMI Disabled */}
              <div className="flex items-center ml-0">
                <input type="radio" id="emi-unavailable" name="payment-method" value="emi" disabled className="w-4 h-4 text-gray-400" />
                <label htmlFor="emi-unavailable" className="ml-3 font-semibold text-sm text-gray-400">EMI Unavailable</label><p className="ml-1">(Available only for large stocks)</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* RIGHT SIDEBAR */}
      <div className="flex flex-col">
      <aside className="w-full md:w-80 bg-white rounded-md shadow-md p-5 self-start" aria-label="Order summary">
        <button disabled aria-disabled="true" className="w-full mb-4 text-yellow-800 text-sm bg-yellow-100 border border-yellow-300 rounded-3xl px-4 py-2 cursor-not-allowed">
          Order Summary
        </button>
        <hr className="my-3 border-gray-300" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <h1>Items:</h1>
          </div>
          
          <div className=" flex flex-col font-bold text-base">
            <h1>Order Total:</h1>
            </div>
        </div>
      </aside>
            <div>
            <button onClick={allright} id="place-order"
              className=" h-10 w-100 text-xl mt-20 
              bg-blue-500 text-white border-2 border-blue-600 
              rounded-xl shadow-lg hover:shadow-xl 
              hover:scale-105 hover:bg-blue-600 
              transition-all duration-300 ease-in-out">
              Place Order</button>
            </div>
       </div>

      
    </div>
  );
};

export default Payment;
