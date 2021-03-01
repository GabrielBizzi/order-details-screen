import React, { PropsWithChildren } from 'react';
import styles from './OrdersDetails.module.scss';
import card from '../../../../assets/images/icon-card.png';
import boleto from '../../../../assets/images/boleto-icon.png'

import { useQuery } from 'react-query';

import { useParams } from 'react-router';

import { getOrderDetails } from '../../../../core/orders';
import { Link } from 'react-router-dom';

export function OrdersGrid({ children }: PropsWithChildren<{}>) {
    return <div className={styles.container}>{children}</div>;
}

export function OrdersDetails(){
  const { id } = useParams<{id: string}>();

  const { data: orderDetails } = useQuery('orders', () => getOrderDetails(id));

  return (
    <div className={styles.container}>
        <div className={styles.detailsGrid}>
            <div className={styles.detailsOrder}>
                <h1>Detalhes do seu pedido{`, ${orderDetails?.name}` || ''}</h1>
                <p>Pedido: #{orderDetails?.id}</p>
            </div>
            <div className={styles.containerInfo}>
                {orderDetails?.items.map(item => (
                    <div key={item.name}>
                        <div className={styles.product}>
                            <div className={styles.productInfo}>
                                <div className={styles.rectangle}></div>
                                <div className={styles.productName}>
                                <p>{item.name}</p>
                                    <span>{
                                        Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(item.price))
                                    }</span>
                                </div>
                            </div>
                            <div className={styles.quantity}>
                                <p>{item.qty}<span>x</span></p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.shippingMethodGrid}>
            <div className={styles.shippingOrder}>
                <div className={styles.shippingInfo}>
                    <h1>Entregar em</h1>
                    <Link to="#">Mudar</Link>
                </div>
                <div className={styles.shippingAddress}>
                    <p>{orderDetails?.address.street}, {orderDetails?.address.number}</p>
                    <p>{orderDetails?.address.city} - {orderDetails?.address.state} - {orderDetails?.address.postcode}</p>
                </div>
            </div>
            <div className={styles.methodPayment}>
                <div className={styles.methodContent}>
                    <h1>Metódo de pagamento</h1>
                    <Link to="#">Mudar</Link>
                </div>
                <div className={styles.methodInfo}>
                    <div>
                        <p>{orderDetails?.payment_method}</p>
                    </div>
                    { orderDetails?.payment_method === 'Boleto bancário' ? ( <img src={boleto} alt="Boleto bancário"/> ) : ( <img src={card} alt="Cartão de Cŕedito"/> )}
                    
                </div>
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
                        de {orderDetails?.freight.from} a {orderDetails?.freight.to} dias
                    </p>
                    <p>
                        {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(orderDetails?.freight.price))}
                    </p>
                </div>
            </div>
            
            <hr/>
            <div className={styles.freightTotal}>
                <p>
                    Total:
                </p>
                <p>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(orderDetails?.total))}
                </p>
            </div>
            
        </div>
        
        <div className={styles.followOrder}>
            <h1>
                Acompanhe seu Pedido
            </h1>
            <ul className={styles.followEvents}>
                <li>
                    { orderDetails?.status === 'Aguardando pagamento' ? ( <span className={styles.afterEvent} style={{background: 'var(--finished)'}}></span> ) : ( <span className={styles.afterEvent} style={{background: 'var(--secundary-content-color)'}}></span> )}
                    
                    <span className={styles.eventTitle}>
                        Aguardando Pagamento
                    </span>
                </li>
                <li>
                    { orderDetails?.status === 'Pagamento aprovado' ? ( <span className={styles.afterEvent} style={{background: 'var(--finished)'}}></span> ) : ( <span className={styles.afterEvent} style={{background: 'var(--secundary-content-color)'}}></span> )}
                    <span className={styles.eventTitle}>
                        Pagamento Aprovado
                    </span>
                </li>
                <li>
                    { orderDetails?.status === 'Pedido em separação' ? ( <span className={styles.afterEvent} style={{background: 'var(--finished)'}}></span> ) : ( <span className={styles.afterEvent} style={{background: 'var(--secundary-content-color)'}}></span> )}
                    <span className={styles.eventTitle}>
                        Pedido em Separação
                    </span>
                </li>
                <li>
                    { orderDetails?.status === 'Pedido em transporte' ? ( <span className={styles.afterEvent} style={{background: 'var(--finished)'}}></span> ) : ( <span className={styles.afterEvent} style={{background: 'var(--secundary-content-color)'}}></span> )}
                    <span className={styles.eventTitle}>
                        Pedido em Transporte
                    </span>
                </li>
                <li>
                    { orderDetails?.status === 'Pedido entregue' ? ( <span className={styles.afterEvent} style={{background: 'var(--finished)'}}></span> ) : ( <span className={styles.afterEvent} style={{background: 'var(--secundary-content-color)'}}></span> )}
                    <span className={styles.eventTitle}>
                        Pedido Entregue
                    </span>
                </li>
            </ul>
        </div>
    </div>

  );
};
