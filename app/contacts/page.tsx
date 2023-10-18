import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className = "w-screen h-[150vh] xl:h-[125vh]">
      <h1 className = "py-20 text-3xl text-center">We're a call away</h1>
      <div className = "grid grid-cols-1 md:flex md:items-center md:justify-center md:px-20 gap-8">
        <div className = "w-screen h-64 xl:w-96 xl:h-64 shadow-2xl bg-[#F8F5F0]">
          <h1 className = "pt-12 pb-8 text-center">Show us a message at one of our socials!</h1>
          <div className = "flex justify-center gap-2 py-4">
            <img
            className = "w-8 h-8"
            alt = "facebook logo"
            src = "https://drive.google.com/uc?export=view?&id=1-Iy4rcPKiQnP9HSMuoI97KPbecQHPOqz">
            </img>
            <h1 className = "">Paccinos2022</h1>
          </div>
          <div className = "flex justify-center gap-2 py-4">
            <img
            className = "w-8 h-8"
            alt = "instagram logo"
            src = "https://drive.google.com/uc?export=view?&id=1ovRP13PuneWijnXfYDxxQu0VN9lSONue">
            </img>
            <h1 className = "">Paccinos2022</h1>
          </div>
        </div>
        <div className = "w-screen h-64 xl:w-96 xl:h-64 shadow-2xl bg-[#F8F5F0]">
          <h1 className = "pt-12 pb-8 text-center">Contact Us!</h1>
          <div className = "flex justify-center gap-2 py-4">
            <img
            className = "w-8 h-8"
            alt = "Phone logo"
            src = "https://drive.google.com/uc?export=view?&id=1wF19-sehqxu8rt22Px56c912cSXQAsDy">
            </img>
            <h1 className = "">Paccinos2022</h1>
          </div>
          <div className = "flex justify-center gap-2 py-4">
            <img
            className = "w-8 h-8"
            alt = "Mail Logo"
            src = "https://drive.google.com/uc?export=view?&id=1YL_6vz_SqW4D-XYyeE7JYmv0ZlKyfQDR">
            </img>
            <h1 className = "">Paccinos2022</h1>
          </div>
        </div>
      </div>
      <h1 className= "py-20 text-3xl text-center">Our Location</h1>
      <div className = "flex justify-center py-4">
        <div className = "w-80 h-[52rem] md:w-[52rem] md:h-[32rem] bg-[#F8F5F0] shadow-2xl">
          <div className = "grid grid-cols-1 justify-items-center md:flex md:justify-center">
            <img
            className = "w-80 h-80 md:w-[26rem] md:h-96"
            alt = "picture location"
            src = "https://drive.google.com/uc?export=view?&id=16fbHvMFgUyVB-ShL1N8eER5op7KIRWIr">
            </img>
            <img
            className = "w-80 h-80 md:w-[26rem] md:h-96"
            alt = "google map location"
            src = "https://drive.google.com/uc?export=view?&id=1FxYHakmBvO_CnUgdVs6KU5-TfqzGFMKp">
            </img>
          </div>
          <h1 className = "pt-12 text-center text-md md:text-lg">Blk 7 Lot 16 Soldiers Home Batasan Hills Quezon City, Philippines</h1>
        </div>
      </div>
    </div>
  );
};
