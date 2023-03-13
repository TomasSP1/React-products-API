import styles from './OneProduct.module.css'

const OneProduct = (props) => {
  console.log(props.items.products)
  return (
    <div className={styles.list}>
        {
            // pirma pasiklausi ar data yra ne undifined su ?
            props.items.products?.map(function(item) {
                return (
                    <div key={item.id} className={styles.oneProduct}>
                        <h2>{item.title}</h2>
                        <h3>{item.brand}</h3>
                        <h4>{item.category}</h4>
                        <p className={styles.description}>{item.description}</p>
                        <img src={item.thumbnail} alt={item.title} className={styles.mainImg}/>
                        <p className={styles.price}>PRICE: {item.price} $</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OneProduct