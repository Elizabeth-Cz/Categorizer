import { FaHeartBroken } from 'react-icons/fa';

const Page = ({ children }) => {
  return (
    <main className="max-w-3xl mx-auto bg-white rounded-lg p-10 drop-shadow-md grow flex flex-col max-[640px]:p-4 max-[812px]:mx-4">
      {children || (
        <div className="flex flex-col items-center gap-4">
          <FaHeartBroken className="text-3xl" />
          <h2 className="text-3xl font-bold text-center">404 page not found</h2>
        </div>
      )}
      <p className="text-xs italic text-[#7f7f7f] mt-auto">
        The information and results provided on this website are for general
        informational purposes only and should not be relied upon as valid or
        accurate. We make no warranties or guarantees regarding the accuracy or
        completeness of this information.
      </p>
    </main>
  );
};

export default Page;
