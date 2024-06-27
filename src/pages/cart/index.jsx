import { PrimaryButton } from "../../components/Button";

import { IconBank, IconCreditCard, IconMoney } from "../../components/Icons";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <div className={styles.right_content}>
          <h3>Finalize o seu pedido</h3>
          <div className={styles.order_container}>
            <header>
              <h4>Endereço para entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </header>
            <form className={styles.form} id="idForm">
              <div>
                <label>
                  <input type="number" placeholder="CEP" required />
                </label>
                <label>
                  <input type="text" placeholder="Cidade" required />
                </label>
              </div>
              <div>
                <label>
                  <input type="text" placeholder="Rua" required />
                </label>
              </div>
              <div>
                <label>
                  <input type="number" placeholder="Número" required />
                </label>
                <label>
                  <input type="text" placeholder="Complemento" required />
                </label>
              </div>
              <div>
                <label>
                  <input type="text" placeholder="UF" maxLength={2} required />
                </label>
                <label>
                  <input type="text" placeholder="Bairro" required />
                </label>
              </div>
            </form>
            <header>
              <h4>Formas de pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </header>
            <div className={styles.buttons_container}>
              <button>
                <IconCreditCard /> Cartão de crédito
              </button>
              <button>
                <IconBank /> Cartão de débito
              </button>
              <button>
                <IconMoney /> Dinheiro
              </button>
            </div>
          </div>
        </div>
        <div className={styles.left_content}>
          <h3>Meu carrinho</h3>
          <div className={styles.cart_container}>
            <div className={styles.text_container}>
              <div>
                <p>Total em produtos:</p>
                <p>R$: 0,00</p>
              </div>
              <div>
                <p>Frete:</p>
                <p>R$: 0,00</p>
              </div>
              <div>
                <p>Total:</p>
                <p>R$: 0,00</p>
              </div>
            </div>
            <PrimaryButton form="idForm" type="submit">
              Confirmar pedido
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
