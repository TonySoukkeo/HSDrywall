import React from "react";
const PhotosModal = ({ id, image, alt }) => {
  return (
    <div id={id} className="modal fade" role="dialog">
      <div className="modal-dialog modal-full" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" type="button" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              style={{
                width: "100%",
                height: "100%"
              }}
              src={image}
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosModal;
