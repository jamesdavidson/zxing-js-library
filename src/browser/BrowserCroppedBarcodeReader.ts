import { BrowserBarcodeReader } from './BrowserBarcodeReader';

export class BrowserCroppedBarcodeReader extends BrowserBarcodeReader {

  public drawFrameOnCanvas(
    srcElement: HTMLVideoElement,
    dimensions = {
      sx: srcElement.videoWidth * 0.25,
      sy: srcElement.videoHeight * 0.25,
      sWidth: srcElement.videoWidth * 0.5,
      sHeight: srcElement.videoHeight * 0.5,
      dx: 0,
      dy: 0,
      dWidth: srcElement.videoWidth * 0.5,
      dHeight: srcElement.videoHeight * 0.5,
    },
    canvasElementContext = this.captureCanvasContext
  ) {
    canvasElementContext.drawImage(
      srcElement,
      dimensions.sx,
      dimensions.sy,
      dimensions.sWidth,
      dimensions.sHeight,
      dimensions.dx,
      dimensions.dy,
      dimensions.dWidth,
      dimensions.dHeight
    );
  }

}
