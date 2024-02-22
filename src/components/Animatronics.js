import React, { useEffect, useState } from "react";
import Images from "../Images.json";
import { Container } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Modal, Box } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const Animation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % Images[2].list.length);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + Images[2].list.length) % Images[2].list.length
    );
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <div className="animatronics-div" >
      <h2 className="hr-lines1" style={{ color: "darkgray" }}>
        Animatronics
      </h2>
      <Container>
        <OwlCarousel autoplay loop margin={6} nav={false} dots={false}>
          {Images &&
            Images[2].list.map((image, index) => (
              <div
                key={index}
                className="item"
                onClick={() => handleImageClick(image.url, index)}
              >
                <img
                  src={image.url}
                  alt={`img-${index}`}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    maxWidth: "400px",
                  }}
                />
              </div>
            ))}
        </OwlCarousel>
      </Container>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: '90vw', 
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
          className="modal-box"
        >
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {Images &&
                Images[2].list.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      selectedImageIndex === index ? "active" : ""
                    }`}
                  >
                    {selectedImageIndex === index && (
                      <img
                        src={image.url}
                        className="d-block w-100"
                        alt={`img-${index}`}
                      />
                    )}
                  </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrevClick}>
              <FaChevronLeft />
            </button>
            <button className="carousel-control-next" onClick={handleNextClick}>
              <FaChevronRight />
            </button>
          </div>
          <button className="close-carousel" onClick={handleCloseModal}>
            <IoCloseCircleOutline />
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Animation;
