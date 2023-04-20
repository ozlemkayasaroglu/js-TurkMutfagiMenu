const menu = [
  {
    id: 1,
    title: "İkili Padişah Tenceresi",
    category: "Çorba",
    img: "https://www.unileverfoodsolutions.com.tr//konsept-uygulamalarimiz/turk-mutfagi/osmanli-mutfagindan-10-corba/jcr:content/parsys/content/textimage_copy_copy_/image.transform/jpeg-optimized/image.1557156688936.jpg",
    desc: `Ramazan boyunca hazırlanan birçok çorba çeşidinin yapımında et ve et suyu kullanılır. Sığır eti ve sığır kemiği ile yapılan ilikli padişah tenceresi ise genellikle Ramazan’a özel olarak yapılan ve pişirmesi biraz uzun süren bir çorba çeşididir. `,
  },
  {
    id: 2,
    title: "Bademli Çorba",
    category: "Çorba",
    img: "https://www.unileverfoodsolutions.com.tr//konsept-uygulamalarimiz/turk-mutfagi/osmanli-mutfagindan-10-corba/jcr:content/parsys/content/textimage_copy_copy/image.transform/jpeg-optimized/image.1557157193179.jpg",
    desc: `Osmanlı mutfağında badem, ceviz, fıstık ve fındık gibi yemişler yemeklerde ve misafirler için hazırlanan sofralarda sıklıkla kullanılırdı. Bademli çorba da özellikle Ramazan ayında iftar yemekleri için yapılan çorbalardan biridir.  `,
  },
  {
    id: 3,
    title: "Düğün Çorbası",
    category: "Çorba",
    img: "https://www.unileverfoodsolutions.com.tr//konsept-uygulamalarimiz/turk-mutfagi/osmanli-mutfagindan-10-corba/jcr:content/parsys/content/textimage_copy_copy__1190395235/image.transform/jpeg-optimized/image.1557157384960.jpg",
    desc: `Kutlama yemeklerinin gözde tariflerinden biri olan düğün çorbası, Ramazan ayında menülerde sıkça tercih edilen çorbalardandır. Kuzu eti ile hazırlandığı için doyurucu ve iştah açıcı bir lezzeti olur. `,
  },
  {
    id: 4,
    title: "Zerde",
    category: "Tatlı",
    img: "https://www.unileverfoodsolutions.com.tr/konsept-uygulamalarimiz/turk-mutfagi/osmanli-ramazan-tatlisi/jcr:content/parsys/content/textimage_copy_81438064/image.transform/jpeg-optimized/image.1557158032716.jpg",
    desc: `Osmanlı mutfağının gözde tatlılarından olan zerde özel günlerde ve Ramazan ayında yapılırdı. Zerde tatlısının bu kadar sevilmesinin nedeni göz alıcı altın rengidir. Zerde yapımında safran, bal, pirinç, gül suyu, kuş üzümü ve nar kullanılır. `,
  },
  {
    id: 5,
    title: "Vişneli Ekmek Kadayıfı",
    category: "Tatlı",
    img: "https://www.unileverfoodsolutions.com.tr//konsept-uygulamalarimiz/turk-mutfagi/osmanli-ramazan-tatlisi/jcr:content/parsys/content/textimage_copy_54633_104035687/image.transform/jpeg-optimized/image.1557158286057.jpg",
    desc: `Yapımı kolay, tadı ise unutulmaz olan vişneli ekmek kadayıfı, oldukça yoğun bir lezzettir. Kızarmış ekmekler ve vişne şurubu kullanılarak hazırlanır. Yakut kırmızı rengiyle iştahları kabartan bu harika tatlı, yanında kaymakla ya da dondurma ile servis edilebilir.`,
  },
  {
    id: 6,
    title: "Ballı Derviş Lokması",
    category: "Tatlı",
    img: "https://www.unileverfoodsolutions.com.tr//konsept-uygulamalarimiz/turk-mutfagi/osmanli-ramazan-tatlisi/jcr:content/parsys/content/textimage_copy_54633/image.transform/jpeg-optimized/image.1557158181138.jpg",
    desc: `Günümüzde büyük bir popülarite kazanan lokma, Osmanlı mutfağının en sevilen tatlılarındandır. Ramazan ayında yapılan ballı derviş lokması, un haline getirilmiş peksimetin mayalanması ile hazırlanan bir hamurdan yapılır. `,
  },
  {
    id: 7,
    title: "Maydanozlu Yahni",
    category: "Ana-Yemek",
    img: "https://www.unileverfoodsolutions.com.tr//dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/general/maydanozlu-yahni/main-header.jpg",
    desc: `Mandalozlu yahni, Osmanlı mutfağına ait bir et yemeğidir. Genellikle kuzu eti kullanılır ve et, sebzelerle birlikte bir tencereye konularak kısık ateşte pişirilir. Baharatlar ve mandalina kabukları da yemeğe eklenir. `,
  },
  {
    id: 8,
    title: "Kuru Meyveli Kuzu Tandır",
    category: "Ana-Yemek",
    img: "https://www.unileverfoodsolutions.com.tr//dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/general/kuru-meyveli-kuzu-tandır/main-header.jpg",
    desc: `Kuru meyveli kuzu tandır, Osmanlı mutfağına ait bir yemektir. Kuzu eti, baharatlar ve kuru meyvelerle birlikte fırında uzun süre pişirilir. Kuzu eti, baharatlar ve kuru meyveler arasındaki tatlı-tuzlu denge, yemeğin kendine has lezzetini oluşturur.`,
  },
  {
    id: 9,
    title: "İç Pilav",
    category: "Ana-Yemek",
    img: "https://www.unileverfoodsolutions.com.tr//dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/general/i̇ç-pilavı/main-header.jpg",
    desc: `İç pilav, Türk mutfağına özgü bir yemektir. Genellikle tavuk veya kuzu eti ile birlikte servis edilir. İç pilavın temel malzemeleri arasında pirinç, kıyma, baharatlar ve bazen de kuru yemişler yer alır. `,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const listCategory = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-danger btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const btnCategory = document.querySelectorAll(".btn-item");

  btnCategory.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);

      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        listMenu(menu);
      } else {
        listMenu(menuCategory);
      }
    });
  });
}



function listMenu(menu) {
  const displayMenu = document.getElementsByClassName("section-center")[0];
  let menuItemHTML = [];

  menu.map((item) => {
    menuItemHTML.push(
      `
          <div class="menu-items col-lg-6 col-sm-12">
            <img src="${item.img}" alt="${item.title}" class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
              </div>
              <div class="menu-text">
              ${item.desc}
              </div>
            </div>
          </div>`
    );
  });

  menuItemHTML = menuItemHTML.join("");
  displayMenu.innerHTML = menuItemHTML;
}

listCategory();
listMenu(menu);
