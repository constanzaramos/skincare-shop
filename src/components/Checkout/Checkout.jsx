import React from "react";
import { dataBase } from "../../service/firebase";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./checkout.scss";

const Checkout = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [orderId, setOrderId] = useState(null);
  const watchEmail = watch("email");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
      if (totalCart() === 0) {
      setErrorMessage("No puedes realizar compras con total $0. Añade productos al carrito.");
      return;
    }
    const order = {
      buyer: {
        name: data.name,
        lastName: data.lastName,
        address: data.address,
        email: data.email,
      },
      items: cart,
      total: totalCart(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(dataBase, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
      reset();
      setErrorMessage("");
    } catch (error) {
      console.error("Error al enviar pedido:", error);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>

      {orderId ? (
        <div className="order-confirmation">
          <h3>✅ ¡Gracias por tu compra!</h3>
          <p>
            Tu ID de pedido es: <strong>{orderId}</strong>
          </p>
        </div>
      ) : (
        <>
          {errorMessage && <p className="error-msg">{errorMessage}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre:</label>
              <input
                 placeholder="Ingresa tu nombre"
                 {...register("name", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe tener al menos 2 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g,
                    message: "Solo se permiten letras",
                  },
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <label>Apellido:</label>
              <input
              placeholder="Ingresa tu apellido"
                {...register("lastName", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe tener al menos 2 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g,
                    message: "Solo se permiten letras",
                  },
                })}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>

            <div>
              <label>Dirección:</label>
              <input
                placeholder="Ingresa tu dirección"
                {...register("address", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe tener al menos 2 caracteres",
                  },
                })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div>
              <label>Email:</label>
              <input
                placeholder="Ingresa tu email"
                type="email"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label>Confirmar Email:</label>
              <input
                placeholder="Confirma tu email"
                type="email"
                {...register("confirmEmail", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value === watchEmail || "Los correos no coinciden",
                })}
              />
              {errors.confirmEmail && (
                <span>{errors.confirmEmail.message}</span>
              )}
            </div>

            <h3>Resumen de la compra</h3>
            <div className="checkout-summary">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <span className="item-name">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="item-price">
                    ${(item.price * item.quantity).toLocaleString("es-CL")}
                  </span>
                </div>
              ))}
              <div className="summary-total">
                <span>Total:</span>
                <span>${totalCart().toLocaleString("es-CL")}</span>
              </div>
            </div>
            <button type="submit">Enviar pedido</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
