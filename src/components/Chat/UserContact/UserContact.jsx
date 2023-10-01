import Image from "next/image"
import { Row, Col } from "antd"

const UserContact = ({message}) => {
    const {name, img, time, messageTo, number} = message;
  return (
    <div className="pink_border_color w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2 z-30 overflow-hidden bg-white">
        <Row className="translate-y-3" align="middle" justify="center" >
            <Col span={4}>
            <div className="flex items-center rounded-full relative h-fit w-fit bg-red-700">
            <Image src={img} height={45} width={45} alt="avt" className="rounded-full"/>
            <div className="w-4 h-4 bg-green-600 rounded-full absolute bottom-0 right-0"></div>
        </div>
            </Col>
            <Col span={15}>
            <div className="flex flex-col flex-1">
                <h1 className="text-lg font-bold md:text-sm  lg:text-lg lg:font-bold ">{name}</h1>
                <div className="truncate_2_lines">
                    <p className="text-xs">Bạn: {messageTo} </p>

                </div>
            </div>
            </Col>
            <Col span={5}>
            <div className="w-full flex flex-col h-12 items-center">
                <div>
                    <p className="text-sm">{time}</p>
                </div>
                <div className="w-5 h-5 lg:w-6 lg:h-6 primary_bg_pink_color text-white rounded-full absolute bottom-0 right-4 text-center flex items-center justify-center">
                    <p className="text-center lg:font-bold font-semibold ">{number}</p>
                </div>
            </div>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default UserContact
