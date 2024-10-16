import "../Form.css";
import "../../Buttons/buttons.css"

export const FormLogin = ({ setRegister }) => {

    const toggleRegisterState = () => {
        setRegister(true)
    }

    return (
        <>
            <form>
                <h3 style={{ textAlign: "center" }}>LOGIN</h3>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className="btnPrimary" type="submit">
                    Entrar
                </button>
                <p style={{textAlign: "center"}}>
                    Não tem conta?
                </p>
                <p onClick={toggleRegisterState} style={{ textAlign: "center", color: "#fd377e", cursor: "pointer", marginTop: "5px" }}>
                    Criar conta
                </p>
            </form>
        </>
    );
};
