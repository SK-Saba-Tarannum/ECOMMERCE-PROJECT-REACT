// import React from "react"
// import { Review } from "@/pages/types"
// import Rating from  "./rating";
// type ReviewsBYGroup={
//     [key:PropertyKey]:Review[];
// }

// export default function Reviews({reviews}:{ reviews: Review[]} ){
//     console.log(reviews)
//     const reviewsByGroup: ReviewsBYGroup=(Object as any).groupBy(reviews,(review: Review)=>review.rating);
//     console.log(reviewsByGroup)
//     return Object.entries(reviewsByGroup).reverse().map(([rating, reviewList])=>{
//       return(  
//         <section key={rating}>
//             <Rating rating={Number(rating)}/>
//             <p>{rating}</p>
//             <p>{reviewList.length}Reviews</p>
//         </section>
//         );
//     })
// }

import { Review } from "@/pages/types";
import Rating from "./rating";
import { Progress } from "@/components/ui/progress";
type ReviewsByGroup = {
  [key: PropertyKey]: Review[];
};

export default function Reviews({ reviews }: { reviews: Review[] }) {
  console.log(reviews);
  const reviewsByGroup: ReviewsByGroup = (Object as any).groupBy(reviews, (review: Review) => review.rating);

  return Object.entries(reviewsByGroup)
    .reverse()
    .map(([rating, reviewList]) => {
      return (
        <section className="grid grid-cols-2 gap-2" key={rating}>
          <p className="flex items-center gap-1">
            <Rating rating={Number(rating)} />
          </p>
          <p className="flex items-center gap-1">
            <Progress value={(reviewList.length / reviews.length) * 100} max={100} />
            <span className="text-xs">{((reviewList.length / reviews.length) * 100).toFixed(2)}%</span>
          </p>
        </section>
      );
    });
}