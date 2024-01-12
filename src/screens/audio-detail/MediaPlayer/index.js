import React, { memo, forwardRef } from 'react';
import Video from 'react-native-video';

const MediaPlayer = forwardRef((props, ref) => {
  const {
    source,
    onEnd,
    style,
    muted = false,
    paused,
    height = 0,
    width = 0,
    onBuffer,
    onReady,
    resizeMode = 'contain',

    ...rest
  } = props;

  return (
    <Video
      {...rest}
      ref={ref}

      source={{
        uri: source,
      }}
      paused={paused}
      muted={muted}
      audioOnly={true}

      posterResizeMode="contain"
      volume={1.0}

      onEnd={onEnd}
      onBuffer={onBuffer}
      onReadyForDisplay={onReady}
      controls={false}
      style={[style, { height, width }]}
    />
  );
});

const propsAreEqual = (prevProps, nextProps) => {
  if (
    prevProps.muted != nextProps.muted ||
    prevProps.paused != nextProps.paused ||
    prevProps.source != nextProps.source
  ) {
    return false;
  }

  return true;
};

MediaPlayer.defaultProps = {
  height: 0,
  width: 0,
  resizeMode: 'contain',
};

export default memo(MediaPlayer, propsAreEqual);
