import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path = "#" ,height}) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} className={`w-96 ${height ? `h-${height}` : 'h-full'}`}  />
        </div>
        <div className="card-details">
          <Link href={path} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="title-link">
              <TitleSm title={data.title} />
            </a>
          </Link>
          {caption && (
            <Link href={`${path}/${data.id}`} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                {caption} <HiOutlineArrowRight className="link-icon" />
              </a>
            </Link>
          )}
          <div className="flex">
            <span>{data.category}</span>{" "}
            {data.date && <span>/ {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}>- {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
