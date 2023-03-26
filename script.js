import Card from "./Card.js";

const ornamentCard = new Card(
   "Ornament Variety Pack",
   "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1487773-847&recipeName=680",
   "Get a great variety of bulbs, tinsel, and more for your tree!",
   50,
   34.99,
   15.99,
   4,
   "md",
   "shadow-neutral-50",
   "shadow-green-400",
   "text-red-600",
   "mx-2 mb-2"
);

const topperCard = new Card(
   "Festive Tree Topper",
   "https://ecx.images-amazon.com/images/I/413ng%2Bcoh7L.jpg",
   "Celebrate the history of Christmas with this tree topper!",
   55,
   25.99,
   10.99,
   4,
   "md",
   "shadow-neutral-50",
   "shadow-green-400",
   "text-red-600",
   "mx-2 mb-2"
);

const treeCard = new Card(
   "Artificial Christmas Tree",
   "https://images-na.ssl-images-amazon.com/images/I/81b7EZjEgOL._SL1500_.jpg",
   "Get the perfect tree for your holiday, without the hassle of watering!",
   65,
   70.99,
   25.99,
   4,
   "md",
   "shadow-neutral-50",
   "shadow-green-400",
   "text-red-600",
   "mx-2 mb-2"
);

const tinselCard = new Card(
   "Silver Tinsel",
   "https://thumb7.shutterstock.com/image-photo/redirected-150nw-42857893.jpg",
   "Get the perfect length of Tinsel to decorate your house!",
   70,
   20.99,
   5.99,
   4,
   "md",
   "shadow-neutral-50",
   "shadow-green-400",
   "text-red-600",
   "mx-2 mb-2"
);

const cardContent = `
<li class="border-${ornamentCard.cardBorderWidth} border-blue-600 rounded-${ornamentCard.cardCornersRounded} overflow-hidden shadow-lg ${ornamentCard.cardShadow} hover:${ornamentCard.cardShadowOnHover} bg-blue-400 ${ornamentCard.cardMargins} ${ornamentCard.cardFontColor} hover:scale-125" >
  <img src=${ornamentCard.imageSource}>
    <div class="pb-3 text-justify ml-2">
      <p class="font-semibold mb-2">
        ${ornamentCard.cardTitle}
      </p>
      <p class="mr-2">
        ${ornamentCard.dealDetails}
      </p>
      <span class="bg-cyan-700 rounded-lg text-lg text-bold px-2.5 py-1 italic">
        ${ornamentCard.cardDiscount}%
      </span>
    </div>
</li>
<li class="border-${topperCard.cardBorderWidth} border-blue-600 rounded-${topperCard.cardCornersRounded} overflow-hidden shadow-lg ${topperCard.cardShadow} hover:${topperCard.cardShadowOnHover} bg-blue-400 ${topperCard.cardMargins} ${topperCard.cardFontColor} hover:scale-125" >
  <img src=${topperCard.imageSource}>
    <div class="pb-3 text-justify ml-2">
      <p class="font-semibold mb-2">
        ${topperCard.cardTitle}
      </p>
      <p class="mr-2">
        ${topperCard.dealDetails}
      </p>
      <span class="bg-cyan-700 rounded-lg text-lg text-bold px-2.5 py-1 italic">
        ${topperCard.cardDiscount}%
      </span>
    </div>
</li>
<li class="border-${treeCard.cardBorderWidth} border-blue-600 rounded-${treeCard.cardCornersRounded} overflow-hidden shadow-lg ${treeCard.cardShadow} hover:${treeCard.cardShadowOnHover} bg-blue-400 ${treeCard.cardMargins} ${treeCard.cardFontColor} hover:scale-125" >
  <img src=${treeCard.imageSource}>
    <div class="pb-3 text-justify ml-2">
      <p class="font-semibold mb-2">
        ${treeCard.cardTitle}
      </p>
      <p class="mr-2">
        ${treeCard.dealDetails}
      </p>
      <span class="bg-cyan-700 rounded-lg text-lg text-bold px-2.5 py-1 italic">
        ${treeCard.cardDiscount}%
      </span>
    </div>
</li>
<li class="border-${tinselCard.cardBorderWidth} border-blue-600 rounded-${tinselCard.cardCornersRounded} overflow-hidden shadow-lg ${tinselCard.cardShadow} hover:${tinselCard.cardShadowOnHover} bg-blue-400 ${tinselCard.cardMargins} ${tinselCard.cardFontColor} hover:scale-125" >
  <img src=${tinselCard.imageSource} class="w-full">
    <div class="pb-3 text-justify ml-2">
      <p class="font-semibold mb-2">
        ${tinselCard.cardTitle}
      </p>
      <p class="mr-2">
        ${tinselCard.dealDetails}
      </p>
      <span class="bg-cyan-700 rounded-lg text-lg text-bold px-2.5 py-1 italic">
        ${tinselCard.cardDiscount}%
      </span>
    </div>
</li>
`;

const tableContent = `
<tr>
    <th class="border-2 border-black text-cyan-200 bg-purple-600 py-1 px-2">Item</th>
    <th class="border-2 border-black text-cyan-200 bg-purple-600 py-1 px-2">Original Price</th>
    <th class="border-2 border-black text-cyan-200 bg-purple-600 py-1 px-2">Today's Deal</th>
</tr>

<tr class="border-2 border-black">
    <td>${ornamentCard.cardTitle}</td>
    <td>\$${ornamentCard.cardOriginal}</td>
    <td><em>\$${ornamentCard.cardDiscounted}</em></td>
</tr>

<tr class="bg-purple-600 border-2 border-black">
    <td>${topperCard.cardTitle}</td>
    <td>\$${topperCard.cardOriginal}</td>
    <td><em>\$${topperCard.cardDiscounted}</em></td>
</tr>

<tr class="border-2 border-black">
    <td>${treeCard.cardTitle}</td>
    <td>\$${treeCard.cardOriginal}</td>
    <td><em>\$${treeCard.cardDiscounted}</em></td>
</tr>

<tr class="bg-purple-600 border-2 border-black">
    <td>${tinselCard.cardTitle}</td>
    <td>\$${tinselCard.cardOriginal}</td>
    <td><em>\$${tinselCard.cardDiscounted}</em></td>
</tr>
`;

document.getElementById("dealCards").innerHTML = cardContent;
document.getElementById("dealTable").innerHTML = tableContent;

console.log("The tinselCard object:", tinselCard);
console.log("The cardDiscounted value:", tinselCard.cardDiscounted);