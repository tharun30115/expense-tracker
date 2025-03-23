import user from "../assets/images/user.png";
import {
  UserIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const buttons = [
  { id: 1, title: "Account Settings", icon: UserIcon },
  { id: 2, title: "Privacy Settings", icon: Cog6ToothIcon },
  { id: 3, title: "Payment Methods", icon: CreditCardIcon },
  { id: 4, title: "Logout", icon: ArrowLeftStartOnRectangleIcon },
];

const Profile = () => {
  return (
    <div className="xl:w-[30%] w-full flex flex-col xl:bg-[#fbfcff] bg-white h-full rounded-r-2xl border-l border-[#e5e5e5]/70 p-8">
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <div className="rounded-full bg-[#c5edfd] h-[130px] w-[130px] flex items-center justify-center">
          <img src={user} alt="user" className="w-[70%]" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-primary">SquishyTraveller</span>
          <span className="text-sm text-primary">tom-SquishyTraveller@gmail.com</span>
        </div>
        <div className="w-full flex items-center justify-around mt-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-sm text-primary">Total Balance</span>
            <span className="text-2xl font-semibold text-primary">$10,634,35</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-sm text-primary">Account Status</span>
            <span className="text-2xl font-semibold text-green-500">Active</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-5 overflow-y-auto max-h-full">
          {buttons.map(({ id, title, icon: Icon }) => (
            <div
              key={id}
              className="w-full mx-auto bg-[#f0f0f0] rounded-lg py-5 flex items-center justify-center gap-2 cursor-pointer">
              <Icon className="w-[22px] h-[22px] text-primary" />
              <span className="text-primary font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
