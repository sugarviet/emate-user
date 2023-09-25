import Image from "next/image";

const Message = ({ me }) => {
    if (me) {
      return <MyMessage />;
    } else {
      return <GuestMessage />;
    }
  };
  
  const MyMessage = () => {
    return (
      <div className="w-full flex justify-end items-center gap-2 box-border">
        <p className="text-gray-400">12:30 PM</p>
        <div className="primary_bg_light_blue text-white rounded-3xl p-2 w-fit mt-2 max-w-sm box-border">
          <p className="p-1 text-black">Nice to meet you uuuu Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente sequi dolores harum illo quod odit voluptatum corporis at. Reprehenderit illo iure corrupti architecto earum ducimus veritatis aliquam, consequatur dicta.</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = () => {
    return (
      <div className="w-full flex justify-start items-center gap-2">
        <Image src={'/character/chauAnhTu.png'} alt="user" width={40} height={40} className="rounded-full"/>
        <div className="text-gray-500 rounded-3xl p-2 w-fit mt-2 max-w-sm pink_border_color">
          <p className="p-1">Hi there</p>
        </div>
        <p className="text-gray-400">12:30 PM</p>
      </div>
    );
  };
  
  export default Message;
  