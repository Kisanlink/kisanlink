import React from 'react';


function VideoContainer() {
  return (
    <div className=" pt-20 bg-white flex items-center justify-center h-screen -m-1.5 overflow-hidden">
      <div className="relative w-full h-full">
        <iframe
          className="absolute  w-full h-full "
          src="https://www.kisanlink.in/wp-content/uploads/final-membership-card-video.mp4"
          title="Full Screen Video"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContainer;
