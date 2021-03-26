let videoPopup = null

export const setVideoPopupRef = (videoPopupRef) => {
  videoPopup = videoPopupRef
}

export const minimizeVideo = (...args) => videoPopup?.onMinimize(...args)

export const pauseMinimizedVideo = () => videoPopup?.isMinimizedRef.current && videoPopup?.setIsPaused(true)
export const playMinimizedVideo = () => videoPopup?.isMinimizedRef.current && videoPopup?.setIsPaused(false)

export const onNewVideoSelected = (videoData, params) => videoPopup?.onNewVideoSelected(videoData, params)
