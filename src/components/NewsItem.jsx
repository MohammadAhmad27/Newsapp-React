import React from "react";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="my-3">
      <div className="card">
        <div>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://a0.muscache.com/im/pictures/miso/Hosting-53722166/original/4db55141-6bd5-488d-9b66-a8cdaee3b5e6.jpeg?im_w=1200"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text mb-3">
            <small class="text-body-dark">
              By {author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
