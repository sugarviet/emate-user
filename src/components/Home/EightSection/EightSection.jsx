import Image from "next/image";

import styles from './EightSection.module.css';

const EightSection = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Tham gia ngay cùng EMate</h1>
        <button className={styles.btn}>Bắt đầu</button>

        <Image src="/images/pinkDot4.png" alt="img" width={150} height={150} className={styles.pink_dot_first}/>
        <Image src="/images/pinkDot5.png" alt="img" width={100} height={100} className={styles.pink_dot_second}/>
      <Image src="/images/yellowDot2.png" alt="img" width={120} height={120} className={styles.yellow_dot_first}/>
      <Image src="/images/yellowDot2.png" alt="img" width={100} height={100} className={styles.yellow_dot_second}/>
    </div>
  )
}

export default EightSection
