from pytubefix import YouTube
import os


url = input("Enter the YouTube video URL: ")
yt = YouTube(url)

# Download 1080p video-only stream

res = input("Enter the resolution 360,480,720,1080: ")
res = res + "p" 

print(f"Downloading {res} video...")
video_stream = yt.streams.filter(res=res, mime_type="video/mp4", progressive=False).first()
video_stream.download(filename="video.mp4")

if res == "1080p":
    # Download audio-only stream
    audio_stream = yt.streams.filter(only_audio=True, mime_type="audio/mp4").first()
    audio_stream.download(filename="audio.mp4")

    # Merge them using ffmpeg (from terminal)
    os.system('ffmpeg -i video.mp4 -i audio.mp4 -c copy output.mp4')
    os.system('rm video.mp4 audio.mp4')


print("Download complete! The video is saved as 'output.mp4'.")

