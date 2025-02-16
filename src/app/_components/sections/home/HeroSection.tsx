import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full py-2  min-h-[300px]  shadow-md pb-4 flex flex-col items-center  rounded-md  bg-[#f9f9f9]">
      <div className="w-full py-1 px-7  relative flex flex-col items-between md:items-center md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl mb-8 font-smeibold">Welcome In Your Store</h1>
          <p>
            Full Store that available all categories for you , Height quality
            and pefromacement,fast delveriy for you and,Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quae ducimus quis repellat nobis
            ad hic cupiditate nam labore sunt dignissimos possimus ea obcaecati
            voluptate unde, nihil maiores harum dolorem quia!
          </p>

          <Link
            className="text-prim bg-neutral-800 px-2 py-1 rounded-md hover:tracking-wider duration-300 w-fit"
            href="/about"
          >
            About us
          </Link>
        </div>
        <div>
          <div className="">
            <Image
              priority
              src={"/phone_png_image.png"}
              alt="3d store image"
              className="image-photo"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
      <Link
        href={`/register`}
        className="buy-btn w-[100px] h-[40px] flex items-center justify-center"
      >
        Start Now
      </Link>
    </div>
  );
};

export default HeroSection;
