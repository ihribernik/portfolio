import React from "react";
import { FormInput } from "./FormInput";

const Contact = () => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mailTo = document.getElementById("email") as HTMLInputElement | null;
    const name = document.getElementById("name") as HTMLInputElement | null;
    const message = document.getElementById(
      "message"
    ) as HTMLInputElement | null;
    if (mailTo != null && name != null && message != null) {
      const mailToValue = new XMLSerializer().serializeToString(
        document.createTextNode(mailTo.value)
      );
      const nameValue = new XMLSerializer().serializeToString(
        document.createTextNode(name.value)
      );
      const messageValue = new XMLSerializer().serializeToString(
        document.createTextNode(message.value)
      );
      const newLocation = `mailto:${mailToValue}?subject=${nameValue}&body=${messageValue}`;
      window.open(newLocation);
    }
  };

  return (
    <section className="">
      <div className="grid grid-cols-1 gap-20">
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            por mensaje
          </h6>
          <form action="" method="get">
            <FormInput type="text" name="name" id="name" displayText="Nombre" />
            <FormInput
              type="email"
              name="email"
              id="email"
              displayText="Email"
            />

            <div className="flex flex-col space-y-2">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="form-textarea"
                name="message"
                id="message"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button
              className="my-4 px-4 py-2 font-semibold text-sm text-black rounded-lg shadow-sm bg-yellow-500 hover:bg-yellow-700"
              type="button"
              onClick={handleOnClick}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
