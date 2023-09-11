import Image from "next/image"
import { Row, Col } from "antd"

const UserContact = () => {
  return (
    <div className="border w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2 z-30">
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
                <div className="truncate_2_lines">
                    <p className="text-xs">Bạn: Lorem ipsum </p>

                </div>
            </div>
            </Col>
            <Col span={5}>
            <div className="w-full flex flex-col h-12">
                <div>
                    <p className="text-sm">12:30pm</p>
                </div>
                <div className="w-6 h-6 bg-blue-700 text-white rounded-full absolute bottom-0 right-4 text-center flex items-center justify-center">
                    <p className="text-center font-bold">2</p>
                </div>
            </div>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default UserContact
