const Message = ({ me }) => {
    if (me) {
      return <MyMessage />;
    } else {
      return <GuestMessage />;
    }
  };
  
  const MyMessage = () => {
    return (
      <div className="w-full flex justify-end items-center gap-2">
        <p className="text-gray-400">12:30 PM</p>
        <div className="bg-blue-400 text-white rounded-lg p-2 w-fit mt-2 max-w-sm">
          <p className="">Nice to meet you uuuu Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente sequi dolores harum illo quod odit voluptatum corporis at. Reprehenderit illo iure corrupti architecto earum ducimus veritatis aliquam, consequatur dicta.</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = () => {
    return (
      <div className="w-full flex justify-start items-center gap-2">
        <div className="border-2 text-gray-500 rounded-lg p-2 w-fit mt-2 max-w-sm">
          <p>Hi there</p>
        </div>
        <p className="text-gray-400">12:30 PM</p>
      </div>
    );
  };
  
  export default Message;
  