import MuxPlayer from '@mux/mux-player-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full p-4">
        <MuxPlayer
          streamType="on-demand"
          playbackId="qN9L1266WOldKYVFYh9DlbqCkiaRyEPDIfaveERMFBA"
          metadata={{
            video_title: "Mux Video",
            viewer_user_id: "user-id-123",
          }}
          autoPlay={false}
          muted={false}
        />
      </div>
    </div>
  );
} 