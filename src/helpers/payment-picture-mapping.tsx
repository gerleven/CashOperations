import cashPicture from "../assets/icons/cash-32.svg";
import qrPicture from "../assets/icons/qr_code-24.svg";
import cardPicture from "../assets/icons/credit_card-32.svg";

import thumbnailCashPicture from "../assets/thumbnails/cash-16.svg";
import thumbnailQrPicture from "../assets/thumbnails/qr_code-16.svg";
import thumbnailCardPicture from "../assets/thumbnails/credit_card-16.svg";

export const pictureMap: { [key: string]: string } = {
  cash: cashPicture,
  qr: qrPicture,
  card: cardPicture,
};
export const thumbnailPictureMap: { [key: string]: string } = {
  cash: thumbnailCashPicture,
  qr: thumbnailQrPicture,
  card: thumbnailCardPicture,
};