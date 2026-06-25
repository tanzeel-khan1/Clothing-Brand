// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { fadeUp, staggerContainer } from "../lib/motion";

// const initialPaymentForm = {
//   email: "",
//   cardName: "",
//   cardNumber: "",
//   expiry: "",
//   cvv: "",
//   country: "",
//   zipCode: "",
//   billingAddress: "",
// };

// function PaymentPage({
//   cartItems,
//   subtotal,
//   checkoutForm,
//   onBackToStore,
//   onPaymentSuccess,
// }) {
//   const [paymentForm, setPaymentForm] = useState(initialPaymentForm);
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const itemLabel = useMemo(() => {
//     if (cartItems.length === 0) {
//       return "No items in cart";
//     }

//     return cartItems.map((item) => `${item.name} x${item.quantity}`).join(", ");
//   }, [cartItems]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setPaymentForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onPaymentSuccess();
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-[#f6f1ea] px-4 py-8 sm:px-6 lg:px-8"
//       initial="hidden"
//       animate="visible"
//       variants={staggerContainer}
//     >
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           variants={fadeUp}
//           className="mb-6 flex items-center justify-between gap-4"
//         >
//           <motion.button
//             type="button"
//             onClick={onBackToStore}
//             className="cursor-pointer rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md"
//             whileHover={{ y: -3 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Back to Store
//           </motion.button>
//           <p className="font-serif text-2xl text-stone-950">Secure Payment</p>
//         </motion.div>

//         <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
//           <motion.section
//             variants={fadeUp}
//             className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_60px_rgba(28,25,23,0.08)] lg:p-10"
//           >
//             <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
//               Payment Details
//             </p>
//             <h1 className="mt-4 font-serif text-3xl text-stone-950 sm:text-4xl">
//               Complete your purchase
//             </h1>
//             <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
//               This demo payment page looks like a real checkout flow, but it
//               stays flexible so any values you enter will go through without
//               strict validation.
//             </p>

//             <div className="mt-8 grid gap-3 sm:grid-cols-3">
//               {[
//                 ["card", "Credit Card"],
//                 ["bank", "Bank Transfer"],
//                 ["cod", "Cash on Delivery"],
//               ].map(([value, label]) => {
//                 const active = paymentMethod === value;

//                 return (
//                   <motion.button
//                     key={value}
//                     type="button"
//                     onClick={() => setPaymentMethod(value)}
//                     className={`cursor-pointer rounded-2xl border px-4 py-4 text-sm font-medium transition ${
//                       active
//                         ? "border-stone-950 bg-stone-950 text-white shadow-lg"
//                         : "border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-950"
//                     }`}
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {label}
//                   </motion.button>
//                 );
//               })}
//             </div>

//             <motion.form
//               variants={staggerContainer}
//               onSubmit={handleSubmit}
//               className="mt-8 grid gap-4"
//             >
//               <motion.input
//                 variants={fadeUp}
//                 type="text"
//                 name="email"
//                 value={paymentForm.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//               />
//               <motion.input
//                 variants={fadeUp}
//                 type="text"
//                 name="cardName"
//                 value={paymentForm.cardName}
//                 onChange={handleChange}
//                 placeholder="Cardholder Name"
//                 required
//                 className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//               />
//               <motion.input
//                 variants={fadeUp}
//                 type="text"
//                 name="cardNumber"
//                 value={paymentForm.cardNumber}
//                 onChange={handleChange}
//                 required
//                 placeholder="Card Number"
//                 className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//               />

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <motion.input
//                   variants={fadeUp}
//                   type="text"
//                   name="expiry"
//                   value={paymentForm.expiry}
//                   onChange={handleChange}
//                   placeholder="Expiry Date"
//                   required
//                   className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//                 />
//                 <motion.input
//                   variants={fadeUp}
//                   type="text"
//                   name="cvv"
//                   value={paymentForm.cvv}
//                   onChange={handleChange}
//                   placeholder="CVV"
//                   required
//                   className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//                 />
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <motion.input
//                   variants={fadeUp}
//                   type="text"
//                   name="country"
//                   value={paymentForm.country}
//                   onChange={handleChange}
//                   placeholder="Country"
//                   required
//                   className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//                 />
//                 <motion.input
//                   variants={fadeUp}
//                   type="text"
//                   name="zipCode"
//                   value={paymentForm.zipCode}
//                   required
//                   onChange={handleChange}
//                   placeholder="ZIP / Postal Code"
//                   className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//                 />
//               </div>

//               <motion.textarea
//                 variants={fadeUp}
//                 name="billingAddress"
//                 value={paymentForm.billingAddress}
//                 onChange={handleChange}
//                 rows="4"
//                 required
//                 placeholder="Billing Address"
//                 className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white"
//               />

//               <motion.button
//                 variants={fadeUp}
//                 type="submit"
//                 className="mt-2 w-full cursor-pointer rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-xl"
//                 whileHover={{ y: -4, scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Pay Now
//               </motion.button>
//             </motion.form>
//           </motion.section>

//           <motion.aside
//             variants={fadeUp}
//             className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_60px_rgba(28,25,23,0.08)] lg:p-8"
//           >
//             <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
//               Order Summary
//             </p>
//             <h2 className="mt-4 font-serif text-3xl text-stone-950">
//               Review before payment
//             </h2>

//             <div className="mt-6 space-y-4 rounded-[1.5rem] bg-stone-50 p-5">
//               <div>
//                 <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
//                   Customer
//                 </p>
//                 <p className="mt-2 text-base text-stone-800">
//                   {checkoutForm.fullName || "Guest Customer"}
//                 </p>
//                 <p className="mt-1 text-sm text-stone-600">
//                   {checkoutForm.phone || "No phone added"}
//                 </p>
//                 <p className="mt-1 text-sm text-stone-600">
//                   {checkoutForm.address || "No address added"}
//                 </p>
//                 <p className="mt-1 text-sm text-stone-600">
//                   {checkoutForm.city || "No city added"}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
//                   Items
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-stone-700">
//                   {itemLabel}
//                 </p>
//               </div>

//               <div className="border-t border-stone-200 pt-4">
//                 <div className="flex items-center justify-between text-sm text-stone-600">
//                   <span>Shipping</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="mt-3 flex items-center justify-between text-sm text-stone-600">
//                   <span>Taxes</span>
//                   <span>Included</span>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between text-base font-semibold text-stone-950">
//                   <span>Total</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.aside>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default PaymentPage;
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const initialForm = {
  email: "",
  fullName: "",
  phone: "",
  streetAddress: "",
  city: "",
  zipCode: "",
};

function PaymentPage({
  cartItems,
  subtotal,
  checkoutForm,
  onBackToStore,
  onPaymentSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const itemLabel = useMemo(() => {
    if (!cartItems.length) return "No items in cart";
    return cartItems.map(i => `${i.name} x${i.quantity}`).join(", ");
  }, [cartItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.streetAddress || !form.phone || !form.fullName) return;

    onPaymentSuccess();
  };

  return (
    <motion.div
      className="min-h-screen  bg-[#f6f1ea] px-4 py-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={onBackToStore}
            className="px-5 py-2 rounded-full bg-white shadow hover:shadow-md transition"
          >
            ← Back
          </button>

          <h1 className="text-2xl font-bold text-stone-800">
            Cash on Delivery
          </h1>

          <div className="w-20" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT FORM */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-xl font-semibold mb-1">
              Delivery Information
            </h2>
            <p className="text-sm text-stone-500 mb-6">
              Fill your address for cash on delivery
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={staggerContainer}
            >

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />

              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
                required
              />

              <input
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                placeholder="House / Street Address *"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City *"
                  className="rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
                  required
                />

                <input
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  className="rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-stone-900 text-white py-4 rounded-xl font-medium shadow-lg hover:bg-stone-800 transition"
              >
                Place Order (Cash on Delivery)
              </motion.button>

            </motion.form>
          </motion.div>

          {/* RIGHT SUMMARY */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-stone-600">
              <p>{itemLabel}</p>
            </div>

            <div className="mt-6 border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Payment</span>
                <span className="text-green-600 font-medium">
                  Cash on Delivery
                </span>
              </div>

              <div className="flex justify-between text-lg font-bold mt-2">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-green-50 text-green-700 text-sm">
              ✔ You will pay when order is delivered
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default PaymentPage;