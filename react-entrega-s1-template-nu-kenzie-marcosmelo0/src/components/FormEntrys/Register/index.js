import "../Form.css";
import "../../Buttons/buttons.css"

export const FormRegister = ({ setRegister }) => {

    const toggleRegisterState = () => {
        setRegister(false)
    }

    return (
        <form>
            <h3 style={{ textAlign: "center" }}>CADASTRO</h3>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button className="btnPrimary" type="submit">Criar conta</button>
            <p style={{ textAlign: "center" }}>
                Já tem conta?
            </p>
            <p onClick={toggleRegisterState} style={{ color: "#fd377e", marginTop: "5px", cursor: "pointer" }}>
                Entrar
            </p>
        </form>
    );
};
