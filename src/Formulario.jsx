import { useForm } from "react-hook-form";

const Formulario = () => {

    const{ register, handleSubmit } = useForm();


    return <div>
        <h2>Formulario</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Edad</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Ciudad</label>
                <select >
                    <option value="cal">Cali</option>
                    <option value="med">Medellin</option>
                    <option value="bog">Bogotá</option>
                </select>
            </div>
        </form>
    </div>
}
export default Formulario;