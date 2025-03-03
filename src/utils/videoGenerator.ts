// Mock video generator utility

// Sample video URLs for demonstration
const sampleVideos = {
    'text-to-video': [
      'https://assets.mixkit.co/videos/preview/mixkit-typing-on-smartphone-in-the-dark-4353-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-video-call-4353-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-woman-running-above-the-camera-on-a-running-track-32807-large.mp4'
    ],
    'image-to-video': [
      'https://assets.mixkit.co/videos/preview/mixkit-woman-taking-pictures-of-the-sunset-1526-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4'
    ]
  };
  
  /**
   * Generates a mock video URL based on the project type
   * @param type The type of video project
   * @returns A URL to a sample video
   */
  export const generateMockVideo = (type: 'text-to-video' | 'image-to-video'): string => {
    const videos = sampleVideos[type];
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  };
  
  /**
   * Downloads a video from a URL
   * @param url The URL of the video to download
   * @param filename The name to save the file as
   */
  export const downloadVideo = async (url: string, filename: string = 'tikfusion-video.mp4'): Promise<void> => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (error) {
      console.error('Error downloading video:', error);
      throw new Error('Failed to download video');
    }
  };