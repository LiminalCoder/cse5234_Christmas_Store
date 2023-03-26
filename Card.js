class Card {
   constructor (
      title,
      imageSource,
      details,
      discountPercent,
      originalPrice,
      discountPrice,
      borderThickness,
      roundedCorners,
      shadowColorStandard,
      shadowColorHover,
      fontColor,
      spacing
   ) {
      this.cardTitle = title;
      this.imageSource = imageSource;
      this.dealDetails = details;
      this.cardDiscount = discountPercent;
      this.cardOriginal = originalPrice;
      this.cardDiscounted = discountPrice;
      this.cardBorderWidth = borderThickness;
      this.cardCornersRounded = roundedCorners;
      this.cardShadow = shadowColorStandard;
      this.cardShadowOnHover = shadowColorHover;
      this.cardFontColor = fontColor;
      this.cardMargins = spacing;
   }
}

export default Card;