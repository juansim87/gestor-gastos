import CerrarBtn from "../src/img/cerrar.svg";

const Modal = ({setModal}) => {
  const ocultarModal = () => {
    setModal(false)
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
            src={CerrarBtn}
            alt="cerrar modal"
            onClick={ocultarModal}
             />
      </div>
      <form className="formulario">Nuevo Gasto</form>
    </div>
  );
};

export default Modal;
