import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "./plus.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import styled from "styled-components";

const ImageUploader = () => {
  // 이미지 여러 장을 넣을 빈 배열을 초기값으로 할당
  const [images, setImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...images];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    // 최대 이미지 3장까지 업로드 가능 조건
    if (imageUrlLists.length > 3) {
      imageUrlLists = imageUrlLists.slice(0, 3);
    }

    setImages(imageUrlLists);
  };

  console.log(images);

  // x 버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setImages(images.filter((_, index) => index !== id));
  };

  const showBox = () => {
    if (images.length === 0) {
      return (
        <Box>
          <PlusIcon />
          <PlusIcon />
          <PlusIcon />
        </Box>
      );
    } else if (images.length === 1) {
      return (
        <Box>
          <PlusIcon />
          <PlusIcon />
        </Box>
      );
    } else if (images.length === 2) {
      return (
        <Box>
          <PlusIcon />
        </Box>
      );
    }
  };

  return (
    <Container>
      {images && (
        <>
          {images.map((image, id) => (
            <Layout key={id}>
              <img src={image} alt={`${image}-${id}`} />
              <CloseIcon
                className="close_style"
                onClick={() => handleDeleteImage(id)}
              />
            </Layout>
          ))}
        </>
      )}
      <Layout>
        {images.length === 3 ? null : (
          <label htmlFor="input-file" onChange={handleAddImages}>
            <input
              type="file"
              id="input-file"
              multiple
              style={{ display: "none" }}
            />
            {showBox()}
          </label>
        )}
      </Layout>
    </Container>
  );
};

export default ImageUploader;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  position: relative;
  margin: 1rem;

  img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }

  .close_style {
    position: absolute;
    right: 3px;
    top: 3px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
