import { RiStarHalfFill, RiStarSFill } from "react-icons/ri";

export const getStars = (evaluate_rate: number) => {
  const fullStars = Math.floor(evaluate_rate / 20);
  const hasHalfStar = evaluate_rate % 20 >= 10;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-0.5 px-1 bg-white rounded-md py-1 items-center  justify-around">
      {Array.from({ length: fullStars }) // array from stars is full colred
        .fill(0)
        .map((_, index) => (
          <RiStarSFill
            key={`full-${index}`}
            className="text-yellow-500 text-[13px]"
          />
        ))}

      {hasHalfStar && (
        <RiStarHalfFill className="text-yellow-500 text-[11px]" />
      )}

      {Array.from({ length: emptyStars })
        .fill(0)
        .map((_, index) => (
          <RiStarSFill
            key={`empty-${index}`}
            className="text-gray-300 text-[13px]"
          />
        ))}
    </div>
  );
};
