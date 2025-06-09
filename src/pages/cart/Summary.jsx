import React, { useState } from "react";

export default function Summary() {
  const [coupon, setCoupon] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  return (
    <div className="border-slate-200 rounded-xl p-6 bg-slate-100 shadow-md max-w-lg mx-auto space-y-6 w-2/5 color-gray-700">
      <h3 className="text-xl font-bold">Summary</h3>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Country *</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border rounded-xl p-2 bg-white h-12"
            required
          >
            <option value="" disabled>
              Country
            </option>
            <option value="india">India</option>
            <option value="chile">Chile</option>
            <option value="egypt">Egypt</option>
            <option value="italy">Italy</option>
            <option value="yemen">Yemen</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">State/Province *</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border rounded-xl p-2 bg-white h-12"
            required
          >
            <option value="" disabled>
              Please Select a region, state
            </option>
            <option value="gujarat">Gujarat</option>
            <option value="goa">Goa</option>
            <option value="hariyana">Hariyana</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 " htmlFor="Zip-code">
            Zip/Postal Code *
          </label>
          <input
            id="Zip-code"
            type="text"
            placeholder="Zip/Postal Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border rounded-xl p-2 bg-white h-12"
            required
          />
        </div>
      </form>

      {/* Summary Info */}
      <div className="border-t pt-4">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Sub-Total</span>
            <span>$0.00</span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charges</span>
            <span>$0.00</span>
          </li>
          <li className="flex justify-between items-center ">
            <span>Coupon Discount</span>
            <span>
              <button
                type="button"
                className="text-blue-600 hover:underline "
                onClick={() => alert("Coupon clicked")}
              >
                Apply Coupon
              </button>
            </span>
          </li>
          <li>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Coupon Applied: ${coupon}`);
              }}
              className="flex gap-2 mt-2"
            >
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full border rounded-xl p-2 bg-white h-12"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 w-full sm:w-auto"
              >
                Apply
              </button>
            </form>
          </li>
        </ul>
      </div>

      {/* Total */}
      <div className="border-t pt-4">
        <ul>
          <li className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>$0.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
