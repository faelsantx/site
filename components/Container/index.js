import styles from "./styles.module.css"

function Container(){
    return(
<>
<div className={ styles.container }>
   
    <ul>
<li>Seja bem vindo!</li><br/>
<li>Aqui o seu pedido é uma ordem.</li><br/>
<li>Sinta-se à vontade!</li>
    </ul>
</div>
</>
    )
}
export default Container