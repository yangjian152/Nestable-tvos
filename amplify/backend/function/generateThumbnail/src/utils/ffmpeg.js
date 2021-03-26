
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

module.exports.generateJpgThumbnail = (filePath, outPath) => new Promise((resolve, reject) => ffmpeg(filePath)
  .on('end', () => resolve(outPath))
  .on('error', reject)
  .screenshot({
    timestamps: ['50%'],
    filename: path.basename(outPath),
    folder: path.dirname(outPath),
    size: '640x?'
  })
)

/*
ffmpeg -i ../src/asset/videos/NSTBL-Portrait.mp4 -filter:v "select='mod(n,24)'" -vcodec libwebp -lossless 1 -preset default -loop 0 -an -vsync 0 output.webp
ffmpeg -i ../src/asset/videos/NSTBL-Portrait.mp4
  -vcodec libwebp
  -lossless 1
  -preset default
  -loop 1
  -an
  -vsync 0
  output.webp
*/

module.exports.generateVideoPreview = (filePath, outPath) => {
  const command = ffmpeg(filePath)
    .videoCodec('libx264')
    .addInputOption(
      '-t', '00:00:13.0',
      '-vsync', '0',
    )
    .addOutputOptions(
      '-preset', 'slow',
      '-an',
    )
    .size('640x?')
  
  return new Promise((resolve, reject) => command
    .on('error', reject)
    .on('end', () => resolve(outPath))
    .save(outPath)
  )
}