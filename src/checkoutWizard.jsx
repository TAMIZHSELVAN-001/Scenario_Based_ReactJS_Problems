
import { useState } from "react";

export default function CheckoutWizard() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    postalCode: "",
    delivery: "",
    payment: ""
  });

  // Update one field without deleting the others
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Validate only the current step
  const isValid = [
    formData.name.trim() !== "" &&
      formData.address.trim() !== "" &&
      /^\d{6}$/.test(formData.postalCode),

    formData.delivery !== "",

    formData.payment !== ""
  ][step];

  function handleNext() {
    if (isValid && step < 2) {
      setStep((prev) => prev + 1);
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }

  function handleSubmit() {
    if (isValid && step === 2) {
      alert("Checkout submitted successfully!");
      console.log("Checkout data:", formData);
    }
  }

  return (
    <div>
      <h2>Checkout Wizard</h2>

      <p>Step {step + 1} of 3</p>

      {step === 0 && (
        <section>
          <h3>1. Address</h3>

          <input
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
          />

          <br /><br />

          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <br /><br />

          <input
            name="postalCode"
            placeholder="6-digit postal code"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </section>
      )}

      {step === 1 && (
        <section>
          <h3>2. Delivery</h3>

          <label>
            <input
              type="radio"
              name="delivery"
              value="Standard"
              checked={formData.delivery === "Standard"}
              onChange={handleChange}
            />
            Standard Delivery
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="delivery"
              value="Express"
              checked={formData.delivery === "Express"}
              onChange={handleChange}
            />
            Express Delivery
          </label>
        </section>
      )}

      {step === 2 && (
        <section>
          <h3>3. Payment</h3>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={formData.payment === "UPI"}
              onChange={handleChange}
            />
            UPI
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={formData.payment === "Card"}
              onChange={handleChange}
            />
            Card
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={formData.payment === "Cash on Delivery"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
        </section>
      )}

      <br />

      {step > 0 && (
        <button onClick={handleBack}>
          Back
        </button>
      )}

      {" "}

      {step < 2 ? (
        <button onClick={handleNext} disabled={!isValid}>
          Next
        </button>
      ) : (
        <button onClick={handleSubmit} disabled={!isValid}>
          Submit Order
        </button>
      )}
    </div>
  );
}
