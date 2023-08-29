import Image from "next/image";

import styles from './ThirdSection.module.css'

const ThirdSection = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bạn học tốt hơn khi <br />
        chúng ta học cùng nhau</h1>
        <p className="text-center">Với EMate, bạn sẽ tìm thấy một cộng đồng gồm những sinh viên tận tụy đang tìm kiếm một đối tác học tập để giúp họ đạt được mục tiêu của mình. Cho dù bạn đang gặp khó khăn với một chủ đề cụ thể hay chỉ cần thêm động lực để tiếp tục đi đúng hướng, EMate cung cấp nền tảng hoàn hảo để bạn kết nối với những cá nhân có cùng chí hướng sẵn sàng hỗ trợ và khuyến khích.</p>
        <div>
            <Image src="/images/homeImgDiscuss.png" alt="study-together" height={800} width={800}/>
        </div>
        <button className={styles.btn}>Thử ngay</button>
    </div>
  )
}

export default ThirdSection
