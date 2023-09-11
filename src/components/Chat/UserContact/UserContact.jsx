import Image from "next/image"
import { Row, Col } from "antd"

const UserContact = () => {
  return (
    <div className="border w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2">
        <Row className=" translate-y-3" gutter={[4, 16]} align="middle" justify="center" >
            <Col span={6} >
            <div className="flex items-center rounded-full relative">
            <Image src="/character/chauAnhTu.png" height={45} width={45} alt="avt" className="rounded-full"/>
            <div className="w-4 h-4 bg-green-600 rounded-full absolute bottom-0 right-4"></div>
        </div>
            </Col>
            <Col span={13}>
            <div>
                <h1 className="text-lg font-bold">Chau Anh Tu</h1>
                <p className="">Lorem ipsum ...</p>
            </div>
            </Col>
            <Col span={5}>
            <div className="w-full">
                <p className="text-sm">12:30pm</p>
            </div>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default UserContact
