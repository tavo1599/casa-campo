import React, { useState, useEffect } from "react";
import { CreateUpdate } from "./FormContactanos";
import ColoredSection from "./Section/ColoredSection";
// import { createMensaje } from "../../services/MensajeService";

export default function Contactanos() {
    let dataMensaje = {
        id: null,
        nombre: "",
        correo: "",
        mensaje: "",
        telefono: "",
        asunto: "",
    };

    const [mensaje, setMensaje] = useState(dataMensaje);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => { }, []);

    const saveUpdate = () => {
        setSubmitted(true);
        // createMensaje(mensaje);
    };

    const hideDialog = () => {
        setSubmitted(false);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        let _mensaje = { ...mensaje };

        _mensaje[name] = val;

        setMensaje(_mensaje);
    };

    const getClassName = (isInvalid) => {
        return isInvalid ? "border-red-500" : "border-gray-300";
    };

    return (
        <ColoredSection>
            <div className="py-12 px-4 flex flex-col items-center">
                <div className="md:text-4xl text-2xl font-bold capitalize text-center mb-5">
                    CONTÁCTANOS
                </div>
                <div className="text-base text-center text-gray-700 mb-8">
                    <span>
                        ¡Bienvenidos a CASA DE CAMPO AREQUIPA! Estamos comprometidos en
                        brindarle un servicio excepcional y satisfacer todas sus
                        necesidades.
                    </span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            Información de Contacto
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-1 justify-between relative">
                            <div>
                                <div className="flex flex-col mb-4">
                                    <i className="pi pi-map-marker text-indigo-500 mb-2"></i>
                                    <span className="font-bold">Dirección</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <i className="pi pi-phone text-indigo-500 mb-2"></i>
                                    <span className="font-bold">Teléfono</span>
                                    <p>(+51) 987 563 711</p>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <i className="pi pi-envelope text-indigo-500 mb-2"></i>
                                    <span className="font-bold">Correo Electrónico</span>
                                    <a href="/" className="text-indigo-500 hover:text-indigo-700">
                                        arequipacasacampo@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <iframe
                                    title="Imagen"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.2890361930595!2d-70.11398948454165!3d-15.52262852046589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f5484b369675%3A0xfdbeb0b4e54aafe0!2sDEVAPERU!5e0!3m2!1ses!2spe!4v1669720678058!5m2!1ses!2spe"
                                    className="rounded-lg border lg:w-[450px] lg:h-[300px] object-cover w-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md grid items-start sm:m-auto md:m-0">
                        <h2 className="text-2xl font-semibold">Envíanos un Mensaje</h2>
                        <CreateUpdate
                            ismensaje={true}
                            onHide={hideDialog}
                            htmlFor_00="nombre"
                            label_00="Nombre"
                            id_00="nombre"
                            value_00={mensaje.nombre}
                            onChange_00={(e) => onInputChange(e, "nombre")}
                            className_00={`border p-2 rounded ${getClassName(
                                submitted && !mensaje.nombre
                            )}`}
                            msgRequired_00={
                                submitted &&
                                !mensaje.nombre && (
                                    <small className="text-red-500">
                                        El nombre es obligatorio.
                                    </small>
                                )
                            }
                            htmlFor_01="correo"
                            label_01="Correo"
                            id_01="correo"
                            value_01={mensaje.correo}
                            onChange_01={(e) => onInputChange(e, "correo")}
                            className_01={`border p-2 rounded ${getClassName(
                                submitted && !mensaje.correo
                            )}`}
                            msgRequired_01={
                                submitted &&
                                !mensaje.correo && (
                                    <small className="text-red-500">
                                        El correo es obligatorio.
                                    </small>
                                )
                            }
                            htmlFor_02="telefono"
                            label_02="Teléfono"
                            id_02="telefono"
                            value_02={mensaje.telefono}
                            onChange_02={(e) => onInputChange(e, "telefono")}
                            className_02={`border p-2 rounded ${getClassName(
                                submitted && !mensaje.telefono
                            )}`}
                            msgRequired_02={
                                submitted &&
                                !mensaje.telefono && (
                                    <small className="text-red-500">
                                        El teléfono es obligatorio.
                                    </small>
                                )
                            }
                            htmlFor_03="asunto"
                            label_03="Asunto"
                            id_03="asunto"
                            value_03={mensaje.asunto}
                            onChange_03={(e) => onInputChange(e, "asunto")}
                            className_03={`border p-2 rounded ${getClassName(
                                submitted && !mensaje.asunto
                            )}`}
                            msgRequired_03={
                                submitted &&
                                !mensaje.asunto && (
                                    <small className="text-red-500">
                                        El asunto es obligatorio.
                                    </small>
                                )
                            }
                            htmlFor_04="mensaje"
                            label_04="Mensaje"
                            id_04="mensaje"
                            value_04={mensaje.mensaje}
                            onChange_04={(e) => onInputChange(e, "mensaje")}
                            className_04={`border p-2 rounded ${getClassName(
                                submitted && !mensaje.mensaje
                            )}`}
                            msgRequired_04={
                                submitted &&
                                !mensaje.mensaje && (
                                    <small className="text-red-500">
                                        El mensaje es obligatorio.
                                    </small>
                                )
                            }
                        />
                        <div className="flex items-center justify-center h-12">
                            <button
                                onClick={saveUpdate}
                                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 flex items-center"
                            >
                                <i className="pi pi-send mr-2"></i> Enviar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-600">
                    <span>
                        ¡Gracias por elegirnos! Estamos aquí para ayudarle en todo lo que
                        necesite.
                    </span>
                </div>
            </div>
        </ColoredSection>
    );
}
