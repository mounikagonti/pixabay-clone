import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineCollections } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { getPixabayApi } from "../../redux/slice/PixabaySlice";

const Grid = () => {
  const [likesCount, setLikesCount] = useState(0);
  console.log("likesCount", likesCount);
  const { pixabayData }: any = useSelector<any>((state: any) => state.pixabay);
  console.log("pixabayData", pixabayData.hits);
  const hitsArray = pixabayData.hits;
  console.log("hitsArray", hitsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPixabayApi());
  }, []);
  return (
    <div className="container">
      <div className="loop_wrapper">
        {hitsArray?.map((item: any) => (
          <div className="grid_wrapper" key={item?.id}>
            <div className="imageOne_container">
              <Image
                src={item?.largeImageURL}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="grid_container">
              <div className="grid_left">
                <p className="text">{item?.tags.split("   ")}</p>
                {/* <p className="text">{item?.tags[2]}</p>
              <p className="text">{item?.tags[3]}</p> */}
              </div>
              <div className="grid_right">
                <div className="like_wrapper right">
                  <div className="like">
                    <FcLike />
                  </div>
                  <div className="number">{item?.likes}</div>
                </div>
                <div className="comment_wrapper right">
                  <div className="comment">
                    <FaRegComment />
                  </div>
                  <div className="number">{item?.comments}</div>
                </div>
                <a
                  className="collection right"
                  href={item?.largeImageURL}
                  download={true}
                  target="_blank"
                >
                  <MdOutlineCollections />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
