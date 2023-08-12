import React from "react";

export default function Item() {
  return (
    <>
      <div className="boder border-danger border-3">
        <div class="card ">
          <img
            src="https://chungcuhonghaecocity.com/wp-content/uploads/2022/10/meme-meo-khoc-5.jpg"
            alt=""
            width="100%"
            height="160px"
            className="card-img-top"
          />
          <div class="card-body text-center">
            <h5 class="card-title ">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-bottom text-center p-2 bg-light-subtle border-top border-2">
            <a href="#" class="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
