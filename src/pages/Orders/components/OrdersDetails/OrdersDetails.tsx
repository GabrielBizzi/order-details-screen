import React, { PropsWithChildren } from 'react';
import styles from './OrdersDetails.module.scss';

export function OrdersGrid({ children }: PropsWithChildren<{}>) {
    return <div className={styles.container}>{children}</div>;
}

export function OrdersDetails(){
  return (

    <div className={styles.container}>
        <div className={styles.detailsOrder}>
            <h1>Detalhes do seu pedido, Maria</h1>
            <p>Pedido: #123456789</p>
        </div>
        <div className={styles.containerInfo}>
            <div className={styles.product}>
                <div className={styles.productInfo}>
                    <div className={styles.rectangle}></div>
                    <div className={styles.productName}>
                        <p>Booster 30ml</p>
                        <span>R$ 200,00</span>
                    </div>
                </div>
                <div className={styles.quantity}>
                    <p>1<span>x</span></p>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.productInfo}>
                    <div className={styles.rectangle}></div>
                    <div className={styles.productName}>
                        <p>Color 30ml</p>
                        <span>R$ 200,00</span>
                    </div>
                </div>
                <div className={styles.quantity}>
                    <p>2<span>x</span></p>
                </div>
            </div>
        </div>
        <div className={styles.shippingOrder}>
            <div className={styles.shippingInfo}>
                <h1>Entregar em</h1>
                <p>Mudar</p>
            </div>
            <div className={styles.shippingAddress}>
                <p>Av. Mofarrej, 825 - Galpão 5 - Vl Leopoldina</p>
                <p>São Paulo - SP - 03342-010</p>
            </div>
        </div>
        <div className={styles.methodPayment}>
            <div className={styles.methodContent}>
                <h1>Metódo de pagamento</h1>
                <p>Mudar</p>
            </div>
            <div className={styles.methodInfo}>
                <div>
                    <p>Av. Mofarrej, 825 - Galpão 5 - Vl Leopoldina</p>
                    <p>São Paulo - SP - 03342-010</p>
                </div>
                <div>r</div>
            </div>
        </div>
        <div className={styles.freight}>
            <div className={styles.freightForm}>
                <div className={styles.freightContent}>
                    <p>
                        Prazo de entrega:
                    </p>
                    <p>
                        Frete:
                    </p>
                </div>
                <div className={styles.freightContent}>
                    <p>
                        de 5 a 7 dias
                    </p>
                    <p>
                        R$ 20,00
                    </p>
                </div>
            </div>
            
            <hr/>
            <div className={styles.freightTotal}>
                <p>
                    Total:
                </p>
                <p>
                    R$ 620,00
                </p>
            </div>
            
        </div>
        <div className={styles.followOrder}>
            <h1>
                Acompanhe seu Pedido
            </h1>
            <ul className={styles.followEvents}>
                <li>
                    <span className={styles.event}></span>
                    <span className={styles.eventTitle}>
                        Aguardando Pagamento
                    </span>
                </li>
                <li>
                    <span className={styles.event}></span>
                    <span className={styles.eventTitle}>
                        Confirmação de Pagamento
                    </span>
                </li>
                <li>
                    <span className={styles.event}></span>
                    <span className={styles.eventTitle}>
                        Pedido em Separação
                    </span>
                </li>
                <li>
                    <span className={styles.event}></span>
                    <span className={styles.eventTitle}>
                        Pedido em Transporte
                    </span>
                </li>
                <li>
                    <span className={styles.event}></span>
                    <span className={styles.eventTitle}>
                        Pedido Entregue
                    </span>
                </li>
            </ul>
        </div>
    </div>

  );
};
