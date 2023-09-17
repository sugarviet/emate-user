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
        <div className="bg-blue-400 text-white rounded-lg p-2 w-44 mt-2">
          <p className="">Nice to meet you</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = () => {
    return (
      <div className="w-full flex justify-start items-center gap-2">
        <div className="border-2 text-gray-500 rounded-lg p-2 w-44 mt-2">
          <p>Hi there</p>
        </div>
        <p className="text-gray-400">12:30 PM</p>
      </div>
    );
  };
  
  export default Message;
  