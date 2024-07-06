import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { PrimaryButton } from "../../components/Button";

import { IconBank, IconCreditCard, IconMoney } from "../../components/Icons";

import styles from "./Cart.module.css";

function Cart() {
  const createFormSchema = z.object({
    cep: z.string().min(3, "O CEP é obrigatório!"),
    city: z.string().min(3, "A Cidade é obrigatória!"),
    street: z.string().min(3, "A Rua é obrigatória!"),
    number: z.string().min(3, "O Número é obrigatório!"),
    uf: z.string().min(1, "O UF é obrigatório!"),
    neighborhood: z.string().min(3, "O Bairro é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createFormSchema) });

  const navigate = useNavigate();

  const sendForm = (data) => {
    try {
      navigate("/successs");
    } catch (error) {
      return error;
    }
  };

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
            <form
              className={styles.form}
              id="idForm"
              onSubmit={handleSubmit(sendForm)}
            >
              <div>
                <label>
                  <input type="number" placeholder="CEP" {...register("cep")} />
                  {errors.cep && <span>{errors.cep.message}</span>}
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register("city")}
                  />

                  {errors.city && <span>{errors.city.message}</span>}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Rua"
                    {...register("street")}
                  />
                  {errors.street && <span>{errors.street.message}</span>}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="number"
                    placeholder="Número"
                    {...register("number")}
                  />
                  {errors.number && <span>{errors.number.message}</span>}
                </label>
                <label>
                  <input type="text" placeholder="Complemento" />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    {...register("uf")}
                  />
                  {errors.uf && <span>{errors.uf.message}</span>}
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register("neighborhood")}
                  />
                  {errors.neighborhood && (
                    <span>{errors.neighborhood.message}</span>
                  )}
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
