import { useState } from "react";
import UiButton from "../ui/UiButton";
import styles from "./ProductDemo.module.scss";
import UiModal from "../ui/UiModal";
import ReactPlayer from "react-player";
import styled from "styled-components";
import sizes from "@/utils/sizes";

export default function ProductDemo() {
  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <div className={styles.product_demo}>
      <div className={styles.product_demo_banner} />
      <div className={styles.watch_demo}>
        <UiButton onClick={() => setOpenVideoModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M10.9702 0C5.45021 0 0.970215 4.48 0.970215 10C0.970215 15.52 5.45021 20 10.9702 20C16.4902 20 20.9702 15.52 20.9702 10C20.9702 4.48 16.5002 0 10.9702 0ZM13.9702 12.23L11.0702 13.9C10.7102 14.11 10.3102 14.21 9.92021 14.21C9.52022 14.21 9.13021 14.11 8.77022 13.9C8.05021 13.48 7.62021 12.74 7.62021 11.9V8.55C7.62021 7.72 8.05021 6.97 8.77022 6.55C9.49022 6.13 10.3502 6.13 11.0802 6.55L13.9802 8.22C14.7002 8.64 15.1302 9.38 15.1302 10.22C15.1302 11.06 14.7002 11.81 13.9702 12.23Z"
              fill="white"
            />
          </svg>
          Watch Product Demo
        </UiButton>
      </div>
      {openVideoModal && (
        <UiModal
          position="center"
          isVisible={openVideoModal}
          onClose={() => setOpenVideoModal(false)}
        >
          <VideoPlayerWrapper>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=n_kxIfte0Rs"
              height="55vh"
              width="85%"
              controls={true}
            />
          </VideoPlayerWrapper>
        </UiModal>
      )}
    </div>
  );
}

const VideoPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 24px;

  @media only screen and (max-width: ${sizes.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;
