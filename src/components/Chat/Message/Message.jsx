import Image from "next/image";

const Message = ({msg}) => {
    if (msg.to) {
      return <MyMessage msg={msg}/>;
    } else {
      return <GuestMessage msg={msg}/>;
    }
  };
  
  const MyMessage = ({msg}) => {
    return (
      <div className="w-full flex justify-end items-center gap-2 box-border">
        <p className="text-gray-400">{msg.time}</p>
        <div className="primary_bg_light_blue text-white rounded-3xl p-2 w-fit mt-2 max-w-sm box-border">
          <p className="p-1 text-black">{msg.message}</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = ({msg}) => {
    return (
      <div className="w-full flex justify-start items-center gap-2">
        <Image src={'/character/chauAnhTu.png'} alt="user" width={40} height={40} className="rounded-full"/>
        <div className="text-gray-500 rounded-3xl p-2 w-fit mt-2 max-w-sm pink_border_color">
          <p className="p-1">{msg.message}</p>
        </div>
        <p className="text-gray-400">{msg.time}</p>
      </div>
    );
  };
  
  export default Message;
  