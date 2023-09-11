const Message = ({ me }) => {
    if (me) {
      return <MyMessage />;
    } else {
      return <GuestMessage />;
    }
  };
  
  const MyMessage = () => {
    return (
      <div className="w-full flex justify-end">
        <div className="bg-blue-400 text-white rounded-lg p-2 w-44 mt-2">
          <p>Viet</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = () => {
    return (
      <div className="w-full flex justify-start">
        <div className="border-2 text-gray-500 rounded-lg p-2 w-44 mt-2">
          <p>Hi there</p>
        </div>
      </div>
    );
  };
  
  export default Message;
  